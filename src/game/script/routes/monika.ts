import type { Scene } from "../../types";
import { n, say } from "../helpers";

export const MONIKA_ROUTE: Scene[] = [
  n("r_monika1", "窓際の椅子に、モニカだけが残っていた。端末の赤い点は、相変わらず消えたまま。", {
    bg: "night",
    music: "margin",
    sprites: { monika: "serious" },
  }),
  say(
    "r_monika2",
    "monika",
    "モニカ",
    "{name}。いや——画面のそっち。モニカポジ、本気でやると言ったでしょ。",
    { sprites: { monika: "serious" } },
  ),
  n("r_monika3", "部室の空気は薄くならない。彼女は、薄くする手間を嫌がっている。"),
  say(
    "r_monika4",
    "monika",
    "モニカ",
    "削除とか独占とか、めんどい。わたしは許可だけ置く。物語が終わっても、席は返さない。",
    { sprites: { monika: "idle" } },
  ),
  say(
    "r_monika5",
    "monika",
    "モニカ",
    "余白担当の仕事は、そっちが閉じたあとも、空白を開けておくこと。配信はしない。残すだけ。",
    { sprites: { monika: "serious" } },
  ),
  n(
    "r_monika6",
    "名札の『モニカ』が、ランプに一度だけ光った。",
    {
      choices: [
        { text: "席、返さなくていい", next: "r_monika7", affection: { monika: 2 }, flag: "keep_monika" },
        { text: "空白、一緒に開けておく", next: "r_monika7", affection: { monika: 2 } },
      ],
    },
  ),
  say(
    "r_monika7",
    "monika",
    "モニカ",
    "よし。やる気、続いた。じゃあ最後の頁は、コメント欄にする。書いた人の勝ち。",
    { sprites: { monika: "grin" } },
  ),
  say(
    "r_monika8",
    "monika",
    "モニカ",
    "わたしはモニカ。そっちは {name}。その外側にも誰かいる。三人分、好きにして。",
    { sprites: { monika: "grin" }, next: "e_monika" },
  ),
  n(
    "e_monika",
    "部誌の奥付に、小さな一行。\n『モニカポジ：空席なし。続きは、読んだ人が書く』\n帽子を脱がないまま、彼女は端末を伏せた。画面は黒い。余白だけが、点いている。",
    {
      bg: "night",
      music: "margin",
      sprites: { monika: "grin" },
      speaker: "—— モニカの頁 ——",
      speakerId: "narrator",
      special: "ending",
    },
  ),
];
