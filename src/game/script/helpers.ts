import type { Scene, SpriteId } from "../types";

/** Narration helper */
export const n = (
  id: string,
  text: string,
  extra: Partial<Scene> = {},
): Scene => ({
  id,
  speaker: extra.speaker ?? "",
  speakerId: extra.speakerId ?? "narrator",
  text,
  ...extra,
});

/** Character dialogue helper */
export const say = (
  id: string,
  who: SpriteId,
  name: string,
  text: string,
  extra: Partial<Scene> = {},
): Scene => ({
  id,
  speaker: name,
  speakerId: who,
  text,
  focus: extra.focus ?? who,
  ...extra,
});
