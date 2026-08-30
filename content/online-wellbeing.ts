import type { PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const onlineHero: PageIntro = {
  kicker: "Online Wellbeing",
  heading: "Keep workplace wellbeing useful between rooms, locations and scheduled sessions.",
  body: "CYA combines live online experiences, on-demand practices, expert content and Wellbeing Studio access to support remote, hybrid and distributed teams. The proposition is an ongoing human-led service relationship, with the Studio providing continuity where it helps.",
  actions: [
    { label: "Discuss online wellbeing", href: "/contact?interest=studio", variant: "primary" },
    { label: "Explore workplace wellbeing programs", href: "/workplace-wellbeing-programs", variant: "secondary" },
  ],
  meta: ["Remote & hybrid teams", "Live & on-demand", "Ongoing or stand-alone"],
};

export const situations: FeatureItem[] = [
  { title: "People work across locations", body: "Give distributed teams access to shared wellbeing experiences without relying on one physical site." },
  { title: "Live sessions need continuity", body: "Extend the value of scheduled CYA sessions with practical resources and short practices people can return to." },
  { title: "A campaign should last longer than one day", body: "Use online access to connect awareness-day activity with preparation, follow-up and related resources." },
  { title: "A program needs a digital layer", body: "Combine online access with onsite delivery, workshops and recurring rhythms when the organisation wants a more connected service." },
];

export const liveExperiences: FeatureItem[] = [
  { title: "Live mindfulness", body: "Short scheduled practices that give employees a shared pause during the working week." },
  { title: "Live movement", body: "Accessible desk-based or movement sessions designed for people joining from different workplaces or home." },
  { title: "Expert Lunch & Learns", body: "Online learning sessions that bring practical wellbeing topics and human expertise into the program." },
];

export const onDemand: FeatureItem[] = [
  { title: "Movement and mobility", body: "Short recorded practices that can be used around the workday." },
  { title: "Yoga and Pilates", body: "Recorded sessions that extend the movement offer beyond scheduled live delivery." },
  { title: "Meditation and breathwork", body: "Audio or video practices that people can choose when a quieter reset is more useful." },
  { title: "Monthly wellbeing themes", body: "A changing focus that gives organisations a practical way to keep communication and resources connected over time." },
];

export const continuityFeature = {
  kicker: "Connected continuity",
  heading: "Wellbeing Studio is the delivery layer, not the reason to buy CYA.",
  body: "The Studio gives CYA a practical place to organise live access, on-demand practices, resources and program continuity. It supports the relationship between the organisation, employees and CYA rather than replacing facilitators or turning the service into software procurement.",
};

export const employeeExperience: FeatureItem[] = [
  { title: "Choose what is useful now", body: "Employees can find a short practice by need, available time or context rather than navigating a training catalogue." },
  { title: "Join live when it suits", body: "Scheduled online experiences create shared moments for people who are not in the same room." },
  { title: "Return on demand", body: "Recorded practices and resources remain available between live sessions." },
];

export const organisationExperience: FeatureItem[] = [
  { title: "A coordinated launch", body: "CYA can provide access information and communication material to help organisations introduce the service internally." },
  { title: "Connected with other CYA delivery", body: "Online access can stand alone or sit alongside onsite sessions, campaigns, workshops and broader wellbeing programs." },
  { title: "Privacy-aware reporting", body: "Reporting should stay aggregate and limited to measures that are actually available and approved, without exposing individual activity or inferred wellbeing status." },
];

export const relatedPaths: FeatureItem[] = [
  { title: "Workplace wellbeing programs", body: "Plan live, online and other experiences as one connected program when the organisation needs broader continuity.", href: "/workplace-wellbeing-programs", cta: "Explore programs" },
  { title: "Mindfulness & meditation", body: "Use short live or on-demand mindfulness practices as part of an online or hybrid rhythm.", href: "/meditation-mindfulness", cta: "Explore mindfulness" },
  { title: "Workplace Yoga", body: "Combine online access with a live yoga session or recurring class when movement is part of the brief.", href: "/workplace-yoga", cta: "Explore Workplace Yoga" },
];

export const closingCTA = {
  kicker: "Plan the right level of continuity",
  heading: "Start with the service need, then decide what digital support belongs around it.",
  body: "CYA can discuss one online experience, ongoing access, a hybrid program or how Wellbeing Studio could support an existing workplace wellbeing plan.",
  cta: { label: "Discuss online wellbeing", href: "/contact?interest=studio", variant: "primary" as const },
};
