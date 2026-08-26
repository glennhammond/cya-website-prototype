import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { EditorialFeature } from "@/components/EditorialFeature";
import { DividerList } from "@/components/DividerList";
import { ProofNote } from "@/components/ProofNote";
import { CTASection } from "@/components/CTASection";
import { ServiceStructuredData } from "@/components/StructuredData";
import { media } from "@/content/media";
import {
  mindfulnessHero,
  workplaceContexts,
  sessionTypes,
  participationFeature,
  deliveryModes,
  facilitatorFeature,
  authorityResource,
  relatedPaths,
  closingCTA,
} from "@/content/meditation-mindfulness";

export const metadata: Metadata = {
  title: "Workplace Mindfulness & Meditation",
  description:
    "Practical workplace mindfulness, guided meditation and breathwork for Australian teams, delivered onsite, online or as part of a wider wellbeing program.",
  alternates: {
    canonical: "/meditation-mindfulness",
  },
};

export default function MeditationMindfulnessPage() {
  return (
    <>
      <ServiceStructuredData
        name="Workplace Mindfulness & Meditation"
        description="Practical workplace mindfulness, guided meditation and breathwork for Australian teams, delivered onsite, online or as part of a wider wellbeing program."
        path="/meditation-mindfulness"
        breadcrumbLabel="Mindfulness & Meditation"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Mindfulness & Meditation" }]} />
      <PageHero intro={mindfulnessHero} image={media.aboutWorldview} imagePosition="left" />

      <FeatureGrid
        kicker="Where it can fit"
        heading="Choose the workplace moment before choosing the format."
        items={workplaceContexts}
        tone="white"
        columns={4}
        compact
      />

      <FeatureGrid
        kicker="Session types"
        heading="From a short guided pause to a deeper workshop or course."
        items={sessionTypes}
        tone="mist"
        columns={3}
      />

      <EditorialFeature
        kicker={participationFeature.kicker}
        heading={participationFeature.heading}
        body={participationFeature.body}
        tone="white"
        image={media.workplaceWellbeingLunchLearn}
      />

      <DividerList
        kicker="Delivery"
        heading="Onsite, online or coordinated across teams."
        items={deliveryModes}
        tone="mist"
      />

      <EditorialFeature
        kicker={facilitatorFeature.kicker}
        heading={facilitatorFeature.heading}
        body={facilitatorFeature.body}
        tone="white"
        reverse
        image={media.debbyTeacherPortrait}
      />

      <ProofNote
        tone="mist"
        placeholderVariant="gathering"
        placeholderCaption="Mindfulness case evidence placeholder - verified delivery context, participant feedback and permission required."
        note="Do not publish clinical, treatment, guaranteed stress-reduction, productivity or resilience claims. Evidence should describe delivery and reported experience within its source limitations."
        heading="Evidence should stay close to what was actually observed."
        body="Mindfulness proof should show the workplace context, format, participation and client or participant feedback without converting a wellbeing session into a medical or guaranteed performance claim."
      />

      <EditorialFeature
        kicker={authorityResource.kicker}
        heading={authorityResource.heading}
        body={authorityResource.body}
        cta={authorityResource.cta}
        tone="white"
        image={media.studioEmployeeHome}
      />

      <DividerList
        kicker="Related pathways"
        heading="Use the format that fits the need."
        items={relatedPaths}
        tone="mist"
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
