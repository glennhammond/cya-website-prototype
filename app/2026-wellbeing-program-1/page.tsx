import type { Metadata } from "next";
import { CampaignContinuityPage } from "@/components/CampaignContinuityPage";

export const metadata: Metadata = {
  title: "2026 Workplace Wellbeing Program",
  description: "Plan a workplace wellbeing program shaped around your people and priorities for 2026.",
  alternates: { canonical: "/2026-wellbeing-program-1" },
  robots: { index: false, follow: true },
};

export default function WellbeingProgram2026Page() {
  return (
    <CampaignContinuityPage
      kicker="2026 workplace wellbeing planning"
      heading="Turn wellbeing intent into a program people can experience."
      body="Bring together the right mix of live sessions, focused experiences and ongoing support for your workplace in 2026."
      benefits={[
        "A program shaped around your workforce, locations and priorities.",
        "A considered mix of movement, mindfulness, workshops and online support.",
        "Delivery coordinated across a one-off initiative or a longer program.",
      ]}
      ctaHref="/contact?interest=recurring"
      secondaryLabel="Explore wellbeing programs"
      secondaryHref="/workplace-wellbeing-programs"
    />
  );
}
