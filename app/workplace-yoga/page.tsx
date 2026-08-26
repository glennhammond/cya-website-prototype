import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { EditorialFeature } from "@/components/EditorialFeature";
import { StatementList } from "@/components/StatementList";
import { DividerList } from "@/components/DividerList";
import { ProofNote } from "@/components/ProofNote";
import { CTASection } from "@/components/CTASection";
import { ServiceStructuredData } from "@/components/StructuredData";
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
  title: "Workplace Yoga Classes Australia",
  description:
    "Workplace Yoga classes for Australian teams, adapted to real workplaces. Book one-off or recurring sessions with onsite and online delivery available.",
  alternates: {
    canonical: "/workplace-yoga",
  },
};

export default function WorkplaceYogaPage() {
  return (
    <>
      <ServiceStructuredData
        name="Workplace Yoga"
        description="Human-led workplace Yoga sessions for Australian teams, adapted to real workplaces. One-off, recurring, onsite and online delivery available."
        path="/workplace-yoga"
        breadcrumbLabel="Workplace Yoga"
        breadcrumbs={[
          { name: "Movement", path: "/movement" },
          { name: "Workplace Yoga", path: "/workplace-yoga" },
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Movement", href: "/movement" },
          { label: "Workplace Yoga" },
        ]}
      />
      <PageHero intro={yogaHero} image={media.homeOneOff} imagePosition="right" />
      <FeatureGrid
        kicker="Ways to use Workplace Yoga"
        heading="One session can be the whole answer."
        body="Choose the format that fits the workplace moment. A broader wellbeing program is available when useful, not required."
        items={sessionFits}
        tone="mist"
        columns={4}
      />
      <EditorialFeature
        kicker={participationFeature.kicker}
        heading={participationFeature.heading}
        body={participationFeature.body}
        tone="white"
        image={media.movementGroupIndustrial}
      />
      <StatementList
        kicker="Tailored to the workplace"
        heading="The format follows the people, space and purpose."
        items={tailoring}
        tone="mist"
        columns={2}
      />
      <DividerList
        kicker="Delivery"
        heading="Workplace Yoga can meet teams where they are."
        items={deliveryModes}
        tone="white"
      />
      <EditorialFeature
        kicker={facilitatorFeature.kicker}
        heading={facilitatorFeature.heading}
        body={facilitatorFeature.body}
        tone="mist"
        reverse
        image={media.debbyTeacherPortrait}
      />
      <FeatureGrid
        kicker="Practical planning"
        heading="Simple logistics make participation easier."
        items={practicalLogistics}
        tone="white"
        columns={3}
      />
      <ProofNote
        kicker="Evidence"
        heading="Workplace Yoga proof should show the workplace context, not make generic health promises."
        body="CYA is qualifying service-specific delivery evidence for publication. Until that evidence is approved, this page explains the service without claiming guaranteed health, productivity or participation outcomes."
        placeholderVariant="workplace"
        placeholderCaption="Workplace Yoga evidence in qualification — client context and delivery facts required before publication."
        status="evidence-required"
        note="Add approved Workplace Yoga delivery evidence when permission and factual checks are complete."
        tone="mist"
      />
      <EditorialFeature
        kicker={authorityResource.kicker}
        heading={authorityResource.heading}
        body={authorityResource.body}
        cta={authorityResource.cta}
        tone="white"
      />
      <DividerList
        kicker="Related paths"
        heading="Keep exploring only if it helps the plan."
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
