import type { Scene } from "../types";
import { n, say } from "./helpers";

/** Day 1 share reactions + end of day (d1s_* 〜 d1e3) */
export const DAY1_SCENES: Scene[] = [
  n(
    "d1s_hina",
    "陽菜が、選んだ言葉を指でなぞった。",
    { bg: "club", music: "club", sprites: { hina: "idle" } },
  ),
  say(
    "d1s_hina2",
    "hina",
    "雨宮 陽菜",
    "あはは、日常多めだね。でも『今日』って、たぶんそういう日だよ。特別より、残った端っこ。",
    { sprites: { hina: "shy" } },
  ),
  say(
    "d1s_hina3",
    "hina",
    "雨宮 陽菜",
    "……届けてくれて、ありがとう。私、案内のチラシ以外で残るの、あんまり得意じゃなくて。",
    { next: "d1e1" },
  ),

  n("d1s_mei", "メイは腕を組んだまま、一度だけ顎を引いた。", {
    bg: "club",
    music: "club",
    sprites: { mei: "idle" },
  }),
  say(
    "d1s_mei2",
    "mei",
    "黒羽 メイ",
    "短くて熱い。合格。長文でごまかさない人、嫌いじゃない。",
    { sprites: { mei: "grin" } },
  ),
  say(
    "d1s_mei3",
    "mei",
    "黒羽 メイ",
    "……次はもっといい見出し持ってこいよ。今回は、貸しね。",
    { next: "d1e1" },
  ),

  n("d1s_koto", "琴は眼鏡の位置を直し、言葉を一度、黙読した。", {
    bg: "club",
    music: "club",
    sprites: { koto: "idle" },
  }),
  say(
    "d1s_koto2",
    "koto",
    "白鷺 琴",
    "余韻が残っています。短い選択なのに、読んだあとが静かです。",
    { sprites: { koto: "smile" } },
  ),
  say(
    "d1s_koto3",
    "koto",
    "白鷺 琴",
    "古い部誌にも、こんな頁がありました。欄外に、誰かが小さく笑った跡が。",
    { next: "d1e1" },
  ),

  n("d1s_rei", "零は本を開かず、表紙の端を親指で撫でた。", {
    bg: "club",
    music: "club",
    sprites: { rei: "idle" },
  }),
  say(
    "d1s_rei2",
    "rei",
    "如月 零",
    "頁と読者と、終わり。今日にしては、少し先まで見てる。",
    { sprites: { rei: "smile" } },
  ),
  say(
    "d1s_rei3",
    "rei",
    "如月 零",
    "いいよ。余白は、先を見る人のほうに寄っていくから。",
    { sprites: { rei: "serious" }, next: "d1e1" },
  ),

  n("d1s_ayame", "しゆは『伸び代』と『友達』を、扇の骨に指で数えた。", {
    bg: "club",
    music: "club",
    sprites: { ayame: "shy" },
  }),
  say(
    "d1s_ayame2",
    "ayame",
    "紋匁しゆ",
    "今日の十個、自分のほうに伸びてます。とてもツヨイ……かも。",
    { sprites: { ayame: "grin" } },
  ),
  say(
    "d1s_ayame3",
    "ayame",
    "紋匁しゆ",
    "成長期なので、また明日も伸びます。隣、空けておきます。",
    { next: "d1e1" },
  ),

  n("d1s_lumina", "ルミナは『光』と『白』を、後光の輪に指でなぞった。", {
    bg: "club",
    music: "club",
    sprites: { lumina: "shy" },
  }),
  say(
    "d1s_lumina2",
    "lumina",
    "白羽 ルミナ",
    "今日の十個、まぶたの裏に残っています。消えない光、というやつです。",
    { sprites: { lumina: "smile" } },
  ),
  say(
    "d1s_lumina3",
    "lumina",
    "白羽 ルミナ",
    "余白に、影を置かなくてよいなら——わたし、ここにいてよいですか。",
    { next: "d1e1" },
  ),

  say(
    "d1e1",
    "hina",
    "雨宮 陽菜",
    "じゃあ解散！　あ、{name}、同じアパートなら二階で会うよ。足音でわかるから。",
    {
      bg: "club",
      music: "club",
      sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "idle" },
    },
  ),
  say(
    "d1e2",
    "mei",
    "黒羽 メイ",
    "明日も十個。手を抜いたら、私が胡椒振るから。",
    { sprites: { mei: "grin", hina: "idle", rei: "smile", koto: "idle" } },
  ),
  n(
    "d1e3",
    "部室を出るとき、零だけがこちらを見なかった。窓の外の、誰もいない中庭を見ていた。",
    { bg: "club", sprites: { rei: "serious" }, next: "d2a" },
  ),
];
