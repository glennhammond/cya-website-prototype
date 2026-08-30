import type { Metadata } from "next";
import { CampaignContinuityPage } from "@/components/CampaignContinuityPage";

export const metadata: Metadata = {
  title: "Workplace Yoga Australia",
  description: "Flexible workplace yoga for Australian teams, delivered onsite or online.",
  alternates: { canonical: "/workplace-yoga-australia" },
  robots: { index: false, follow: true },
};

export default function WorkplaceYogaAustraliaPage() {
  return (
    <CampaignContinuityPage
      kicker="Workplace yoga across Australia"
      heading="Help your team feel better, focus better and perform better"
      body="Bring practical, facilitator-led movement into the working day with a format shaped around your people, locations and timetable."
      benefits={[
        "Onsite or online delivery for office, hybrid and distributed teams.",
        "One-off sessions, regular classes and broader wellbeing programs.",
        "An experienced national facilitator network coordinated by Corporate Yoga Australia.",
      ]}
      ctaHref="/contact?interest=one-off"
      secondaryLabel="Explore workplace yoga"
      secondaryHref="/workplace-yoga"
    />
  );
}
