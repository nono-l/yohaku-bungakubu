export type CharId = "rei" | "hina" | "mei" | "koto" | "monika" | "ayame" | "lumina";
export type SpriteId = CharId;

export type Expression = "idle" | "smile" | "serious" | "shy" | "grin";

export type BackgroundId = "title" | "hall" | "club" | "court" | "night";

export type MusicId = "title" | "club" | "poem" | "dusk" | "margin" | "none";

export type ScreenId =
  | "boot"
  | "title"
  | "name"
  | "novel"
  | "poem"
  | "menu"
  | "saves"
  | "gallery"
  | "credits";

export type Affection = Record<CharId, number>;

export type Choice = {
  text: string;
  next: string;
  affection?: Partial<Affection>;
  flag?: string;
};

export type Scene = {
  id: string;
  bg?: BackgroundId;
  music?: MusicId;
  speaker?: string;
  speakerId?: SpriteId | "narrator" | "player";
  text: string;
  sprites?: Partial<Record<SpriteId, Expression | "hide">>;
  focus?: SpriteId;
  next?: string;
  choices?: Choice[];
  poem?: 0 | 1 | 2;
  special?: "route" | "ending" | "credits";
};

export type HistoryLine = {
  speaker: string;
  text: string;
};

export type SaveSlot = {
  slot: number;
  updatedAt: number;
  playerName: string;
  sceneId: string;
  dayLabel: string;
  affection: Affection;
  flags: string[];
  seen: string[];
  endings: string[];
  poems: string[][];
  history: HistoryLine[];
};

export type GamePersist = {
  playerName: string;
  sceneId: string;
  affection: Affection;
  flags: string[];
  seen: string[];
  endings: string[];
  poems: string[][];
  history: HistoryLine[];
};
