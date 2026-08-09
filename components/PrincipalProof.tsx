import { Container, Section, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import { EvidenceBadge } from "@/components/AnnotationToggle";
import type { CaseStudy, MediaAsset } from "@/lib/types";

/**
 * One flagship story told in full, documentary-style - image and text each
 * get independent space (no text-over-photo here; that budget is spent on
 * the hero and HumanExperience). Supporting stories are plain text links,
 * not a second and third card repeating the same shape. Every claim in the
 * visible copy is already phrased as a placeholder ("candidate:", "governed
 * placeholder") so the public page never reads as confirmed evidence - the
 * EvidenceBadge dev-only annotation is additional, not load-bearing.
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
  return (
    <Section tone="mist">
      <Container className="studio-panel">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Kicker>{kicker}</Kicker>
            <h2 className="mt-3 text-heading-lg">{heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>
          </div>
          <CtaLink href="/proof" variant="text">
            View all case studies
          </CtaLink>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] lg:aspect-auto">
            <ImageMedia asset={image} treatment="bleed" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-wide text-ochre-ink">{principal.clientLabel}</p>
              <EvidenceBadge status={principal.status} note="Prototype placeholder - not a publishable client story." />
            </div>
            <h3 className="mt-2 text-heading-sm text-teal-dark">{principal.headline}</h3>
            <p className="mt-3 text-base leading-relaxed text-body">{principal.summary}</p>
            <dl className="mt-6 space-y-4 border-t border-divider pt-6">
              <div>
                <dt className="text-sm font-bold text-teal-dark">Delivery</dt>
                <dd className="mt-1 text-sm leading-relaxed text-body">{principal.delivery.value}</dd>
              </div>
              <div>
                <dt className="text-sm font-bold text-teal-dark">Evidence and limitations</dt>
                <dd className="mt-1 text-sm leading-relaxed text-body">{principal.evidence.value}</dd>
              </div>
            </dl>
            <div className="mt-6">
              <CtaLink href={`/proof/case-study?story=${principal.slug}`} variant="primary">
                Read the full story
              </CtaLink>
            </div>

            {supporting.length > 0 && (
              <div className="mt-8 border-t border-divider pt-6">
                <p className="text-sm font-bold text-teal-dark">Other stories in progress</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {supporting.map((study) => (
                    <li key={study.slug}>
                      <CtaLink href={`/proof/case-study?story=${study.slug}`} variant="text" className="text-sm">
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
