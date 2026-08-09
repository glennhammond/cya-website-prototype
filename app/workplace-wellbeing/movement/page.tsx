import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EditorialFeature } from "@/components/EditorialFeature";
import { FeatureGrid } from "@/components/FeatureGrid";
import { StatementList } from "@/components/StatementList";
import { DividerList } from "@/components/DividerList";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProofNote } from "@/components/ProofNote";
import {
  movementHero,
  whoItsFor,
  usefulFormats,
  whatToExpect,
  inclusionFeature,
  deliveryOptions,
  relatedUseCases,
  closingCTA,
} from "@/content/movement";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Movement",
  description:
    "Yoga, Pilates, mobility and desk movement, adapted to real workplaces - no prior experience, studio setting or particular body type assumed.",
};

export default function MovementPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Workplace wellbeing", href: "/workplace-wellbeing" },
          { label: "Movement" },
        ]}
      />
      <PageHero intro={movementHero} image={media.movementHero} imagePosition="left" />
      <EditorialFeature
        kicker={whoItsFor.kicker}
        heading={whoItsFor.heading}
        body={whoItsFor.body}
        tone="mist"
        image={media.movementGroupIndustrial}
      />
      <FeatureGrid kicker="Useful formats" heading="However much time you have to give it." items={usefulFormats} tone="white" compact columns={4} />
      <StatementList kicker="What to expect" heading="What participants can expect." items={whatToExpect} tone="mist" columns={2} />
      <EditorialFeature
        kicker={inclusionFeature.kicker}
        heading={inclusionFeature.heading}
        body={inclusionFeature.body}
        tone="white"
        reverse
        image={media.movementFacilitatorAdjustment}
      />

      <ProofNote
        tone="mist"
        reverse
        placeholderVariant="movement"
        placeholderCaption="Case study placeholder - participant feedback and repeat engagement."
        note="Delivery quality and participant feedback evidence required before publication; no health-outcome claims."
        heading="Delivery quality, not health-outcome claims."
        body="Movement case studies focus on delivery quality, participant feedback and repeat engagement, not health, flexibility or fitness outcomes."
      />

      <DividerList kicker="Delivery options" heading="Onsite, online or across several locations." items={deliveryOptions} tone="white" />
      <DividerList kicker="Related use cases" heading="Movement rarely stands entirely alone." items={relatedUseCases} tone="mist" />

      <CTASection kicker={closingCTA.kicker} heading={closingCTA.heading} body={closingCTA.body} cta={closingCTA.cta} />
    </>
  );
}
