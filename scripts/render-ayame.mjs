import { chromium } from "playwright";
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "はじめる" }).click();
await page.getByRole("button", { name: "部室の扉を開ける" }).click();
for (let i = 0; i < 80; i++) {
  await page.keyboard.press("Enter");
  await page.waitForTimeout(18);
  const t = await page.locator("body").innerText();
  if (t.includes("紋匁しゆです")) {
    await page.waitForTimeout(80);
    await page.screenshot({ path: "/workspace/screenshots/ayame-ingame.png" });
    console.log("SHOT grin intro");
    break;
  }
}
await browser.close();
