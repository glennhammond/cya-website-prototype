import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { EditorialFeature } from "@/components/EditorialFeature";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, Section, Kicker } from "@/components/Primitives";
import { EvidencePlaceholder } from "@/components/EvidencePlaceholder";
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
    "Yoga, Pilates, mobility and desk movement, adapted to real workplaces — no prior experience, studio setting or particular body type assumed.",
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
      <Hero intro={movementHero} image={media.movementHero} />
      <EditorialFeature
        kicker={whoItsFor.kicker}
        heading={whoItsFor.heading}
        body={whoItsFor.body}
        tone="mist"
        image={media.movementGroupIndustrial}
      />
      <FeatureGrid kicker="Useful formats" heading="However much time you have to give it." items={usefulFormats} tone="white" columns={4} />
      <FeatureGrid kicker="What to expect" heading="What participants can expect." items={whatToExpect} tone="mist" columns={4} />
      <EditorialFeature
        kicker={inclusionFeature.kicker}
        heading={inclusionFeature.heading}
        body={inclusionFeature.body}
        tone="white"
        reverse
        image={media.movementFacilitatorAdjustment}
      />
      <FeatureGrid kicker="Delivery options" heading="Onsite, online or across several locations." items={deliveryOptions} tone="mist" columns={3} />

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <EvidencePlaceholder
              variant="movement"
              caption="Proof placeholder — participant feedback and repeat engagement."
              status="evidence-required"
              note="Delivery quality and participant feedback evidence required before publication; no health-outcome claims."
            />
            <div>
              <Kicker>Proof</Kicker>
              <h2 className="mt-3 text-[28px] sm:text-[34px]">Delivery quality, not health-outcome claims.</h2>
              <p className="mt-4 text-lg leading-relaxed text-body">
                Movement proof focuses on delivery quality, participant feedback and repeat engagement. CYA does not
                claim health, flexibility or fitness outcomes from a session or series.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FeatureGrid kicker="Related use cases" heading="Movement rarely stands entirely alone." items={relatedUseCases} tone="mist" columns={3} />

      <CTASection kicker={closingCTA.kicker} heading={closingCTA.heading} body={closingCTA.body} cta={closingCTA.cta} />
    </>
  );
}
