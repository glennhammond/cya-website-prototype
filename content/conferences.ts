import type { PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const conferencesHero: PageIntro = {
  kicker: "Conferences and events",
  heading: "Build energy, calm and connection into the agenda",
  body: "From a short activation to morning movement, mindfulness or a practical wellbeing session, Corporate Yoga Australia designs around the audience, venue and run sheet.",
  actions: [
    { label: "Discuss your conference", href: "/contact?interest=conference", variant: "primary" },
    { label: "Explore activation formats", href: "#formats", variant: "secondary" },
  ],
  meta: ["Short resets to longer sessions", "National facilitator delivery"],
};

export const agendaMoments: FeatureItem[] = [
  { title: "Morning movement", body: "A useful start before the first session of the day." },
  { title: "Transitions", body: "A short reset between heavy agenda blocks." },
  { title: "Desk stretch", body: "A seated or standing sequence delegates can do without leaving the room." },
  { title: "Reset", body: "A grounded pause during a long or intense stretch of content." },
  { title: "Wind-down", body: "A calmer close to a full day before dinner or departure." },
];

export const activationFormats: FeatureItem[] = [
  { title: "Short activation", body: "A focused movement or wellbeing moment that fits inside a tight run sheet." },
  { title: "Morning movement session", body: "A longer session before the agenda begins." },
  { title: "Desk stretch break", body: "A short, seated or standing sequence delivered between sessions." },
  { title: "Mindfulness reset", body: "A brief guided pause within the event day." },
  { title: "Wind-down session", body: "A restorative close to a demanding day." },
  { title: "Wellbeing stream", body: "A dedicated wellbeing thread running alongside the main agenda." },
];

export const eventRhythm: FeatureItem[] = [
  { title: "Pre-event", body: "Confirm the run sheet, room and equipment needs with the organiser." },
  { title: "Morning", body: "Deliver a movement or focus activation to open the day." },
  { title: "Midday", body: "A short reset between sessions or across a lunch break." },
  { title: "Afternoon", body: "A desk stretch or mindfulness moment during a heavier block." },
  { title: "Close", body: "A wind-down session before dinner or departure." },
];

export const studioAccessFeature = {
  kicker: "Pre/post-event online wellbeing",
  heading: "Extend the moment before and after the event",
  body: "Where it suits the scope, Corporate Yoga Australia can discuss online wellbeing or Wellbeing Studio access around the event. This remains subject to the agreed service and current capability, not a standard inclusion.",
};

export const logistics: FeatureItem[] = [
  { title: "Facilitator travel", body: "Confirmed against the event location and current facilitator availability." },
  { title: "Equipment and space", body: "Corporate Yoga Australia advises on room setup, mats and any equipment needed." },
  { title: "Lead times", body: "Earlier confirmation gives more certainty over facilitator and format availability." },
  { title: "Run-sheet coordination", body: "Corporate Yoga Australia works directly with the organiser to slot moments into the agenda." },
];

export const closingCTA = {
  kicker: "Next step",
  heading: "One activation or a connected event experience",
  body: "Corporate Yoga Australia can deliver a single moment or coordinate several experiences, including online support before or after the event where appropriate.",
  cta: { label: "Discuss your conference", href: "/contact?interest=conference", variant: "primary" as const },
};
