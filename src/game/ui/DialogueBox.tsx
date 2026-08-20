import { CHARACTERS } from "../characters";
import type { SpriteId } from "../types";

type Props = {
  speaker: string;
  speakerId?: SpriteId | "narrator" | "player";
  text: string;
  done: boolean;
  onAdvance: () => void;
};

const NAME_COLOR: Record<string, string> = {
  rei: "text-rei",
  hina: "text-hina",
  mei: "text-mei",
  koto: "text-koto",
  monika: "text-indigo-soft",
  ayame: "text-ayame",
  lumina: "text-lumina",
};

export function DialogueBox({ speaker, speakerId, text, done, onAdvance }: Props) {
  const color =
    speakerId && speakerId in CHARACTERS ? NAME_COLOR[speakerId] : "text-gold-soft";

  return (
    <button
      type="button"
      onClick={onAdvance}
      className="absolute inset-x-0 bottom-0 z-20 mx-auto w-full max-w-4xl px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 text-left sm:px-6"
    >
      <div className="rounded-sheet border border-paper-3/40 bg-paper/92 shadow-[0_-12px_40px_rgb(26_22_18/0.28)] paper-grain">
        {speaker ? (
          <div className="-mt-3 ml-4 inline-block rounded-sheet border border-gold/30 bg-navy px-3 py-1 font-serif text-sm tracking-wider">
            <span className={color}>{speaker}</span>
          </div>
        ) : null}
        <p className="min-h-24 whitespace-pre-wrap px-4 py-3 font-serif text-[1.05rem] leading-8 text-ink text-pretty sm:min-h-28 sm:px-6 sm:text-lg sm:leading-9">
          {text}
          {!done ? (
            <span className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-indigo align-middle animate-pulse" />
          ) : (
            <span className="ml-2 inline-block font-sans text-xs text-gold">▼</span>
          )}
        </p>
      </div>
    </button>
  );
}
