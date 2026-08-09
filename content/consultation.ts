import type { ConsultationInterest, PageIntro } from "@/lib/types";

export const consultationHero: PageIntro = {
  kicker: "Book a wellbeing consultation",
  heading: "Start with the need, not a package.",
  body: "This conversation might cover one session, a short series, an event, Wellbeing Studio, an ongoing program, or annual support - there's no wrong place to start. We'll use it to understand the context and recommend a useful next step.",
};

export const interestOptions: ConsultationInterest[] = [
  { value: "one-off", label: "A one-off session" },
  { value: "conference", label: "A conference or event" },
  { value: "recurring", label: "A recurring or connected program" },
  { value: "multi-site", label: "Multi-site delivery" },
  { value: "studio", label: "Wellbeing Studio" },
  { value: "not-sure", label: "Not sure yet" },
];

export const interestLabelByType: Record<string, string> = Object.fromEntries(
  interestOptions.map((option) => [option.value, option.label]),
);

export const workforceBands = ["Under 50", "50–199", "200–499", "500–1,999", "2,000+"];

export const timeframeOptions = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3 months or more",
  "Just exploring",
];

export const deliveryModes = ["Onsite", "Online", "Hybrid", "Not sure yet"];
