import type { Evidenced } from "@/lib/types";

export const site = {
  name: "Corporate Yoga Australia",
  shortName: "CYA",
  studioName: "Wellbeing Studio",
  studioLockup: "Wellbeing Studio by Corporate Yoga Australia",
  founded: "2014",
  legalEntity: "Deborah Gail Lewis, ABN 59 474 451 715, trading as Corporate Yoga Australia",
  memberSignInUrl: "https://studio.corporateyoga.com.au",
  description:
    "Corporate Yoga Australia helps organisations start with one useful wellbeing moment and build a connected year of movement, mindfulness, learning and digital support.",
};

export const responseCommitment: Evidenced<string> = {
  value: "We aim to respond within one business day.",
  status: "safe-working-copy",
  note: "Final response-time wording requires operational confirmation before launch (Strategic Source of Truth §7).",
};

export const claimGuardrails = {
  yearViewLabel:
    "Explore an example year in action. Your actual program is built around your people, locations and priorities.",
};
