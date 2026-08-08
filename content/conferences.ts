import type { PageIntro } from "@/lib/types";
import type { FeatureItem } from "@/components/FeatureGrid";

export const conferencesHero: PageIntro = {
  kicker: "Conferences and events",
  heading: "Build energy, calm and connection into the agenda.",
  body: "From a 15-minute activation to morning movement, mindfulness or a practical wellbeing session, CYA designs around the audience, venue and run sheet.",
  actions: [
    { label: "Discuss your conference", href: "/consultation?interest=conference", variant: "primary" },
    { label: "Explore activation formats", href: "#formats", variant: "secondary" },
  ],
  meta: ["15-minute resets to full-day streams", "National facilitator delivery"],
};

export const agendaMoments: FeatureItem[] = [
  { title: "Morning movement", body: "An energising start before the first session of the day." },
  { title: "Transitions", body: "A short reset between heavy agenda blocks." },
  { title: "Desk stretch", body: "A seated or standing sequence delegates can do without leaving the room." },
  { title: "Reset", body: "A grounded pause during a long or intense stretch of content." },
  { title: "Wind-down", body: "A calming close to a full day before dinner or departure." },
];

export const activationFormats: FeatureItem[] = [
  { title: "15-minute activation", body: "A quick, focused moment that fits inside a tight run sheet." },
  { title: "Morning movement session", body: "A longer session before the agenda begins." },
  { title: "Desk stretch break", body: "A short, seated sequence delivered between sessions." },
  { title: "Mindfulness reset", body: "A brief guided pause to support focus and calm." },
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
  kicker: "Pre/post-event Wellbeing Studio access",
  heading: "Extend the moment before and after the event.",
  body: "Where it suits the scope of the event, CYA can arrange tailored Wellbeing Studio access for delegates ahead of or following the conference. This remains subject to scope and confirmed availability, not a standard inclusion.",
};

export const logistics: FeatureItem[] = [
  { title: "Facilitator travel", body: "Confirmed against the event location and current facilitator availability." },
  { title: "Equipment and space", body: "CYA advises on room setup, mats and any equipment needed." },
  { title: "Lead times", body: "Earlier confirmation gives more certainty over facilitator and format availability." },
  { title: "Run-sheet coordination", body: "CYA works directly with the organiser to slot moments into the agenda." },
];

export const closingCTA = {
  kicker: "Next step",
  heading: "One activation or a connected event experience.",
  body: "CYA can deliver a single moment or coordinate several experiences, including digital support before or after the event where approved.",
  cta: { label: "Discuss your conference", href: "/consultation?interest=conference", variant: "primary" as const },
};
