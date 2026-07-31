import type { OfferLevel, PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const programsHero: PageIntro = {
  kicker: "Workplace wellbeing programs",
  heading: "Connect useful moments into a rhythm your organisation can sustain.",
  body: "Begin with a short series, coordinate several wellbeing elements across a defined period, or plan an organised year of support.",
  actions: [
    { label: "Plan a program", href: "/consultation?interest=recurring", variant: "primary" },
    { label: "Start with one session", href: "/workplace-wellbeing", variant: "secondary" },
  ],
};

export const whyContinuity = {
  kicker: "Why continuity can help",
  heading: "Familiar support is easier to sustain than a single event.",
  body: "A single session proves the format works. Continuity is what makes wellbeing feel like part of how your organisation operates, rather than an occasional add-on — useful when it's useful, never a requirement.",
};

export const programLevels: OfferLevel[] = [
  {
    title: "Recurring rhythm",
    description: "Practical support delivered often enough to become familiar, accessible and easier to sustain.",
    proofNeed: "Repeat participation, operational reliability and renewal.",
  },
  {
    title: "Connected program",
    description: "A coordinated mix of live, digital and learning elements designed around people, locations and priorities.",
    proofNeed: "Program logic, client contribution, coordination and evidence.",
  },
  {
    title: "Organised year",
    description: "Planning, delivery and continuity across the year without a fixed package or compulsory commitment.",
    proofNeed: "Multi-location capability, governance, review and long-term partnership.",
  },
];

export const whatCyaCoordinates: FeatureItem[] = [
  { title: "Planning", body: "Shaping a calendar of moments around your priorities and dates." },
  { title: "Facilitator coordination", body: "Matching facilitators to locations, formats and availability." },
  { title: "Communications support", body: "Practical materials to help your team promote participation." },
  { title: "National delivery", body: "Coordinated scheduling across multiple sites and states." },
  { title: "Wellbeing Studio integration", body: "Connecting live moments to ongoing digital access." },
  { title: "Review and reporting", body: "Aggregate, privacy-safe visibility into participation and delivery." },
];

export const governanceFeature: FeatureItem[] = [
  { title: "A named point of contact", body: "One CYA contact coordinating delivery on your behalf." },
  { title: "Confirmed facilitator standards", body: "Facilitators matched against location, discipline and availability." },
  { title: "Regular review points", body: "Scheduled check-ins to adjust the plan as priorities change." },
  { title: "Privacy-safe reporting", body: "Aggregate participation visibility, never individual activity." },
];

export const multiSiteFeature = {
  kicker: "Multi-site support",
  heading: "One coordinated plan across several locations.",
  body: "CYA's national facilitator network supports organisations delivering the same program across multiple sites, with delivery confirmed against real local capacity rather than a blanket promise of coverage.",
};

export const investmentFactors: FeatureItem[] = [
  { title: "Workforce size", body: "The number of people the program needs to reach." },
  { title: "Locations", body: "How many sites, and how geographically spread they are." },
  { title: "Delivery mode", body: "Onsite, online or a mix, depending on your teams." },
  { title: "Frequency", body: "How often sessions or elements repeat across the period." },
  { title: "Preparation", body: "Planning, communications and coordination effort involved." },
  { title: "Reporting", body: "The level of aggregate visibility your organisation needs." },
];

export const closingCTA = {
  kicker: "Next step",
  heading: "Plan the level of continuity that fits.",
  body: "The first conversation can start with a short series or a broader organised year — whichever is useful now.",
  cta: { label: "Plan a wellbeing program", href: "/consultation?interest=recurring", variant: "primary" as const },
};
