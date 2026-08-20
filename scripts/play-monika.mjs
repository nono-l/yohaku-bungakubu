import { chromium } from "playwright";
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.on("pageerror", (e) => console.log("PAGEERROR", e.message));
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "はじめる" }).click();
await page.getByRole("button", { name: "部室の扉を開ける" }).click();

async function mash(n) {
  for (let i = 0; i < n; i++) {
    await page.keyboard.press("Enter");
    await page.waitForTimeout(18);
  }
}
async function poemMonika() {
  if (!(await page.getByText("十個で提出").count())) return false;
  // prefer monika-ish words
  const prefer = ["配信","おやつ","許可","怠惰","ここに","あなた","画面","ゲリラ","名札","寝落ち","ポジション","マイク","コメント","好きにして","外側"];
  let picked = 0;
  for (const w of prefer) {
    const b = page.getByRole("button", { name: w, exact: true });
    if (await b.count()) {
      await b.click();
      picked++;
      if (picked >= 10) break;
    }
  }
  const grid = page.locator("button").filter({ hasNotText: /戻す|提出/ });
  const n = await grid.count();
  for (let i = 0; i < n && picked < 10; i++) {
    const btn = grid.nth(i);
    if (await btn.isDisabled()) continue;
    await btn.click();
    picked++;
  }
  await page.getByRole("button", { name: /提出/ }).click();
  await page.waitForTimeout(250);
  return true;
}

await mash(90);
if (await page.getByRole("button", { name: /入部/ }).count()) {
  await page.getByRole("button", { name: /入部/ }).click();
}
await mash(20);
await poemMonika();
await mash(30);
await page.screenshot({ path: "/workspace/screenshots/monika-arrive.png" });
let body = await page.locator("body").innerText();
console.log("ARRIVE", body.slice(0, 280).replaceAll("\n", " | "));

// continue until hangout choices
for (let k = 0; k < 8; k++) {
  await mash(20);
  if (await page.getByRole("button", { name: /モニカの窓際/ }).count()) break;
  await poemMonika();
}
await page.screenshot({ path: "/workspace/screenshots/monika-choice.png" });
body = await page.locator("body").innerText();
console.log("CHOICE", body.slice(0, 350).replaceAll("\n", " | "));

if (await page.getByRole("button", { name: /モニカの窓際/ }).count()) {
  await page.getByRole("button", { name: /モニカの窓際/ }).click();
  await mash(16);
  await page.screenshot({ path: "/workspace/screenshots/monika-hangout.png" });
  console.log("HANG", (await page.locator("body").innerText()).slice(0, 350).replaceAll("\n", " | "));
}
await browser.close();
