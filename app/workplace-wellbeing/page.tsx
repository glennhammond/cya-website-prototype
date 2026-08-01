import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { EditorialFeature } from "@/components/EditorialFeature";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
  workplaceHero,
  needs,
  formats,
  modalities,
  processFeature,
  logisticsFeature,
  closingCTA,
} from "@/content/workplace-wellbeing";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Workplace Wellbeing",
  description:
    "CYA adapts movement, mindfulness and practical learning to your audience, environment, timing and purpose — from a single session to a connected program.",
};

export default function WorkplaceWellbeingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Workplace wellbeing" }]} />
      <Hero intro={workplaceHero} image={media.workplaceWellbeingHero} />
      <FeatureGrid
        kicker="Start by need"
        heading="What would be useful for your people right now?"
        items={needs}
        tone="mist"
        columns={3}
      />
      <FeatureGrid
        kicker="Choose a format"
        heading="Support that fits how your team actually works."
        items={formats}
        tone="white"
        compact
        columns={4}
      />
      <FeatureGrid
        kicker="Modalities"
        heading="Ingredients CYA adapts to the brief — not the whole product."
        body="Modalities are ingredients, not the main product architecture. CYA selects and adapts them to the workplace situation."
        items={modalities}
        tone="mist"
        columns={3}
      />
      <EditorialFeature
        kicker={processFeature.kicker}
        heading={processFeature.heading}
        body={processFeature.body}
        cta={processFeature.cta}
        image={media.debbyTeacherPortrait}
      />
      <EditorialFeature
        kicker={logisticsFeature.kicker}
        heading={logisticsFeature.heading}
        body={logisticsFeature.body}
        tone="white"
        reverse
        image={media.workplaceWellbeingLunchLearn}
      />
      <CTASection
        kicker={closingCTA.kicker}
        heading={closingCTA.heading}
        body={closingCTA.body}
        cta={closingCTA.cta}
      />
    </>
  );
}
