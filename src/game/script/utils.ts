import type { CharId, Scene } from "../types";
import { n } from "./helpers";

/** After ending choice scene */
export const AFTER_END_SCENES: Scene[] = [
  n(
    "after_end",
    "部室の西日は、セーブデータの外でも同じ色をしている。もう一度、余白を開きますか。",
    {
      bg: "club",
      music: "title",
      sprites: {},
      special: "credits",
      choices: [
        { text: "タイトルへ戻る", next: "title" },
        { text: "スタッフロール", next: "credits" },
      ],
    },
  ),
];

export function shareScene(day: 1 | 2 | 3, winner: CharId): string {
  return `d${day}s_${winner}`;
}

export function pickRoute(aff: Record<CharId, number>, flags: Set<string>): string {
  const ids: CharId[] = ["hina", "mei", "koto", "rei", "monika", "ayame", "lumina"];
  if (ids.every((id) => aff[id] >= 6)) return "r_true1";
  const ranked = [...ids].sort((a, b) => {
    if (aff[b] !== aff[a]) return aff[b] - aff[a];
    const preferred = ids.find((id) => flags.has(`day2_${id}`));
    if (preferred === a) return -1;
    if (preferred === b) return 1;
    return 0;
  });
  return `r_${ranked[0]}1`;
}

export function endingIdFromScene(id: string): string | null {
  if (id.startsWith("e_")) return id.slice(2);
  return null;
}

export const ENDING_INFO: Record<string, { title: string; line: string }> = {
  hina: { title: "陽菜の頁", line: "案内ではなく、続きとして。" },
  mei: { title: "メイの頁", line: "十個で足りる。" },
  koto: { title: "琴の頁", line: "写した人の名も、残してよい。" },
  rei: { title: "零の頁", line: "ここから先は、読んだ人が書く。" },
  monika: { title: "モニカの頁", line: "モニカポジ：空席なし。" },
  ayame: { title: "しゆの頁", line: "完成は、まだ。隣は空いてる。" },
  lumina: { title: "ルミナの頁", line: "書かなかった言葉のうえに、光。" },
  true: { title: "空白の最終頁", line: "七人と、もうひとりの影。" },
};
