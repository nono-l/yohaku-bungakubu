import { useGame } from "../store";

export function CreditsScreen() {
  const setScreen = useGame((s) => s.setScreen);

  return (
    <div className="relative min-h-dvh overflow-y-auto bg-navy">
      <img src="/game/bg/title.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-25" />
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-lg flex-col justify-center px-6 py-16 text-center">
        <p className="font-serif text-xs tracking-[0.4em] text-gold">BLANK LAST PAGE</p>
        <h1 className="mt-3 font-serif text-4xl text-paper">余白の文芸部</h1>
        <p className="mt-8 space-y-3 font-serif text-sm leading-8 text-paper-2">
          オリジナルのビジュアルノベルです。
          <br />
          文芸サークルと詩の選択という遊び方へのオマージュであり、
          既存作品の複製ではありません。
        </p>
        <p className="mt-6 font-serif text-sm leading-8 text-paper-2">
          モニカポジ モニカ @monika_VVtuder
          <br />
          成長期担当 紋匁しゆ @ayamecu
          <br />
          光翼担当 白羽ルミナ　絵・一ノ瀬アイ
        </p>
        <p className="mt-6 font-serif text-sm leading-8 text-paper-3">
          如月 零 雨宮 陽菜 黒羽 メイ 白鷺 琴 モニカ 紋匁しゆ 白羽ルミナ
          <br />
          青嵐大学 文芸サークル〈余白〉
        </p>
        <p className="mt-8 font-serif text-gold-soft">ここから先は、読んだ人が書く。</p>
        <button
          type="button"
          onClick={() => setScreen("title")}
          className="mx-auto mt-10 rounded-sheet bg-paper px-6 py-3 font-serif text-ink"
        >
          タイトルへ
        </button>
      </div>
    </div>
  );
}
