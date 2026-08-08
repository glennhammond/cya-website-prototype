import type { Metadata } from "next";
import { HeroEditorial } from "@/components/HeroEditorial";
import { ReassuranceStrip } from "@/components/ReassuranceStrip";
import { PathwayPanels } from "@/components/PathwayPanels";
import { OneOffFeature } from "@/components/OneOffFeature";
import { OfferProgression } from "@/components/OfferProgression";
import { StudioPreview } from "@/components/StudioPreview";
import { ProofPreview } from "@/components/ProofPreview";
import { FounderClose } from "@/components/FounderClose";
import {
  homeHero,
  reassurance,
  pathwaysHeading,
  pathways,
  oneOffFeature,
  progressionHeading,
  offerLevels,
  founderClose,
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
      <HeroEditorial intro={homeHero} image={media.homeHero} />
      <ReassuranceStrip heading={reassurance.heading} body={reassurance.body} />
      <PathwayPanels
        kicker={pathwaysHeading.kicker}
        heading={pathwaysHeading.heading}
        body={pathwaysHeading.body}
        pathways={pathways}
      />
      <OneOffFeature
        kicker={oneOffFeature.kicker}
        heading={oneOffFeature.heading}
        body={oneOffFeature.body}
        formats={oneOffFeature.formats}
        cta={oneOffFeature.cta}
        image={oneOffFeature.image}
      />
      <OfferProgression
        kicker={progressionHeading.kicker}
        heading={progressionHeading.heading}
        body={progressionHeading.body}
        levels={offerLevels}
      />
      <StudioPreview />
      <ProofPreview studies={caseStudies.slice(0, 3)} />
      <FounderClose
        kicker={founderClose.kicker}
        heading={founderClose.heading}
        body={founderClose.body}
        cta={founderClose.cta}
        image={founderClose.image}
      />
    </>
  );
}
