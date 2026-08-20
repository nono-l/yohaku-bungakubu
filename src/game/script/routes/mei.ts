import type { Scene } from "../../types";
import { n, say } from "../helpers";

export const MEI_ROUTE: Scene[] = [
  n("r_mei1", "メイは窓枠に座り、スニーカーの踵で壁を叩いていた。", {
    bg: "night",
    music: "dusk",
    sprites: { mei: "idle" },
  }),
  say(
    "r_mei2",
    "mei",
    "黒羽 メイ",
    "あの一文、長い。私の負け方だ。正直、むかつく。",
    { sprites: { mei: "idle" } },
  ),
  say(
    "r_mei3",
    "mei",
    "黒羽 メイ",
    "短くしてきたのは、逃げなんじゃないかって、昨日から少し思ってて。",
    { sprites: { mei: "idle" } },
  ),
  n(
    "r_mei4",
    "腕は組んだまま。目だけが、勝負の外を見ている。",
    {
      choices: [
        { text: "短いのは、逃げじゃなく刃だ", next: "r_mei5", affection: { mei: 2 } },
        { text: "むかつくなら、一行で殴ればいい", next: "r_mei5", affection: { mei: 2 } },
      ],
    },
  ),
  say(
    "r_mei5",
    "mei",
    "黒羽 メイ",
    "……ぷっ。刃、か。新人のくせに、見出しうまい。",
    { sprites: { mei: "grin" } },
  ),
  say(
    "r_mei6",
    "mei",
    "黒羽 メイ",
    "じゃあ決めた。部誌の表紙、一行だけ。『十個で足りる』。クレジットに、あんたの苗字も入れてやる。",
    { sprites: { mei: "grin" } },
  ),
  n(
    "r_mei7",
    "夜風がカーテンを動かした。メイの赤いはみが、ランプに一度だけ燃えた。",
    { next: "e_mei" },
  ),
  n(
    "e_mei",
    "部誌の表紙は、本当に一行だった。\n『十個で足りる』\nメイは勝ち誇って、胡椒の効いた麺を奢らなかった。奢る代わりに、次の十個を待てと言った。",
    {
      bg: "club",
      music: "club",
      sprites: { mei: "grin" },
      speaker: "—— メイの頁 ——",
      speakerId: "narrator",
      special: "ending",
    },
  ),
];
