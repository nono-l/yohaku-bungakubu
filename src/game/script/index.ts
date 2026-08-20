/**
 * Assembled script index.
 * Modular structure under ./script/
 */

import type { Scene } from "../types";
import { PROLOGUE_SCENES } from "./prologue";
import { DAY1_SCENES } from "./day1";
import { DAY2_SCENES } from "./day2";
import { DAY3_SCENES } from "./day3";
import { HINA_ROUTE } from "./routes/hina";
import { MEI_ROUTE } from "./routes/mei";
import { KOTO_ROUTE } from "./routes/koto";
import { REI_ROUTE } from "./routes/rei";
import { MONIKA_ROUTE } from "./routes/monika";
import { AYAME_ROUTE } from "./routes/ayame";
import { LUMINA_ROUTE } from "./routes/lumina";
import { TRUE_ROUTE } from "./routes/true";
import { AFTER_END_SCENES } from "./utils";

export const SCENES: Scene[] = [
  ...PROLOGUE_SCENES,
  ...DAY1_SCENES,
  ...DAY2_SCENES,
  ...DAY3_SCENES,
  ...HINA_ROUTE,
  ...MEI_ROUTE,
  ...KOTO_ROUTE,
  ...REI_ROUTE,
  ...MONIKA_ROUTE,
  ...AYAME_ROUTE,
  ...LUMINA_ROUTE,
  ...TRUE_ROUTE,
  ...AFTER_END_SCENES,
];

// Auto-link sequential scenes that have no explicit next/choices/poem/special
for (let i = 0; i < SCENES.length - 1; i += 1) {
  const s = SCENES[i];
  if (!s.next && !s.choices && s.poem == null && !s.special) {
    s.next = SCENES[i + 1].id;
  }
}

export const SCENE_MAP: Record<string, Scene> = Object.fromEntries(
  SCENES.map((s) => [s.id, s]),
);

export const FIRST_SCENE = "p1";

export {
  shareScene,
  pickRoute,
  endingIdFromScene,
  ENDING_INFO,
} from "./utils";
