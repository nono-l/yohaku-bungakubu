import { useEffect, useMemo, useRef, useState } from "react";
import { applyName } from "../save";
import { SCENE_MAP } from "../script";
import { BACKGROUNDS } from "../characters";
import { useGame } from "../store";
import { DialogueBox } from "../ui/DialogueBox";
import { SpriteLayer } from "../ui/SpriteLayer";
import { ChoiceList } from "../ui/ChoiceList";
import { MenuOverlay } from "../ui/MenuOverlay";
import { playMusic, playPage } from "../audio";

export function NovelScreen() {
  const sceneId = useGame((s) => s.sceneId);
  const playerName = useGame((s) => s.playerName);
  const advance = useGame((s) => s.advance);
  const choose = useGame((s) => s.choose);
  const textSpeed = useGame((s) => s.textSpeed);
  const autoPlay = useGame((s) => s.autoPlay);
  const musicOn = useGame((s) => s.musicOn);
  const setMenuOpen = useGame((s) => s.setMenuOpen);

  const scene = SCENE_MAP[sceneId];
  const full = useMemo(
    () => applyName(scene?.text ?? "", playerName),
    [scene?.text, playerName],
  );
  const [shown, setShown] = useState(0);
  const shownRef = useRef(0);
  shownRef.current = shown;
  const done = shown >= full.length;

  useEffect(() => {
    setShown(0);
    shownRef.current = 0;
  }, [sceneId]);

  useEffect(() => {
    if (!scene) return;
    playMusic(musicOn ? (scene.music ?? "club") : "none");
  }, [scene, musicOn]);

  useEffect(() => {
    if (done) return;
    const delay = Math.max(8, 90 - textSpeed);
    const t = window.setTimeout(() => {
      setShown((n) => Math.min(full.length, n + 1));
    }, delay);
    return () => window.clearTimeout(t);
  }, [done, shown, full.length, textSpeed]);

  useEffect(() => {
    if (!done || !autoPlay || scene?.choices?.length || scene?.poem != null) return;
    const t = window.setTimeout(() => advance(), 1100);
    return () => window.clearTimeout(t);
  }, [done, autoPlay, scene, advance]);

  function handleAdvance() {
    if (shownRef.current < full.length) {
      setShown(full.length);
      shownRef.current = full.length;
      return;
    }
    if (scene?.choices?.length) return;
    playPage();
    advance();
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(true);
        return;
      }
      if (e.key === "Control" || e.key === "Enter" || e.key === " ") {
        if (e.key !== "Control") e.preventDefault();
        handleAdvance();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (!scene) {
    return (
      <div className="grid min-h-dvh place-items-center bg-navy font-serif text-paper">
        頁が見つかりません。
      </div>
    );
  }

  const bg = BACKGROUNDS[scene.bg ?? "club"] ?? BACKGROUNDS.club;

  return (
    <div className="relative min-h-dvh overflow-hidden bg-navy">
      <img src={bg} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-navy/55 via-transparent to-navy/20" />
      {scene.music === "margin" ? (
        <p className="pointer-events-none absolute right-6 top-16 max-w-40 font-serif text-xs leading-6 text-paper/35">
          あなたは、そこにいる。
        </p>
      ) : null}
      <SpriteLayer sprites={scene.sprites} focus={scene.focus} />
      <div className="absolute left-3 top-3 z-30 flex gap-2 sm:left-5 sm:top-4">
        <HudBtn onClick={() => setMenuOpen(true)}>メニュー</HudBtn>
        <HudBtn onClick={handleAdvance}>送り</HudBtn>
      </div>
      {scene.choices && done ? (
        <ChoiceList choices={scene.choices} onChoose={(c) => choose(c.next, c.affection, c.flag)} />
      ) : null}
      <DialogueBox
        speaker={scene.speaker ?? ""}
        speakerId={scene.speakerId}
        text={full.slice(0, shown)}
        done={done}
        onAdvance={handleAdvance}
      />
      <MenuOverlay />
    </div>
  );
}

function HudBtn({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-sheet border border-paper/25 bg-navy/55 px-3 py-1.5 font-serif text-xs tracking-wider text-paper"
    >
      {children}
    </button>
  );
}
