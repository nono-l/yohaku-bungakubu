import type { Scene } from "../../types";
import { n, say } from "../helpers";

export const KOTO_ROUTE: Scene[] = [
  n("r_koto1", "琴は古い部誌を膝に、ランプの輪の中にいた。", {
    bg: "night",
    music: "dusk",
    sprites: { koto: "idle" },
  }),
  say(
    "r_koto2",
    "koto",
    "白鷺 琴",
    "『あなたは、そこにいる』——これは、欄外の文法です。本文を名乗る文ではない。",
    { sprites: { koto: "idle" } },
  ),
  say(
    "r_koto3",
    "koto",
    "白鷺 琴",
    "十年前の部員も、同じ場所に一文を残しています。名前は消えて、文だけが残った。",
    { sprites: { koto: "idle" } },
  ),
  n(
    "r_koto4",
    "琴の声は揺れず、丁寧なままだった。恐怖ではなく、保存の話だ。",
    {
      choices: [
        { text: "今の名前を、欄外に残そう", next: "r_koto5", affection: { koto: 2 } },
        { text: "消えても、写した人が続きになる", next: "r_koto5", affection: { koto: 2 } },
      ],
    },
  ),
  say(
    "r_koto5",
    "koto",
    "白鷺 琴",
    "では、今夜。あなたの名前と、私の名前を、同じ余白に。インクは、急がないでください。",
    { sprites: { koto: "smile" } },
  ),
  n(
    "r_koto6",
    "万年筆の先が、紙に小さな夜を落とした。{name}と、白鷺 琴。並んだ字は、本文より静かだった。",
    { next: "e_koto" },
  ),
  n(
    "e_koto",
    "次の部誌の奥付に、小さな欄外がある。\n『写した人の名も、残してよい』\n琴は眼鏡の奥で、ほんの少し目を細めた。長い詩の最後の行のように。",
    {
      bg: "club",
      music: "club",
      sprites: { koto: "smile" },
      speaker: "—— 琴の頁 ——",
      speakerId: "narrator",
      special: "ending",
    },
  ),
];
