import type { Scene } from "../../types";
import { n, say } from "../helpers";

export const HINA_ROUTE: Scene[] = [
  n(
    "r_hina1",
    "陽菜だけが、魔法瓶を抱えたまま残っていた。",
    { bg: "night", music: "dusk", sprites: { hina: "idle" } },
  ),
  say(
    "r_hina2",
    "hina",
    "雨宮 陽菜",
    "ねえ。私、チラシの人で終わりそうで。今日の一文、零が書いたなら——私は、案内のまま？",
    { sprites: { hina: "shy" } },
  ),
  n(
    "r_hina3",
    "声は明るい。中身は、自分を端に置く癖だ。",
    {
      choices: [
        { text: "案内じゃなく、今日の人だ", next: "r_hina4", affection: { hina: 2 } },
        { text: "二階の足音も、本文だと思う", next: "r_hina4", affection: { hina: 2 } },
      ],
    },
  ),
  say(
    "r_hina4",
    "hina",
    "雨宮 陽菜",
    "……ずるい。そういうの、紹介文に使っていい？　『楽しいです』の代わり。",
    { sprites: { hina: "idle" } },
  ),
  say(
    "r_hina5",
    "hina",
    "雨宮 陽菜",
    "私、特別な詩は書けない。お弁当の端と、傘と、午後しか知らない。",
    { sprites: { hina: "shy" } },
  ),
  say(
    "r_hina6",
    "hina",
    "雨宮 陽菜",
    "でも、{name}が残ってくれた日は、案内じゃなくて——一緒に歩いた日、になる。",
    { sprites: { hina: "idle" } },
  ),
  n(
    "r_hina7",
    "魔法瓶の蓋が、小さく鳴った。湯気の匂いが、夜のインクに混ざる。",
    { next: "e_hina" },
  ),
  n(
    "e_hina",
    "後日、部誌の紹介文はこう始まった。\n『楽しいです、では足りない日が、ある。』\n陽菜は二階の階段で、僕の名前を普通に呼んだ。案内ではなく、続きとして。",
    {
      bg: "court",
      music: "club",
      sprites: { hina: "idle" },
      speaker: "—— 陽菜の頁 ——",
      speakerId: "narrator",
      special: "ending",
    },
  ),
];
