import type { Metadata } from "next";
import { ProofPageHero } from "@/components/ProofPageHero";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, Section, Kicker } from "@/components/Primitives";
import { proofHero, proofPrinciples, caseStudies, proofStandards } from "@/content/proof";

export const metadata: Metadata = {
  title: "Workplace Wellbeing Case Studies",
  description:
    "Selected Corporate Yoga Australia client stories showing the context, decisions, delivery and evidence behind workplace wellbeing engagements.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case studies" }]} />
      <ProofPageHero
        kicker={proofHero.kicker}
        heading={proofHero.heading}
        body={proofHero.body}
        principles={proofPrinciples}
      />

      <Section tone="white">
        <Container>
          <div className="max-w-2xl">
            <Kicker>Stories in development</Kicker>
            <h2 className="mt-3 text-heading-lg">Case studies in development.</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Each story below follows the same governed template. None are publishable until client permission,
              dates and facts are confirmed.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="max-w-2xl">
            <Kicker>Standards</Kicker>
            <h2 className="mt-3 text-heading-lg">What CYA will and won&rsquo;t claim.</h2>
          </div>
          <ul className="mt-8 space-y-3">
            {proofStandards.map((standard) => (
              <li key={standard} className="flex gap-3 text-sm leading-relaxed text-body">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                {standard}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTASection
        kicker="Next step"
        heading="Discuss a similar need."
        body="If a story above is close to your situation, the first conversation can start there."
        cta={{ label: "Book a wellbeing consultation", href: "/consultation", variant: "primary" }}
      />
    </>
  );
}
