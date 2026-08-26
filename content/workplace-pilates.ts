import type { PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const pilatesHero: PageIntro = {
  kicker: "Workplace Pilates",
  heading: "Controlled, strength-focused movement that can fit a real workplace.",
  body: "CYA offers mat-based Pilates for workplace teams as a one-off class, recurring session or part of a mixed movement program. The format is adapted to the people, available floor space and delivery mode.",
  actions: [
    { label: "Discuss a Pilates session", href: "/contact?interest=one-off", variant: "primary" },
    { label: "Compare movement options", href: "/movement", variant: "secondary" },
  ],
  meta: ["Mat-based Pilates", "Onsite or online", "Beginner-friendly options"],
};

export const sessionFormats: FeatureItem[] = [
  {
    title: "One-off Mat Pilates",
    body: "A complete facilitator-led mat session for a team, wellbeing day or workplace event.",
  },
  {
    title: "Short Pilates series",
    body: "A defined run of sessions that builds familiarity with controlled movement and technique over time.",
  },
  {
    title: "Recurring Pilates",
    body: "A regular class for workplaces that want Pilates as an ongoing movement option.",
  },
  {
    title: "Yoga + Pilates rhythm",
    body: "Alternate Pilates with Yoga or other movement when variety is useful for the team or wider program.",
  },
];

export const workplaceFit: FeatureItem[] = [
  {
    title: "A team wants a strength-focused movement option",
    body: "Pilates provides a different movement experience from Yoga while remaining low-impact and adaptable.",
  },
  {
    title: "The workplace can provide clear floor space",
    body: "Mat-based sessions need enough room for each participant to lie down and move safely without crowding.",
  },
  {
    title: "People have mixed experience levels",
    body: "The session should include options and clear instruction rather than assuming previous Pilates experience.",
  },
  {
    title: "The organisation wants movement variety",
    body: "Pilates can stand alone or sit alongside Yoga, mobility and other workplace movement formats.",
  },
];

export const equipmentAndSpace: FeatureItem[] = [
  {
    title: "Mat or towel",
    body: "For mat-based Pilates, CYA's existing service guidance recommends a mat or towel for each participant. Equipment requirements are confirmed for the booked format.",
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
    body: "Remote participants need a stable device position and enough safe space to follow a mat-based session at home or another suitable location.",
  },
];

export const deliveryModes: FeatureItem[] = [
  { title: "Onsite", body: "Delivered in a workplace or suitable off-site room with the space and setup confirmed before the session." },
  { title: "Online", body: "Live facilitator-led Pilates for remote or distributed participants using the organisation's agreed platform." },
  { title: "Hybrid / multi-location", body: "Possible where the participant setup, technology and facilitator plan can support the actual group safely and clearly." },
];

export const facilitatorGate = {
  kicker: "Facilitator qualification",
  heading: "The Pilates practitioner must be qualified for the session being promoted.",
  body: "CYA's current material confirms Pilates instructors are part of its practitioner network, but this production page will not publish named Pilates credentials until the current practitioner, qualification, location and availability records are verified. That evidence gate remains open before indexation.",
};

export const evidenceGate = {
  kicker: "Evidence required before publication",
  heading: "Show the real Pilates product, not a Yoga page with different nouns.",
  body: "Before this page enters the sitemap, CYA should confirm current Pilates practitioners and qualifications, permissioned Pilates-specific imagery, final equipment guidance and at least one credible delivery example or an explicit decision to publish without case proof. Outcome language should stay limited to the actual service experience rather than promising injury prevention, posture correction or health results.",
};

export const relatedPaths: FeatureItem[] = [
  {
    title: "Movement",
    body: "Compare Pilates with Workplace Yoga, mobility and other movement formats.",
    href: "/movement",
    cta: "Compare movement",
  },
  {
    title: "Workplace Yoga",
    body: "Choose Yoga when the brief calls for a different mix of movement, breath and mindfulness.",
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
  heading: "Tell CYA what kind of Pilates session you are considering.",
  body: "Share the team size, location, room, timing and whether you are planning one session or a recurring class. CYA can confirm the appropriate practitioner and setup before anything is booked.",
  cta: { label: "Discuss Workplace Pilates", href: "/contact?interest=one-off", variant: "primary" as const },
};
