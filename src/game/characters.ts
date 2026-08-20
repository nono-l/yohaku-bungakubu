import type { CharId, Expression, SpriteId } from "./types";

export const CHAR_ORDER: CharId[] = ["hina", "rei", "koto", "mei", "monika", "ayame", "lumina"];
export const SPRITE_ORDER: SpriteId[] = ["hina", "rei", "koto", "mei", "monika", "ayame", "lumina"];

export const CHARACTERS: Record<
  SpriteId,
  {
    id: SpriteId;
    given: string;
    family: string;
    full: string;
    role: string;
    colorClass: string;
    accent: string;
    bio: string;
    taste: string;
    expressions: Expression[];
    guest?: boolean;
  }
> = {
  rei: {
    id: "rei",
    given: "零",
    family: "如月",
    full: "如月 零",
    role: "部長・三年",
    colorClass: "text-rei",
    accent: "bg-rei",
    bio: "文芸サークル『余白』の部長。短い銀髪と藍色の目。本を閉じる音で会話を始める。余白——書かなかった言葉が座る場所——を読むのが趣味だと言い張る。",
    taste: "構造、結末、読者、沈黙、頁の端。",
    expressions: ["idle", "smile", "serious"],
  },
  hina: {
    id: "hina",
    given: "陽菜",
    family: "雨宮",
    full: "雨宮 陽菜",
    role: "二年・会計",
    colorClass: "text-hina",
    accent: "bg-hina",
    bio: "サークルの張り紙を学内に貼った張本人。同じアパートの二階に住む。魔法瓶を手放さず、日常の端っこを詩にする。案内役で終わるのが怖い。",
    taste: "午後、弁当、傘、靴音、窓辺の温さ。",
    expressions: ["idle", "shy"],
  },
  mei: {
    id: "mei",
    given: "メイ",
    family: "黒羽",
    full: "黒羽 メイ",
    role: "一年",
    colorClass: "text-mei",
    accent: "bg-mei",
    bio: "短い詩で勝負する一年。袖をまくり、赤のスニーカーで部室に踏み込む。辛口の食事評を匿名で書いていて、長文を『負け』と呼ぶ。",
    taste: "胡椒、一言、勝負、本音、短い熱。",
    expressions: ["idle", "grin"],
  },
  koto: {
    id: "koto",
    given: "琴",
    family: "白鷺",
    full: "白鷺 琴",
    role: "三年",
    colorClass: "text-koto",
    accent: "bg-koto",
    bio: "低い三つ編みと金縁眼鏡。万年筆をポケットに、古い部誌の欄外を集める。長い詩の余韻を信じ、消された名前を墨の匂いごと残そうとする。",
    taste: "墨、夜雨、栞、古書、忘れられた名前。",
    expressions: ["idle", "smile"],
  },
  monika: {
    id: "monika",
    given: "モニカ",
    family: "",
    full: "モニカ",
    role: "余白担当・モニカポジ",
    colorClass: "text-indigo-soft",
    accent: "bg-indigo-soft",
    bio: "白い魔女帽と名札で座り込んだ、文芸サークルの余白担当。昭和ブイチューバー四天王の怠惰を自称しつつ、画面の外側をいちばんよく見ている。本人許諾の出演。",
    taste: "配信、おやつ、許可、画面、好きにして。",
    expressions: ["idle", "grin", "serious"],
  },
  ayame: {
    id: "ayame",
    given: "しゆ",
    family: "紋匁",
    full: "紋匁しゆ",
    role: "一年・成長期担当",
    colorClass: "text-ayame",
    accent: "bg-ayame",
    bio: "北の守り神・玄武の見習いを名乗る一年。薄紫の髪に六角の眼鏡。とてもツヨイつもりで、まだ伸び代しかない。本人のやる気のもと出演。",
    taste: "伸び代、友達、見習い、このゆび、まだ。",
    expressions: ["idle", "shy", "grin"],
  },
  lumina: {
    id: "lumina",
    given: "ルミナ",
    family: "白羽",
    full: "白羽 ルミナ",
    role: "光翼担当",
    colorClass: "text-lumina",
    accent: "bg-lumina",
    bio: "一ノ瀬アイの絵で届いた、白い後光の客人。長い白髪と、層になった青い虹彩。書かなかった言葉のうえに、光だけを置く。本人と絵師の依頼で出演。",
    taste: "光、翼、後光、白、空。",
    expressions: ["idle", "shy", "smile"],
    guest: true,
  },
};

export function spriteSrc(id: SpriteId, expr: Expression): string {
  const allowed = CHARACTERS[id].expressions;
  const use = allowed.includes(expr) ? expr : "idle";
  return `/game/sprites/${id}-${use}.png`;
}

export function bustSrc(id: SpriteId): string {
  return `/game/sprites/${id}-bust.png`;
}

export const BACKGROUNDS: Record<string, string> = {
  title: "/game/bg/title.jpg",
  hall: "/game/bg/hall.jpg",
  club: "/game/bg/club.jpg",
  court: "/game/bg/court.jpg",
  night: "/game/bg/night.jpg",
};
