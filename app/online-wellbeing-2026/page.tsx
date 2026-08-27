import type { Metadata } from "next";
import { CampaignContinuityPage } from "@/components/CampaignContinuityPage";

export const metadata: Metadata = {
  title: "Online Workplace Wellbeing 2026",
  description: "Plan a practical online wellbeing rhythm for your team in 2026.",
  alternates: { canonical: "/online-wellbeing-2026" },
  robots: { index: false, follow: true },
};

export default function OnlineWellbeing2026Page() {
  return (
    <CampaignContinuityPage
      kicker="Plan online wellbeing for 2026"
      heading="Build a wellbeing rhythm your team can actually use."
      body="Shape a practical 2026 program around live online experiences, useful resources and the realities of your workforce."
      benefits={[
        "A cadence designed around business priorities and employee availability.",
        "Options for recurring sessions, monthly themes and focused masterclasses.",
        "Support for office, hybrid, remote and multi-location workforces.",
      ]}
      ctaHref="/contact?interest=studio"
      secondaryLabel="Explore online wellbeing"
      secondaryHref="/online-wellbeing"
    />
  );
}
