import type { PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const mindfulnessHero: PageIntro = {
  kicker: "Mindfulness & Meditation",
  heading: "Workplace Meditation & Mindfulness",
  body: "CYA delivers guided meditation, mindfulness, breathwork and related practices in formats that can fit around meetings, team days, wellbeing programs and distributed work. The emphasis is practical participation, not clinical treatment claims.",
  actions: [
    { label: "Discuss a mindfulness session", href: "/contact?interest=one-off", variant: "primary" },
    { label: "Explore workplace wellbeing programs", href: "/workplace-wellbeing-programs", variant: "secondary" },
  ],
  meta: ["Guided meditation", "Mindfulness", "Breathwork", "Onsite or online"],
};

export const workplaceContexts: FeatureItem[] = [
  { title: "A short reset", body: "A brief guided pause before, between or after demanding parts of the working day." },
  { title: "A team wellbeing session", body: "A shared experience for a team day, wellbeing calendar or internal event." },
  { title: "A practical skills workshop", body: "An interactive format combining explanation, guided practice and techniques participants can reuse." },
  { title: "A recurring practice", body: "A short series or regular session that gives people repeated access over time." },
];

export const sessionTypes: FeatureItem[] = [
  { title: "Guided meditation", body: "Facilitator-led sessions that create a structured pause without assuming previous meditation experience." },
  { title: "Mindfulness workshops", body: "Practical learning sessions combining discussion, experiential exercises and workplace-relevant techniques." },
  { title: "Breathwork", body: "Guided breathing practices delivered as a stand-alone session or combined with meditation, movement or workshops." },
  { title: "Deep rest and sound experiences", body: "Longer guided rest or sound-based experiences where the setting, timing and workplace brief make them appropriate." },
  { title: "Office and chair wellbeing", body: "Accessible sessions that combine gentle movement, breathing and a short guided pause without requiring a studio setup." },
  { title: "Mindfulness courses", body: "A multi-session format for organisations that want more continuity than a one-off experience." },
];

export const participationFeature = {
  kicker: "Approach",
  heading: "Approachable enough for a busy workplace",
  body: "The session is shaped around the audience, available time and setting. CYA can keep the practice short and simple, or build a deeper workshop or series when that better matches the organisation's purpose.",
};

export const deliveryModes: FeatureItem[] = [
  { title: "Onsite", body: "Delivered in the workplace or at an off-site team or wellbeing event." },
  { title: "Online", body: "Live delivery for remote or distributed teams." },
  { title: "Hybrid or multi-location", body: "Coordinated formats for organisations working across more than one location." },
];

export const facilitatorFeature = {
  kicker: "Human-led delivery",
  heading: "The facilitator matters as much as the format",
  body: "CYA matches the brief with an appropriate practitioner and coordinates the practical delivery with the client. Named facilitator profiles and credentials should only be published once verified for the specific service being promoted.",
};

export const authorityResource = {
  kicker: "A useful starting point",
  heading: "Check in with yourself before adding more to the day",
  body: "CYA's existing Check In With Yourself article provides a practical editorial pathway into mindfulness. The service page should use that resource to deepen understanding rather than repeating it as sales copy.",
  cta: {
    label: "Read Check In With Yourself",
    href: "/blog/check-in-with-yourself-with-this-simple-technique",
    variant: "secondary" as const,
  },
};

export const relatedPaths: FeatureItem[] = [
  {
    title: "Workshops & Expert Experiences",
    body: "Use a workshop format when the brief calls for more explanation, discussion or a specific wellbeing topic.",
    href: "/workplace-wellbeing-workshops",
    cta: "Explore workshops",
  },
  {
    title: "Online wellbeing",
    body: "Extend live mindfulness with ongoing online access when a distributed or continuous service is useful.",
    href: "/online-wellbeing",
    cta: "Explore online wellbeing",
  },
  {
    title: "Workplace wellbeing programs",
    body: "Combine mindfulness with movement, workshops and other experiences in a connected program when the organisation needs broader continuity.",
    href: "/workplace-wellbeing-programs",
    cta: "Explore programs",
  },
];

export const closingCTA = {
  kicker: "Next step",
  heading: "Tell CYA what kind of pause or practice would help",
  body: "The first conversation can be about one short meditation, a workshop, a series or a broader program. There is no required level of commitment.",
  cta: { label: "Discuss mindfulness & meditation", href: "/contact?interest=one-off", variant: "primary" as const },
};
