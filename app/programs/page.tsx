import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { EditorialFeature } from "@/components/EditorialFeature";
import { OfferProgression } from "@/components/OfferProgression";
import { ExampleYearView } from "@/components/ExampleYearView";
import { StatementList } from "@/components/StatementList";
import { DividerList } from "@/components/DividerList";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProofNote } from "@/components/ProofNote";
import {
  programsHero,
  whyContinuity,
  programLevels,
  whatCyaCoordinates,
  multiSiteFeature,
  investmentFactors,
  closingCTA,
} from "@/content/programs";
import { exampleYear } from "@/content/home";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Begin with a short series, coordinate several wellbeing elements across a defined period, or plan an organised year of support — without a fixed package or compulsory commitment.",
};

export default function ProgramsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Programs" }]} />
      <PageHero intro={programsHero} image={media.programsHero} imagePosition="left" />
      <EditorialFeature
        kicker={whyContinuity.kicker}
        heading={whyContinuity.heading}
        body={whyContinuity.body}
        tone="mist"
        image={media.programsContinuity}
      />
      <OfferProgression
        kicker="Choose the level of continuity that fits"
        heading="Four levels, no compulsory ladder."
        body="Each level adds coordination, not a new sales tier. Move between them as your priorities change — there is no minimum to reach before support becomes worthwhile."
        levels={programLevels}
      />
      <ExampleYearView months={exampleYear} />
      <StatementList
        kicker="What CYA coordinates"
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

      <DividerList
        kicker="Investment factors"
        heading="What shapes the investment."
        body="No fixed pricing is published here. These are the variables CYA works through with you during a consultation."
        items={investmentFactors}
        tone="white"
      />

      <ProofNote
        reverse
        placeholderVariant="workplace"
        placeholderCaption="Proof placeholder — recurring and multi-site delivery story."
        note="Requires renewal, attendance/feedback and delivery-learning evidence before publication."
        heading="Renewal and delivery learning, evidenced."
        body="Program proof shows recurring and multi-site delivery, renewal and what CYA learned along the way — placeholders here until specific client evidence is confirmed and permissioned."
      />

      <CTASection kicker={closingCTA.kicker} heading={closingCTA.heading} body={closingCTA.body} cta={closingCTA.cta} />
    </>
  );
}
