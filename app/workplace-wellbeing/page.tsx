import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { StatementList } from "@/components/StatementList";
import { DividerList } from "@/components/DividerList";
import { EditorialFeature } from "@/components/EditorialFeature";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, Section, Kicker } from "@/components/Primitives";
import { EvidencePlaceholder } from "@/components/EvidencePlaceholder";
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
        heading="Ingredients CYA adapts to the brief — not the whole product."
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

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <EvidencePlaceholder
              variant="workplace"
              caption="Proof placeholder — delivery quality across formats and modalities."
              status="evidence-required"
              note="Requires format-specific delivery, feedback and renewal evidence before publication."
            />
            <div>
              <Kicker>Proof</Kicker>
              <h2 className="mt-3 text-[28px] sm:text-[34px]">Proof suited to the format, not one blanket claim.</h2>
              <p className="mt-4 text-lg leading-relaxed text-body">
                What counts as proof looks different for a single session, a recurring rhythm or a connected
                program — see delivery-specific evidence on the Movement, Conferences and Programs pages, or the
                full Proof page.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        kicker={closingCTA.kicker}
        heading={closingCTA.heading}
        body={closingCTA.body}
        cta={closingCTA.cta}
      />
    </>
  );
}
