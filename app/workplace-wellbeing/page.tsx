import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { StatementList } from "@/components/StatementList";
import { DividerList } from "@/components/DividerList";
import { EditorialFeature } from "@/components/EditorialFeature";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProofNote } from "@/components/ProofNote";
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
    "CYA adapts movement, mindfulness and practical learning to your audience, environment, timing and purpose - from a single session to a connected program.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function WorkplaceWellbeingPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Workplace wellbeing" }]} />
      <PageHero intro={workplaceHero} image={media.workplaceWellbeingHero} imagePosition="right" />
      <StatementList
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
      <DividerList
        kicker="Modalities"
        heading="Ingredients CYA adapts to the brief - not the whole product."
        body="Modalities are ingredients, not the main product architecture."
        items={modalities}
        tone="mist"
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
        tone="mist"
        reverse
        image={media.workplaceWellbeingLunchLearn}
      />

      <ProofNote
        placeholderVariant="workplace"
        placeholderCaption="Case study placeholder - delivery quality across formats and modalities."
        note="Requires format-specific delivery, feedback and renewal evidence before publication."
        heading="Evidence suited to the format, not one blanket claim."
        body="Useful evidence looks different for a single session, a recurring rhythm or a connected program. Explore delivery-specific examples on the Movement, Conferences and Programs pages, or visit the Case studies page."
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
