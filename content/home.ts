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
  body: "A single session is a complete offer on its own — fitted to the moment, audience and environment. Repeat what works, or connect it into something broader, whenever that becomes useful.",
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

export const progressionHeading = {
  kicker: "One useful moment can become a connected program",
  heading: "Build continuity when useful.",
  body: "There is no required starting point and no compulsory ladder. CYA can support one experience, repeat what works, or coordinate a broader mix across your people and locations.",
};

export const offerLevels: OfferLevel[] = [
  {
    title: "One session",
    description: "A focused experience for a team, workplace moment, awareness day or event.",
    proofNeed: "Suitability, facilitator quality, logistics and participant response.",
  },
  {
    title: "Ongoing sessions",
    description: "A familiar live rhythm delivered weekly, fortnightly, monthly or across a short series.",
    proofNeed: "Repeat participation, operational reliability and renewal.",
  },
  {
    title: "Connected program",
    description: "Live sessions, workshops and Wellbeing Studio content coordinated around workforce needs, locations and priorities.",
    proofNeed: "Program logic, client contribution, coordination and evidence.",
  },
  {
    title: "Annual partnership",
    description: "Planning, delivery, communications and review organised across the year.",
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

/** Four selected quarterly moments for the concise home-page year glance. */
export const yearQuarters: YearMonthEntry[] = [
  { month: "Quarter 1", theme: "Reset and re-orientation", formats: ["Return-to-work session", "Goal-setting Lunch & Learn"] },
  { month: "Quarter 2", theme: "Connection and focus", formats: ["Team wellbeing event", "Mindfulness for busy periods"] },
  { month: "Quarter 3", theme: "Conference season", formats: ["Conference activation", "Pre/post-event Studio access"] },
  { month: "Quarter 4", theme: "Planning ahead", formats: ["Workshop series", "Next-year planning conversation"] },
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
