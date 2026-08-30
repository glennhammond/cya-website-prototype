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
  "#e9e4d9", // warm neutral
  "#b85b4d", // signal red
  "#222826", // charcoal
  "#8d8f8c", // mid neutral
  "#f2f0e9", // pale highlight
  "#955000", // approved accessible ochre text role
  "#a35a00", // approved rare-action ochre role
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
  "From corporate yoga and Pilates to workshops, campaign moments and recurring wellbeing",
  "Explore workplace wellbeing programs",
]) {
  if (!home.includes(required)) failures.push(`app/page.tsx: approved hero content missing: ${required}`);
}

if (failures.length > 0) {
  console.error("CYA brand-authority QA failed:\n" + failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`CYA brand-authority QA passed (${files.length} source files checked).`);
