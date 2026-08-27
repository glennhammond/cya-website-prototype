import type { PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const workshopsHero: PageIntro = {
  kicker: "Workplace Wellbeing Workshops & Expert Experiences",
  heading: "Practical Workplace Wellbeing Workshops",
  body: "CYA delivers practical Lunch & Learns, workshops and expert-led wellbeing sessions for teams. Choose a topic and format that fits the workplace brief; CYA confirms the most appropriate practitioner and scope rather than selling an anonymous training catalogue.",
  actions: [
    { label: "Discuss a workshop", href: "/contact?interest=one-off", variant: "primary" },
    { label: "Explore wellbeing programs", href: "/workplace-wellbeing-programs", variant: "secondary" },
  ],
  meta: ["Lunch & Learn", "Interactive workshop", "Online or onsite", "Expert-led"],
};

export const situations: FeatureItem[] = [
  { title: "A team needs practical tools", body: "Use a focused workshop when the brief calls for explanation, reflection and techniques people can understand and reuse." },
  { title: "A wellbeing calendar needs depth", body: "Add an expert-led learning experience around a topic already relevant to the organisation or workforce." },
  { title: "A campaign needs more than a message", body: "Connect an awareness day or internal initiative with a useful human-led session rather than a passive resource drop." },
  { title: "Distributed teams need one shared session", body: "Use live online delivery when people across sites or home offices need access to the same expert experience." },
];

export const featuredTopics: FeatureItem[] = [
  { title: "Stress management", body: "Practical workplace approaches to recognising pressure, creating useful pauses and building repeatable wellbeing habits. Exact content and practitioner are confirmed for the brief." },
  { title: "Sleep", body: "A workplace-relevant session exploring practical sleep habits and routines without presenting the session as medical treatment." },
  { title: "Nutrition", body: "Practical nutrition education can be delivered by an appropriately qualified practitioner, with scope confirmed before publication or booking." },
  { title: "Mindfulness", body: "Interactive learning and guided practices that make mindfulness approachable in a workplace setting." },
  { title: "Breathwork", body: "A practical expert-led session using guided breathing techniques, either alone or connected with mindfulness or movement." },
  { title: "Financial wellbeing", body: "A current CYA Lunch & Learn topic. Presenter, scope and any professional-credential requirements must be confirmed for the specific session before publication." },
];

export const expertIntro = {
  kicker: "People behind the sessions",
  heading: "Show the practitioner, not just the topic title.",
  body: "CYA's network includes practitioners with different specialist backgrounds. The examples below are grounded in CYA's current public team information; exact workshop assignment remains subject to topic fit, credentials and availability.",
};

export const namedExperts: FeatureItem[] = [
  {
    title: "Val — Wellness Facilitator & qualified Nutritionist",
    body: "Val brings a nutrition specialism to CYA's practitioner network. Nutrition workshop scope should stay within her verified professional expertise and the agreed workplace brief.",
  },
  {
    title: "Chantal — Yoga, Mindfulness & Breathwork",
    body: "Chantal's current CYA profile identifies Yoga, Mindfulness and Breathwork expertise, making those areas visible as human-led practices rather than anonymous course topics.",
  },
  {
    title: "Debby Lewis — Founder, Corporate Yoga Australia",
    body: "Debby founded CYA after working in corporate roles and remains closely involved in the service and facilitator network. Her founder perspective supports CYA's workplace-aware approach; specific expert-session claims should still match the confirmed brief.",
  },
];

export const formats: FeatureItem[] = [
  { title: "Lunch & Learn", body: "A focused learning session designed to fit into the workday, delivered onsite or online depending on the brief." },
  { title: "Interactive workshop", body: "More room for explanation, guided exercises, questions and practical application." },
  { title: "Expert conversation", body: "A facilitated conversation or interview format when the organisation wants expert perspective without a formal training feel." },
  { title: "Conference or event session", body: "A topic-led experience shaped around an event agenda, audience and available time.", href: "/conferences-events", cta: "Explore conferences and events" },
];

export const deliveryModes: FeatureItem[] = [
  { title: "Onsite", body: "Delivered in the workplace or at an off-site event, subject to practitioner and location availability." },
  { title: "Online", body: "Live online delivery for distributed teams and organisations operating across locations." },
  { title: "Connected program", body: "A workshop can stand alone or sit alongside movement, mindfulness and online continuity within a broader wellbeing program." },
];

export const evidenceFeature = {
  kicker: "Evidence & claims",
  heading: "Expert-led does not mean overclaiming.",
  body: "Workshop copy should distinguish practical education and participant experience from clinical, financial-advice or guaranteed performance outcomes. Any credential-sensitive topic must be matched to a verified practitioner and appropriate scope before it is promoted as a specific session.",
};

export const relatedPaths: FeatureItem[] = [
  { title: "Expert Experiences", body: "Choose an expert-led talk, facilitated conversation or learning experience when the practitioner is central to the brief.", href: "/expert-experiences", cta: "Explore expert experiences" },
  { title: "Mindfulness & Meditation", body: "Use the dedicated mindfulness service when the brief is primarily experiential rather than workshop-led.", href: "/meditation-mindfulness", cta: "Explore mindfulness" },
  { title: "Online Wellbeing", body: "Connect expert sessions with ongoing live or on-demand access for remote and hybrid teams.", href: "/online-wellbeing", cta: "Explore online wellbeing" },
  { title: "Workplace Wellbeing Programs", body: "Build workshops into a broader calendar when the organisation needs continuity across formats and dates.", href: "/workplace-wellbeing-programs", cta: "Explore programs" },
];

export const closingCTA = {
  kicker: "Choose the topic, then confirm the right expert",
  heading: "Tell CYA what your team needs to understand, practise or discuss.",
  body: "CYA can recommend a suitable workshop format and practitioner, or keep the engagement as one focused Lunch & Learn when that is all the workplace needs.",
  cta: { label: "Discuss a workshop", href: "/contact?interest=one-off", variant: "primary" as const },
};
