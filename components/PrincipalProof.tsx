import { Container, Section, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import type { CaseStudy, MediaAsset } from "@/lib/types";

const publishableStatuses = new Set(["approved", "safe-working-copy"]);

/**
 * Homepage proof must never expose candidate clients or evidence-required
 * placeholder stories to public visitors. The governed source data can retain
 * those candidates for production work, but this component renders only when
 * at least one story has crossed the publication gate.
 */
export function PrincipalProof({
  kicker,
  heading,
  body,
  principal,
  supporting,
  image,
}: {
  kicker: string;
  heading: string;
  body: string;
  principal: CaseStudy;
  supporting: CaseStudy[];
  image: MediaAsset;
}) {
  const publishablePrincipal = publishableStatuses.has(principal.status) ? principal : undefined;
  const publishableSupporting = supporting.filter((study) => publishableStatuses.has(study.status));

  if (!publishablePrincipal) return null;

  return (
    <Section tone="mist">
      <Container className="studio-panel">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Kicker>{kicker}</Kicker>
            <h2 className="mt-3 text-heading-lg">{heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>
          </div>
          <CtaLink href="/case-studies" variant="text">
            View all case studies
          </CtaLink>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] lg:aspect-auto">
            <ImageMedia asset={image} treatment="bleed" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-ochre-ink">{publishablePrincipal.clientLabel}</p>
            <h3 className="mt-2 text-heading-sm text-teal-dark">{publishablePrincipal.headline}</h3>
            <p className="mt-3 text-base leading-relaxed text-body">{publishablePrincipal.summary}</p>
            <dl className="mt-6 space-y-4 border-t border-divider pt-6">
              <div>
                <dt className="text-sm font-bold text-teal-dark">Delivery</dt>
                <dd className="mt-1 text-sm leading-relaxed text-body">{publishablePrincipal.delivery.value}</dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-teal-dark">Evidence and limitations</dt>
                <dd className="mt-1 text-sm leading-relaxed text-body">{publishablePrincipal.evidence.value}</dd>
              </div>
            </dl>
            <div className="mt-6">
              <CtaLink href="/case-studies" variant="primary">
                Read the case study
              </CtaLink>
            </div>

            {publishableSupporting.length > 0 && (
              <div className="mt-8 border-t border-divider pt-6">
                <p className="text-sm font-bold text-teal-dark">More client stories</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {publishableSupporting.map((study) => (
                    <li key={study.slug}>
                      <CtaLink href="/case-studies" variant="text" className="text-sm">
                        {study.clientLabel}
                      </CtaLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
