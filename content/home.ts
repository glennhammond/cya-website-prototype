import type { HeroContent, OfferLevel, PathwayCard, YearMonthEntry } from "@/lib/types";
import { media, homeHeroMedia } from "@/content/media";

export { homeHeroMedia };

/**
 * Hero copy is deliberately short: the visual brand line carries the opening,
 * while the category/search proposition is made explicit immediately below.
 */
export const homeHeroContent: HeroContent = {
  eyebrow: "Corporate Yoga Australia",
  heading: "Work Wellness into Your Workday",
  primaryCta: { label: "Book a wellbeing consultation", href: "/contact", variant: "primary" },
};

/** Category proposition directly after the hero. Home remains the broad corporate-yoga authority page. */
export const quietIntro = {
  heading: "Workplace yoga, Pilates, mindfulness and tailored wellbeing programs for Australian organisations.",
  body: "A single session, a conference activation, a short series or a connected program are all valid ways to work with CYA. Book one useful moment, repeat what works, or build a connected year when that becomes helpful - there's no required starting point.",
  image: media.programsContinuity,
};

export const situationLedEntry = {
  kicker: "What is happening at work?",
  heading: "Start with the situation, not a package.",
  body: "CYA can help when you need one useful team moment, a movement or mindfulness session, an expert-led workshop, support across locations, or a more connected wellbeing rhythm.",
};

export const recognisableExperiences = [
  {
    title: "Workplace Yoga",
    body: "Accessible Yoga sessions shaped around the team, space, timing and level of experience.",
    href: "/workplace-yoga",
    cta: "Explore Workplace Yoga",
  },
  {
    title: "Workplace Pilates",
    body: "Mat-based Pilates for one-off classes, short series, recurring sessions or mixed movement programs, adapted to the team and available space.",
    href: "/workplace-pilates",
    cta: "Explore Workplace Pilates",
  },
  {
    title: "Mindfulness & Meditation",
    body: "Guided meditation, mindfulness, breathwork and related practices designed for workplace participation.",
    href: "/meditation-mindfulness",
    cta: "Explore mindfulness & meditation",
  },
  {
    title: "Workshops & Expert Experiences",
    body: "Practical Lunch & Learns, workshops and expert-led sessions for particular workplace topics and moments.",
    href: "/workplace-wellbeing-workshops",
    cta: "Explore workshops & expert experiences",
  },
];

export const pathwaysHeading = {
  kicker: "Ways to work with CYA",
  heading: "Fit CYA to what's happening right now.",
  body: "Each pathway is a complete way to work with CYA on its own - not a step toward the others.",
};

export const pathways: PathwayCard[] = [
  {
    title: "One-off sessions",
    description:
      "Movement, mindfulness, workshops and Lunch & Learns for teams, awareness days and particular workplace moments.",
    href: "/contact?interest=one-off",
    cta: "Plan a one-off session",
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

export const humanExperience = {
  kicker: "What a session feels like",
  heading: "A session that meets your team where they are.",
  body: "However people arrive - energised, flat, mid-deadline - a CYA session is shaped around the room on the day: the space available, the mix of people, and the time that's actually free. No experience or particular level of fitness is assumed.",
  formats: ["Yoga & movement", "Mindfulness", "Workshops", "Lunch & Learns", "Awareness-day sessions", "Conference activations"],
  cta: { label: "Discuss a one-off experience", href: "/contact?interest=one-off" },
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

export const principalProof = {
  kicker: "Case studies",
  heading: "See how CYA works in practice.",
  body: "A closer look at the context, decisions and delivery behind CYA engagements. These draft stories remain unpublished until client permission and facts are confirmed.",
  principalSlug: "flagship-partnership",
  supportingSlugs: ["distributed-delivery", "smaller-organisation"],
};

export const studioPreview = {
  kicker: "Online wellbeing + Wellbeing Studio",
  heading: "Keep useful support available beyond the scheduled session.",
  body: "CYA can connect live online experiences, on-demand practices, expert content and Wellbeing Studio access for remote, hybrid and distributed teams. The Studio supports the service relationship; it is not the whole proposition.",
  cta: { label: "Explore online wellbeing", href: "/online-wellbeing" },
  image: media.studioEmployeeHome,
};

export const leadershipPerspective = {
  kicker: "Corporate Yoga Australia",
  heading: "One founder, a national team behind every session.",
  body: "Debby Lewis founded CYA in 2014 from her own experience using movement and meditation in a high-pressure HR role. That practice is now delivered by an experienced national network of facilitators, coordinated so every engagement - from one session to a connected program - carries Debby's own standard of care.",
  cta: { label: "Meet the team behind CYA", href: "/about-us" },
  image: media.debbyTeacherPortrait,
};

export const insightsSignpost = {
  kicker: "Insights",
  heading: "Useful guidance for planning workplace wellbeing.",
  links: [
    { label: "8 tips to successfully introduce Yoga at work", href: "/blog/8-tips-to-successfully-introduce-yoga-at-work" },
    { label: "Check in with yourself with this simple technique", href: "/blog/check-in-with-yourself-with-this-simple-technique" },
    { label: "Explore all Insights", href: "/blog" },
  ],
};

export const closingCTA = {
  kicker: "Tell us what you are planning",
  heading: "Tell us what you are planning.",
  body: "The first conversation can be about one Yoga session, another one-off experience, online continuity or an organised program.",
  cta: { label: "Book a wellbeing consultation", href: "/contact", variant: "primary" as const },
};
