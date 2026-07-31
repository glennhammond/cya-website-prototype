import { Container, Section, Kicker } from "@/components/Primitives";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CtaLink } from "@/components/CtaLink";
import type { CaseStudy } from "@/lib/types";

export function ProofPreview({ studies }: { studies: CaseStudy[] }) {
  return (
    <Section tone="white">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Kicker>Contextual proof</Kicker>
            <h2 className="mt-3 text-[28px] sm:text-[34px]">Proof placed where doubt arises.</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">
              CYA replaces breadth without context with fewer, stronger, permissioned proof stories. The stories below are governed placeholders until client permission and facts are confirmed.
            </p>
          </div>
          <CtaLink href="/proof" variant="text">
            See all proof
          </CtaLink>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
