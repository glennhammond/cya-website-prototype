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
      <PageHero intro={conferencesHero} image={media.conferencesHero} imagePosition="right" />
      <StatementList
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
      <DividerList
        kicker="Example event rhythm"
        heading="An illustrative run sheet, not a fixed package."
        body="This example does not imply a required sequence or duration - CYA designs around your actual agenda."
        items={eventRhythm}
        tone="mist"
      />
      <EditorialFeature
        kicker={studioAccessFeature.kicker}
        heading={studioAccessFeature.heading}
        body={studioAccessFeature.body}
        cta={{ label: "See Wellbeing Studio", href: "/wellbeing-studio", variant: "secondary" }}
        image={media.conferencesStudioAccess}
      />
      <DividerList kicker="Delivery logistics" heading="What CYA confirms before the day." items={logistics} tone="mist" />

      <ProofNote
        placeholderVariant="conference"
        placeholderCaption="Case study placeholder - event context, scale and organiser confidence."
        note="Requires event brief, delivery facts and organiser permission before publication."
        heading="Organiser confidence, evidenced."
        body="Event case studies will show context, scale, delivery and organiser response. These remain placeholders until a specific event story is confirmed and permissioned."
      />

      <CTASection kicker={closingCTA.kicker} heading={closingCTA.heading} body={closingCTA.body} cta={closingCTA.cta} />
    </>
  );
}
