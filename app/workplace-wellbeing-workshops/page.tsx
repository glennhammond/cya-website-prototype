import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { EditorialFeature } from "@/components/EditorialFeature";
import { DividerList } from "@/components/DividerList";
import { ProofNote } from "@/components/ProofNote";
import { CTASection } from "@/components/CTASection";
import { media } from "@/content/media";
import {
  workshopsHero,
  situations,
  featuredTopics,
  expertIntro,
  namedExperts,
  formats,
  deliveryModes,
  evidenceFeature,
  relatedPaths,
  closingCTA,
} from "@/content/workplace-wellbeing-workshops";

export const metadata: Metadata = {
  title: "Workplace Wellbeing Workshops",
  description:
    "Expert-led workplace wellbeing workshops and Lunch & Learns for Australian teams, including stress management, sleep, nutrition, mindfulness and breathwork.",
  alternates: {
    canonical: "/workplace-wellbeing-workshops",
  },
};

export default function WorkplaceWellbeingWorkshopsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Workplace Wellbeing Workshops" }]} />
      <PageHero intro={workshopsHero} image={media.workplaceWellbeingLunchLearn} imagePosition="left" />

      <FeatureGrid
        kicker="Where workshops fit"
        heading="Use expert-led learning when the workplace needs more than a passive resource."
        items={situations}
        tone="white"
        columns={4}
        compact
      />

      <DividerList
        kicker="Featured topic families"
        heading="Choose a useful topic before choosing the session shape."
        body="These are established CYA topic families. Specific scope, practitioner and claims are confirmed for the actual engagement."
        items={featuredTopics}
        tone="mist"
      />

      <EditorialFeature
        kicker={expertIntro.kicker}
        heading={expertIntro.heading}
        body={expertIntro.body}
        tone="white"
        image={media.debbyTeacherPortrait}
      />

      <DividerList
        kicker="Named expertise"
        heading="Representative CYA practitioners"
        items={namedExperts}
        tone="white"
      />

      <FeatureGrid
        kicker="Session formats"
        heading="Lunch & Learn, workshop, expert conversation or event session."
        items={formats}
        tone="mist"
        columns={4}
        compact
      />

      <DividerList
        kicker="Delivery modes"
        heading="Onsite, online or connected into a broader program."
        items={deliveryModes}
        tone="white"
      />

      <EditorialFeature
        kicker={evidenceFeature.kicker}
        heading={evidenceFeature.heading}
        body={evidenceFeature.body}
        tone="mist"
        reverse
        image={media.aboutDelivery}
      />

      <ProofNote
        tone="white"
        placeholderVariant="gathering"
        placeholderCaption="Workshop case evidence placeholder - practitioner, topic, client context and approved feedback required."
        note="Do not publish specific expert/topic assignments, outcome claims or credential-sensitive advice until the practitioner, scope and evidence are verified."
        heading="Workshop proof should connect the person, topic and workplace context."
        body="Published evidence should identify the workplace need, who delivered the session, how it was structured, what was observed or reported and any relevant limitations."
      />

      <DividerList
        kicker="Related pathways"
        heading="Keep the workshop stand-alone or connect it when useful."
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
