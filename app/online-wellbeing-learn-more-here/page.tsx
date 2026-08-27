import type { Metadata } from "next";
import { CampaignContinuityPage } from "@/components/CampaignContinuityPage";

export const metadata: Metadata = {
  title: "Learn More About Online Wellbeing",
  description: "Learn how CYA combines live online wellbeing with practical continuity for teams.",
  alternates: { canonical: "/online-wellbeing-learn-more-here" },
  robots: { index: false, follow: true },
};

export default function OnlineWellbeingLearnMorePage() {
  return (
    <CampaignContinuityPage
      kicker="Online wellbeing for workplaces"
      heading="Live support, practical resources and a reason to return."
      body="CYA designs online wellbeing around the needs of the organisation and the day-to-day experience of the people taking part."
      benefits={[
        "Join from home, the office or across multiple locations.",
        "Choose a one-off experience or a recurring program.",
        "Connect live delivery with on-demand Wellbeing Studio access where useful.",
      ]}
      ctaHref="/contact?interest=studio"
      secondaryLabel="View online wellbeing"
      secondaryHref="/online-wellbeing"
    />
  );
}
