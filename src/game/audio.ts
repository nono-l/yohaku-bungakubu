import type { MusicId } from "./types";

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let musicGain: GainNode | null = null;
let current: MusicId = "none";
let timer: number | null = null;
let step = 0;

function ac(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.22;
    master.connect(ctx.destination);
    musicGain = ctx.createGain();
    musicGain.gain.value = 0.85;
    musicGain.connect(master);
  }
  return ctx;
}

export async function unlockAudio() {
  const c = ac();
  if (c && c.state === "suspended") await c.resume();
}

function tone(freq: number, time: number, dur: number, type: OscillatorType, gain = 0.08) {
  if (!ctx || !musicGain) return;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, time);
  g.gain.setValueAtTime(0.0001, time);
  g.gain.exponentialRampToValueAtTime(gain, time + 0.04);
  g.gain.exponentialRampToValueAtTime(0.0001, time + dur);
  osc.connect(g);
  g.connect(musicGain);
  osc.start(time);
  osc.stop(time + dur + 0.02);
}

const SCALES: Record<Exclude<MusicId, "none">, number[]> = {
  title: [261.63, 293.66, 349.23, 392.0, 440.0, 523.25],
  club: [293.66, 329.63, 392.0, 440.0, 523.25, 587.33],
  poem: [349.23, 392.0, 440.0, 523.25, 587.33],
  dusk: [220.0, 261.63, 293.66, 349.23, 392.0],
  margin: [233.08, 277.18, 311.13, 369.99, 415.3],
};

function pattern(id: Exclude<MusicId, "none">): number[] {
  const s = SCALES[id];
  if (id === "title") return [s[0], s[2], s[4], s[2], s[5], 0, s[3], s[1]];
  if (id === "club") return [s[0], s[1], s[3], s[2], s[4], s[3], s[5], s[1]];
  if (id === "poem") return [s[0], s[2], s[1], s[3], s[0], s[4], s[2], s[1]];
  if (id === "dusk") return [s[0], 0, s[2], s[1], 0, s[4], s[3], s[0]];
  return [s[4], s[1], s[3], 0, s[0], s[2], s[4], s[1]];
}

function tick() {
  if (!ctx || current === "none") return;
  const notes = pattern(current);
  const now = ctx.currentTime;
  const note = notes[step % notes.length];
  if (note) {
    const type: OscillatorType = current === "margin" ? "triangle" : current === "poem" ? "square" : "sine";
    const g = current === "poem" ? 0.035 : 0.055;
    tone(note, now, current === "dusk" ? 1.6 : 1.15, type, g);
    if (current === "club" || current === "title") {
      tone(note / 2, now, 1.8, "triangle", 0.03);
    }
  }
  step += 1;
}

export function playMusic(id: MusicId) {
  if (id === current) return;
  current = id;
  if (timer != null) {
    window.clearInterval(timer);
    timer = null;
  }
  if (id === "none") return;
  void unlockAudio();
  step = 0;
  tick();
  timer = window.setInterval(tick, id === "poem" ? 420 : 720);
}

export function setMasterVolume(v: number) {
  if (master && ctx) {
    master.gain.setTargetAtTime(Math.max(0, Math.min(1, v)) * 0.28, ctx.currentTime, 0.05);
  }
}

export function playPage() {
  const c = ac();
  if (!c || !master) return;
  const now = c.currentTime;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(880, now);
  osc.frequency.exponentialRampToValueAtTime(420, now + 0.08);
  g.gain.setValueAtTime(0.04, now);
  g.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);
  osc.connect(g);
  g.connect(master);
  osc.start(now);
  osc.stop(now + 0.12);
}

export function playWord() {
  const c = ac();
  if (!c || !master) return;
  const now = c.currentTime;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(660 + Math.random() * 80, now);
  g.gain.setValueAtTime(0.05, now);
  g.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
  osc.connect(g);
  g.connect(master);
  osc.start(now);
  osc.stop(now + 0.16);
}
