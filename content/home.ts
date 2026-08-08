import type { OfferLevel, PageIntro, PathwayCard, YearMonthEntry } from "@/lib/types";
import { media } from "@/content/media";

export const homeHero: PageIntro = {
  kicker: "One-off sessions and ongoing workplace wellbeing programs",
  heading: "Start with one useful moment - or build a connected year.",
  body: "Book a one-off movement, mindfulness, workshop or conference session. When you are ready to create greater continuity, CYA can bring those moments together through recurring programs and Wellbeing Studio.",
  actions: [
    { label: "Book a wellbeing consultation", href: "/consultation", variant: "primary" },
    { label: "Explore one-off sessions", href: "/workplace-wellbeing", variant: "secondary" },
  ],
};

/** Restrained orientation statement directly after the hero — removes buyer anxiety, does not repeat it. */
export const reassurance = {
  heading: "One session can stand on its own.",
  body: "A single session, a conference activation, a short series or a connected program are all valid ways to work with CYA. Repeat what works, or connect it into something broader, later if that becomes helpful.",
};

export const pathwaysHeading = {
  kicker: "Three pathways",
  heading: "Fit CYA to what's happening right now.",
  body: "Each pathway is a complete way to work with CYA on its own — not a step toward the others.",
};

export const pathways: PathwayCard[] = [
  {
    title: "One-off workplace sessions",
    description:
      "Movement, mindfulness, workshops and Lunch and Learns for teams, awareness days and particular workplace moments.",
    href: "/workplace-wellbeing",
    cta: "Explore workplace wellbeing",
    image: media.workplaceWellbeingLunchLearn,
  },
  {
    title: "Conferences and events",
    description:
      "Short activations, movement breaks and wellbeing experiences designed around the event, venue and agenda.",
    href: "/conferences-events",
    cta: "Explore conferences and events",
    image: media.conferencesHero,
  },
  {
    title: "Ongoing programs",
    description:
      "Recurring sessions and connected workplace wellbeing support designed around people, locations and priorities.",
    href: "/programs",
    cta: "Explore programs",
    image: media.programsHero,
  },
];

/** Dedicated one-off-session feature (brief §11) — demonstrates value through format and context, not repeated assertion. */
export const oneOffFeature = {
  kicker: "One-off sessions",
  heading: "A complete session, not a smaller offer.",
  body: "A single booking is fitted to the team, the moment and the environment — a specific awareness day, a Lunch and Learn, a one-time workshop. Nothing about working with CYA once requires a plan for what comes after.",
  formats: ["Movement", "Mindfulness", "Workshops", "Lunch and Learns", "Awareness-day sessions", "Conference activations"],
  cta: { label: "Explore one-off sessions", href: "/workplace-wellbeing" },
  image: media.homeOneOff,
};

export const progressionHeading = {
  kicker: "One useful moment can become a connected program",
  heading: "Build continuity when useful.",
  body: "There is no required starting point and no compulsory ladder. CYA can support one experience, repeat what works, or coordinate a broader mix across your people and locations.",
};

export const offerLevels: OfferLevel[] = [
  {
    title: "One useful moment",
    description: "A focused experience for a particular team, event or need.",
    proofNeed: "Suitability, facilitator quality, logistics and participant response.",
  },
  {
    title: "Recurring rhythm",
    description: "Repeat what works so support becomes familiar and easy to access.",
    proofNeed: "Repeat participation, operational reliability and renewal.",
  },
  {
    title: "Connected program",
    description: "Coordinate live, digital and learning elements around people and priorities.",
    proofNeed: "Program logic, client contribution, coordination and evidence.",
  },
  {
    title: "Organised year",
    description: "Plan continuity across the year while retaining flexibility.",
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

/** Homepage-ending relational close (brief §15) — connects the founder to the wider organisation. */
export const founderClose = {
  kicker: "Corporate Yoga Australia",
  heading: "One founder, a national team behind every session.",
  body: "Debby Lewis founded CYA in 2014 from her own experience using movement and meditation in a high-pressure HR role. That practice is now delivered by a national network of facilitators, so every engagement — from one session to a connected program — gets the same care.",
  cta: { label: "Let's plan what would be useful.", href: "/consultation" },
  image: media.debbyTeacherPortrait,
};

export const closingCTA = {
  kicker: "Tell us what you are planning",
  heading: "Tell us what you are planning.",
  body: "The first conversation can be about one session, a conference, Wellbeing Studio or an organised program.",
  cta: { label: "Book a wellbeing consultation", href: "/consultation", variant: "primary" as const },
};
