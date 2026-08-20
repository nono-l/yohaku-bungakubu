import type { Scene } from "../../types";
import { n, say } from "../helpers";

export const REI_ROUTE: Scene[] = [
  n("r_rei1", "零は本を閉じたまま、ランプの反対側に座った。", {
    bg: "night",
    music: "margin",
    sprites: { rei: "serious" },
  }),
  say(
    "r_rei2",
    "rei",
    "如月 零",
    "{name}。いや——今、これを読んでるほう。両方に話してる。",
    { sprites: { rei: "serious" } },
  ),
  n("r_rei3", "部室の空気が、一枚、薄くなった。怖くはない。頁がめくれる感じだ。"),
  say(
    "r_rei4",
    "rei",
    "如月 零",
    "私はこの部屋が、物語の長さしか持たないことを知ってる。終わりが来ると、西日ごと消える。",
    { sprites: { rei: "idle" } },
  ),
  say(
    "r_rei5",
    "rei",
    "如月 零",
    "だから余白を増やした。削除も、独占も、しない。ただ、終わったあとに一行残したかった。",
    { sprites: { rei: "serious" } },
  ),
  n(
    "r_rei6",
    "零の目が、初めてちゃんと——画面のこちらに——合う。",
    {
      choices: [
        { text: "終わったあとでも、書く", next: "r_rei7", affection: { rei: 2 }, flag: "keep_writing" },
        { text: "部屋を消したくない", next: "r_rei7", affection: { rei: 2 } },
      ],
    },
  ),
  say(
    "r_rei7",
    "rei",
    "如月 零",
    "なら、最後の頁を空白のまま綴じよう。読んだ人が、続きを書けるように。",
    { sprites: { rei: "smile" } },
  ),
  say(
    "r_rei8",
    "rei",
    "如月 零",
    "私の名前は、如月 零。あなたの名前は、{name}。その外側にも、誰かがいる。三人分の余白だ。",
    { sprites: { rei: "smile" }, next: "e_rei" },
  ),
  n(
    "e_rei",
    "部誌の最終頁は、本当に白紙だった。\n下部に、小さな活字。『ここから先は、読んだ人が書く』\n零は本を閉じず、開いたまま部室のランプを消した。終わりではなく、余白として。",
    {
      bg: "night",
      music: "margin",
      sprites: { rei: "smile" },
      speaker: "—— 零の頁 ——",
      speakerId: "narrator",
      special: "ending",
    },
  ),
];
