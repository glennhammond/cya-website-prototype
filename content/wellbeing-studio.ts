import type { PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const studioHero: PageIntro = {
  kicker: "Wellbeing Studio by Corporate Yoga Australia",
  heading: "Practical digital wellbeing support, available beyond the scheduled session.",
  body: "Give employees access to short live and on-demand practices designed for different moments in the workday and beyond.",
  actions: [
    { label: "Book a Studio walkthrough", href: "/consultation?interest=studio", variant: "primary" },
  ],
};

export const employeeValueFeature = {
  kicker: "For employees",
  heading: "Find something useful for the moment you are in.",
  body: "Choose by need, time available or context — from a quick reset between meetings to movement, mindfulness or an audio practice at home.",
  cta: { label: "See the member experience", href: "#member-experience", variant: "secondary" as const },
};

export const employerValueFeature = {
  kicker: "For employers",
  heading: "A manageable way to extend access and continuity.",
  body: "Wellbeing Studio can stand alone or support live CYA programs. Employer reporting remains privacy-safe and aggregate, using only measures that are currently available and approved.",
  cta: { label: "Book a Studio walkthrough", href: "/consultation?interest=studio", variant: "secondary" as const },
};

export const memberExperience: FeatureItem[] = [
  { title: "Live micro-sessions", body: "Short, scheduled live practices employees can join in real time." },
  { title: "On-demand library", body: "Recorded movement, Pilates and audio meditation content available any time." },
  { title: "Monthly themes", body: "Fresh content organised around a practical monthly focus." },
  { title: "“How are you feeling?” pathways", body: "Content organised by need and time available, not just by category." },
];

export const liveOnDemandModel: FeatureItem[] = [
  { title: "Scheduled live sessions", body: "Regular live practices at confirmed times, delivered through Moodle." },
  { title: "Recorded library", body: "No live replay — professionally recorded content instead, available on demand." },
  { title: "Fresh content releases", body: "New movement and audio content added on a governed cadence." },
];

export const implementation: FeatureItem[] = [
  { title: "Employer onboarding", body: "Access links and promotional material provided to help launch the Studio internally." },
  { title: "Member sign-in", body: "Employees sign in directly at studio.corporateyoga.com.au, kept separate from the CYA sales journey." },
  { title: "Support", body: "A defined support path for member access questions." },
];

export const privacyFeature = {
  kicker: "Privacy and aggregate reporting",
  heading: "Aggregate visibility, never individual activity.",
  body: "Employer reporting is limited to eligible or registered counts, aggregate active use and aggregate attendance — never names, individual histories or inferred wellbeing status. Segments below a minimum group size are suppressed or combined.",
};

export const progressionLevels: FeatureItem[] = [
  {
    title: "Access",
    body: "Studio availability and core content for your organisation.",
  },
  {
    title: "Engage",
    body: "Adoption support, communications materials and reporting support layered on top of access.",
  },
  {
    title: "Strategic partnership",
    body: "Tailored planning, connected live delivery and broader organisational support.",
  },
];

export const closingCTA = {
  kicker: "Next step",
  heading: "See whether Wellbeing Studio fits your organisation.",
  body: "A walkthrough is the easiest way to see the member experience and talk through employer onboarding.",
  cta: { label: "Book a Studio walkthrough", href: "/consultation?interest=studio", variant: "primary" as const },
};
