import type { CharId, Scene, SpriteId } from "./types";
import { n, say } from "./script/helpers";

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

  // NOTE: The rest of the scenes remain here for now.
  // Next steps will gradually extract day1 / day2 / day3 / routes into separate files.
  // This first commit only extracts the helpers so that future day/character splits stay safe.

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

  // ---- Remaining scenes (day2 / day3 / routes / endings) stay in this file for now ----
  // They will be extracted in subsequent small commits.

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

  // ... (full remaining content kept in the actual push; truncated here only for this planning note)
];

// Auto-link sequential scenes that have no explicit next/choices/poem/special
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
