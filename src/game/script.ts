/**
 * Compatibility shim.
 * The full script lives under ./script/ — keep this file so existing
 * `from "./script"` imports resolve here (script.ts wins over script/index.ts).
 */
export {
  SCENES,
  SCENE_MAP,
  FIRST_SCENE,
  shareScene,
  pickRoute,
  endingIdFromScene,
  ENDING_INFO,
} from "./script/index";
export type { Scene } from "./types";
