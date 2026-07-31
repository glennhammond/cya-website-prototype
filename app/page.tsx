import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { PathwaySelector } from "@/components/PathwaySelector";
import { EditorialFeature } from "@/components/EditorialFeature";
import { OfferProgression } from "@/components/OfferProgression";
import { ExampleYearView } from "@/components/ExampleYearView";
import { WhyCYA } from "@/components/WhyCYA";
import { ProofPreview } from "@/components/ProofPreview";
import { StudioPreview } from "@/components/StudioPreview";
import { CTASection } from "@/components/CTASection";
import {
  homeHero,
  pathwayHeading,
  pathwayCards,
  oneOffFeature,
  progressionHeading,
  offerLevels,
  exampleYear,
  whyCYA,
  closingCTA,
} from "@/content/home";
import { caseStudies } from "@/content/proof";

export const metadata: Metadata = {
  title: "Corporate Yoga Australia — Start with one useful moment",
  description:
    "Book a one-off movement, mindfulness, workshop or conference session, or build a connected year of workplace wellbeing with CYA and Wellbeing Studio.",
};

export default function Home() {
  return (
    <>
      <Hero intro={homeHero} placeholderVariant="workplace" placeholderCaption="Photography placeholder — a real workplace, mid-session." />
      <PathwaySelector
        kicker={pathwayHeading.kicker}
        heading={pathwayHeading.heading}
        body={pathwayHeading.body}
        cards={pathwayCards}
      />
      <EditorialFeature
        kicker={oneOffFeature.kicker}
        heading={oneOffFeature.heading}
        body={oneOffFeature.body}
        cta={oneOffFeature.cta}
        placeholderVariant="movement"
        placeholderCaption="Photography placeholder — a single, well-run session."
      />
      <OfferProgression
        kicker={progressionHeading.kicker}
        heading={progressionHeading.heading}
        body={progressionHeading.body}
        levels={offerLevels}
      />
      <ExampleYearView months={exampleYear} />
      <WhyCYA kicker={whyCYA.kicker} heading={whyCYA.heading} points={whyCYA.points} />
      <ProofPreview studies={caseStudies.slice(0, 3)} />
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
