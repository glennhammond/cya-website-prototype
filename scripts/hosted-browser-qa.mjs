import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.VERCEL_PREVIEW_URL;
const bypassSecret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

if (!baseUrl) throw new Error("VERCEL_PREVIEW_URL is required");
if (!bypassSecret) throw new Error("VERCEL_AUTOMATION_BYPASS_SECRET is required");

const outputDir = path.resolve("artifacts/hosted-browser-qa");
await fs.mkdir(outputDir, { recursive: true });

const routes = [
  { path: "/", name: "home" },
  { path: "/workplace-wellbeing-programs", name: "programs" },
  { path: "/workplace-wellbeing-workshops", name: "workshops" },
];

const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "tablet", width: 1024, height: 1100 },
  { name: "mobile390", width: 390, height: 844 },
  { name: "mobile320", width: 320, height: 800 },
];

const failures = [];
const results = [];

function fail(message) {
  failures.push(message);
  console.error(`FAIL: ${message}`);
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

const browser = await chromium.launch({ headless: true });

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      reducedMotion: "reduce",
      extraHTTPHeaders: {
        "x-vercel-protection-bypass": bypassSecret,
        "x-vercel-set-bypass-cookie": "true",
      },
    });

    for (const route of routes) {
      const page = await context.newPage();
      const url = new URL(route.path, baseUrl).toString();
      const label = `${route.name}/${viewport.name}`;

      const response = await page.goto(url, { waitUntil: "networkidle", timeout: 45_000 });
      const status = response?.status() ?? 0;
      if (status >= 200 && status < 400) pass(`${label} HTTP ${status}`);
      else fail(`${label} HTTP status ${status}`);

      const title = await page.title();
      if (title.trim()) pass(`${label} document title present`);
      else fail(`${label} document title missing`);

      const h1Count = await page.locator("h1").count();
      if (h1Count === 1) pass(`${label} exactly one H1`);
      else fail(`${label} expected one H1, found ${h1Count}`);

      const overflow = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        scroll: document.documentElement.scrollWidth,
      }));
      if (overflow.scroll <= overflow.viewport + 1) pass(`${label} no horizontal overflow`);
      else fail(`${label} horizontal overflow ${overflow.scroll}px > ${overflow.viewport}px`);

      const brokenImages = await page.locator("img").evaluateAll((images) =>
        images
          .filter((img) => !img.complete || img.naturalWidth === 0)
          .map((img) => img.getAttribute("src") || "[unknown image]"),
      );
      if (brokenImages.length === 0) pass(`${label} images loaded`);
      else fail(`${label} broken images: ${brokenImages.join(", ")}`);

      const interactiveCount = await page.locator('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), summary').count();
      if (interactiveCount > 0) {
        await page.keyboard.press("Tab");
        const focusState = await page.evaluate(() => {
          const el = document.activeElement;
          if (!el || el === document.body) return null;
          return {
            tag: el.tagName,
            text: (el.textContent || "").trim().slice(0, 80),
            href: el instanceof HTMLAnchorElement ? el.getAttribute("href") : null,
          };
        });
        if (focusState) pass(`${label} keyboard focus enters interactive content`);
        else fail(`${label} Tab did not move focus into interactive content`);
      }

      const landmarks = await page.evaluate(() => ({
        main: document.querySelectorAll("main").length,
        nav: document.querySelectorAll("nav").length,
        header: document.querySelectorAll("header").length,
        footer: document.querySelectorAll("footer").length,
      }));
      if (landmarks.main === 1) pass(`${label} one main landmark`);
      else fail(`${label} expected one main landmark, found ${landmarks.main}`);

      await page.screenshot({
        path: path.join(outputDir, `${route.name}-${viewport.name}.png`),
        fullPage: true,
      });

      results.push({ label, status, title, h1Count, overflow, brokenImages, landmarks });
      await page.close();
    }

    await context.close();
  }

  // Reduced-motion equivalence smoke at the current Homepage.
  const reducedContext = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
    extraHTTPHeaders: {
      "x-vercel-protection-bypass": bypassSecret,
      "x-vercel-set-bypass-cookie": "true",
    },
  });
  const reducedPage = await reducedContext.newPage();
  await reducedPage.goto(new URL("/", baseUrl).toString(), { waitUntil: "networkidle", timeout: 45_000 });
  const reducedMotionMatches = await reducedPage.evaluate(() => matchMedia("(prefers-reduced-motion: reduce)").matches);
  if (reducedMotionMatches) pass("Homepage reduced-motion media query is active in QA context");
  else fail("Homepage reduced-motion QA context not detected");
  await reducedPage.screenshot({ path: path.join(outputDir, "home-desktop-reduced-motion.png"), fullPage: true });
  await reducedContext.close();

  await fs.writeFile(
    path.join(outputDir, "results.json"),
    JSON.stringify({ baseUrl, generatedAt: new Date().toISOString(), failures, results }, null, 2),
  );
} finally {
  await browser.close();
}

if (failures.length) {
  console.error(`\nHosted browser QA failed with ${failures.length} issue(s).`);
  for (const item of failures) console.error(`- ${item}`);
  process.exit(1);
}

console.log("\nHosted browser QA passed for Home, Programs and Workshops across desktop, tablet, 390px and 320px viewports.");
