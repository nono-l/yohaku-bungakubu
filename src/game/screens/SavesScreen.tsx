import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { clearCloudSave, listCloudSaves, writeCloudSave } from "../cloud-saves";
import {
  canCloudSave,
  clearSlot,
  dayLabelFromScene,
  formatSavedAt,
  loadSlots,
  toSlot,
  writeSlot,
} from "../save";
import { useGame } from "../store";
import type { SaveSlot } from "../types";

export function SavesScreen() {
  const mode = useGame((s) => s.saveMode);
  const snapshot = useGame((s) => s.snapshot);
  const applySave = useGame((s) => s.applySave);
  const setScreen = useGame((s) => s.setScreen);
  const sceneId = useGame((s) => s.sceneId);
  const { user, isPending } = useCurrentUserState();
  const cloud = canCloudSave(user);
  const [slots, setSlots] = useState<(SaveSlot | null)[]>([null, null, null]);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (isPending) return;
    let cancelled = false;
    setNotice(null);
    if (!cloud) {
      setSlots(loadSlots());
      return;
    }
    void listCloudSaves()
      .then((rows) => {
        if (!cancelled) setSlots(rows);
      })
      .catch(() => {
        if (!cancelled) {
          setSlots(loadSlots());
          setNotice("クラウドに届かなかったので、この端末の頁を開いています。");
        }
      });
    return () => {
      cancelled = true;
    };
  }, [cloud, isPending]);

  async function saveTo(index: number) {
    const next = toSlot(snapshot(), index, dayLabelFromScene(sceneId));
    writeSlot(next);
    if (cloud) {
      setBusy(true);
      setNotice(null);
      try {
        await writeCloudSave({
          data: { slot: index, dayLabel: next.dayLabel, persist: snapshot() },
        });
      } catch (err) {
        setNotice(err instanceof Error && err.message === "ID連携が必要です"
          ? "クラウド保存は Google / X 連携のときだけです。"
          : "クラウド保存に失敗しました。この端末には残しています。");
        setSlots(loadSlots());
        setBusy(false);
        return;
      }
      setBusy(false);
    }
    setSlots(cloud ? (await listCloudSaves().catch(loadSlots)) : loadSlots());
  }

  async function remove(index: number) {
    clearSlot(index);
    if (cloud) {
      setBusy(true);
      try {
        await clearCloudSave({ data: index });
      } catch {
        setNotice("クラウドの削除に失敗しました。");
      }
      setBusy(false);
      setSlots(await listCloudSaves().catch(loadSlots));
      return;
    }
    setSlots(loadSlots());
  }

  return (
    <div className="relative min-h-dvh bg-navy">
      <img src="/game/bg/title.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-30" />
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-lg flex-col px-5 py-10">
        <p className="font-serif text-xs tracking-[0.35em] text-gold">
          {mode === "save" ? "WRITE IN THE MARGIN" : "OPEN A SAVED PAGE"}
        </p>
        <h1 className="mt-1 font-serif text-3xl text-paper">{mode === "save" ? "セーブ" : "ロード"}</h1>
        <p className="mt-2 font-serif text-xs text-gold-soft">
          {isPending
            ? "記録の場所を確認しています…"
            : cloud
              ? "クラウド（Google / X）— 端末を越えて残ります"
              : "この端末だけ — ID連携するとクラウドに残せます"}
        </p>
        {!cloud && !isPending ? (
          <Link to="/login" className="mt-2 font-serif text-xs text-gold underline-offset-4 hover:underline">
            Google / X でサインイン
          </Link>
        ) : null}
        {notice ? <p className="mt-3 font-serif text-xs text-gold-soft">{notice}</p> : null}
        <div className="mt-6 space-y-3">
          {slots.map((slot, i) => (
            <div key={i} className="rounded-sheet border border-gold/25 bg-paper/95 p-4 text-ink">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-serif text-xs text-indigo">スロット {i + 1}</p>
                  {slot ? (
                    <>
                      <p className="font-serif text-lg">{slot.playerName} / {slot.dayLabel}</p>
                      <p className="text-xs text-ink-soft">{formatSavedAt(slot.updatedAt)}</p>
                    </>
                  ) : (
                    <p className="font-serif text-lg text-ink-soft">空の頁</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  {mode === "save" ? (
                    <button
                      type="button"
                      disabled={busy}
                      className="rounded-sheet bg-navy px-3 py-1.5 font-serif text-xs text-paper disabled:opacity-40"
                      onClick={() => void saveTo(i)}
                    >
                      上書き
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={!slot || busy}
                      className="rounded-sheet bg-navy px-3 py-1.5 font-serif text-xs text-paper disabled:opacity-40"
                      onClick={() => slot && applySave(slot)}
                    >
                      開く
                    </button>
                  )}
                  {slot ? (
                    <button
                      type="button"
                      disabled={busy}
                      className="rounded-sheet border border-ink/15 px-3 py-1.5 font-serif text-xs disabled:opacity-40"
                      onClick={() => void remove(i)}
                    >
                      消す
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setScreen(useGame.getState().cameFrom === "saves" ? "title" : useGame.getState().cameFrom)}
          className="mt-8 rounded-sheet border border-paper/30 px-4 py-3 font-serif text-paper"
        >
          戻る
        </button>
      </div>
    </div>
  );
}
