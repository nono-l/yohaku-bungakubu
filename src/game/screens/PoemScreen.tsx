import { useMemo, useState } from "react";
import { CHARACTERS, bustSrc } from "../characters";
import { POEM_SETS, type PoemWord } from "../poems";
import { SCENE_MAP } from "../script";
import { useGame } from "../store";
import { playMusic, playWord } from "../audio";
import type { CharId } from "../types";
import { useEffect } from "react";

const NEED = 10;

export function PoemScreen() {
  const sceneId = useGame((s) => s.sceneId);
  const finishPoem = useGame((s) => s.finishPoem);
  const musicOn = useGame((s) => s.musicOn);
  const scene = SCENE_MAP[sceneId];
  const set = POEM_SETS[scene?.poem ?? 0] ?? POEM_SETS[0];

  const shuffled = useMemo(() => {
    const copy = [...set.words];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, [set]);

  const [picked, setPicked] = useState<PoemWord[]>([]);
  const [hop, setHop] = useState<CharId | null>(null);

  useEffect(() => {
    playMusic(musicOn ? "poem" : "none");
  }, [musicOn]);

  function pick(word: PoemWord) {
    if (picked.length >= NEED) return;
    if (picked.some((p) => p.text === word.text)) return;
    const next = [...picked, word];
    setPicked(next);
    playWord();
    const top = (Object.entries(word.scores) as [CharId, number][]).sort((a, b) => b[1] - a[1])[0];
    if (top[1] > 0) {
      setHop(top[0]);
      window.setTimeout(() => setHop(null), 280);
    }
  }

  function undo() {
    setPicked((p) => p.slice(0, -1));
  }

  return (
    <div className="relative min-h-dvh overflow-hidden bg-navy">
      <img src="/game/bg/club.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-paper/88 paper-grain" />
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col px-3 py-4 sm:px-6">
        <header className="flex items-end justify-between gap-3">
          <div>
            <p className="font-serif text-xs tracking-[0.3em] text-indigo">{set.title}</p>
            <h1 className="font-serif text-xl text-ink sm:text-2xl">{set.prompt}</h1>
          </div>
          <p className="font-serif text-sm tabular-nums text-ink-soft">
            {picked.length}/{NEED}
          </p>
        </header>
        <div className="mt-3 flex gap-2">
          {(["hina", "mei", "koto", "rei", "monika", "ayame", "lumina"] as CharId[]).map((id) => (
            <div
              key={id}
              className={"h-10 w-10 overflow-hidden rounded-full border-2 border-paper-3 bg-paper-2 sm:h-12 sm:w-12 " + (hop === id ? "animate-[hop_0.28s_ease]" : "")}
            >
              <img src={bustSrc(id)} alt={CHARACTERS[id].given} className="size-full object-cover object-top" />
            </div>
          ))}
        </div>
        <div className="mt-4 min-h-20 rounded-sheet border border-ink/10 bg-paper px-4 py-3 font-serif text-lg leading-8 text-ink">
          {picked.length === 0 ? (
            <span className="text-ink-soft">言葉を十個、頁の端から選ぶ。</span>
          ) : (
            picked.map((w) => w.text).join("　")
          )}
        </div>
        <div className="mt-4 grid flex-1 grid-cols-2 gap-2 sm:grid-cols-4">
          {shuffled.map((word) => {
            const used = picked.some((p) => p.text === word.text);
            return (
              <button
                key={word.text}
                type="button"
                disabled={used || picked.length >= NEED}
                onClick={() => pick(word)}
                className="min-h-12 rounded-sheet border border-ink/15 bg-paper-2 px-2 py-2 font-serif text-ink transition hover:border-gold hover:bg-paper disabled:opacity-35"
              >
                {word.text}
              </button>
            );
          })}
        </div>
        <div className="mt-4 flex gap-2 pb-[env(safe-area-inset-bottom)]">
          <button
            type="button"
            onClick={undo}
            disabled={picked.length === 0}
            className="flex-1 rounded-sheet border border-ink/20 px-4 py-3 font-serif text-ink disabled:opacity-40"
          >
            ひとつ戻す
          </button>
          <button
            type="button"
            disabled={picked.length < NEED}
            onClick={() => finishPoem(picked)}
            className="flex-[2] rounded-sheet bg-navy px-4 py-3 font-serif text-paper disabled:opacity-40"
          >
            この十個で提出する
          </button>
        </div>
      </div>
    </div>
  );
}
