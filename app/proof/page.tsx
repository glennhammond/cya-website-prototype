import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, Section, Kicker } from "@/components/Primitives";
import { proofHero, proofPrinciples, caseStudies, proofStandards } from "@/content/proof";
import { media } from "@/content/media";

export const metadata: Metadata = {
  title: "Proof",
  description:
    "Evidence-led client stories placed where buyer doubt arises — governed placeholders until client permission, dates and facts are confirmed.",
};

export default function ProofPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Proof" }]} />
      <Hero intro={proofHero} image={media.proofHero} />

      <Section tone="mist">
        <Container>
          <div className="max-w-2xl">
            <Kicker>Proof principles</Kicker>
            <h2 className="mt-3 text-[28px] sm:text-[34px]">How CYA governs proof.</h2>
          </div>
          <ol className="mt-8 divide-y divide-divider border-t border-b border-divider">
            {proofPrinciples.map((principle, index) => (
              <li key={principle} className="flex gap-4 py-4 text-sm leading-relaxed text-body">
                <span aria-hidden="true" className="shrink-0 font-bold text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {principle}
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="max-w-2xl">
            <Kicker>Featured stories</Kicker>
            <h2 className="mt-3 text-[28px] sm:text-[34px]">Governed placeholders, not published proof.</h2>
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
            <h2 className="mt-3 text-[28px] sm:text-[34px]">What CYA will and won&rsquo;t claim.</h2>
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
