import type { CharId } from "./types";

export type PoemWord = {
  text: string;
  scores: Record<CharId, number>;
};

export type PoemSet = {
  title: string;
  prompt: string;
  words: PoemWord[];
};

const w = (
  text: string,
  rei: number,
  hina: number,
  mei: number,
  koto: number,
  monika = 0,
  ayame = 0,
  lumina = 0,
): PoemWord => ({ text, scores: { rei, hina, mei, koto, monika, ayame, lumina } });

export const POEM_SETS: PoemSet[] = [
  {
    title: "第一首　『今日』",
    prompt: "きょうという日の、どこかを一枚に折りなさい。",
    words: [
      w("お昼", 0, 3, 1, 0, 1),
      w("自転車", 0, 3, 1, 0, 0),
      w("窓", 1, 3, 0, 2, 1),
      w("温かい", 0, 3, 0, 1, 1),
      w("靴音", 1, 3, 1, 1, 0),
      w("胡椒", 0, 1, 3, 0, 1),
      w("勝負", 1, 0, 3, 0, 0),
      w("一言", 2, 0, 3, 1, 1),
      w("本音", 1, 1, 3, 1, 1),
      w("噛む", 0, 0, 3, 1, 0),
      w("墨", 1, 0, 0, 3, 0),
      w("栞", 1, 1, 0, 3, 0),
      w("余韻", 2, 0, 0, 3, 1),
      w("夜雨", 1, 1, 0, 3, 0),
      w("筆先", 1, 0, 1, 3, 0),
      w("余白", 3, 1, 0, 2, 2),
      w("頁", 3, 0, 0, 2, 1),
      w("読者", 3, 0, 1, 1, 2),
      w("終わり", 3, 1, 1, 1, 1),
      w("ここに", 3, 1, 1, 1, 3),
      w("配信", 1, 0, 1, 0, 3),
      w("おやつ", 0, 2, 2, 0, 3),
      w("許可", 2, 0, 1, 1, 3),
      w("怠惰", 1, 0, 1, 0, 3, 0),
      w("伸び代", 1, 1, 1, 0, 0, 3),
      w("見習い", 0, 2, 1, 1, 0, 3),
      w("友達", 0, 3, 0, 1, 0, 3),
      w("とてもツヨイ", 0, 1, 2, 0, 1, 3),
      w("光", 1, 1, 0, 1, 0, 0, 3),
      w("翼", 1, 0, 1, 1, 0, 0, 3),
      w("後光", 2, 0, 0, 2, 1, 0, 3),
      w("白", 1, 1, 0, 2, 0, 0, 3),
    ],
  },
  {
    title: "第二首　『誰か』",
    prompt: "名前のない相手に、届く言葉を十個だけ。",
    words: [
      w("隣", 1, 3, 0, 1, 1),
      w("帰り道", 0, 3, 1, 1, 0),
      w("傘", 0, 3, 0, 2, 0),
      w("声", 1, 3, 1, 1, 2),
      w("魔法瓶", 0, 3, 1, 0, 0),
      w("ライバル", 1, 0, 3, 0, 1),
      w("塩", 0, 1, 3, 0, 1),
      w("短い", 1, 0, 3, 1, 2),
      w("表紙", 1, 0, 3, 2, 1),
      w("負けない", 1, 1, 3, 0, 0),
      w("古い名", 1, 0, 0, 3, 0),
      w("沈黙", 2, 0, 0, 3, 1),
      w("湖", 1, 0, 0, 3, 0),
      w("手紙", 1, 2, 0, 3, 0),
      w("記憶", 2, 1, 0, 3, 1),
      w("選択", 3, 1, 1, 1, 2),
      w("脚本", 3, 0, 1, 1, 2),
      w("あなた", 3, 2, 1, 1, 3),
      w("外側", 3, 0, 1, 2, 3),
      w("続き", 3, 1, 1, 2, 2),
      w("画面", 2, 0, 1, 0, 3),
      w("ゲリラ", 0, 1, 2, 0, 3),
      w("名札", 1, 1, 1, 1, 3),
      w("寝落ち", 0, 2, 1, 0, 3, 1),
      w("このゆび", 0, 2, 0, 0, 1, 3),
      w("成長", 1, 2, 1, 1, 0, 3),
      w("守る", 1, 2, 1, 1, 0, 3),
      w("北", 1, 1, 0, 2, 0, 3),
      w("空", 1, 2, 0, 2, 0, 0, 3),
      w("まぶた", 0, 2, 0, 1, 0, 1, 3),
      w("虹彩", 2, 0, 1, 1, 1, 0, 3),
      w("透明", 2, 1, 0, 2, 1, 0, 3),
    ],
  },
  {
    title: "第三首　『余白』",
    prompt: "書かなかった言葉を、あえて十個、並べなさい。",
    words: [
      w("午後", 1, 3, 0, 1, 1),
      w("弁当の端", 0, 3, 1, 0, 1),
      w("笑い声", 0, 3, 1, 1, 1),
      w("二階", 1, 3, 0, 1, 0),
      w("チラシ", 1, 3, 1, 0, 1),
      w("見出し", 1, 0, 3, 1, 1),
      w("辛口", 0, 0, 3, 0, 1),
      w("一列", 1, 0, 3, 1, 0),
      w("熱", 0, 1, 3, 1, 1),
      w("匿名", 2, 0, 3, 1, 2),
      w("欄外", 2, 0, 0, 3, 2),
      w("万年筆", 1, 0, 0, 3, 0),
      w("消された", 2, 0, 0, 3, 1),
      w("製本", 1, 0, 1, 3, 0),
      w("長い文", 1, 0, 0, 3, 0),
      w("結末", 3, 1, 1, 2, 2),
      w("読んだ人", 3, 1, 1, 2, 3),
      w("空白", 3, 1, 0, 2, 2),
      w("名前", 3, 2, 1, 1, 2),
      w("まだ", 3, 2, 1, 2, 2),
      w("ポジション", 2, 0, 1, 0, 3),
      w("マイク", 0, 1, 1, 0, 3),
      w("コメント", 1, 1, 1, 1, 3),
      w("好きにして", 2, 1, 1, 1, 3, 1),
      w("これから", 2, 2, 1, 1, 1, 3),
      w("亀", 0, 1, 1, 1, 0, 3),
      w("扇", 1, 1, 0, 2, 0, 3),
      w("育てる", 1, 2, 0, 1, 0, 3),
      w("天使", 1, 1, 0, 2, 1, 0, 3),
      w("純", 2, 1, 0, 2, 0, 0, 3),
      w("まぶしい", 1, 2, 1, 1, 0, 0, 3),
      w("羽", 1, 1, 1, 1, 0, 1, 3),
    ],
  },
];

export function scorePoem(words: PoemWord[]): Record<CharId, number> {
  const totals: Record<CharId, number> = { rei: 0, hina: 0, mei: 0, koto: 0, monika: 0, ayame: 0, lumina: 0 };
  for (const word of words) {
    (Object.keys(totals) as CharId[]).forEach((id) => {
      totals[id] += word.scores[id] ?? 0;
    });
  }
  return totals;
}

export function poemWinner(scores: Record<CharId, number>, day = 1): CharId {
  const ranked = (Object.entries(scores) as [CharId, number][]).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    const order: CharId[] = ["hina", "mei", "koto", "rei", "monika", "ayame", "lumina"];
    return order.indexOf(a[0]) - order.indexOf(b[0]);
  });
  if (day === 1 && ranked[0][0] === "monika") return ranked[1][0];
  return ranked[0][0];
}

export function composePoem(words: string[]): string {
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += 2) {
    lines.push(words.slice(i, i + 2).join("　"));
  }
  return lines.join("\n");
}
