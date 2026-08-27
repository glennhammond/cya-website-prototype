import type { Metadata } from "next";
import { HeroVideo } from "@/components/HeroVideo";
import { QuietIntro } from "@/components/QuietIntro";
import { DividerList } from "@/components/DividerList";
import { WaysToWork } from "@/components/WaysToWork";
import { HumanExperience } from "@/components/HumanExperience";
import { OfferProgression } from "@/components/OfferProgression";
import { PrincipalProof } from "@/components/PrincipalProof";
import { StudioPreview } from "@/components/StudioPreview";
import { FounderClose } from "@/components/FounderClose";
import { ResourcesSignpost } from "@/components/ResourcesSignpost";
import { CTASection } from "@/components/CTASection";
import { HomeStructuredData } from "@/components/StructuredData";
import {
  homeHeroContent,
  homeHeroMedia,
  quietIntro,
  situationLedEntry,
  recognisableExperiences,
  pathwaysHeading,
  pathways,
  humanExperience,
  progressionHeading,
  offerLevels,
  principalProof,
  studioPreview,
  leadershipPerspective,
  insightsSignpost,
  closingCTA,
} from "@/content/home";
import { caseStudies } from "@/content/proof";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: {
    absolute: "Corporate Yoga Australia | Workplace Wellbeing Programs",
  },
  description:
    "Work wellness into your workday with workplace yoga, Pilates, mindfulness and tailored wellbeing programs delivered across Australia.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const principalStory = caseStudies.find((study) => study.slug === principalProof.principalSlug) ?? caseStudies[0];
  const supportingStories = caseStudies.filter((study) => principalProof.supportingSlugs.includes(study.slug));

  return (
    <>
      <HomeStructuredData />
      <HeroVideo eyebrow={homeHeroContent.eyebrow} heading={homeHeroContent.heading} primaryCta={homeHeroContent.primaryCta} media={homeHeroMedia} />

      <QuietIntro heading={quietIntro.heading} body={quietIntro.body} image={quietIntro.image} />

      <DividerList
        kicker={situationLedEntry.kicker}
        heading={situationLedEntry.heading}
        body={situationLedEntry.body}
        items={recognisableExperiences}
        tone="mist"
      />

      <WaysToWork
        kicker={pathwaysHeading.kicker}
        heading={pathwaysHeading.heading}
        body={pathwaysHeading.body}
        pathways={pathways}
      />

      <HumanExperience
        kicker={humanExperience.kicker}
        heading={humanExperience.heading}
        body={humanExperience.body}
        formats={humanExperience.formats}
        cta={humanExperience.cta}
        image={humanExperience.image}
      />

      <OfferProgression
        kicker={progressionHeading.kicker}
        heading={progressionHeading.heading}
        body={progressionHeading.body}
        levels={offerLevels}
      />

      <PrincipalProof
        kicker={principalProof.kicker}
        heading={principalProof.heading}
        body={principalProof.body}
        principal={principalStory}
        supporting={supportingStories}
        image={media.proofHero}
      />

      <StudioPreview
        kicker={studioPreview.kicker}
        heading={studioPreview.heading}
        body={studioPreview.body}
        cta={studioPreview.cta}
        image={studioPreview.image}
      />

      <FounderClose
        kicker={leadershipPerspective.kicker}
        heading={leadershipPerspective.heading}
        body={leadershipPerspective.body}
        cta={leadershipPerspective.cta}
        image={leadershipPerspective.image}
      />

      <ResourcesSignpost kicker={insightsSignpost.kicker} heading={insightsSignpost.heading} links={insightsSignpost.links} />

      <CTASection kicker={closingCTA.kicker} heading={closingCTA.heading} body={closingCTA.body} cta={closingCTA.cta} />
    </>
  );
}
