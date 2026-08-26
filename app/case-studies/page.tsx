import type { Metadata } from "next";
import { ProofPageHero } from "@/components/ProofPageHero";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTASection } from "@/components/CTASection";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container, Section, Kicker } from "@/components/Primitives";
import { proofHero, proofPrinciples, caseStudies, proofStandards } from "@/content/proof";

const publishableStatuses = new Set(["approved", "safe-working-copy"]);

export const metadata: Metadata = {
  title: "Workplace Wellbeing Case Studies",
  description:
    "Selected Corporate Yoga Australia client stories showing the context, decisions, delivery and evidence behind workplace wellbeing engagements.",
  alternates: {
    canonical: "/case-studies",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function CaseStudiesPage() {
  const publishableStories = caseStudies.filter((study) => publishableStatuses.has(study.status));

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case studies" }]} />
      <ProofPageHero
        kicker={proofHero.kicker}
        heading={proofHero.heading}
        body="CYA case studies are published only when client permission, delivery facts and supporting evidence have been verified."
        principles={proofPrinciples}
      />

      <Section tone="white">
        <Container>
          <div className="max-w-2xl">
            <Kicker>{publishableStories.length > 0 ? "Published stories" : "Evidence in preparation"}</Kicker>
            <h2 className="mt-3 text-heading-lg">
              {publishableStories.length > 0 ? "Work shown in context." : "Client stories are being qualified for publication."}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-body">
              {publishableStories.length > 0
                ? "Each published story records the workplace context, CYA response, delivery, available evidence and what happened next."
                : "Candidate clients and placeholder evidence remain inside CYA's governed production system and are not shown publicly until the required permission and factual checks are complete."}
            </p>
          </div>

          {publishableStories.length > 0 && (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {publishableStories.map((study) => (
                <CaseStudyCard key={study.slug} study={study} />
              ))}
            </div>
          )}
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
        heading="Discuss your workplace rather than waiting for a matching case study."
        body="Tell CYA what you are trying to organise and the team can talk through relevant delivery experience without publishing an unapproved client story."
        cta={{ label: "Book a wellbeing consultation", href: "/contact", variant: "primary" }}
      />
    </>
  );
}
