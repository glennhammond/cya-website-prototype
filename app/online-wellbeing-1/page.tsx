import type { Metadata } from "next";
import { CampaignContinuityPage } from "@/components/CampaignContinuityPage";

export const metadata: Metadata = {
  title: "Online Wellbeing for Teams",
  description: "Human-led online wellbeing for busy, hybrid and distributed teams.",
  alternates: { canonical: "/online-wellbeing-1" },
  robots: { index: false, follow: true },
};

export default function OnlineWellbeingCampaignPage() {
  return (
    <CampaignContinuityPage
      kicker="Online wellbeing for busy teams"
      heading="Make wellbeing easier to join, wherever work happens."
      body="Combine live online experiences with practical resources your people can return to between sessions."
      benefits={[
        "Facilitator-led sessions that keep human connection in the experience.",
        "Flexible access for office, hybrid, remote and distributed teams.",
        "Continuity through useful on-demand practices and resources.",
      ]}
      ctaHref="/contact?interest=studio"
      secondaryLabel="See the full online service"
      secondaryHref="/online-wellbeing"
    />
  );
}
