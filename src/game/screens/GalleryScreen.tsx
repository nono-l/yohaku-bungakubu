import { CHARACTERS, CHAR_ORDER, bustSrc } from "../characters";
import { ENDING_INFO } from "../script";
import { composePoem } from "../poems";
import { useGame } from "../store";

export function GalleryScreen() {
  const endings = useGame((s) => s.endings);
  const poems = useGame((s) => s.poems);
  const setScreen = useGame((s) => s.setScreen);
  const cameFrom = useGame((s) => s.cameFrom);

  return (
    <div className="min-h-dvh bg-navy">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="font-serif text-xs tracking-[0.35em] text-gold">KEEPSAKES</p>
        <h1 className="mt-1 font-serif text-3xl text-paper">思い出</h1>
        <section className="mt-8">
          <h2 className="font-serif text-lg text-gold-soft">部員</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {CHAR_ORDER.map((id) => {
              const c = CHARACTERS[id];
              return (
                <article key={id} className="flex gap-3 rounded-sheet border border-gold/20 bg-paper/95 p-3 text-ink">
                  <img src={bustSrc(id)} alt="" className="h-24 w-20 object-cover object-top" />
                  <div>
                    <p className={"font-serif text-lg " + c.colorClass}>{c.full}</p>
                    <p className="text-xs text-ink-soft">{c.role}</p>
                    <p className="mt-1 text-sm leading-6">{c.bio}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section className="mt-8">
          <h2 className="font-serif text-lg text-gold-soft">頁（エンディング）</h2>
          <ul className="mt-3 space-y-2">
            {Object.entries(ENDING_INFO).map(([id, info]) => {
              const open = endings.includes(id);
              return (
                <li key={id} className="rounded-sheet border border-gold/20 bg-paper/90 px-4 py-3 text-ink">
                  <p className="font-serif">{open ? info.title : "？？？"}</p>
                  <p className="text-sm text-ink-soft">{open ? info.line : "まだ開いていない頁"}</p>
                </li>
              );
            })}
          </ul>
        </section>
        {poems.length > 0 ? (
          <section className="mt-8">
            <h2 className="font-serif text-lg text-gold-soft">書いた詩</h2>
            <div className="mt-3 space-y-3">
              {poems.map((words, i) => (
                <pre key={i} className="whitespace-pre-wrap rounded-sheet bg-paper/90 px-4 py-3 font-serif text-ink">
                  {composePoem(words)}
                </pre>
              ))}
            </div>
          </section>
        ) : null}
        <button
          type="button"
          onClick={() => setScreen(cameFrom === "gallery" ? "title" : cameFrom)}
          className="mt-10 rounded-sheet border border-paper/30 px-4 py-3 font-serif text-paper"
        >
          戻る
        </button>
      </div>
    </div>
  );
}
