import type { Scene } from "../types";
import { n, say } from "./helpers";

/** Day 2: morning notice, guest (Monika), help choices, poem, share reactions, end */
export const DAY2_SCENES: Scene[] = [
  n(
    "d2a",
    "翌日。掲示板の『余白』の紙は、まだ右下が空いていた。誰も名前を書き足していない。",
    { bg: "hall", music: "dusk", sprites: {} },
  ),
  n("d2b", "代わりに、鉛筆で一行。『きのうの十個、悪くなかった。——零』", { next: "guest1" }),

  // ---- Guest: Monika joins ----
  n(
    "guest1",
    "翌朝、部室の扉より先に、白い帽子が入ってきた。",
    { bg: "club", music: "club", sprites: { monika: "idle" } },
  ),
  say(
    "guest2",
    "monika",
    "モニカ",
    "あ。文芸？　いいね、余白とか書いてあるし。わたし、モニカ。好きにしていい側の人。",
    { sprites: { monika: "grin" } },
  ),
  say(
    "guest3",
    "hina",
    "雨宮 陽菜",
    "えっ、客員？　張り紙、私が貼ってない……魔法瓶、もう一杯あるけど。",
    { sprites: { monika: "idle", hina: "shy" }, focus: "hina" },
  ),
  say(
    "guest4",
    "mei",
    "黒羽 メイ",
    "その名札、本文として長すぎ。見出しは『モニカ』でいい。",
    { sprites: { monika: "idle", hina: "idle", mei: "idle" }, focus: "mei" },
  ),
  say(
    "guest5",
    "koto",
    "白鷺 琴",
    "魔女の帽子と詩は、相性が良いという説があります。欄外に『客員』と記します。",
    { sprites: { monika: "idle", hina: "idle", mei: "idle", koto: "smile" }, focus: "koto" },
  ),
  say(
    "guest6",
    "rei",
    "如月 零",
    "外側から来た人だ。席は、余白側に空いてる。",
    { sprites: { monika: "idle", rei: "smile", hina: "idle", mei: "idle", koto: "idle" }, focus: "rei" },
  ),
  say(
    "guest7",
    "monika",
    "モニカ",
    "あ、それ。モニカポジ、空いてたでしょ。わたし、やれます。やらせてください。",
    { sprites: { monika: "grin", rei: "idle", hina: "idle", mei: "idle", koto: "idle" } },
  ),
  say(
    "guest8",
    "rei",
    "如月 零",
    "……部長は譲らない。余白担当なら、どうぞ。画面の外側は、得意そうだから。",
    { sprites: { monika: "idle", rei: "smile" }, focus: "rei" },
  ),
  say(
    "guest9",
    "monika",
    "モニカ",
    "十個は長いから、あとで付き合う。いまは三つ。『配信』『おやつ』『許可』——席、もらった。",
    { sprites: { monika: "grin" }, next: "d2c" },
  ),

  n(
    "d2c",
    "部室は、いつのまにか人が増えていた。窓際の椅子に、白い帽子と、細い後光が溶けている。",
    { bg: "club", music: "club", sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "idle", monika: "idle" } },
  ),
  say(
    "d2d",
    "rei",
    "如月 零",
    "部誌を出す。手があいてるなら、誰か一人の手伝いを。余白は、分担したほうが深くなる。",
    {
      sprites: { rei: "smile", hina: "idle", mei: "idle", koto: "idle", monika: "idle" },
      choices: [
        { text: "陽菜の紹介文を見る", next: "d2_hina", affection: { hina: 3 }, flag: "day2_hina" },
        { text: "メイの見出しを見る", next: "d2_mei", affection: { mei: 3 }, flag: "day2_mei" },
        { text: "琴の古い部誌を見る", next: "d2_koto", affection: { koto: 3 }, flag: "day2_koto" },
        { text: "零の目次を見る", next: "d2_rei", affection: { rei: 3 }, flag: "day2_rei" },
        { text: "モニカの窓際を見る", next: "d2_monika", affection: { monika: 3 }, flag: "day2_monika" },
        { text: "しゆの成長記録を見る", next: "d2_ayame", affection: { ayame: 3 }, flag: "day2_ayame" },
        { text: "ルミナの光を見る", next: "d2_lumina", affection: { lumina: 3 }, flag: "day2_lumina" },
      ],
    },
  ),

  // ---- Day2 individual help scenes ----
  say(
    "d2_hina",
    "hina",
    "雨宮 陽菜",
    "助かる——！　紹介文、三日書いてる。『楽しいです』しか出てこないの、罪？",
    { bg: "club", music: "club", sprites: { hina: "shy" } },
  ),
  n("d2_hina2", "画面には『楽しいです』が、本当に三行続いていた。"),
  say(
    "d2_hina3",
    "hina",
    "雨宮 陽菜",
    "私、人を部室まで連れてくるのは得意なんだ。その先が、いつも薄い。案内板みたい。",
    { sprites: { hina: "idle" } },
  ),
  n(
    "d2_hina4",
    "魔法瓶の蓋を指で回しながら、陽菜は笑ったまま目を伏せた。",
    {
      choices: [
        { text: "案内がなければ、僕は来ていない", next: "d2_hina5", affection: { hina: 2 } },
        { text: "薄い日も、今日のうちだよ", next: "d2_hina5", affection: { hina: 1 } },
      ],
    },
  ),
  say(
    "d2_hina5",
    "hina",
    "雨宮 陽菜",
    "……っ。そういうの、詩より効くからやめて。いや、やめないで。メモする。",
    { sprites: { hina: "shy" }, next: "d2p" },
  ),

  say(
    "d2_mei",
    "mei",
    "黒羽 メイ",
    "見出しだけ見て。本文はまだ。本文は、見出しに負けたら捨てる主義。",
    { bg: "club", music: "club", sprites: { mei: "idle" } },
  ),
  n("d2_mei2", "ノートに並ぶ候補。『一口で足りる』『負けない塩』『十個で勝負』"),
  say(
    "d2_mei3",
    "mei",
    "黒羽 メイ",
    "長いのが偉いと思ってる人、学内に多すぎ。私は短いほうが、逃げ場がない。",
    { sprites: { mei: "idle" } },
  ),
  n(
    "d2_mei4",
    "袖をまくり直す手が、少し早い。本気だ。",
    {
      choices: [
        { text: "短いのは、逃げてない証拠だ", next: "d2_mei5", affection: { mei: 2 } },
        { text: "その三つの、真ん中がいい", next: "d2_mei5", affection: { mei: 1 } },
      ],
    },
  ),
  say(
    "d2_mei5",
    "mei",
    "黒羽 メイ",
    "……ふん。今日は点が甘いね、新人。次の十個で取り返すつもりでいて。",
    { sprites: { mei: "grin" }, next: "d2p" },
  ),

  say(
    "d2_koto",
    "koto",
    "白鷺 琴",
    "気をつけて開いてください。背表紙が、もう粉を吹いています。",
    { bg: "club", music: "club", sprites: { koto: "idle" } },
  ),
  n("d2_koto2", "十年以上前の部誌。欄外に、鉛筆の名前が薄く残っている。"),
  say(
    "d2_koto3",
    "koto",
    "白鷺 琴",
    "本文は製本で残る。名前は、余白側にしかない。消しゴムは、本文より余白に厳しい。",
    { sprites: { koto: "idle" } },
  ),
  n(
    "d2_koto4",
    "琴の指が、消された二文字の上で止まった。",
    {
      choices: [
        { text: "残っているほうを、一緒に写そう", next: "d2_koto5", affection: { koto: 2 } },
        { text: "消えたことも、記録のうちだ", next: "d2_koto5", affection: { koto: 2 } },
      ],
    },
  ),
  say(
    "d2_koto5",
    "koto",
    "白鷺 琴",
    "……はい。では、今日のあなたの十個も、いつか誰かが写すかもしれません。",
    { sprites: { koto: "smile" }, next: "d2p" },
  ),

  say(
    "d2_rei",
    "rei",
    "如月 零",
    "目次は、まだ空白が多い。意図的に。読み手が書き足すための頁を、先に確保してる。",
    { bg: "club", music: "club", sprites: { rei: "idle" } },
  ),
  n("d2_rei2", "目次の後半は、項目名がなく、ページ番号だけが打ってある。"),
  say(
    "d2_rei3",
    "rei",
    "如月 零",
    "物語って、終わりが来ると部屋が消える。だから私は、終わりのあとの行を欲しがる。",
    { sprites: { rei: "serious" } },
  ),
  n(
    "d2_rei4",
    "零の視線は、僕の目ではなく、僕の少し後ろ——画面のこちら側——に合っていた。",
    {
      choices: [
        { text: "終わりのあとでも、書けるのか？", next: "d2_rei5", affection: { rei: 2 } },
        { text: "……今、どこを見てる？", next: "d2_rei5", affection: { rei: 2 }, flag: "rei_saw" },
      ],
    },
  ),
  say(
    "d2_rei5",
    "rei",
    "如月 零",
    "見てるよ。余白の、もっと外側。今日はそこまで話さない。十個、選んで。",
    { sprites: { rei: "smile" }, next: "d2p" },
  ),

  say(
    "d2_monika",
    "monika",
    "モニカ",
    "作業？　してるしてる。窓の外、配信してる。視聴者はいま、ひとり。{name}。",
    { bg: "club", music: "club", sprites: { monika: "grin" } },
  ),
  n("d2_monika2", "机の角に、画面をこちらへ向けた小型の端末。赤い点は点いていない。"),
  say(
    "d2_monika3",
    "monika",
    "モニカ",
    "点灯はしない。怠惰担当だから。でもね、そっち側——頁の外——は見えてる。",
    { sprites: { monika: "serious" } },
  ),
  n(
    "d2_monika4",
    "魔女帽の縁が、ランプの輪から少しはみ出していた。",
    {
      choices: [
        { text: "見えてるなら、名前を呼べ", next: "d2_monika5", affection: { monika: 2 } },
        { text: "配信しないのが、いちばん誠実だ", next: "d2_monika5", affection: { monika: 2 } },
      ],
    },
  ),
  say(
    "d2_monika5",
    "monika",
    "モニカ",
    "ふうん。やる気、出ちゃった。モニカポジ、本気でやる。十個、わたし寄せていいよ。",
    { sprites: { monika: "grin" }, next: "d2p" },
  ),

  say(
    "d2_ayame",
    "ayame",
    "紋匁しゆ",
    "見てください、成長記録。きのうは七語、きょうは八語。あと二語で十個に追いつきます。",
    { bg: "club", music: "club", sprites: { ayame: "idle" } },
  ),
  n("d2_ayame2", "ノートの端に、亀の絵がひとつずつ増えていた。扇の隣で、とてもツヨイ字が震えている。"),
  say(
    "d2_ayame3",
    "ayame",
    "紋匁しゆ",
    "見習いなので、まだ短いです。でも伸び代しかないです。{name}、きょうの一語、一緒に選びませんか。",
    { sprites: { ayame: "shy" } },
  ),
  n(
    "d2_ayame4",
    "白紙の次の行が、少しだけ広い。",
    {
      choices: [
        { text: "『隣』を足す", next: "d2_ayame5", affection: { ayame: 2 } },
        { text: "『まだ』を足す", next: "d2_ayame5", affection: { ayame: 2 } },
      ],
    },
  ),
  say(
    "d2_ayame5",
    "ayame",
    "紋匁しゆ",
    "増えました！　成長期、やってます。やらせてもらえて、嬉しいです。",
    { sprites: { ayame: "grin" }, next: "d2p" },
  ),

  say(
    "d2_lumina",
    "lumina",
    "白羽 ルミナ",
    "手伝いは、光でよいですか。字は、まだ練習中です。翼で頁をめくると、怒られます。",
    { bg: "club", music: "club", sprites: { lumina: "shy" } },
  ),
  n("d2_lumina2", "白紙の端だけが、後光でうっすら透けていた。書いていない行が、いちばん明るい。"),
  say(
    "d2_lumina3",
    "lumina",
    "白羽 ルミナ",
    "一ノ瀬アイさんは、『顔を量産しないで』と言っていました。わたしの虹彩は、コピー禁止です。",
    { sprites: { lumina: "idle" } },
  ),
  n(
    "d2_lumina4",
    "青い層の奥に、細い黄がひとつ。量産された天使の顔では、なかった。",
    {
      sprites: { lumina: "shy" },
      choices: [
        { text: "『空』を足す", next: "d2_lumina5", affection: { lumina: 2 } },
        { text: "『純』を足す", next: "d2_lumina5", affection: { lumina: 2 } },
      ],
    },
  ),
  say(
    "d2_lumina5",
    "lumina",
    "白羽 ルミナ",
    "……足しました。余白が、すこし温かいです。",
    { sprites: { lumina: "smile" }, next: "d2p" },
  ),

  // ---- Poem trigger ----
  say(
    "d2p",
    "koto",
    "白鷺 琴",
    "本日のお題は『誰か』。宛先のない手紙だと思ってください。",
    {
      bg: "club",
      music: "club",
      sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "idle", monika: "idle" },
    },
  ),
  say(
    "d2p2",
    "mei",
    "黒羽 メイ",
    "誰かに媚びるなよ。言葉が先、相手はあと。",
    { sprites: { mei: "grin", rei: "idle", hina: "idle", koto: "idle" }, poem: 1 },
  ),

  // ---- Day2 share reactions ----
  n("d2s_hina", "陽菜は手紙、という語のあたりで息を止めた。", {
    bg: "club",
    music: "club",
    sprites: { hina: "shy" },
  }),
  say(
    "d2s_hina2",
    "hina",
    "雨宮 陽菜",
    "宛先がなくても、隣、って書いてあると嬉しいな。私、隣担当でいいかも。",
    { next: "d2e1" },
  ),
  n("d2s_mei", "メイが『短い』を二度叩いた。", {
    bg: "club",
    music: "club",
    sprites: { mei: "grin" },
  }),
  say(
    "d2s_mei2",
    "mei",
    "黒羽 メイ",
    "誰か、に勝ちにいってる。嫌いじゃない。次もこの熱で来い。",
    { next: "d2e1" },
  ),
  n("d2s_koto", "琴は『古い名』の文字を、丁寧に書き写した。", {
    bg: "club",
    music: "club",
    sprites: { koto: "smile" },
  }),
  say(
    "d2s_koto2",
    "koto",
    "白鷺 琴",
    "宛先が過去でも、手紙は届きます。今日の誰かは、もういない人かもしれません。",
    { next: "d2e1" },
  ),
  n("d2s_rei", "零は『あなた』の一字を、指で隠した。", {
    bg: "club",
    music: "club",
    sprites: { rei: "serious" },
  }),
  say(
    "d2s_rei2",
    "rei",
    "如月 零",
    "その『あなた』は、部室の誰かじゃない気がする。やめないで。そのままでいい。",
    { next: "d2e1" },
  ),
  n("d2s_monika", "モニカは『あなた』と『画面』を、帽子の裏に書いた。", {
    bg: "club",
    music: "club",
    sprites: { monika: "grin" },
  }),
  say(
    "d2s_monika2",
    "monika",
    "モニカ",
    "宛先、ばれてる。いい詩。モニカポジの勝ち味。",
    { next: "d2e1" },
  ),
  n("d2s_ayame", "しゆは『このゆび』を二度、なぞった。", {
    bg: "club",
    music: "club",
    sprites: { ayame: "shy" },
  }),
  say(
    "d2s_ayame2",
    "ayame",
    "紋匁しゆ",
    "宛先、自分でもいいですか。友達募集中なので。",
    { next: "d2e1" },
  ),
  n("d2s_lumina", "ルミナは『空』を、翼の内側に書いた。", {
    bg: "club",
    music: "club",
    sprites: { lumina: "idle" },
  }),
  say(
    "d2s_lumina2",
    "lumina",
    "白羽 ルミナ",
    "宛先が空でも、光は届きます。誰か、の代わりに、明るさだけで。",
    { sprites: { lumina: "smile" }, next: "d2e1" },
  ),

  // ---- End of day 2 ----
  n(
    "d2e1",
    "解散のあと、中庭まで陽菜が送ってきた。銀杏が、二枚だけ靴先に落ちた。",
    { bg: "court", music: "dusk", sprites: { hina: "idle" } },
  ),
  say(
    "d2e2",
    "hina",
    "雨宮 陽菜",
    "ねえ。零、最近、頁の外側を見てることがある。怖いんじゃなくて……寂しそう。",
    { sprites: { hina: "shy" } },
  ),
  say(
    "d2e3",
    "hina",
    "雨宮 陽菜",
    "だから、明日も来て。余白、人数いないとただの白紙だから。",
    { sprites: { hina: "idle" }, next: "d3a" },
  ),
];
