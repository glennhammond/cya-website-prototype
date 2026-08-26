import type { PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const workplaceHero: PageIntro = {
  kicker: "Workplace wellbeing",
  heading: "Useful support, designed for the way your people work.",
  body: "CYA adapts movement, mindfulness and practical learning to your audience, environment, timing and purpose. Book one session, a short series, or connect several elements over time.",
  actions: [
    { label: "Discuss a session", href: "/contact?interest=one-off", variant: "primary" },
    { label: "Explore programs", href: "/workplace-wellbeing-programs", variant: "secondary" },
  ],
  meta: ["Movement", "Mindfulness", "Workshops", "Lunch & Learns"],
};

export const needs: FeatureItem[] = [
  { title: "Energise a team", body: "Lift energy and focus during a heavy stretch of work or a low-energy time of day." },
  { title: "Reduce stiffness", body: "Practical movement for people who sit, travel or stand for long periods." },
  { title: "Create calm and focus", body: "A grounded pause before, during or after a demanding period." },
  { title: "Support connection", body: "A shared moment that brings a team or a distributed group together." },
  { title: "Build practical wellbeing skills", body: "Techniques people can understand and reuse, not abstract theory." },
  { title: "Support a distributed workforce", body: "Consistent access for people working across sites, states or from home." },
];

export const formats: FeatureItem[] = [
  { title: "One-off", body: "A single, complete session - no ongoing commitment required." },
  { title: "Short series", body: "A small run of sessions focused on one theme or team." },
  { title: "Recurring", body: "A regular class that becomes part of the working week." },
  { title: "Awareness-day activation", body: "A focused moment tied to a specific day or campaign." },
  { title: "Team event", body: "A session built around a specific team or occasion." },
  { title: "Online", body: "Delivered remotely for distributed or multi-location teams." },
  { title: "Multi-location", body: "Coordinated delivery across several sites at once." },
];

export const modalities: FeatureItem[] = [
  {
    title: "Movement",
    body: "Yoga, Pilates, mobility and desk movement, adapted to real workplaces.",
    href: "/movement",
    cta: "Explore Movement",
  },
  { title: "Mindfulness and meditation", body: "Short, grounded practices that create a useful pause during the working day.", href: "/meditation-mindfulness", cta: "Explore mindfulness" },
  { title: "Breathwork", body: "Practical breathing techniques people can use in the moment and reuse later.", href: "/meditation-mindfulness", cta: "Explore mindfulness & breathwork" },
  { title: "Sound experiences", body: "A guided, restorative moment suited to a longer session or event." },
  { title: "Workshops and Lunch & Learns", body: "Practical learning sessions, well suited to onsite or online delivery.", href: "/workplace-wellbeing-workshops", cta: "Explore workshops" },
];

export const processFeature = {
  kicker: "How CYA works",
  heading: "The format follows the workplace.",
  body: "CYA clarifies the audience and constraints, recommends an appropriate experience, coordinates delivery and helps make participation straightforward.",
  cta: { label: "How CYA works", href: "/about-us", variant: "secondary" as const },
};

export const logisticsFeature = {
  kicker: "Delivery",
  heading: "Coordinated delivery, without the administrative load.",
  body: "CYA confirms facilitator availability, location requirements and format details directly with you, so a session or series is straightforward to organise and easy for your team to join.",
};

export const closingCTA = {
  kicker: "Next step",
  heading: "Tell us what your people need.",
  body: "The first conversation can be about one session, a short series, or a broader mix across your locations.",
  cta: { label: "Discuss a session", href: "/contact?interest=one-off", variant: "primary" as const },
};
