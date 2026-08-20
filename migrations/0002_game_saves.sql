-- Per-user visual-novel slots. user_id is Better Auth text id (not UUID).
-- slot 0–2 = manual pages; slot -1 = last-page autosave.
create table if not exists game_saves (
  user_id    text not null,
  slot       integer not null,
  updated_at timestamptz not null default now(),
  day_label  text not null,
  payload    jsonb not null,
  primary key (user_id, slot),
  constraint game_saves_slot_range check (slot >= -1 and slot <= 2)
);

create index if not exists game_saves_user_id_idx on game_saves (user_id);
