import type { Scene } from "../../types";
import { n, say } from "../helpers";

export const LUMINA_ROUTE: Scene[] = [
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
];
