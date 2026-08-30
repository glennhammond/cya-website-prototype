import type { PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const yogaHero: PageIntro = {
  kicker: "Workplace Yoga",
  heading: "Workplace Yoga Classes for Australian Teams",
  body: "CYA delivers practical yoga sessions for workplaces without assuming prior experience, studio conditions or a particular level of flexibility. Book one session, a short series or a recurring class, onsite or online.",
  actions: [
    { label: "Discuss a yoga session", href: "/contact?interest=one-off", variant: "primary" },
    { label: "Explore workplace wellbeing programs", href: "/workplace-wellbeing-programs", variant: "secondary" },
  ],
  meta: ["One-off or recurring", "Onsite or online", "Adapted to the workplace"],
};

export const sessionFits: FeatureItem[] = [
  {
    title: "One-off workplace session",
    body: "A complete yoga session for a team, office, awareness day or particular workplace moment.",
  },
  {
    title: "Short series",
    body: "A focused run of sessions that gives people time to become familiar with the format without requiring a long commitment.",
  },
  {
    title: "Recurring class",
    body: "A regular class coordinated around the working week, location and participation pattern.",
  },
  {
    title: "Conference or event yoga",
    body: "A session or short movement break shaped around the event agenda, venue and time available.",
    href: "/conferences-events",
    cta: "Explore conferences and events",
  },
];

export const participationFeature = {
  kicker: "Participation",
  heading: "Designed for people who may never choose a yoga studio.",
  body: "CYA does not assume confidence, flexibility or yoga experience. Sessions can be adapted to varied bodies, roles, available space and clothing, with clear options so people can participate at an appropriate level.",
};

export const tailoring: FeatureItem[] = [
  {
    title: "Audience",
    body: "The facilitator is briefed on who is taking part and what will make the session approachable for that group.",
  },
  {
    title: "Space",
    body: "The format is adjusted for the room available rather than assuming a purpose-built studio.",
  },
  {
    title: "Time",
    body: "The session is scoped to the time genuinely available, whether it is a short workplace reset or a longer class.",
  },
  {
    title: "Purpose",
    body: "The brief may be a one-off team experience, a recurring rhythm, an event activation or one part of a broader wellbeing program.",
  },
];

export const deliveryModes: FeatureItem[] = [
  {
    title: "Onsite",
    body: "Delivered at your workplace and adapted to the room, facilities and participant group.",
  },
  {
    title: "Online",
    body: "Live remote delivery for distributed teams or people working from home.",
  },
  {
    title: "Multi-location",
    body: "Coordinated delivery across several workplaces when teams need a consistent experience in different locations.",
  },
];

export const facilitatorFeature = {
  kicker: "Facilitator fit",
  heading: "A human-led service, not a class dropped into a calendar.",
  body: "CYA coordinates the brief, facilitator match and delivery details with the workplace. Individual facilitator credentials and profiles are published only when verified; the service model does not rely on unsupported credential or outcome claims.",
};

export const practicalLogistics: FeatureItem[] = [
  {
    title: "What participants need",
    body: "Requirements are confirmed for the chosen format in advance so people know what to bring, wear or prepare.",
  },
  {
    title: "Room and setup",
    body: "CYA plans around the space available and confirms any setup requirements before the session.",
  },
  {
    title: "Session length",
    body: "Timing is agreed around the workplace brief rather than forcing every group into one standard class duration.",
  },
  {
    title: "One session is enough",
    body: "A one-off yoga booking is a legitimate engagement. Ongoing support is available when continuity would be useful, not as a condition of booking.",
  },
];

export const authorityResource = {
  kicker: "Planning workplace yoga",
  heading: "Introducing yoga at work without making participation difficult.",
  body: "CYA's established yoga-at-work guidance covers practical considerations for introducing yoga in a workplace. It supports this service page with useful planning context rather than duplicating the same content here.",
  cta: {
    label: "Read 8 tips to successfully introduce yoga at work",
    href: "/blog/8-tips-to-successfully-introduce-yoga-at-work",
    variant: "secondary" as const,
  },
};

export const relatedPaths: FeatureItem[] = [
  {
    title: "Compare movement options",
    body: "See how yoga sits alongside Pilates, mobility and desk-based movement.",
    href: "/movement",
    cta: "Explore workplace movement",
  },
  {
    title: "Build a broader program",
    body: "Combine yoga with other live, online and expert-led experiences when a connected program suits the brief.",
    href: "/workplace-wellbeing-programs",
    cta: "Explore workplace wellbeing programs",
  },
];

export const closingCTA = {
  kicker: "Next step",
  heading: "Planning a workplace yoga session?",
  body: "Tell CYA about your team, location, timing and what you want the session to do. One session is a perfectly valid place to start - and it can remain one session.",
  cta: { label: "Discuss a yoga session", href: "/contact?interest=one-off", variant: "primary" as const },
};
