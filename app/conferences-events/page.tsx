import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { EditorialFeature } from "@/components/EditorialFeature";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, Section, Kicker } from "@/components/Primitives";
import { EvidencePlaceholder } from "@/components/EvidencePlaceholder";
import {
  conferencesHero,
  agendaMoments,
  activationFormats,
  eventRhythm,
  studioAccessFeature,
  logistics,
  closingCTA,
} from "@/content/conferences";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Conferences and Events",
  description:
    "From a 15-minute activation to morning movement, mindfulness or a practical wellbeing session, CYA designs around the audience, venue and run sheet.",
};

export default function ConferencesEventsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Conferences and events" }]} />
      <Hero intro={conferencesHero} image={media.conferencesHero} />
      <FeatureGrid
        kicker="Where CYA fits into the agenda"
        heading="Support the moment the agenda needs."
        body="Use movement to reset a head-heavy day, mindfulness to create focus, or practical learning to give delegates something useful to take away."
        items={agendaMoments}
        tone="mist"
        columns={3}
      />
      <FeatureGrid
        id="formats"
        kicker="Activation formats"
        heading="From a 15-minute reset to a full wellbeing stream."
        items={activationFormats}
        tone="white"
        columns={3}
      />
      <FeatureGrid
        kicker="Example event rhythm"
        heading="An illustrative run sheet, not a fixed package."
        body="This example does not imply a required sequence or duration — CYA designs around your actual agenda."
        items={eventRhythm}
        tone="mist"
        columns={3}
      />
      <EditorialFeature
        kicker={studioAccessFeature.kicker}
        heading={studioAccessFeature.heading}
        body={studioAccessFeature.body}
        cta={{ label: "See Wellbeing Studio", href: "/wellbeing-studio", variant: "secondary" }}
        image={media.conferencesStudioAccess}
      />
      <FeatureGrid kicker="Delivery logistics" heading="What CYA confirms before the day." items={logistics} tone="white" columns={4} />

      <Section tone="mist">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <EvidencePlaceholder
              variant="conference"
              caption="Proof placeholder — event context, scale and organiser confidence."
              status="evidence-required"
              note="Requires event brief, delivery facts and organiser permission before publication."
            />
            <div>
              <Kicker>Proof</Kicker>
              <h2 className="mt-3 text-[28px] sm:text-[34px]">Organiser confidence, evidenced.</h2>
              <p className="mt-4 text-lg leading-relaxed text-body">
                Event proof shows context, scale, delivery and organiser response — placeholders here until a
                specific event story is confirmed and permissioned.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection kicker={closingCTA.kicker} heading={closingCTA.heading} body={closingCTA.body} cta={closingCTA.cta} />
    </>
  );
}
