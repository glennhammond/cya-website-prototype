import type { Metadata } from "next";
import { CampaignContinuityPage } from "@/components/CampaignContinuityPage";

export const metadata: Metadata = {
  title: "Online Wellbeing Programs",
  description: "Live and on-demand online wellbeing support for modern teams.",
  alternates: { canonical: "/online-wellbeing-landing-page" },
  robots: { index: false, follow: true },
};

export default function OnlineWellbeingLandingPage() {
  return (
    <CampaignContinuityPage
      kicker="Online wellbeing"
      heading="A human-led wellbeing experience for modern teams."
      body="Give people simple ways to join live, practise between sessions and stay connected to a useful wellbeing rhythm."
      benefits={[
        "Live experiences led by experienced facilitators.",
        "On-demand options people can use when the time is right.",
        "A flexible format for hybrid and distributed organisations.",
      ]}
      ctaHref="/contact?interest=studio"
      secondaryLabel="Learn about the service"
      secondaryHref="/online-wellbeing"
    />
  );
}
