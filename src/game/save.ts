import type { Affection, GamePersist, HistoryLine, SaveSlot } from "./types";

const SAVE_KEY = "margins-vn-saves-v1";
const LAST_KEY = "margins-vn-last-v1";

export const EMPTY_AFFECTION: Affection = { rei: 0, hina: 0, mei: 0, koto: 0, monika: 0, ayame: 0, lumina: 0 };

export function emptyPersist(name = "新人"): GamePersist {
  return {
    playerName: name,
    sceneId: "p1",
    affection: { ...EMPTY_AFFECTION },
    flags: [],
    seen: [],
    endings: [],
    poems: [],
    history: [],
  };
}

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function loadSlots(): (SaveSlot | null)[] {
  if (!canUseStorage()) return [null, null, null];
  try {
    const raw = window.localStorage.getItem(SAVE_KEY);
    if (!raw) return [null, null, null];
    const parsed = JSON.parse(raw) as (SaveSlot | null)[];
    return [0, 1, 2].map((i) => parsed[i] ?? null);
  } catch {
    return [null, null, null];
  }
}

export function writeSlot(slot: SaveSlot) {
  if (!canUseStorage()) return;
  const slots = loadSlots();
  slots[slot.slot] = slot;
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(slots));
}

export function clearSlot(index: number) {
  if (!canUseStorage()) return;
  const slots = loadSlots();
  slots[index] = null;
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(slots));
}

export function persistLast(data: GamePersist) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(LAST_KEY, JSON.stringify(data));
}

export function loadLast(): GamePersist | null {
  if (!canUseStorage()) return null;
  try {
    const raw = window.localStorage.getItem(LAST_KEY);
    return raw ? (JSON.parse(raw) as GamePersist) : null;
  } catch {
    return null;
  }
}

export function toSlot(persist: GamePersist, index: number, dayLabel: string): SaveSlot {
  return {
    slot: index,
    updatedAt: Date.now(),
    dayLabel,
    ...persist,
  };
}

export function dayLabelFromScene(sceneId: string): string {
  if (sceneId.startsWith("p") || sceneId.startsWith("h") || sceneId.startsWith("c") || sceneId.startsWith("d1")) {
    return "一日目";
  }
  if (sceneId.startsWith("guest") || sceneId.startsWith("d2")) return "二日目";
  if (sceneId.startsWith("d3") || sceneId === "night") return "三日目";
  if (sceneId.startsWith("r_") || sceneId.startsWith("e_")) return "最終頁";
  return "余白";
}

export function formatSavedAt(ts: number): string {
  try {
    return new Intl.DateTimeFormat("ja-JP", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(ts);
  } catch {
    return "";
  }
}

export function applyName(text: string, name: string): string {
  return text.replaceAll("{name}", name);
}

export function canCloudSave(user: { id: string; isDevFallback?: boolean } | null | undefined): boolean {
  return Boolean(user && !user.isDevFallback && user.id && user.id !== "dev-user");
}

export function mergeAffection(base: Affection, add?: Partial<Affection>): Affection {
  if (!add) return { ...EMPTY_AFFECTION, ...base, monika: base.monika ?? 0, lumina: base.lumina ?? 0 };
  return {
    rei: (base.rei ?? 0) + (add.rei ?? 0),
    hina: (base.hina ?? 0) + (add.hina ?? 0),
    mei: (base.mei ?? 0) + (add.mei ?? 0),
    koto: (base.koto ?? 0) + (add.koto ?? 0),
    monika: (base.monika ?? 0) + (add.monika ?? 0),
    ayame: (base.ayame ?? 0) + (add.ayame ?? 0),
    lumina: (base.lumina ?? 0) + (add.lumina ?? 0),
  };
}

export function pushHistory(history: HistoryLine[], speaker: string, text: string): HistoryLine[] {
  const next = [...history, { speaker, text }];
  return next.length > 80 ? next.slice(-80) : next;
}
