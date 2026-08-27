import type { OfferLevel, PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const programsHero: PageIntro = {
  kicker: "Workplace wellbeing programs",
  heading: "Workplace Wellbeing Programs Built Around Your People",
  body: "Begin with a short series, coordinate several wellbeing elements across a defined period, or plan an organised year of support. A program is useful when your organisation needs continuity - it is not a required step before CYA can help.",
  actions: [
    { label: "Plan a program", href: "/contact?interest=recurring", variant: "primary" },
    { label: "Start with one Yoga session", href: "/workplace-yoga", variant: "secondary" },
  ],
  meta: ["Recurring rhythm", "Multi-site coordination", "Onsite + online continuity"],
};

export const organisationalNeeds: FeatureItem[] = [
  { title: "Create a recurring wellbeing rhythm", body: "Coordinate useful sessions over time so employees know what is available and when." },
  { title: "Support more than one location", body: "Plan delivery across workplaces, states or remote teams without asking each location to organise its own separate solution." },
  { title: "Connect different wellbeing experiences", body: "Combine movement, mindfulness, expert-led learning and online continuity around a coherent workplace brief." },
  { title: "Make a campaign last longer", body: "Build preparation, a key moment and follow-up around an awareness day or internal wellbeing initiative." },
];

export const planningFeature = {
  kicker: "How CYA plans",
  heading: "Start with the organisation, then choose the mix.",
  body: "CYA clarifies the workforce, locations, practical constraints, important dates and purpose before recommending a cadence or collection of experiences. The plan can stay small, change over time or include a broader annual rhythm when that is genuinely useful.",
};

export const whyContinuity = {
  kicker: "Why continuity can help",
  heading: "Repeat what is useful, connect what belongs together.",
  body: "Some workplaces need one well-run session. Others benefit from repeated access, several complementary formats or a plan across locations and dates. CYA treats continuity as an organisational option rather than a compulsory upgrade.",
};

export const programLevels: OfferLevel[] = [
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
    description: "Live sessions, workshops and online resources coordinated around workforce needs, locations and priorities.",
    proofNeed: "Program logic, client contribution, coordination and evidence.",
  },
  {
    title: "Organised year",
    description: "Planning, delivery, communications and review organised across the year while retaining flexibility.",
    proofNeed: "Multi-location capability, governance, review and long-term partnership.",
  },
];

export const experienceMix: FeatureItem[] = [
  { title: "Workplace Yoga", body: "One-off or recurring Yoga adapted to the workplace and participant group.", href: "/workplace-yoga", cta: "Explore Workplace Yoga" },
  { title: "Workplace Pilates", body: "Mat-based Pilates selected to fit the team, available space and delivery mode.", href: "/workplace-pilates", cta: "Explore Workplace Pilates" },
  { title: "Movement options", body: "Compare Yoga, Pilates, mobility and desk-based formats when the brief is not yet specific.", href: "/movement", cta: "Explore movement" },
  { title: "Mindfulness & meditation", body: "Guided meditation, mindfulness and breathwork in practical workplace formats.", href: "/meditation-mindfulness", cta: "Explore mindfulness" },
  { title: "Workplace wellbeing workshops", body: "Lunch & Learns and practical workshops for topics that benefit from explanation, discussion or guided practice.", href: "/workplace-wellbeing-workshops", cta: "Explore workshops" },
  { title: "Expert Experiences", body: "Expert-led talks, conversations and facilitated learning shaped around a specific workplace need.", href: "/expert-experiences", cta: "Explore expert experiences" },
  { title: "Online continuity", body: "Live online experiences, on-demand practices and Wellbeing Studio access for remote, hybrid or ongoing support.", href: "/online-wellbeing", cta: "Explore online wellbeing" },
];

export const whatCyaCoordinates: FeatureItem[] = [
  { title: "Planning", body: "Shaping a calendar of moments around your priorities and dates, with one named CYA contact." },
  { title: "Facilitator coordination", body: "Matching facilitators to locations, formats and availability against confirmed standards." },
  { title: "Communications support", body: "Practical materials to help your team promote participation." },
  { title: "National delivery", body: "Coordinated scheduling across multiple sites and states, subject to confirmed local capacity." },
  { title: "Online continuity", body: "Connecting live moments to appropriate digital access and resources where useful." },
  { title: "Review and reporting", body: "Regular check-ins and aggregate, privacy-safe visibility using measures that are genuinely available." },
];

export const multiSiteFeature = {
  kicker: "Multi-site support",
  heading: "One coordinated plan across several locations.",
  body: "CYA's national facilitator network supports organisations coordinating delivery across multiple sites, with each location and format confirmed against real practitioner capacity rather than a blanket promise of coverage.",
};

export const reportingFeature = {
  kicker: "Reporting & evidence",
  heading: "Useful visibility without pretending wellbeing is a dashboard score.",
  body: "For ongoing work, CYA can agree what practical participation, delivery and feedback information is available and useful to review. Reporting remains aggregate and privacy-aware; individual activity or inferred wellbeing status is not exposed to employers.",
};

export const investmentFactors: FeatureItem[] = [
  { title: "Workforce size", body: "The number of people the program needs to reach." },
  { title: "Locations", body: "How many sites, and how geographically spread they are." },
  { title: "Delivery mode", body: "Onsite, online or a mix, depending on your teams." },
  { title: "Frequency", body: "How often sessions or elements repeat across the period." },
  { title: "Preparation", body: "Planning, communications and coordination effort involved." },
  { title: "Reporting", body: "The level of aggregate visibility your organisation needs and what can be reliably measured." },
];

export const procurementQuestions: FeatureItem[] = [
  { title: "Do we need to commit to a full-year program?", body: "No. CYA can support one session, a short series, recurring delivery or a broader plan. The engagement should match the current need." },
  { title: "Can a program mix onsite and online delivery?", body: "Yes, where that mix is appropriate for the workforce, locations and available CYA services." },
  { title: "Can CYA coordinate more than one location?", body: "Yes, subject to the actual locations, timing, facilitator capacity and format requirements being confirmed." },
  { title: "What evidence can an organisation receive?", body: "The available measures depend on the delivery model. CYA should agree reporting expectations before launch and keep employer reporting aggregate and privacy-aware." },
  { title: "Can we begin with a single service such as Yoga?", body: "Yes. One service can remain a complete engagement or become part of a broader program later if that becomes useful." },
];

export const closingCTA = {
  kicker: "Next step",
  heading: "Plan the level of continuity that fits.",
  body: "Bring the workforce, locations, dates and current need. CYA can help shape a proportionate program - or tell you when a simpler one-off engagement is enough.",
  cta: { label: "Plan a wellbeing program", href: "/contact?interest=recurring", variant: "primary" as const },
};
