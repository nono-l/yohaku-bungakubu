import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { getSql } from "@/lib/db";
import type { GamePersist, SaveSlot } from "./types";
import { EMPTY_AFFECTION } from "./save";

const FEDERATED = ["grok-google", "grok-x"] as const;
const AUTOSAVE_SLOT = -1;

function asPersist(raw: unknown): GamePersist {
  const p = (raw ?? {}) as Partial<GamePersist>;
  return {
    playerName: String(p.playerName ?? "新人").slice(0, 40),
    sceneId: String(p.sceneId ?? "p1").slice(0, 80),
    affection: { ...EMPTY_AFFECTION, ...(p.affection ?? {}) },
    flags: Array.isArray(p.flags) ? p.flags.map(String) : [],
    seen: Array.isArray(p.seen) ? p.seen.map(String) : [],
    endings: Array.isArray(p.endings) ? p.endings.map(String) : [],
    poems: Array.isArray(p.poems) ? p.poems.map((row) => (Array.isArray(row) ? row.map(String) : [])) : [],
    history: Array.isArray(p.history)
      ? p.history.map((h) => ({ speaker: String(h?.speaker ?? ""), text: String(h?.text ?? "") }))
      : [],
  };
}

function toSlot(row: { slot: number; updated_at: string | Date; day_label: string; payload: unknown }): SaveSlot {
  const persist = asPersist(row.payload);
  return {
    slot: row.slot,
    updatedAt: new Date(row.updated_at).getTime() || Date.now(),
    dayLabel: String(row.day_label ?? ""),
    ...persist,
  };
}

async function assertFederated(userId: string) {
  if (!userId || userId === "dev-user") {
    throw new Error("ID連携が必要です");
  }
  const sql = await getSql();
  const rows = await sql<{ ok: number }>`
    select 1 as ok from account
    where "userId" = ${userId}
      and "providerId" in (${FEDERATED[0]}, ${FEDERATED[1]})
    limit 1
  `;
  if (!rows.length) throw new Error("ID連携が必要です");
  return sql;
}

type SaveRow = {
  slot: number;
  updated_at: string | Date;
  day_label: string;
  payload: unknown;
};

export const listCloudSaves = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const sql = await assertFederated(context.userId);
    const rows = await sql<SaveRow>`
      select slot, updated_at, day_label, payload
      from game_saves
      where user_id = ${context.userId} and slot >= 0
      order by slot
    `;
    const bySlot: (SaveSlot | null)[] = [null, null, null];
    for (const row of rows) {
      if (row.slot >= 0 && row.slot <= 2) bySlot[row.slot] = toSlot(row);
    }
    return bySlot;
  });

export const writeCloudSave = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((data: { slot: number; dayLabel: string; persist: GamePersist }) => {
    if (!Number.isInteger(data.slot) || data.slot < 0 || data.slot > 2) {
      throw new Error("invalid slot");
    }
    const json = JSON.stringify(data.persist ?? {});
    if (json.length > 180_000) throw new Error("save too large");
    return {
      slot: data.slot,
      dayLabel: String(data.dayLabel ?? "").slice(0, 40),
      persist: asPersist(data.persist),
    };
  })
  .handler(async ({ context, data }) => {
    const sql = await assertFederated(context.userId);
    const payload = JSON.stringify(data.persist);
    await sql`
      insert into game_saves (user_id, slot, updated_at, day_label, payload)
      values (${context.userId}, ${data.slot}, now(), ${data.dayLabel}, ${payload}::jsonb)
      on conflict (user_id, slot) do update set
        updated_at = now(),
        day_label = excluded.day_label,
        payload = excluded.payload
    `;
    return { ok: true as const };
  });

export const clearCloudSave = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((slot: number) => {
    if (!Number.isInteger(slot) || slot < 0 || slot > 2) throw new Error("invalid slot");
    return slot;
  })
  .handler(async ({ context, data: slot }) => {
    const sql = await assertFederated(context.userId);
    await sql`delete from game_saves where user_id = ${context.userId} and slot = ${slot}`;
    return { ok: true as const };
  });

export const getCloudAutosave = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const sql = await assertFederated(context.userId);
    const rows = await sql<SaveRow>`
      select slot, updated_at, day_label, payload
      from game_saves
      where user_id = ${context.userId} and slot = ${AUTOSAVE_SLOT}
      limit 1
    `;
    return rows[0] ? toSlot(rows[0]) : null;
  });

export const putCloudAutosave = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((data: { dayLabel: string; persist: GamePersist }) => {
    const json = JSON.stringify(data.persist ?? {});
    if (json.length > 180_000) throw new Error("save too large");
    return {
      dayLabel: String(data.dayLabel ?? "").slice(0, 40),
      persist: asPersist(data.persist),
    };
  })
  .handler(async ({ context, data }) => {
    const sql = await assertFederated(context.userId);
    const payload = JSON.stringify(data.persist);
    await sql`
      insert into game_saves (user_id, slot, updated_at, day_label, payload)
      values (${context.userId}, ${AUTOSAVE_SLOT}, now(), ${data.dayLabel}, ${payload}::jsonb)
      on conflict (user_id, slot) do update set
        updated_at = now(),
        day_label = excluded.day_label,
        payload = excluded.payload
    `;
    return { ok: true as const };
  });
