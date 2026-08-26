import type { HeroContent, OfferLevel, PathwayCard, YearMonthEntry } from "@/lib/types";
import { media, homeHeroMedia } from "@/content/media";

export { homeHeroMedia };

/**
 * Hero copy is deliberately this short - see AGENTS brief "Homepage
 * video-hero architecture": very limited or absent body copy, one primary
 * action. The fuller explanation lives in `quietIntro` below, not here.
 * Provisional line, easy to change - swap `heading` when Deb has final copy.
 */
export const homeHeroContent: HeroContent = {
  eyebrow: "Corporate Yoga Australia",
  heading: "Time together, well spent.",
  primaryCta: { label: "Book a wellbeing consultation", href: "/contact", variant: "primary" },
};

/** Editorial introduction directly after the hero, pairing the core proposition with a representative workplace session image. */
export const quietIntro = {
  heading: "Movement, mindfulness, workshops and a connected year - always fitted to the room you're in.",
  body: "A single session, a conference activation, a short series or a connected program are all valid ways to work with CYA. Book one useful moment, repeat what works, or build a connected year when that becomes helpful - there's no required starting point.",
  image: media.programsContinuity,
};

export const pathwaysHeading = {
  kicker: "Ways to work with CYA",
  heading: "Fit CYA to what's happening right now.",
  body: "Each pathway is a complete way to work with CYA on its own - not a step toward the others.",
};

export const pathways: PathwayCard[] = [
  {
    title: "One-off sessions",
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
    href: "/workplace-wellbeing-programs",
    cta: "Explore programs",
    image: media.programsHero,
  },
];

/** "Human experience" homepage section - visitor-centred language, no internal commercial framing ("not a smaller offer" removed per creative direction). */
export const humanExperience = {
  kicker: "What a session feels like",
  heading: "A session that meets your team where they are.",
  body: "However people arrive - energised, flat, mid-deadline - a CYA session is shaped around the room on the day: the space available, the mix of people, and the time that's actually free. No experience or particular level of fitness is assumed.",
  formats: ["Movement", "Mindfulness", "Workshops", "Lunch and Learns", "Awareness-day sessions", "Conference activations"],
  cta: { label: "Explore one-off sessions", href: "/workplace-wellbeing" },
  image: media.homeOneOff,
};

export const progressionHeading = {
  kicker: "Selected programs",
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

/** Homepage proof section - one principal story told in full, two supporting stories linked rather than repeated as equal cards. `principalSlug` must match a slug in content/proof.ts. */
export const principalProof = {
  kicker: "Case studies",
  heading: "See how CYA works in practice.",
  body: "A closer look at the context, decisions and delivery behind CYA engagements. These draft stories remain unpublished until client permission and facts are confirmed.",
  principalSlug: "flagship-partnership",
  supportingSlugs: ["distributed-delivery", "smaller-organisation"],
};

export const studioPreview = {
  kicker: "Wellbeing Studio by Corporate Yoga Australia",
  heading: "Practical digital wellbeing support, available beyond the scheduled session.",
  body: "Short live and on-demand practices for different moments in the workday and beyond. Wellbeing Studio is CYA's continuous digital layer - it stands alongside live delivery, not apart from it.",
  cta: { label: "Book a Studio walkthrough", href: "/wellbeing-studio" },
  image: media.studioEmployeeHome,
};

/** Homepage-ending leadership beat - connects the founder to the wider organisation without reading as a solo practice. */
export const leadershipPerspective = {
  kicker: "Corporate Yoga Australia",
  heading: "One founder, a national team behind every session.",
  body: "Debby Lewis founded CYA in 2014 from her own experience using movement and meditation in a high-pressure HR role. That practice is now delivered by an experienced national network of facilitators, coordinated so every engagement - from one session to a connected program - carries Debby's own standard of care.",
  cta: { label: "Meet the team behind CYA", href: "/about-us" },
  image: media.debbyTeacherPortrait,
};

export const resourcesSignpost = {
  kicker: "Resources",
  heading: "Guides and tools for planning your next session.",
  links: [
    { label: "Choosing a format", href: "/resources" },
    { label: "Preparing for a consultation", href: "/resources" },
    { label: "Wellbeing planning calendar", href: "/resources" },
  ],
};

export const closingCTA = {
  kicker: "Tell us what you are planning",
  heading: "Tell us what you are planning.",
  body: "The first conversation can be about one session, a conference, Wellbeing Studio or an organised program.",
  cta: { label: "Book a wellbeing consultation", href: "/contact", variant: "primary" as const },
};
