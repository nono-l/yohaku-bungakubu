import { useEffect } from "react";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { useGame } from "./store";
import { playMusic, setMasterVolume } from "./audio";
import { TitleScreen } from "./screens/TitleScreen";
import { NameScreen } from "./screens/NameScreen";
import { NovelScreen } from "./screens/NovelScreen";
import { PoemScreen } from "./screens/PoemScreen";
import { SavesScreen } from "./screens/SavesScreen";
import { GalleryScreen } from "./screens/GalleryScreen";
import { CreditsScreen } from "./screens/CreditsScreen";
import { putCloudAutosave } from "./cloud-saves";
import { canCloudSave, dayLabelFromScene } from "./save";

export function GameApp() {
  const ready = useGame((s) => s.ready);
  const screen = useGame((s) => s.screen);
  const boot = useGame((s) => s.boot);
  const musicOn = useGame((s) => s.musicOn);
  const sceneId = useGame((s) => s.sceneId);
  const snapshot = useGame((s) => s.snapshot);
  const { user, isPending } = useCurrentUserState();
  const cloud = canCloudSave(user);

  useEffect(() => {
    boot();
  }, [boot]);

  useEffect(() => {
    setMasterVolume(musicOn ? 0.85 : 0);
    if (!musicOn) playMusic("none");
  }, [musicOn]);

  useEffect(() => {
    if (!cloud || isPending) return;
    if (screen !== "novel" && screen !== "poem") return;
    const timer = window.setTimeout(() => {
      void putCloudAutosave({
        data: { dayLabel: dayLabelFromScene(sceneId), persist: snapshot() },
      }).catch(() => {
        /* local last-page still holds */
      });
    }, 1800);
    return () => window.clearTimeout(timer);
  }, [cloud, isPending, screen, sceneId, snapshot]);

  if (!ready || screen === "boot") {
    return (
      <div className="grid min-h-dvh place-items-center bg-navy">
        <p className="font-serif tracking-[0.4em] text-gold-soft">MARGINS</p>
      </div>
    );
  }

  if (screen === "title") return <TitleScreen />;
  if (screen === "name") return <NameScreen />;
  if (screen === "novel") return <NovelScreen />;
  if (screen === "poem") return <PoemScreen />;
  if (screen === "saves") return <SavesScreen />;
  if (screen === "gallery") return <GalleryScreen />;
  if (screen === "credits") return <CreditsScreen />;
  return <TitleScreen />;
}
