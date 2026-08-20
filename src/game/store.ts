import { create } from "zustand";
import type { Affection, CharId, GamePersist, ScreenId } from "./types";
import { SCENE_MAP, FIRST_SCENE, shareScene, pickRoute, endingIdFromScene } from "./script";
import { poemWinner, scorePoem, type PoemWord } from "./poems";
import {
  emptyPersist,
  persistLast,
  loadLast,
  mergeAffection,
  pushHistory,
  applyName,
  EMPTY_AFFECTION,
} from "./save";

type GameStore = GamePersist & {
  screen: ScreenId;
  ready: boolean;
  textSpeed: number;
  autoPlay: boolean;
  musicOn: boolean;
  menuOpen: boolean;
  saveMode: "save" | "load";
  cameFrom: ScreenId;
  boot: () => void;
  setScreen: (s: ScreenId) => void;
  setName: (name: string) => void;
  startNew: (name: string) => void;
  continueLast: () => void;
  applySave: (data: GamePersist) => void;
  advance: () => void;
  choose: (next: string, affection?: Partial<Affection>, flag?: string) => void;
  finishPoem: (words: PoemWord[]) => void;
  goCredits: () => void;
  setTextSpeed: (n: number) => void;
  setAutoPlay: (v: boolean) => void;
  setMusicOn: (v: boolean) => void;
  setMenuOpen: (v: boolean) => void;
  setSaveMode: (m: "save" | "load") => void;
  snapshot: () => GamePersist;
};

function persistSlice(s: GamePersist): GamePersist {
  return {
    playerName: s.playerName,
    sceneId: s.sceneId,
    affection: { ...s.affection },
    flags: [...s.flags],
    seen: [...s.seen],
    endings: [...s.endings],
    poems: s.poems.map((p) => [...p]),
    history: s.history.map((h) => ({ ...h })),
  };
}

function goTo(
  set: (fn: (s: GameStore) => Partial<GameStore>) => void,
  get: () => GameStore,
  sceneId: string,
  extra: Partial<GameStore> = {},
) {
  const scene = SCENE_MAP[sceneId];
  if (!scene) return;
  const state = get();
  const speaker = scene.speaker ?? "";
  const text = applyName(scene.text, state.playerName);
  const next: GamePersist = {
    ...persistSlice(state),
    sceneId,
    seen: state.seen.includes(sceneId) ? state.seen : [...state.seen, sceneId],
    history: pushHistory(state.history, speaker, text),
  };
  const ending = endingIdFromScene(sceneId);
  if (ending && !next.endings.includes(ending)) next.endings = [...next.endings, ending];
  persistLast(next);
  set(() => ({
    ...next,
    screen: "novel",
    menuOpen: false,
    ...extra,
  }));
}

export const useGame = create<GameStore>((set, get) => ({
  ...emptyPersist(),
  screen: "title",
  ready: true,
  textSpeed: 38,
  autoPlay: false,
  musicOn: true,
  menuOpen: false,
  saveMode: "save",
  cameFrom: "title",

  boot: () => {
    const last = loadLast();
    set({
      ready: true,
      screen: "title",
      endings: last?.endings ?? [],
      playerName: last?.playerName ?? "新人",
    });
  },

  setScreen: (screen) => set((s) => ({ cameFrom: s.screen, screen, menuOpen: false })),
  setName: (playerName) => set({ playerName }),
  setTextSpeed: (textSpeed) => set({ textSpeed }),
  setAutoPlay: (autoPlay) => set({ autoPlay }),
  setMusicOn: (musicOn) => set({ musicOn }),
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  setSaveMode: (saveMode) => set({ saveMode }),

  snapshot: () => persistSlice(get()),

  startNew: (name) => {
    const playerName = name.trim() || "新人";
    const fresh = emptyPersist(playerName);
    persistLast(fresh);
    set({
      ...fresh,
      endings: get().endings,
      screen: "novel",
      menuOpen: false,
      ready: true,
    });
    goTo(set, get, FIRST_SCENE);
  },

  continueLast: () => {
    const last = loadLast();
    if (!last) return;
    set({ ...last, affection: { ...EMPTY_AFFECTION, ...last.affection }, screen: "novel", ready: true, menuOpen: false });
  },

  applySave: (data) => {
    persistLast(data);
    set({ ...data, affection: { ...EMPTY_AFFECTION, ...data.affection }, screen: "novel", ready: true, menuOpen: false });
  },

  advance: () => {
    const { sceneId } = get();
    const scene = SCENE_MAP[sceneId];
    if (!scene || scene.choices?.length) return;
    if (scene.poem != null) {
      set({ screen: "poem", menuOpen: false });
      return;
    }
    if (scene.special === "route") {
      const route = pickRoute(get().affection, new Set(get().flags));
      goTo(set, get, route);
      return;
    }
    if (scene.special === "ending") {
      goTo(set, get, "after_end");
      return;
    }
    if (scene.special === "credits") return;
    if (scene.next === "title") {
      set({ screen: "title", menuOpen: false });
      return;
    }
    if (scene.next === "credits") {
      set({ screen: "credits" });
      return;
    }
    if (scene.next) goTo(set, get, scene.next);
  },

  choose: (next, affection, flag) => {
    const cur = get();
    set({
      affection: mergeAffection(cur.affection, affection),
      flags: flag && !cur.flags.includes(flag) ? [...cur.flags, flag] : cur.flags,
    });
    if (next === "title") {
      set({ screen: "title", menuOpen: false });
      return;
    }
    if (next === "credits") {
      set({ screen: "credits" });
      return;
    }
    goTo(set, get, next);
  },

  finishPoem: (words: PoemWord[]) => {
    const scene = SCENE_MAP[get().sceneId];
    const day = (scene?.poem ?? 0) + 1;
    const scores = scorePoem(words);
    const winner = poemWinner(scores, day);
    const bonus: Partial<Affection> = {};
    (Object.keys(scores) as CharId[]).forEach((id) => {
      bonus[id] = Math.max(1, Math.round(scores[id] / 5));
    });
    const cur = get();
    set({
      affection: mergeAffection(cur.affection, bonus),
      poems: [...cur.poems, words.map((w) => w.text)],
    });
    const share = shareScene(day as 1 | 2 | 3, winner);
    goTo(set, get, share);
  },

  goCredits: () => set({ screen: "credits", menuOpen: false }),
}));
