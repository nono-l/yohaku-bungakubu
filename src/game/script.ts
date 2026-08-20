import type { CharId, Scene, SpriteId } from "./types";

const n = (
  id: string,
  text: string,
  extra: Partial<Scene> = {},
): Scene => ({
  id,
  speaker: extra.speaker ?? "",
  speakerId: extra.speakerId ?? "narrator",
  text,
  ...extra,
});

const say = (
  id: string,
  who: SpriteId,
  name: string,
  text: string,
  extra: Partial<Scene> = {},
): Scene => ({
  id,
  speaker: name,
  speakerId: who,
  text,
  focus: extra.focus ?? who,
  ...extra,
});

export const SCENES: Scene[] = [
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

  n(
    "d2a",
    "翌日。掲示板の『余白』の紙は、まだ右下が空いていた。誰も名前を書き足していない。",
    { bg: "hall", music: "dusk", sprites: {} },
  ),
  n("d2b", "代わりに、鉛筆で一行。『きのうの十個、悪くなかった。——零』", { next: "guest1" }),
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

  n("d3s_hina", "陽菜は『二階』と『チラシ』を何度も見た。", {
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
  n("d3s_mei", "メイは『一列』に丸をつけた。", {
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
  n("d3s_koto", "琴は『欄外』を、自分の部誌の端に書き写した。", {
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


  n("d3s_ayame", "しゆは『これから』を、扇の要に書いた。", {
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

  n("d3s_lumina", "ルミナは『純』を、後光の内側に置いた。", {
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

  n(
    "night",
    "日が落ちて、部室の色が変わった。ランプだけが、原稿を温めている。",
    { bg: "night", music: "dusk", sprites: {}, special: "route" },
  ),

  // ---- Hina route ----
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

  // ---- Mei route ----
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

  // ---- Koto route ----
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

  // ---- Rei route ----
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


  // ---- Monika route ----
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

  n("r_lumina1", "ランプの輪のいちばん明るいところに、ルミナだけが立っていた。翼は畳まれ、後光だけが机を照らしている。", {
    bg: "night",
    music: "margin",
    sprites: { lumina: "idle" },
  }),
  say(
    "r_lumina2",
    "lumina",
    "白羽 ルミナ",
    "残ってくれて、ありがとうございます。光は、ひとりだとただのまぶしさです。",
    { sprites: { lumina: "shy" } },
  ),
  n("r_lumina3", "白い髪のすきまから、層になった青い虹彩がこちらを見ていた。コピーではない、と紙が書いてあるみたいだった。"),
  say(
    "r_lumina4",
    "lumina",
    "白羽 ルミナ",
    "一ノ瀬アイさんは、『この顔で出して』と言いました。わたしは、余白の明るさ担当です。",
    { sprites: { lumina: "idle" } },
  ),
  n(
    "r_lumina5",
    "後光が、空白の最終頁のうえに、丸い影ではない光を落とした。",
    {
      sprites: { lumina: "smile" },
      choices: [
        { text: "光、返さなくていい", next: "r_lumina6", affection: { lumina: 2 }, flag: "keep_lumina" },
        { text: "一緒に、頁を透かす", next: "r_lumina6", affection: { lumina: 2 } },
      ],
    },
  ),
  say(
    "r_lumina6",
    "lumina",
    "白羽 ルミナ",
    "では、残ります。書かなかった言葉のうえに、わたしを置いてください。",
    { sprites: { lumina: "smile" } },
  ),
  say(
    "r_lumina7",
    "lumina",
    "白羽 ルミナ",
    "続きは、こちら側の光で。消さないで。",
    { sprites: { lumina: "idle" }, next: "e_lumina" },
  ),
  n(
    "e_lumina",
    "部誌の最終頁は、白紙のまま製本された。透かすと、ごく薄い後光の輪だけが見える。\n欄外に、小さな字。『白羽ルミナ／光翼担当　絵・一ノ瀬アイ』\nあなたが今読んでいるこの行も、その明るさの一部だ。",
    {
      bg: "title",
      music: "title",
      sprites: { lumina: "smile" },
      speaker: "—— ルミナの頁 ——",
      speakerId: "narrator",
      special: "ending",
    },
  ),

  // ---- True ending ----
  n(
    "r_true1",
    "七人とも、なぜか残っていた。誰が残ったのでもない。余白が、人数を揃えた。",
    {
      bg: "night",
      music: "margin",
      sprites: { rei: "idle", hina: "idle", mei: "idle", koto: "idle", monika: "idle", ayame: "idle", lumina: "idle" },
    },
  ),
  say(
    "r_true2",
    "hina",
    "雨宮 陽菜",
    "ねえ、今日の一文。私は案内のまま終わりたくない。",
    { focus: "hina", sprites: { rei: "idle", hina: "shy", mei: "idle", koto: "idle" } },
  ),
  say(
    "r_true3",
    "mei",
    "黒羽 メイ",
    "長い説明はいい。結論だけ。部誌、七人と新人で出す。最終頁は空白。",
    { focus: "mei", sprites: { rei: "smile", hina: "idle", mei: "grin", koto: "idle" } },
  ),
  say(
    "r_true4",
    "koto",
    "白鷺 琴",
    "欄外に、全員の名を。消されても写せるように、二箇所へ。",
    { focus: "koto", sprites: { rei: "smile", hina: "idle", mei: "grin", koto: "smile" } },
  ),
  say(
    "r_true5",
    "rei",
    "如月 零",
    "賛成。物語が終わっても、空白は残る。{name}——そちらの人も、書いて。",
    { focus: "rei", sprites: { rei: "smile", hina: "idle", mei: "grin", koto: "smile", monika: "idle" } },
  ),
  say(
    "r_true5b",
    "monika",
    "モニカ",
    "モニカポジ、埋まってます。配信はしない。コメント欄だけ、開けとく。",
    { focus: "monika", sprites: { rei: "smile", hina: "idle", mei: "grin", koto: "smile", monika: "grin", ayame: "idle" } },
  ),
  say(
    "r_true5c",
    "ayame",
    "紋匁しゆ",
    "成長期担当も、埋まってます。完成はまだです。隣、空けてあります。",
    { focus: "ayame", sprites: { rei: "smile", hina: "idle", mei: "grin", koto: "smile", monika: "grin", ayame: "grin", lumina: "idle" } },
  ),
  say(
    "r_true5d",
    "lumina",
    "白羽 ルミナ",
    "光翼担当も、埋まってます。書かなかった言葉のうえに、光だけ置きます。",
    { focus: "lumina", sprites: { rei: "smile", hina: "idle", mei: "grin", koto: "smile", monika: "grin", ayame: "grin", lumina: "smile" } },
  ),
  n(
    "r_true6",
    "ランプの輪の中で、八つの影が机に落ちた。七つと、もうひとつ。頁の外側の、短い影。",
    { next: "e_true" },
  ),
  n(
    "e_true",
    "青嵐大学の文芸サークル『余白』第一号は、最終頁を空白のまま製本された。\n紹介文も、見出しも、欄外の名前も、目次の空きも、モニカの名札も、しゆの成長記録も、ルミナの後光も、同じ束にある。\nあなたが今読んでいるこの行も、その余白の一部だ。続きは、こちら側で書いていい。",
    {
      bg: "title",
      music: "title",
      sprites: {},
      speaker: "—— 空白の最終頁 ——",
      speakerId: "narrator",
      special: "ending",
    },
  ),

  n(
    "after_end",
    "部室の西日は、セーブデータの外でも同じ色をしている。もう一度、余白を開きますか。",
    {
      bg: "club",
      music: "title",
      sprites: {},
      special: "credits",
      choices: [
        { text: "タイトルへ戻る", next: "title" },
        { text: "スタッフロール", next: "credits" },
      ],
    },
  ),
];

for (let i = 0; i < SCENES.length - 1; i += 1) {
  const s = SCENES[i];
  if (!s.next && !s.choices && s.poem == null && !s.special) {
    s.next = SCENES[i + 1].id;
  }
}

export const SCENE_MAP: Record<string, Scene> = Object.fromEntries(SCENES.map((s) => [s.id, s]));

export const FIRST_SCENE = "p1";

export function shareScene(day: 1 | 2 | 3, winner: CharId): string {
  return `d${day}s_${winner}`;
}

export function pickRoute(aff: Record<CharId, number>, flags: Set<string>): string {
  const ids: CharId[] = ["hina", "mei", "koto", "rei", "monika", "ayame", "lumina"];
  if (ids.every((id) => aff[id] >= 6)) return "r_true1";
  const ranked = [...ids].sort((a, b) => {
    if (aff[b] !== aff[a]) return aff[b] - aff[a];
    const preferred = ids.find((id) => flags.has(`day2_${id}`));
    if (preferred === a) return -1;
    if (preferred === b) return 1;
    return 0;
  });
  return `r_${ranked[0]}1`;
}

export function endingIdFromScene(id: string): string | null {
  if (id.startsWith("e_")) return id.slice(2);
  return null;
}

export const ENDING_INFO: Record<string, { title: string; line: string }> = {
  hina: { title: "陽菜の頁", line: "案内ではなく、続きとして。" },
  mei: { title: "メイの頁", line: "十個で足りる。" },
  koto: { title: "琴の頁", line: "写した人の名も、残してよい。" },
  rei: { title: "零の頁", line: "ここから先は、読んだ人が書く。" },
  monika: { title: "モニカの頁", line: "モニカポジ：空席なし。" },
  ayame: { title: "しゆの頁", line: "完成は、まだ。隣は空いてる。" },
  lumina: { title: "ルミナの頁", line: "書かなかった言葉のうえに、光。" },
  true: { title: "空白の最終頁", line: "七人と、もうひとりの影。" },
};
