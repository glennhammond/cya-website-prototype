import type { PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const resourcesHero: PageIntro = {
  kicker: "Resources",
  heading: "Practical guidance for planning wellbeing at work.",
  body: "A small, governed set of tools and guides for people planning a session, a program or a conversation with their organisation — not a high-volume lifestyle blog.",
};

export const featuredResources: FeatureItem[] = [
  { title: "Wellbeing planning calendar", body: "A simple, seasonal starting point for planning moments across the year." },
  { title: "Manager-forwardable guide", body: "A short brief your manager or stakeholder can read before a decision." },
  { title: "Choosing a format", body: "How to match a need to a one-off session, a series or a program." },
  { title: "Preparing for a consultation", body: "What to have ready before your first conversation with CYA." },
];

export const closingCTA = {
  kicker: "Next step",
  heading: "Ready to talk it through?",
  body: "If a resource raises a question specific to your organisation, the next step is a short conversation.",
  cta: { label: "Book a wellbeing consultation", href: "/consultation", variant: "primary" as const },
};
