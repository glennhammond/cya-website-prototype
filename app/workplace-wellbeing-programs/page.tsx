import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EditorialFeature } from "@/components/EditorialFeature";
import { FeatureGrid } from "@/components/FeatureGrid";
import { OfferProgression } from "@/components/OfferProgression";
import { ExampleYearView } from "@/components/ExampleYearView";
import { StatementList } from "@/components/StatementList";
import { DividerList } from "@/components/DividerList";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProofNote } from "@/components/ProofNote";
import {
  programsHero,
  organisationalNeeds,
  planningFeature,
  whyContinuity,
  programLevels,
  experienceMix,
  whatCyaCoordinates,
  multiSiteFeature,
  reportingFeature,
  investmentFactors,
  procurementQuestions,
  closingCTA,
} from "@/content/programs";
import { exampleYear } from "@/content/home";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Workplace Wellbeing Programs Australia",
  description:
    "Tailored workplace wellbeing programs combining human-led experiences, practical coordination and ongoing support for Australian teams.",
  alternates: {
    canonical: "/workplace-wellbeing-programs",
  },
};

export default function WorkplaceWellbeingProgramsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Workplace wellbeing programs" },
        ]}
      />
      <PageHero intro={programsHero} image={media.programsHero} imagePosition="left" />

      <FeatureGrid
        kicker="When a program helps"
        heading="Use continuity when the workplace need extends beyond one moment."
        items={organisationalNeeds}
        tone="white"
        columns={4}
        compact
      />

      <EditorialFeature
        kicker={planningFeature.kicker}
        heading={planningFeature.heading}
        body={planningFeature.body}
        tone="mist"
        image={media.programsContinuity}
      />

      <EditorialFeature
        kicker={whyContinuity.kicker}
        heading={whyContinuity.heading}
        body={whyContinuity.body}
        tone="white"
        reverse
        image={media.workplaceWellbeingLunchLearn}
      />

      <OfferProgression
        kicker="Choose the level of continuity that fits"
        heading="Four levels, no compulsory ladder."
        body="Each level adds coordination, not legitimacy. Move between them as priorities change - a one-off engagement remains a complete CYA service in its own right."
        levels={programLevels}
      />

      <DividerList
        kicker="Experience mix"
        heading="Build the program from real CYA services."
        body="The right mix depends on the workforce and purpose. Not every program needs every format."
        items={experienceMix}
        tone="mist"
      />

      <ExampleYearView months={exampleYear} />

      <StatementList
        kicker="Implementation & engagement"
        heading="The planning load CYA takes on."
        items={whatCyaCoordinates}
        tone="white"
        columns={3}
      />

      <EditorialFeature
        kicker={multiSiteFeature.kicker}
        heading={multiSiteFeature.heading}
        body={multiSiteFeature.body}
        tone="mist"
        reverse
        image={media.programsMultiSite}
      />

      <EditorialFeature
        kicker={reportingFeature.kicker}
        heading={reportingFeature.heading}
        body={reportingFeature.body}
        tone="white"
        image={media.studioEmployeeHome}
      />

      <DividerList
        kicker="Investment factors"
        heading="What shapes the investment."
        body="No fixed pricing is published here. These are the variables CYA works through with you during a consultation."
        items={investmentFactors}
        tone="mist"
      />

      <ProofNote
        reverse
        placeholderVariant="workplace"
        placeholderCaption="Case study placeholder - recurring and multi-site delivery story."
        note="Requires renewal, attendance/feedback and delivery-learning evidence before publication."
        heading="Program evidence belongs in context."
        body="Program case studies will show the organisational need, program shape, delivery, available participation or feedback evidence and what happened next. These remain placeholders until specific client evidence is confirmed and permissioned."
      />

      <DividerList
        kicker="Procurement questions"
        heading="Questions worth resolving before a program starts."
        items={procurementQuestions}
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
