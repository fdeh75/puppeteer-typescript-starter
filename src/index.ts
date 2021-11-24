import * as puppeteer from "puppeteer";

const BROWSER_LAUNCH_MODE = process.env?.BROWSER_LAUNCH_MODE === "PRODUCTION" ? "PRODUCTION" : "DEVELOPMENT";
const browser_launch_options = BROWSER_LAUNCH_MODE === "PRODUCTION" ?
  {executablePath: "/usr/bin/chromium-browser", args: ["--no-sandbox", "--disable-gpu"] } : {headless: false};


(async () => {

  const browser = await puppeteer.launch(browser_launch_options);
  const page = await browser.newPage();
  await page.goto("https://www.google.com/");
  await page.waitForTimeout(1000);
  await page.screenshot({path: "example.png"});
  await browser.close();
})();

