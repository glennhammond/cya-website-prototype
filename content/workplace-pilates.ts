import type { PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const pilatesHero: PageIntro = {
  kicker: "Workplace Pilates",
  heading: "Workplace Pilates Classes for Stronger, Healthier Teams",
  body: "Corporate Yoga Australia offers mat-based Pilates for workplace teams as a one-off class, short series, recurring session or part of a mixed movement program. The format is adapted to the people, available floor space, timing and delivery mode.",
  actions: [
    { label: "Discuss a Pilates session", href: "/contact?interest=one-off", variant: "primary" },
    { label: "Compare movement options", href: "/movement", variant: "secondary" },
  ],
  meta: ["Mat-based Pilates", "Onsite or online", "Beginner-friendly options"],
};

export const sessionFormats: FeatureItem[] = [
  {
    title: "One-off Mat Pilates",
    body: "A complete facilitator-led mat session for a team, wellbeing day, retreat or workplace event.",
  },
  {
    title: "Short Pilates series",
    body: "A defined run of sessions that gives the same team a familiar Pilates rhythm over several weeks.",
  },
  {
    title: "Recurring Pilates",
    body: "A regular class for workplaces that want Pilates as an ongoing movement option.",
  },
  {
    title: "Yoga + Pilates rhythm",
    body: "Alternate Pilates with yoga or another movement format when variety is useful for the team or wider program.",
  },
];

export const workplaceFit: FeatureItem[] = [
  {
    title: "A team wants a strength-focused movement option",
    body: "Pilates provides a different movement experience from yoga, centred on controlled mat-based movement and clear instruction.",
  },
  {
    title: "The workplace can provide clear floor space",
    body: "Mat-based sessions need enough room for each participant to lie down and move without crowding desks, chairs or each other.",
  },
  {
    title: "People have mixed experience levels",
    body: "Corporate Yoga Australia can plan beginner-friendly options and clear progressions rather than assuming previous Pilates experience.",
  },
  {
    title: "The organisation wants movement variety",
    body: "Pilates can stand alone or sit alongside yoga, mobility and other workplace movement formats.",
  },
];

export const equipmentAndSpace: FeatureItem[] = [
  {
    title: "Mat or towel",
    body: "For mat-based Pilates, plan a mat or suitable towel for each participant. Final equipment requirements are confirmed for the booked format.",
  },
  {
    title: "Clear floor space",
    body: "The room needs enough usable floor area for participants to move without contact with desks, chairs or each other.",
  },
  {
    title: "Comfortable clothing",
    body: "A full activewear change is not necessarily required, but participants need clothing that allows comfortable movement.",
  },
  {
    title: "Online setup",
    body: "Remote participants need a stable device position and enough clear space to follow the session at home or another suitable location.",
  },
];

export const deliveryModes: FeatureItem[] = [
  {
    title: "Onsite",
    body: "Delivered in a workplace or suitable off-site room with the available space and setup confirmed before the session.",
  },
  {
    title: "Online",
    body: "Live facilitator-led Pilates for remote or distributed participants using the organisation's agreed platform.",
  },
  {
    title: "Hybrid / multi-location",
    body: "Corporate Yoga Australia can coordinate movement delivery across locations when the participant setup, technology and facilitator plan suit the actual group.",
  },
];

export const facilitatorGate = {
  kicker: "Facilitator fit",
  heading: "Match the practitioner to the Pilates brief",
  body: "Corporate Yoga Australia's current public material confirms Pilates as part of its facilitator network and identifies current Pilates capability within the team. For an actual booking, Corporate Yoga Australia confirms the practitioner, location, availability and relevant qualification for the session. Individual credential details are only published where those records have been verified.",
};

export const evidenceGate = {
  kicker: "Evidence and claims",
  heading: "Describe the real Pilates service without promising health outcomes",
  body: "Corporate Yoga Australia's current service material supports mat Pilates, one-off and recurring classes, mixed yoga and Pilates formats, onsite and online delivery, and tailored workplace programs. This page therefore does not need to wait for a case study to exist. It should continue to avoid claims about injury prevention, posture correction, pain relief or guaranteed health outcomes unless stronger evidence is approved for those specific claims.",
};

export const relatedPaths: FeatureItem[] = [
  {
    title: "Movement",
    body: "Compare Pilates with workplace yoga, mobility and other movement formats.",
    href: "/movement",
    cta: "Compare movement",
  },
  {
    title: "Workplace Yoga",
    body: "Choose yoga when the brief calls for a different mix of movement, breath and mindfulness.",
    href: "/workplace-yoga",
    cta: "Explore Workplace Yoga",
  },
  {
    title: "Workplace wellbeing programs",
    body: "Use Pilates as one element in a wider rhythm only when that broader continuity is useful.",
    href: "/workplace-wellbeing-programs",
    cta: "Explore programs",
  },
];

export const closingCTA = {
  kicker: "Next step",
  heading: "Tell Corporate Yoga Australia what kind of Pilates session you are considering",
  body: "Share the team size, location, available room, timing and whether you are planning one session or a recurring class. Corporate Yoga Australia can confirm the appropriate practitioner and practical setup before anything is booked.",
  cta: { label: "Discuss Workplace Pilates", href: "/contact?interest=one-off", variant: "primary" as const },
};
