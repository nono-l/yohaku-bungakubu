import { SPRITE_ORDER, spriteSrc } from "../characters";
import type { Expression, SpriteId } from "../types";

type Props = {
  sprites?: Partial<Record<SpriteId, Expression | "hide">>;
  focus?: SpriteId;
};

export function SpriteLayer({ sprites, focus }: Props) {
  const visible = SPRITE_ORDER.filter((id) => sprites?.[id] && sprites[id] !== "hide");
  if (visible.length === 0) return null;
  const n = visible.length;
  const width =
    n >= 6 ? "max-w-[16%]" : n >= 5 ? "max-w-[18%]" : n === 4 ? "max-w-[22%]" : n === 3 ? "max-w-[26%]" : n === 2 ? "max-w-[32%]" : "max-w-[38%]";
  const overlap = n >= 3 ? "-mx-3 sm:-mx-5" : "";

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[8%] flex items-end justify-center px-1 sm:px-6">
      {visible.map((id) => {
        const expr = sprites?.[id];
        if (!expr || expr === "hide") return null;
        const dim = focus && focus !== id;
        return (
          <img
            key={id}
            src={spriteSrc(id, expr)}
            alt=""
            className={
              "max-h-[72%] w-auto object-contain object-bottom transition duration-300 sm:max-h-[80%] " +
              width +
              " " +
              overlap +
              " " +
              (dim ? "translate-y-3 scale-95 opacity-50" : "z-10 translate-y-0 scale-100 opacity-100")
            }
            draggable={false}
          />
        );
      })}
    </div>
  );
}
