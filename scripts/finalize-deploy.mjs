#!/usr/bin/env node
/**
 * Always finish the Vercel output as a static site.
 *
 * The Grok uploader has been returning "internal error" on this project's
 * Nitro serverless function (PGLite WASM + `[...]` chunk names). The visual
 * novel is client-only, so we prerender `/` and drop the function.
 */
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = join(process.cwd(), ".vercel/output");
const FUNC = join(ROOT, "functions/__server.func");
const STATIC = join(ROOT, "static");

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchHtml(url) {
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 8000);
  try {
    const res = await fetch(url, { signal: ac.signal });
    if (!res.ok) throw new Error(`${url} -> ${res.status}`);
    return Buffer.from(await res.arrayBuffer());
  } finally {
    clearTimeout(t);
  }
}

async function htmlFromPreview() {
  for (const url of ["http://127.0.0.1:8081/", "http://127.0.0.1:8099/"]) {
    try {
      const buf = await fetchHtml(url);
      if (buf.includes(Buffer.from("</html>"))) return buf;
    } catch {
      /* try next */
    }
  }
  return null;
}

async function htmlFromSrvx() {
  if (!existsSync(FUNC)) return null;
  const child = spawn(
    "npx",
    ["srvx", "--static", STATIC, FUNC + "/index.mjs"],
    {
      cwd: ROOT,
      env: { ...process.env, PORT: "8099", HOST: "127.0.0.1" },
      stdio: "ignore",
      detached: true,
    },
  );
  child.unref();
  try {
    for (let i = 0; i < 20; i++) {
      await wait(250);
      try {
        const buf = await fetchHtml("http://127.0.0.1:8099/");
        if (buf.includes(Buffer.from("</html>"))) return buf;
      } catch {
        /* not up yet */
      }
    }
  } finally {
    try {
      process.kill(-child.pid, "SIGTERM");
    } catch {
      try {
        child.kill("SIGTERM");
      } catch {
        /* ignore */
      }
    }
  }
  return null;
}

async function htmlFallback() {
  const names = existsSync(join(STATIC, "assets"))
    ? await readdir(join(STATIC, "assets"))
    : [];
  const css = names.find((n) => n.startsWith("styles-") && n.endsWith(".css")) ?? "";
  const indexJs = names.find((n) => n.startsWith("index-") && n.endsWith(".js")) ?? "";
  const clientJs = names.find((n) => n.startsWith("client-") && n.endsWith(".js")) ?? "";
  const routesJs = names.find((n) => n.startsWith("routes-") && n.endsWith(".js")) ?? "";
  const html = `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>余白の文芸部</title>
    <meta name="theme-color" content="#1c2030" />
    <meta name="description" content="放課後の古い部室で、詩と余白を書くビジュアルノベル。" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    ${css ? `<link rel="stylesheet" href="/assets/${css}" />` : ""}
    ${indexJs ? `<link rel="modulepreload" href="/assets/${indexJs}" />` : ""}
    ${routesJs ? `<link rel="modulepreload" href="/assets/${routesJs}" />` : ""}
    ${clientJs ? `<link rel="modulepreload" href="/assets/${clientJs}" />` : ""}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700&family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap" />
  </head>
  <body class="font-sans bg-navy text-paper">
    <div id="root"></div>
    ${indexJs ? `<script type="module" src="/assets/${indexJs}"></script>` : ""}
  </body>
</html>
`;
  return Buffer.from(html);
}

async function main() {
  if (!existsSync(ROOT)) {
    console.error("[deploy] missing .vercel/output");
    process.exit(1);
  }

  let html = await htmlFromPreview();
  if (!html) html = await htmlFromSrvx();
  if (!html) {
    console.warn("[deploy] preview unavailable — writing fallback index");
    html = await htmlFallback();
  } else {
    console.log("[deploy] captured prerender", html.length, "bytes");
  }

  await writeFile(join(STATIC, "index.html"), html);
  await writeFile(join(STATIC, "404.html"), html);

  if (existsSync(join(ROOT, "functions"))) {
    await rm(join(ROOT, "functions"), { recursive: true, force: true });
    console.log("[deploy] removed serverless functions");
  }

  const config = {
    version: 3,
    routes: [
      {
        src: "/assets/(.*)",
        headers: { "cache-control": "public, max-age=31536000, immutable" },
      },
      { handle: "filesystem" },
      { src: "/(.*)", dest: "/index.html" },
    ],
  };
  await writeFile(join(ROOT, "config.json"), JSON.stringify(config, null, 2));

  const nitro = {
    date: new Date().toISOString(),
    preset: "static",
    publicDir: "static",
    commands: { preview: "npx srvx --static ./static" },
  };
  await writeFile(join(ROOT, "nitro.json"), JSON.stringify(nitro, null, 2));

  const files = existsSync(STATIC) ? await readdir(STATIC) : [];
  console.log("[deploy] static-only ready:", files.join(", "));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
