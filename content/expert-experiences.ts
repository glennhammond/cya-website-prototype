import type { FeatureItem } from "@/components/FeatureGrid";
import type { PageIntro } from "@/lib/types";

export const expertHero: PageIntro = {
  kicker: "Expert Experiences",
  heading: "Expert-Led Wellbeing Experiences for Australian Workplaces",
  body: "Bring a credible practitioner into the workday for a focused talk, facilitated conversation, Lunch & Learn or practical learning experience shaped around your people and purpose.",
  actions: [
    { label: "Discuss an expert experience", href: "/contact?interest=one-off", variant: "primary" },
    { label: "Explore workplace workshops", href: "/workplace-wellbeing-workshops", variant: "secondary" },
  ],
  meta: ["Onsite or online", "Topic-led", "Practitioner matched to the brief"],
};

export const experienceFormats: FeatureItem[] = [
  { title: "Lunch & Learn", body: "A focused expert-led session that fits into the working day and leaves room for practical questions." },
  { title: "Facilitated conversation", body: "An interview, panel or guided discussion for organisations that want an accessible learning format." },
  { title: "Speaker session", body: "A clear expert perspective shaped around an event, leadership forum or internal wellbeing theme." },
  { title: "Practical experience", body: "A participatory session combining explanation with an appropriate guided practice or activity." },
];

export const matchingPrinciples: FeatureItem[] = [
  { title: "Start with the workplace need", body: "Corporate Yoga Australia clarifies the audience, context and intended takeaway before recommending a topic or practitioner." },
  { title: "Verify the practitioner", body: "Relevant experience, qualifications and scope are confirmed for the actual engagement before publication or booking." },
  { title: "Shape the format", body: "Timing, delivery mode, interaction and practical takeaways are adapted to the event or working day." },
  { title: "Keep claims responsible", body: "Sessions offer credible learning and experience without promising medical, psychological or guaranteed business outcomes." },
];

export const expertRelatedPaths: FeatureItem[] = [
  { title: "Workplace Wellbeing Workshops", body: "Compare structured workshops and topic families for teams that need practical learning.", href: "/workplace-wellbeing-workshops", cta: "Explore workshops" },
  { title: "Meditation & Mindfulness", body: "Choose a guided workplace practice when the main need is experiential rather than speaker-led.", href: "/meditation-mindfulness", cta: "Explore mindfulness" },
  { title: "Workplace Wellbeing Programs", body: "Connect expert experiences with movement, mindfulness and ongoing support where continuity is useful.", href: "/workplace-wellbeing-programs", cta: "Explore programs" },
];

export const expertClosing = {
  kicker: "Next step",
  heading: "What should your team understand, discuss or practise?",
  body: "Share the audience, topic, timing and delivery context. Corporate Yoga Australia will recommend a suitable expert experience and confirm the practitioner before the engagement proceeds.",
  cta: { label: "Discuss an expert experience", href: "/contact?interest=one-off", variant: "primary" as const },
};
