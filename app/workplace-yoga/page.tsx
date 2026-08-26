import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { EditorialFeature } from "@/components/EditorialFeature";
import { StatementList } from "@/components/StatementList";
import { DividerList } from "@/components/DividerList";
import { ProofNote } from "@/components/ProofNote";
import { CTASection } from "@/components/CTASection";
import { media } from "@/content/media";
import {
  yogaHero,
  sessionFits,
  participationFeature,
  tailoring,
  deliveryModes,
  facilitatorFeature,
  practicalLogistics,
  authorityResource,
  relatedPaths,
  closingCTA,
} from "@/content/workplace-yoga";

export const metadata: Metadata = {
  title: "Workplace Yoga for Australian Teams",
  description:
    "Human-led workplace Yoga sessions for Australian teams, adapted to real workplaces. One-off, recurring, onsite and online delivery available.",
  alternates: {
    canonical: "/workplace-yoga",
  },
};

export default function WorkplaceYogaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Movement", href: "/movement" }, { label: "Workplace Yoga" }]} />
      <PageHero intro={yogaHero} image={media.programsHero} />

      <FeatureGrid
        kicker="Ways to book Yoga"
        heading="Choose the session shape that fits the brief."
        items={sessionFits}
        tone="white"
        columns={4}
        compact
      />

      <EditorialFeature
        kicker={participationFeature.kicker}
        heading={participationFeature.heading}
        body={participationFeature.body}
        tone="mist"
        image={media.movementGroupIndustrial}
      />

      <StatementList
        kicker="Tailoring"
        heading="The Yoga session follows the workplace, not the other way around."
        items={tailoring}
        tone="white"
        columns={2}
      />

      <DividerList
        kicker="Delivery modes"
        heading="Onsite, online or coordinated across locations."
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

      <FeatureGrid
        kicker="Practical logistics"
        heading="Make the session easy to organise and easy to join."
        items={practicalLogistics}
        tone="mist"
        columns={2}
      />

      <ProofNote
        tone="white"
        placeholderVariant="movement"
        placeholderCaption="Workplace Yoga case evidence placeholder - client-approved delivery context and participant feedback required."
        note="Publish only with client permission and verified delivery facts. Avoid unsupported health, productivity, stress-reduction or flexibility outcome claims."
        heading="Case evidence will show delivery quality in context."
        body="Yoga proof should demonstrate the workplace need, how the session was adapted, what was delivered and what participants or clients reported - with permission and source context recorded before publication."
      />

      <EditorialFeature
        kicker={authorityResource.kicker}
        heading={authorityResource.heading}
        body={authorityResource.body}
        cta={authorityResource.cta}
        tone="mist"
        image={media.homeOneOff}
      />

      <DividerList
        kicker="Where Yoga can lead"
        heading="Keep it as one session, compare movement options or connect it when useful."
        items={relatedPaths}
        tone="white"
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
