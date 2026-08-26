import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { EditorialFeature } from "@/components/EditorialFeature";
import { DividerList } from "@/components/DividerList";
import { ProofNote } from "@/components/ProofNote";
import { CTASection } from "@/components/CTASection";
import { ServiceStructuredData } from "@/components/StructuredData";
import { media } from "@/content/media";
import {
  onlineHero,
  situations,
  liveExperiences,
  onDemand,
  continuityFeature,
  employeeExperience,
  organisationExperience,
  relatedPaths,
  closingCTA,
} from "@/content/online-wellbeing";

export const metadata: Metadata = {
  title: "Online Workplace Wellbeing",
  description:
    "Human-led online workplace wellbeing for remote, hybrid and distributed teams, combining live experiences, on-demand practices and Wellbeing Studio continuity.",
  alternates: {
    canonical: "/online-wellbeing",
  },
};

export default function OnlineWellbeingPage() {
  return (
    <>
      <ServiceStructuredData
        name="Online Workplace Wellbeing"
        description="Human-led online workplace wellbeing for remote, hybrid and distributed teams, combining live experiences, on-demand practices and Wellbeing Studio continuity."
        path="/online-wellbeing"
        breadcrumbLabel="Online Wellbeing"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Online Wellbeing" }]} />
      <PageHero intro={onlineHero} image={media.studioEmployeeHome} />

      <FeatureGrid
        kicker="Where online wellbeing helps"
        heading="Start with the workplace situation."
        items={situations}
        tone="white"
        columns={4}
        compact
      />

      <FeatureGrid
        kicker="Live experiences"
        heading="Keep human contact in the service."
        items={liveExperiences}
        tone="mist"
        columns={3}
      />

      <FeatureGrid
        kicker="On-demand practice and resources"
        heading="Useful support people can return to between live moments."
        items={onDemand}
        tone="white"
        columns={4}
        compact
      />

      <EditorialFeature
        kicker={continuityFeature.kicker}
        heading={continuityFeature.heading}
        body={continuityFeature.body}
        tone="mist"
        image={media.conferencesStudioAccess}
      />

      <DividerList
        kicker="Employee experience"
        heading="Simple ways to join, choose and return."
        items={employeeExperience}
        tone="white"
      />

      <DividerList
        kicker="Organisation experience"
        heading="Continuity without turning wellbeing into software administration."
        items={organisationExperience}
        tone="mist"
      />

      <ProofNote
        tone="white"
        placeholderVariant="studio"
        placeholderCaption="Online wellbeing case evidence placeholder - verified access, attendance and client feedback required."
        note="Use only verified current capabilities, aggregate measures and approved client evidence. Do not publish future Wellbeing Studio ambitions as present-tense capability."
        heading="Evidence must distinguish current delivery from future product ambition."
        body="Online wellbeing proof should show what people could access, what the organisation implemented and what verified participation or feedback was recorded, with privacy and evidence limits made explicit."
      />

      <DividerList
        kicker="Related CYA services"
        heading="Connect online support only where it makes the service more useful."
        items={relatedPaths}
        tone="mist"
      />

      <CTASection
        kicker={closingCTA.kicker}
        heading={closingCTA.heading}
        body={closingCTA.body}
        cta={closingCTA.cta}
        secondaryCta={{
          label: "Member sign-in",
          href: "https://studio.corporateyoga.com.au",
          variant: "secondary",
          external: true,
        }}
      />
    </>
  );
}
