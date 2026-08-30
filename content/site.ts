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
    "Human-led workplace yoga, Pilates, mindfulness, workshops and wellbeing programs for Australian organisations, delivered onsite, online and across locations.",
};

export const responseCommitment: Evidenced<string> = {
  value: "CYA will review your enquiry and respond with the appropriate next step.",
  status: "safe-working-copy",
  note: "No fixed response-time promise is published until an operational service level is formally confirmed.",
};

export const claimGuardrails = {
  yearViewLabel:
    "Explore an example year in action. Your actual program is built around your people, locations and priorities.",
};
