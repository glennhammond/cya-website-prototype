import type { OfferLevel, PageIntro, PathwayCard, YearMonthEntry } from "@/lib/types";

export const homeHero: PageIntro = {
  kicker: "One-off sessions and ongoing workplace wellbeing programs",
  heading: "Start with one useful moment—or build a connected year.",
  body: "Book a one-off movement, mindfulness, workshop or conference session. When you are ready to create greater continuity, CYA can bring those moments together through recurring programs and Wellbeing Studio.",
  actions: [
    { label: "Book a wellbeing consultation", href: "/consultation", variant: "primary" },
    { label: "Explore one-off sessions", href: "/workplace-wellbeing", variant: "secondary" },
  ],
};

export const pathwayHeading = {
  kicker: "Choose how to begin",
  heading: "Start with what is useful now.",
  body: "Choose a focused session, support a conference, establish a recurring rhythm or plan something broader. There is no required starting point.",
};

export const pathwayCards: PathwayCard[] = [
  {
    title: "Plan one useful session",
    description: "Book a single movement, mindfulness or workshop session for a team, an awareness day or a specific moment.",
    href: "/workplace-wellbeing",
    cta: "Explore workplace wellbeing",
  },
  {
    title: "Support a conference or event",
    description: "Integrate short activations, movement breaks or a wellbeing stream into an agenda without disrupting it.",
    href: "/conferences-events",
    cta: "Explore conferences and events",
  },
  {
    title: "Create a recurring wellbeing rhythm",
    description: "Repeat what works so support becomes familiar, accessible and easier to sustain.",
    href: "/programs",
    cta: "Explore programs",
  },
  {
    title: "Connect activities into a workplace program",
    description: "Coordinate live, digital and learning elements around your people, locations and priorities.",
    href: "/programs",
    cta: "Explore programs",
  },
  {
    title: "Explore Wellbeing Studio",
    description: "Give employees practical digital wellbeing support beyond the scheduled live session.",
    href: "/wellbeing-studio",
    cta: "Explore Wellbeing Studio",
  },
];

export const oneOffFeature = {
  kicker: "One useful moment",
  heading: "One-off sessions are valuable in their own right.",
  body: "A well-designed workplace wellbeing experience doesn't need to be part of a bigger plan to be worthwhile. Movement, mindfulness, workshops and conference activations stand on their own — fitted to the moment, audience and environment CYA is asked to work with.",
  cta: { label: "Discuss a one-off session", href: "/consultation", variant: "secondary" as const },
};

export const progressionHeading = {
  kicker: "One useful moment can become a connected program",
  heading: "Build continuity when useful.",
  body: "There is no required starting point. CYA can support one experience, repeat what works, or coordinate a broader mix across your people and locations. This is optional progression, not a compulsory sales ladder.",
};

export const offerLevels: OfferLevel[] = [
  {
    title: "One useful moment",
    description: "A well-designed workplace wellbeing experience that fits the moment, audience and environment.",
    proofNeed: "Suitability, facilitator quality, logistics and participant response.",
  },
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

export const exampleYear: YearMonthEntry[] = [
  { month: "January", theme: "Reset and re-orientation", formats: ["Return-to-work movement session", "Goal-setting Lunch & Learn"] },
  { month: "February", theme: "Building momentum", formats: ["Recurring class begins", "Desk mobility micro-sessions"] },
  { month: "March", theme: "Focus and workload", formats: ["Mindfulness for busy periods", "Manager wellbeing briefing"] },
  { month: "April", theme: "Connection", formats: ["Team wellbeing event", "Wellbeing Studio promotion"] },
  { month: "May", theme: "Awareness activation", formats: ["Awareness-day session", "Breathwork workshop"] },
  { month: "June", theme: "Mid-year check-in", formats: ["Program review", "Recurring class continues"] },
  { month: "July", theme: "Conference season", formats: ["Conference activation", "Pre/post-event Studio access"] },
  { month: "August", theme: "Sustaining the rhythm", formats: ["Recurring class continues", "Sound experience session"] },
  { month: "September", theme: "Distributed teams", formats: ["Online workshop", "Multi-location coordination"] },
  { month: "October", theme: "Practical skills", formats: ["Workshop series", "Lunch & Learn"] },
  { month: "November", theme: "Planning ahead", formats: ["Year-in-review session", "Next-year planning conversation"] },
  { month: "December", theme: "Closing the year well", formats: ["Wind-down session", "Studio content refresh"] },
];

export const whyCYA = {
  kicker: "Why CYA",
  heading: "Preventative, practical and workplace-aware.",
  points: [
    { title: "Preventative and supportive", body: "CYA supports people before stress becomes crisis. It does not replace an EAP, clinical care or crisis intervention." },
    { title: "Practical, inclusive and workplace-aware", body: "Designed for varied bodies, roles and confidence levels — not studio-coded, athletic or one-size-fits-all." },
    { title: "Able to start small without remaining small", body: "One useful moment is a complete offer. Continuity is available when it is useful, not required." },
    { title: "Human and tailored, with operational discipline", body: "A national facilitator network and coordinated delivery, not a generic content library." },
    { title: "Evidence-informed and honest", body: "Claims stay bounded to what is measured. No guaranteed stress, resilience or productivity outcomes." },
  ],
};

export const closingCTA = {
  kicker: "Tell us what you are planning",
  heading: "Tell us what you are planning.",
  body: "The first conversation can be about one session, a conference, Wellbeing Studio or an organised program.",
  cta: { label: "Book a wellbeing consultation", href: "/consultation", variant: "primary" as const },
};
