import type { Scene } from "../types";
import { n, say } from "./helpers";

/** Prologue + Club introduction + first poem trigger (p1 〜 c15) */
export const PROLOGUE_SCENES: Scene[] = [
  n(
    "p1",
    "青嵐大学の春は、掲示板から始まる。新入生の目はチラシの色に吸い寄せられ、どれも同じように急いでいる。",
    { bg: "hall", music: "title", sprites: {} },
  ),
  n(
    "p2",
    "その端に、インクの匂いだけが古い一枚があった。\n『余白を、一緒に書きませんか。文芸サークル〈余白〉——旧三号館 二階』",
  ),
  n(
    "p3",
    "紙の右下は、わざと広く空けてある。名前を書く欄でも、締切でもない。ただの余白だ。",
  ),
  n(
    "p4",
    "どのサークルの声も、少し大きすぎた。この紙だけが、こちらを急かさない。\n……だから、足が向いた。",
    { next: "h1" },
  ),

  n(
    "h1",
    "旧三号館の廊下は、新校舎と違って床が鳴る。西日がカーテンの襞を長く伸ばしていた。",
    { bg: "hall", music: "dusk", sprites: {} },
  ),
  n("h2", "二階の突き当たり。木の扉に、手書きの札。『文芸サークル　余白』"),
  n("h3", "ノックする前に、内側で本が閉じる音がした。"),
  say("h4", "rei", "？？？", "……来た。", {
    sprites: { rei: "idle" },
  }),
  n("h5", "知っていたみたいな声だった。まだ顔も見ていない。"),
  n("h6", "僕は、一応、普通に扉を開けた。", { next: "c1" }),

  n(
    "c1",
    "西日の部室。本棚が窓より先に年をとっている。机の上には万年筆と、白紙の束。",
    { bg: "club", music: "club", sprites: { rei: "idle" } },
  ),
  say(
    "c2",
    "rei",
    "如月 零",
    "如月 零。三年。この部屋の、いちおう部長。{name}で合ってる？",
    { sprites: { rei: "smile" } },
  ),
  n("c3", "名乗っていない。張り紙にも書いていない。"),
  say(
    "c4",
    "rei",
    "如月 零",
    "余白に、薄く残ってた。気にしないで。そういう部だから。",
    { sprites: { rei: "idle" } },
  ),
  say(
    "c5",
    "hina",
    "？？？",
    "零っ、勝手に人の名前読まないの！　あ、こんにちは！　チラシ、見た？",
    { sprites: { rei: "idle", hina: "idle" }, focus: "hina" },
  ),
  say(
    "c6",
    "hina",
    "雨宮 陽菜",
    "雨宮 陽菜、二年。会計と、張り紙係。字が雑ですみません。魔法瓶、持ってるほうです。",
    { sprites: { rei: "idle", hina: "idle" } },
  ),
  say(
    "c7",
    "mei",
    "？？？",
    "長々しい自己紹介は負けだよ。黒羽メイ。一年。短い詩担当。",
    { sprites: { rei: "idle", hina: "idle", mei: "idle" }, focus: "mei" },
  ),
  say(
    "c8",
    "koto",
    "？？？",
    "……白鷺 琴です。三年。古い部誌の整理をしています。どうぞ、そちらに。",
    {
      sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "idle" },
      focus: "koto",
    },
  ),
  say(
    "c8b",
    "ayame",
    "？？？",
    "あのっ——自分もいます！　隅にいたので、見落としがちです。伸び代しかないです！",
    { sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "idle", ayame: "shy" }, focus: "ayame" },
  ),
  say(
    "c8c",
    "ayame",
    "紋匁しゆ",
    "紋匁しゆです。一年。玄武の見習いで、成長期担当。まだやれます。やらせてください。",
    { sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "idle", ayame: "grin" }, focus: "ayame" },
  ),
  say(
    "c8d",
    "lumina",
    "？？？",
    "……窓から、入ってもよいですか。扉だと、翼が引っかかります。",
    { sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "idle", ayame: "idle", lumina: "shy" }, focus: "lumina" },
  ),
  say(
    "c8e",
    "lumina",
    "白羽 ルミナ",
    "白羽ルミナです。光翼担当、と書いてありました。一ノ瀬アイさんが、絵を持たせてくれました。",
    { sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "idle", ayame: "idle", lumina: "idle" }, focus: "lumina" },
  ),
  n(
    "c9",
    "六人。西日。後光が、本棚の埃をひとつだけ明るくしている。誰も、入部届を突き出してこない。",
    { sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "idle", ayame: "idle", lumina: "idle" } },
  ),
  say(
    "c10",
    "rei",
    "如月 零",
    "見学でも、余白のうち。書くなら、今日の一言を置いていって。",
    { sprites: { rei: "smile", hina: "idle", mei: "idle", koto: "idle" } },
  ),
  n(
    "c11",
    "机の上の白紙は、中央ではなく端から書けと、薄い罫で誘導されている。",
    {
      sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "idle" },
      choices: [
        { text: "……置いていく。入部で。", next: "c12", flag: "joined" },
        { text: "見学のつもりだったけど——", next: "c12b" },
      ],
    },
  ),
  say(
    "c12",
    "hina",
    "雨宮 陽菜",
    "やった！　六対一が七対〇になる。零、お茶出して。しゆの分、湯呑ある？　光の人のは、薄いので。",
    { sprites: { rei: "smile", hina: "idle", mei: "idle", koto: "smile" }, next: "c13" },
  ),
  say(
    "c12b",
    "rei",
    "如月 零",
    "見学の余白は、だいたい入部になる。今日は書いて。明日、やめればいい。",
    { sprites: { rei: "smile", hina: "shy", mei: "grin", koto: "idle" }, next: "c13" },
  ),
  say(
    "c13",
    "mei",
    "黒羽 メイ",
    "ルールは簡単。十個だけ言葉を選ぶ。長文は禁止。心は、短いほど本音が出る。",
    { sprites: { rei: "idle", hina: "idle", mei: "grin", koto: "idle" } },
  ),
  say(
    "c14",
    "koto",
    "白鷺 琴",
    "お題は『今日』。選んだ言葉は、のちの部誌の種になります。",
    { sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "smile" } },
  ),
  say(
    "c15",
    "rei",
    "如月 零",
    "誰に届くかを考えるのは、選んだあとでいい。まずは、余白に手を置いて。",
    { sprites: { rei: "smile", hina: "idle", mei: "idle", koto: "idle" }, poem: 0 },
  ),
];
