import { useGame } from "../store";
import { dayLabelFromScene } from "../save";
import { CHARACTERS, CHAR_ORDER } from "../characters";

export function MenuOverlay() {
  const menuOpen = useGame((s) => s.menuOpen);
  const setMenuOpen = useGame((s) => s.setMenuOpen);
  const setScreen = useGame((s) => s.setScreen);
  const setSaveMode = useGame((s) => s.setSaveMode);
  const autoPlay = useGame((s) => s.autoPlay);
  const setAutoPlay = useGame((s) => s.setAutoPlay);
  const musicOn = useGame((s) => s.musicOn);
  const setMusicOn = useGame((s) => s.setMusicOn);
  const textSpeed = useGame((s) => s.textSpeed);
  const setTextSpeed = useGame((s) => s.setTextSpeed);
  const affection = useGame((s) => s.affection);
  const sceneId = useGame((s) => s.sceneId);

  if (!menuOpen) return null;

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-navy/70 p-4">
      <div className="w-full max-w-md rounded-sheet border border-gold/30 bg-paper p-5 text-ink shadow-2xl paper-grain">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-serif text-xs tracking-[0.3em] text-indigo">MARGIN MENU</p>
            <h2 className="font-serif text-2xl">{dayLabelFromScene(sceneId)}</h2>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="rounded-sheet border border-ink/15 px-3 py-1 font-serif text-sm"
          >
            閉じる
          </button>
        </div>
        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
          {CHAR_ORDER.map((id) => (
            <li key={id} className="flex justify-between font-serif">
              <span className={CHARACTERS[id].colorClass}>{CHARACTERS[id].given}</span>
              <span className="tabular-nums text-ink-soft">{affection[id]}</span>
            </li>
          ))}
        </ul>
        <label className="mt-4 flex items-center justify-between gap-3 text-sm">
          <span>文字速度</span>
          <input
            type="range"
            min={12}
            max={70}
            value={textSpeed}
            onChange={(e) => setTextSpeed(Number(e.target.value))}
            className="w-36"
          />
        </label>
        <label className="mt-2 flex items-center justify-between text-sm">
          <span>自動送り</span>
          <input type="checkbox" checked={autoPlay} onChange={(e) => setAutoPlay(e.target.checked)} />
        </label>
        <label className="mt-2 flex items-center justify-between text-sm">
          <span>音楽</span>
          <input type="checkbox" checked={musicOn} onChange={(e) => setMusicOn(e.target.checked)} />
        </label>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <button
            type="button"
            className="rounded-sheet bg-navy px-3 py-2 font-serif text-sm text-paper"
            onClick={() => {
              setSaveMode("save");
              setScreen("saves");
            }}
          >
            セーブ
          </button>
          <button
            type="button"
            className="rounded-sheet bg-navy px-3 py-2 font-serif text-sm text-paper"
            onClick={() => {
              setSaveMode("load");
              setScreen("saves");
            }}
          >
            ロード
          </button>
          <button
            type="button"
            className="rounded-sheet border border-ink/20 px-3 py-2 font-serif text-sm"
            onClick={() => setScreen("title")}
          >
            タイトルへ
          </button>
          <button
            type="button"
            className="rounded-sheet border border-ink/20 px-3 py-2 font-serif text-sm"
            onClick={() => setScreen("gallery")}
          >
            思い出
          </button>
        </div>
      </div>
    </div>
  );
}
