import { useGame } from "../store";
import { canCloudSave, loadLast, loadSlots } from "../save";
import { getCloudAutosave, listCloudSaves } from "../cloud-saves";
import { AuthChip } from "../ui/AuthChip";
import { playMusic, unlockAudio } from "../audio";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { useEffect, useState } from "react";

export function TitleScreen() {
  const setScreen = useGame((s) => s.setScreen);
  const continueLast = useGame((s) => s.continueLast);
  const applySave = useGame((s) => s.applySave);
  const musicOn = useGame((s) => s.musicOn);
  const endings = useGame((s) => s.endings);
  const { user, isPending } = useCurrentUserState();
  const cloud = canCloudSave(user);

  const [hasLast, setHasLast] = useState(false);
  const [hasSlots, setHasSlots] = useState(false);

  useEffect(() => {
    if (isPending) return;
    let cancelled = false;
    const localLast = Boolean(loadLast()?.sceneId);
    const localSlots = loadSlots().some(Boolean);
    setHasLast(localLast);
    setHasSlots(localSlots);
    if (!cloud) return;
    void Promise.all([getCloudAutosave(), listCloudSaves()])
      .then(([auto, slots]) => {
        if (cancelled) return;
        setHasLast(Boolean(auto?.sceneId) || localLast);
        setHasSlots(slots.some(Boolean) || localSlots);
      })
      .catch(() => {
        /* keep local flags */
      });
    return () => {
      cancelled = true;
    };
  }, [cloud, isPending]);

  useEffect(() => {
    if (musicOn) playMusic("title");
    else playMusic("none");
  }, [musicOn]);

  const start = async (fn: () => void) => {
    await unlockAudio();
    fn();
  };

  const resume = async () => {
    await unlockAudio();
    if (cloud) {
      try {
        const auto = await getCloudAutosave();
        if (auto) {
          applySave(auto);
          return;
        }
      } catch {
        /* fall through to local */
      }
    }
    continueLast();
  };

  return (
    <div className="relative min-h-dvh overflow-hidden bg-navy">
      <img src="/game/bg/title.jpg" alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-b from-navy/25 via-navy/35 to-navy/88" />
      <header className="absolute right-4 top-4 z-10">
        <AuthChip />
      </header>
      <div className="relative z-10 flex min-h-dvh flex-col justify-end px-6 pb-14 pt-20 sm:justify-center sm:px-16">
        <p className="font-serif text-xs tracking-[0.55em] text-gold-soft">SEIRAN UNIV. LITERARY CIRCLE</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold text-paper vn-shadow text-balance sm:text-6xl">
          余白の文芸部
        </h1>
        <p className="mt-2 font-serif text-sm tracking-[0.4em] text-gold">MARGINS</p>
        <p className="mt-4 max-w-md font-serif text-sm leading-7 text-paper-2">
          古い部室で、十個の言葉を選ぶ。余白には魔女帽が、成長期には扇が、光には後光が坐っている。
        </p>
        <nav className="mt-8 flex w-full max-w-xs flex-col gap-2">
          <TitleBtn onClick={() => void start(() => setScreen("name"))}>はじめる</TitleBtn>
          <TitleBtn disabled={!hasLast} onClick={() => void resume()}>
            つづきから
          </TitleBtn>
          <TitleBtn
            disabled={!hasSlots}
            onClick={() => {
              useGame.getState().setSaveMode("load");
              setScreen("saves");
            }}
          >
            セーブデータ
          </TitleBtn>
          <TitleBtn onClick={() => setScreen("gallery")}>
            思い出{endings.length ? `（${endings.length}）` : ""}
          </TitleBtn>
        </nav>
      </div>
    </div>
  );
}

function TitleBtn({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="rounded-sheet border border-gold/35 bg-navy/55 px-5 py-3 text-left font-serif text-paper backdrop-blur-sm transition hover:border-gold hover:bg-navy/70 disabled:cursor-not-allowed disabled:opacity-35"
    >
      {children}
    </button>
  );
}
