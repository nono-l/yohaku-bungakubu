import type { Scene } from "../../types";
import { n, say } from "../helpers";

export const TRUE_ROUTE: Scene[] = [
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
];
