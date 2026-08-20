import { useState } from "react";
import { useGame } from "../store";

export function NameScreen() {
  const startNew = useGame((s) => s.startNew);
  const setScreen = useGame((s) => s.setScreen);
  const [name, setName] = useState("新人");

  return (
    <div className="relative min-h-dvh overflow-hidden bg-navy">
      <img src="/game/bg/hall.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-navy/55" />
      <form
        className="relative z-10 mx-auto flex min-h-dvh w-full max-w-md flex-col justify-center px-6"
        onSubmit={(e) => {
          e.preventDefault();
          startNew(name);
        }}
      >
        <p className="font-serif text-xs tracking-[0.35em] text-gold">NAME IN THE MARGIN</p>
        <h1 className="mt-2 font-serif text-3xl text-paper text-balance">余白に書く、あなたの名前</h1>
        <p className="mt-3 font-serif text-sm leading-7 text-paper-2">
          如月は、名乗られる前にそれを読むかもしれない。短くていい。
        </p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value.slice(0, 12))}
          maxLength={12}
          className="mt-6 rounded-sheet border border-gold/40 bg-paper px-4 py-3 font-serif text-lg text-ink outline-none focus:border-gold"
          autoComplete="nickname"
          aria-label="プレイヤー名"
        />
        <div className="mt-5 flex gap-2">
          <button
            type="button"
            onClick={() => setScreen("title")}
            className="flex-1 rounded-sheet border border-paper/30 px-4 py-3 font-serif text-paper"
          >
            戻る
          </button>
          <button type="submit" className="flex-[2] rounded-sheet bg-paper px-4 py-3 font-serif text-ink">
            部室の扉を開ける
          </button>
        </div>
      </form>
    </div>
  );
}
