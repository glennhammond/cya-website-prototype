import type { Metadata } from "next";
import { Container, Section, Kicker } from "@/components/Primitives";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTASection } from "@/components/CTASection";
import { EvidenceBadge } from "@/components/AnnotationToggle";
import { resourcesHero, featuredResources, closingCTA } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resources",
  description: "Practical planning tools and guides for workplace wellbeing decisions.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
      <Section tone="white" className="pb-0">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <Kicker>{resourcesHero.kicker}</Kicker>
            <EvidenceBadge status="evidence-required" note="Editorial capacity and resource inventory required before this section can publish real content." />
          </div>
          <h1 className="mt-3 text-[32px] sm:text-[42px]">{resourcesHero.heading}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body">{resourcesHero.body}</p>
        </Container>
      </Section>

      <FeatureGrid kicker="Available soon" heading="Governed, buyer-facing resources." items={featuredResources} tone="mist" columns={2} />

      <CTASection kicker={closingCTA.kicker} heading={closingCTA.heading} body={closingCTA.body} cta={closingCTA.cta} />
    </>
  );
}
