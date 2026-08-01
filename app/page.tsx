import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { PathwaySelector } from "@/components/PathwaySelector";
import { OfferProgression } from "@/components/OfferProgression";
import { YearGlance } from "@/components/YearGlance";
import { WhyCYA } from "@/components/WhyCYA";
import { ProofPreview } from "@/components/ProofPreview";
import { StudioPreview } from "@/components/StudioPreview";
import { CTASection } from "@/components/CTASection";
import {
  homeHero,
  pathwayHeading,
  pathwayCards,
  progressionHeading,
  offerLevels,
  yearQuarters,
  whyCYA,
  closingCTA,
} from "@/content/home";
import { caseStudies } from "@/content/proof";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Corporate Yoga Australia — Start with one useful moment",
  description:
    "Book a one-off movement, mindfulness, workshop or conference session, or build a connected year of workplace wellbeing with CYA and Wellbeing Studio.",
};

export default function Home() {
  return (
    <>
      <Hero intro={homeHero} image={media.homeHero} />
      <PathwaySelector
        kicker={pathwayHeading.kicker}
        heading={pathwayHeading.heading}
        body={pathwayHeading.body}
        cards={pathwayCards}
      />
      <ProofPreview studies={caseStudies.slice(0, 3)} />
      <OfferProgression
        kicker={progressionHeading.kicker}
        heading={progressionHeading.heading}
        body={progressionHeading.body}
        levels={offerLevels}
      />
      <YearGlance quarters={yearQuarters} />
      <WhyCYA kicker={whyCYA.kicker} heading={whyCYA.heading} points={whyCYA.points} />
      <StudioPreview />
      <CTASection
        kicker={closingCTA.kicker}
        heading={closingCTA.heading}
        body={closingCTA.body}
        cta={closingCTA.cta}
      />
    </>
  );
}
