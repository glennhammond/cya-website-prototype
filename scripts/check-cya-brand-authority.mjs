import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const sourceRoots = ["app", "components", "content", "lib"];
const sourceExtensions = new Set([".css", ".js", ".jsx", ".mjs", ".ts", ".tsx"]);

const approvedColours = new Set([
  "#0e434a", // deep teal
  "#17535b", // primary teal
  "#c99a3e", // signal ochre
  "#f7f6f1", // warm background
  "#ffffff", // white
  "#e7ece8", // green-grey
  "#e9e5d8", // surface/warm
  "#455154", // text/body
  "#b85b4d", // signal red
  "#222826", // charcoal
  "#8d8f8c", // mid neutral
  "#f2f0e9", // pale highlight
  "#955000", // approved accessible ochre text role
]);

const approvedFunctionalRgb = new Set([
  "14,67,74", // deep teal shadows
]);

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectFiles(target);
    return sourceExtensions.has(path.extname(entry.name)) ? [target] : [];
  }));
  return nested.flat();
}

const files = (await Promise.all(sourceRoots.map((directory) => collectFiles(path.join(root, directory))))).flat();
const failures = [];

for (const file of files) {
  const source = await readFile(file, "utf8");
  const relative = path.relative(root, file);
  const colours = source.match(/#[0-9a-f]{6}\b/gi) ?? [];

  for (const colour of colours) {
    if (!approvedColours.has(colour.toLowerCase())) {
      failures.push(`${relative}: unapproved colour ${colour}`);
    }
  }

  const functionalColours = source.matchAll(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/gi);
  for (const match of functionalColours) {
    const rgb = `${match[1]},${match[2]},${match[3]}`;
    if (!approvedFunctionalRgb.has(rgb)) failures.push(`${relative}: unapproved functional colour rgb(${rgb})`);
  }

  if (relative !== "components/SiteFooter.tsx") {
    const lines = source.split("\n");
    lines.forEach((line, index) => {
      const usesDeepTealSurface = line.includes("bg-teal-dark") || line.includes("bg-[var(--cya-teal-dark)]");
      const allowedInteraction = line.includes("hover:bg-teal-dark") || line.includes("hover:bg-[var(--cya-teal-dark)]");
      if (usesDeepTealSurface && !allowedInteraction) {
        failures.push(`${relative}:${index + 1}: deep-teal surface is reserved for the footer`);
      }
    });
  }

  if (source.includes('tone="teal"')) failures.push(`${relative}: legacy teal section tone is not permitted`);
  if (source.includes('style="ochre"')) failures.push(`${relative}: legacy ochre action treatment is not permitted`);
  if (source.includes("Plan with CYA")) failures.push(`${relative}: retired public CTA “Plan with CYA” is not permitted; use “Start planning”`);

  const incorrectlyCapitalisedYoga = source.match(/\b(?:workplace|studio|one|live|recurring|mixed|with|alongside|from|such as|join|comfortable with|Compare|including|Accessible|practical|CYA) Yoga\b/g) ?? [];
  for (const phrase of incorrectlyCapitalisedYoga) {
    failures.push(`${relative}: use sentence-case “yoga” in prose (${phrase})`);
  }
}

const home = await readFile(path.join(root, "app/page.tsx"), "utf8");
if (!/<h1[^>]*text-\[var\(--cya-teal\)\][^>]*>Work Wellness into Your Workday<\/h1>/.test(home)) {
  failures.push("app/page.tsx: the protected brand line must be the Primary Teal homepage hero H1");
}
if (home.includes("Useful wellbeing, built around real work.")) {
  failures.push("app/page.tsx: the removed supporting proposition must not appear in the homepage hero");
}
for (const required of [
  "Work Wellness into Your Workday",
  "From workplace yoga and Pilates to workshops, conferences, events and ongoing wellbeing programs",
  "Explore workplace wellbeing programs",
]) {
  if (!home.includes(required)) failures.push(`app/page.tsx: approved hero content missing: ${required}`);
}

const globals = await readFile(path.join(root, "app/globals.css"), "utf8");
for (const [token, value] of Object.entries({
  "--cya-surface-page": "#f7f6f1",
  "--cya-surface-base": "#ffffff",
  "--cya-surface-subtle": "#e7ece8",
  "--cya-surface-warm": "#e9e5d8",
  "--cya-text-primary": "#0e434a",
  "--cya-text-body": "#455154",
  "--cya-action-primary-bg": "#17535b",
})) {
  if (!globals.includes(`${token}: ${value};`)) failures.push(`app/globals.css: ${token} must resolve to ${value}`);
}

for (const heroFile of [
  "components/PageHero.tsx",
  "components/ProofPageHero.tsx",
  "components/StudioPageHero.tsx",
  "components/SpecialistServiceProduction.tsx",
  "components/CampaignContinuityPage.tsx",
  "components/ThankYouPage.tsx",
  "app/page.tsx",
  "app/about-us/page.tsx",
  "app/blog/page.tsx",
  "app/case-studies/page.tsx",
  "app/conferences-events/page.tsx",
  "app/contact/page.tsx",
  "app/movement/page.tsx",
  "app/online-wellbeing/page.tsx",
  "app/program-registration/page.tsx",
  "app/workplace-wellbeing-programs/page.tsx",
  "app/workplace-wellbeing-workshops/page.tsx",
]) {
  const source = await readFile(path.join(root, heroFile), "utf8");
  if (!source.includes("bg-[var(--cya-surface-page)]") && !source.includes("cya-page-hero")) {
    failures.push(`${heroFile}: page hero must use the surface/page token`);
  }
}

if (failures.length > 0) {
  console.error("CYA brand-authority QA failed:\n" + failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`CYA brand-authority QA passed (${files.length} source files checked).`);
