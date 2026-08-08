import type { PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const movementHero: PageIntro = {
  kicker: "Movement",
  heading: "Useful movement, adapted to real workplaces.",
  body: "Yoga, Pilates, mobility and desk movement don't require prior experience, a studio setting or a particular body type. CYA designs each session around the audience, environment and time available.",
  actions: [
    { label: "Discuss a movement session", href: "/consultation?interest=one-off", variant: "primary" },
    { label: "Explore mindfulness and workshops", href: "/workplace-wellbeing", variant: "secondary" },
  ],
  meta: ["Individual or group", "Onsite or online", "From 15 minutes"],
};

export const whoItsFor = {
  kicker: "Who it's for",
  heading: "Teams who never expected to try this at work.",
  body: "CYA works with people who sit for long stretches, travel frequently, stand on their feet all day, or simply want a practical reset between meetings. No mat experience, uniform or particular level of ability is assumed.",
};

export const usefulFormats: FeatureItem[] = [
  { title: "One-off session", body: "A single, complete session for a team, floor or occasion." },
  { title: "Short series", body: "A focused run of sessions building familiarity over a few weeks." },
  { title: "Recurring class", body: "A regular class that becomes part of the working week." },
  { title: "Desk-based movement", body: "Short, seated or standing sequences that fit between meetings." },
];

export const whatToExpect: FeatureItem[] = [
  { title: "Clear, practical instruction", body: "Facilitators explain options rather than assuming a starting level." },
  { title: "Modified options throughout", body: "Every sequence includes an easier and a more challenging variation." },
  { title: "Work clothes welcome", body: "Sessions are designed to work in a shirt and trousers, not just activewear." },
  { title: "A realistic time frame", body: "Sessions are scoped to the time genuinely available, from 15 minutes up." },
];

export const inclusionFeature = {
  kicker: "Inclusion and workplace adaptation",
  heading: "Designed for varied bodies, roles and confidence levels.",
  body: "CYA does not assume flexibility, fitness or prior practice. Facilitators offer modifications as a normal part of every session, and formats adapt to boardrooms, warehouses, desks and shared community spaces alike.",
};

export const deliveryOptions: FeatureItem[] = [
  { title: "Onsite", body: "Delivered at your workplace, adapted to the space available." },
  { title: "Online", body: "Delivered remotely for distributed or multi-location teams." },
  { title: "Multi-location", body: "Coordinated scheduling across several sites." },
];

export const relatedUseCases: FeatureItem[] = [
  { title: "Awareness-day activation", body: "A focused movement moment tied to a specific campaign or day." },
  { title: "Conference activation", body: "A short movement break integrated into an event agenda.", href: "/conferences-events", cta: "Explore conferences and events" },
  { title: "Part of a broader program", body: "Movement combined with mindfulness, workshops and Wellbeing Studio.", href: "/programs", cta: "Explore programs" },
];

export const closingCTA = {
  kicker: "Next step",
  heading: "Ready to discuss a movement session?",
  body: "Tell us about your team, space and timing, and CYA will recommend a suitable format.",
  cta: { label: "Discuss a movement session", href: "/consultation?interest=one-off", variant: "primary" as const },
};
