import { chromium } from "playwright";
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "はじめる" }).click();
await page.getByRole("button", { name: "部室の扉を開ける" }).click();
let shot = false;
for (let i = 0; i < 80; i++) {
  await page.keyboard.press("Enter");
  await page.waitForTimeout(20);
  const t = await page.locator("body").innerText();
  if (!shot && (t.includes("紋匁") || t.includes("伸び代"))) {
    await page.screenshot({ path: "/workspace/screenshots/ayame-intro.png" });
    console.log("INTRO", t.slice(0, 350).replaceAll("\n", " | "));
    shot = true;
  }
  if (t.includes("入部で")) {
    await page.screenshot({ path: "/workspace/screenshots/ayame-join.png" });
    console.log("JOIN has ayame?", t.includes("しゆ") || t.includes("扇"));
    break;
  }
}
await browser.close();
