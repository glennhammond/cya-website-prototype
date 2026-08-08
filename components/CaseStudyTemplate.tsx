import { Container, Section, Kicker } from "@/components/Primitives";
import { EvidenceBadge } from "@/components/AnnotationToggle";
import { EvidencePlaceholder } from "@/components/EvidencePlaceholder";
import { CtaLink } from "@/components/CtaLink";
import type { CaseStudy, Evidenced } from "@/lib/types";

function EvidencedBlock({ label, item }: { label: string; item: Evidenced<string> }) {
  return (
    <div className="border-t border-divider py-6 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-heading-sm text-teal-dark">{label}</h3>
        <EvidenceBadge status={item.status} note={item.note} />
      </div>
      <p className="mt-2 text-base leading-relaxed text-body">{item.value}</p>
    </div>
  );
}

export function CaseStudyTemplate({ study }: { study: CaseStudy }) {
  return (
    <article>
      <Section tone="white" className="pb-0">
        <Container>
          <Kicker>{study.clientLabel}</Kicker>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <h1 className="text-[32px] sm:text-[42px]">{study.headline}</h1>
            <EvidenceBadge status={study.status} note="Prototype placeholder — not publishable client proof." />
          </div>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body">{study.summary}</p>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <EvidencePlaceholder
                variant="workplace"
                caption="Client snapshot placeholder"
                status={study.status}
                note="Client logo, size band and locations pending permission."
              />
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="font-bold text-teal-dark">Sector</dt>
                  <dd className="text-body">{study.sector}</dd>
                </div>
                <div>
                  <dt className="font-bold text-teal-dark">Story role</dt>
                  <dd className="text-body capitalize">{study.storyRole.replace(/-/g, " ")}</dd>
                </div>
              </dl>
            </div>
            <div>
              <EvidencedBlock label="Context and challenge" item={study.context} />
              <EvidencedBlock label="Objectives" item={study.objectives} />
              <EvidencedBlock label="Insight and decision" item={study.insightAndDecision} />
              <EvidencedBlock label="Delivery" item={study.delivery} />
              <EvidencedBlock label="Evidence and limitations" item={study.evidence} />
              <EvidencedBlock label="Client voice" item={study.clientVoice} />
              <EvidencedBlock label="What CYA learned" item={study.cyaReflection} />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="mist">
        <Container className="text-center">
          <div className="mx-auto max-w-xl">
            <Kicker>Relevant next step</Kicker>
            <h2 className="mt-3 text-[26px] sm:text-[30px]">Facing something similar?</h2>
            <div className="mt-6">
              <CtaLink href={study.nextStep.href} variant="primary">
                {study.nextStep.label}
              </CtaLink>
            </div>
          </div>
        </Container>
      </Section>
    </article>
  );
}
