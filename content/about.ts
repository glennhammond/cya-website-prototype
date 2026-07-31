import type { PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const aboutHero: PageIntro = {
  kicker: "About Corporate Yoga Australia",
  heading: "Workplace wellbeing for real people and real working days.",
  body: "CYA grew from Debby Lewis's experience using movement and meditation in a high-pressure HR environment. The business was founded in 2014 to make practical wellbeing more accessible at work.",
  actions: [{ label: "Meet CYA", href: "#origin", variant: "primary" }],
};

export const worldviewFeature = {
  kicker: "Worldview",
  heading: "Not everyone will walk into a yoga studio.",
  body: "CYA designs experiences for varied bodies, roles, workplaces and confidence levels, without making wellbeing feel performative, preachy or difficult to join.",
  cta: { label: "Explore workplace wellbeing", href: "/workplace-wellbeing", variant: "secondary" as const },
};

export const originStory = {
  kicker: "Origin story",
  heading: "A personal practice, a founded business — two different dates.",
  body: "Debby Lewis's own use of movement and meditation to manage a high-pressure HR role dates back to 2001 — the origin of the idea, not the company. Corporate Yoga Australia was founded in 2014, when that personal practice became a national workplace wellbeing business.",
};

export const howCyaWorks: FeatureItem[] = [
  { title: "Understand the workplace", body: "CYA clarifies the audience, environment, timing and purpose before recommending anything." },
  { title: "Recommend an appropriate experience", body: "Formats and modalities are selected to fit the brief, not applied as a standard template." },
  { title: "Coordinate delivery", body: "Facilitator matching, logistics and scheduling are handled directly with you." },
  { title: "Review and adapt", body: "For ongoing work, CYA checks in and adjusts the plan as priorities change." },
];

export const deliveryPhilosophy = {
  kicker: "Delivery philosophy",
  heading: "Human and tailored, with operational discipline.",
  body: "CYA pairs a national facilitator network with coordinated delivery — so a single session and a multi-site program both get the same level of care, without treating wellbeing as a generic, one-size-fits-all product.",
};

export const facilitatorNetwork = {
  kicker: "Facilitator network",
  heading: "Facilitators placed where the work is.",
  body: "CYA works with a network of facilitators across major Australian cities. Individual profiles, credentials and availability are published only once verified — this page shows representative coverage, not a directory.",
};

export const professionalStandards = {
  kicker: "Professional standards",
  heading: "Standards CYA holds facilitators to.",
  body: "Insurance, credential requirements and safety procedures govern every engagement. Certificates and detailed standards documentation are a pre-launch publication gate, not yet shown here.",
};

export const closingCTA = {
  kicker: "Next step",
  heading: "Talk to CYA about your workplace.",
  body: "Whether it's one session or a broader plan, the first conversation starts with understanding your situation.",
  cta: { label: "Book a wellbeing consultation", href: "/consultation", variant: "primary" as const },
};
