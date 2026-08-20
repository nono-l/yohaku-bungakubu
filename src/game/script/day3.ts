import type { Scene } from "../types";
import { n, say } from "./helpers";

/** Day 3: mysterious line, choices, poem, share reactions, night trigger
 * ライトノベル風・感情を仕草で見せる版
 */
export const DAY3_SCENES: Scene[] = [
  n(
    "d3a",
    "三日目。部誌の仮綴じが、机の中央にあった。まだ薄い。",
    { bg: "club", music: "club", sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "idle", monika: "idle" } },
  ),
  say(
    "d3b",
    "mei",
    "黒羽 メイ",
    "おい。誰も書いてない一文、混ざってる。",
    { sprites: { mei: "idle", rei: "idle", hina: "idle", koto: "idle", monika: "idle" }, focus: "mei" },
  ),
  n(
    "d3c",
    "本文の途中、インクの色だけがわずかに違う一行。\n『あなたは、そこにいる。』",
    { music: "margin", sprites: { mei: "idle", rei: "serious", hina: "shy", koto: "idle", monika: "serious" } },
  ),
  say(
    "d3d",
    "hina",
    "雨宮 陽菜",
    "私が書いた覚え、ない……。悪ふざけ？　メイ？",
    { focus: "hina", sprites: { mei: "idle", rei: "serious", hina: "shy", koto: "idle" } },
  ),
  say(
    "d3e",
    "mei",
    "黒羽 メイ",
    "この長さ、私の文じゃない。負けてる。",
    { focus: "mei" },
  ),
  say(
    "d3f",
    "koto",
    "白鷺 琴",
    "筆圧が、部室の誰とも違います。それでも、紙は同じ束です。",
    { focus: "koto" },
  ),
  say(
    "d3g",
    "rei",
    "如月 零",
    "筆圧は、余白側だ。部長の席からは書いていない。",
    { focus: "rei", sprites: { mei: "idle", rei: "serious", hina: "shy", koto: "idle", monika: "serious" } },
  ),
  say(
    "d3g2",
    "monika",
    "モニカ",
    "ばれた。わたし。画面のそっちに届く一文、置いた。モニカポジの仕事。",
    { focus: "monika", sprites: { mei: "idle", rei: "idle", hina: "shy", koto: "idle", monika: "grin" } },
  ),
  n("d3h", "帽子の陰で、彼女だけが笑っていた。怖くはない。配信のテストみたいだった。"),
  say(
    "d3i",
    "rei",
    "如月 零",
    "今日のお題は『余白』。怖いなら帰っていい。残るなら、十個。",
    { sprites: { rei: "smile", hina: "shy", mei: "idle", koto: "idle" } },
  ),
  n(
    "d3j",
    "四人の視線が、僕に集まる。紙の一文は、まだそこにある。",
    {
      sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "idle" },
      choices: [
        { text: "残る。書いて確かめる", next: "d3k", affection: { rei: 1, hina: 1, mei: 1, koto: 1, monika: 1, ayame: 1, lumina: 1 } },
        { text: "零に、もう少し説明してほしい", next: "d3k2", affection: { rei: 2 }, flag: "asked_margin" },
        { text: "モニカに、画面の話を聞く", next: "d3k3", affection: { monika: 2 }, flag: "asked_monika" },
        { text: "ルミナに、光の話を聞く", next: "d3k4", affection: { lumina: 2 }, flag: "asked_lumina" },
      ],
    },
  ),
  say(
    "d3k",
    "mei",
    "黒羽 メイ",
    "よし。逃げないなら、私の相手だ。十個、勝負。",
    { sprites: { mei: "grin", rei: "smile", hina: "idle", koto: "smile" }, next: "d3poem" },
  ),
  say(
    "d3k2",
    "rei",
    "如月 零",
    "説明すると長くなる。長いのはメイが嫌う。だから十個で聞く。余白は、答えも短い。",
    { sprites: { rei: "serious", hina: "shy", mei: "idle", koto: "idle" }, next: "d3poem" },
  ),
  say(
    "d3k3",
    "monika",
    "モニカ",
    "説明は三つ。見えてる。消さない。続きは夜。十個、書いてから。",
    { sprites: { monika: "serious", rei: "idle", hina: "shy", mei: "idle", koto: "idle" }, next: "d3poem" },
  ),
  say(
    "d3k4",
    "lumina",
    "白羽 ルミナ",
    "光は、説明しません。当たっているなら、温かいだけです。十個、書いてから。",
    { sprites: { lumina: "idle", rei: "idle", hina: "shy", mei: "idle", koto: "idle" }, next: "d3poem" },
  ),
  say(
    "d3poem",
    "koto",
    "白鷺 琴",
    "お題『余白』。書かなかった言葉を、あえて選んでください。",
    {
      sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "idle", monika: "idle" },
      poem: 2,
    },
  ),

  // ---- Day3 share reactions ----
  n("d3s_hina", "陽菜は『二階』と『チラシ』を何度も見た。指が、紙の端で少し止まっている。", {
    bg: "club",
    music: "dusk",
    sprites: { hina: "shy" },
  }),
  say(
    "d3s_hina2",
    "hina",
    "雨宮 陽菜",
    "余白が日常でも、いいよね。私は、そっちの担当でいたい。",
    { next: "night" },
  ),
  n("d3s_mei", "メイは『一列』に、小さく丸をつけた。", {
    bg: "club",
    music: "dusk",
    sprites: { mei: "grin" },
  }),
  say(
    "d3s_mei2",
    "mei",
    "黒羽 メイ",
    "余白でも勝負するんだ。いいね、新人。夜まで残る？",
    { next: "night" },
  ),
  n("d3s_koto", "琴は『欄外』を、自分の部誌の端に丁寧に書き写した。", {
    bg: "club",
    music: "dusk",
    sprites: { koto: "smile" },
  }),
  say(
    "d3s_koto2",
    "koto",
    "白鷺 琴",
    "書かなかった言葉が、いちばんよく残ります。今日の十個は、残ります。",
    { next: "night" },
  ),
  n("d3s_rei", "零は『まだ』の二文字だけを、目次の空白に置いた。", {
    bg: "club",
    music: "margin",
    sprites: { rei: "serious" },
  }),
  say(
    "d3s_rei2",
    "rei",
    "如月 零",
    "……届いてる。夜、残って。一人で話すことが、ある。",
    { next: "night" },
  ),
  n("d3s_monika", "モニカは『好きにして』の四字を、名札の下に貼った。", {
    bg: "club",
    music: "margin",
    sprites: { monika: "serious" },
  }),
  say(
    "d3s_monika2",
    "monika",
    "モニカ",
    "余白、わたしの席だもん。夜まで残る？　残るよね。画面、消さないで。",
    { next: "night" },
  ),
  n("d3s_ayame", "しゆは『これから』を、扇の要に書いた。字が、少し震えている。", {
    bg: "club",
    music: "dusk",
    sprites: { ayame: "idle" },
  }),
  say(
    "d3s_ayame2",
    "ayame",
    "紋匁しゆ",
    "余白が伸び代なら、自分、ここにいていい気がします。夜まで、残ります。",
    { next: "night" },
  ),
  n("d3s_lumina", "ルミナは『純』を、後光の内側にそっと置いた。", {
    bg: "club",
    music: "margin",
    sprites: { lumina: "idle" },
  }),
  say(
    "d3s_lumina2",
    "lumina",
    "白羽 ルミナ",
    "書かなかった言葉のうえに、光だけ残します。夜まで、消さないでください。",
    { sprites: { lumina: "smile" }, next: "night" },
  ),

  // ---- Night (route trigger) ----
  n(
    "night",
    "日が落ちて、部室の色が変わった。ランプだけが、原稿を温めている。",
    { bg: "night", music: "dusk", sprites: {}, special: "route" },
  ),
];
