import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { DividerList } from "@/components/DividerList";
import { FeatureGrid } from "@/components/FeatureGrid";
import { PageHero } from "@/components/PageHero";
import { ServiceStructuredData } from "@/components/StructuredData";
import {
  experienceFormats,
  expertClosing,
  expertHero,
  expertRelatedPaths,
  matchingPrinciples,
} from "@/content/expert-experiences";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: { absolute: "Expert-Led Workplace Wellbeing Experiences | CYA" },
  description:
    "Expert-led workplace wellbeing talks, Lunch & Learns and facilitated experiences for Australian organisations, delivered onsite or online.",
  alternates: { canonical: "/expert-experiences" },
};

export default function ExpertExperiencesPage() {
  return (
    <>
      <ServiceStructuredData
        name="Expert-Led Workplace Wellbeing Experiences"
        description="Expert-led workplace wellbeing talks, Lunch & Learns and facilitated experiences for Australian organisations."
        path="/expert-experiences"
        breadcrumbLabel="Expert Experiences"
      />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Expert Experiences" }]} />
      <PageHero intro={expertHero} image={media.workplaceWellbeingLunchLearn} imagePosition="left" />
      <FeatureGrid
        kicker="Experience formats"
        heading="Make expertise useful inside the working day."
        items={experienceFormats}
        tone="white"
        columns={4}
        compact
      />
      <DividerList
        kicker="How CYA matches the experience"
        heading="The person, topic and format need to fit together."
        items={matchingPrinciples}
        tone="mist"
      />
      <DividerList
        kicker="Related pathways"
        heading="Choose the clearest route for the workplace need."
        items={expertRelatedPaths}
        tone="white"
      />
      <CTASection
        kicker={expertClosing.kicker}
        heading={expertClosing.heading}
        body={expertClosing.body}
        cta={expertClosing.cta}
      />
    </>
  );
}
