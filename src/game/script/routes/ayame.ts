import type { Scene } from "../../types";
import { n, say } from "../helpers";

export const AYAME_ROUTE: Scene[] = [
  n("r_ayame1", "ランプの輪のいちばん端に、しゆが扇を置いて座っていた。ノートは、まだ途中だった。", {
    bg: "night",
    music: "margin",
    sprites: { ayame: "idle" },
  }),
  say(
    "r_ayame2",
    "ayame",
    "紋匁しゆ",
    "{name}。成長期、終わりたくないです。終わらせないでください。",
    { sprites: { ayame: "shy" } },
  ),
  n("r_ayame3", "とてもツヨイはずの声が、頁の厚さぶんだけ細かった。"),
  say(
    "r_ayame4",
    "ayame",
    "紋匁しゆ",
    "見習いなので、完成は来年です。でも隣が空いてると、今年のうちに少し伸びます。",
    { sprites: { ayame: "idle" } },
  ),
  n(
    "r_ayame5",
    "扇が、一度だけ開いた。裏に、小さな亀が並んでいる。",
    {
      choices: [
        { text: "隣は、空けたままにする", next: "r_ayame6", affection: { ayame: 2 }, flag: "keep_ayame" },
        { text: "一緒に、あと二語だけ", next: "r_ayame6", affection: { ayame: 2 } },
      ],
    },
  ),
  say(
    "r_ayame6",
    "ayame",
    "紋匁しゆ",
    "やらせてもらえて、よかったです。伸び代、残したまま製本しましょう。",
    { sprites: { ayame: "grin" } },
  ),
  say(
    "r_ayame7",
    "ayame",
    "紋匁しゆ",
    "紋匁しゆ、成長期担当。{name}の十個は、自分の記録にも写します。消さないで。",
    { sprites: { ayame: "idle" }, next: "e_ayame" },
  ),
  n(
    "e_ayame",
    "部誌のあとがきは、一行だけ長かった。\n『成長期担当：紋匁しゆ。完成は、まだ。続きの隣を空けてあります』\n扇を閉じると、亀の絵が表紙の隅で小さく頭を出した。",
    {
      bg: "night",
      music: "margin",
      sprites: { ayame: "grin" },
      speaker: "—— しゆの頁 ——",
      speakerId: "narrator",
      special: "ending",
    },
  ),
];
