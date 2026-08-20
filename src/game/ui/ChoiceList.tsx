import type { Choice } from "../types";

type Props = {
  choices: Choice[];
  onChoose: (c: Choice) => void;
};

export function ChoiceList({ choices, onChoose }: Props) {
  return (
    <div className="absolute inset-x-0 bottom-36 z-30 mx-auto flex w-full max-w-xl flex-col gap-2 px-4 sm:bottom-44">
      {choices.map((c) => (
        <button
          key={c.text}
          type="button"
          onClick={() => onChoose(c)}
          className="rounded-sheet border border-gold/40 bg-navy/88 px-4 py-3 text-left font-serif text-paper shadow-lg transition hover:border-gold hover:bg-navy"
        >
          {c.text}
        </button>
      ))}
    </div>
  );
}
