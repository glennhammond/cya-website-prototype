import { Container, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import type { CTA } from "@/lib/types";

/**
 * Proof hero (brief §16 F). Deliberately has no photograph - a generic
 * lifestyle image would undercut the page's argument. Evidence-led instead:
 * heading plus the governance principles that make CYA's proof trustworthy.
 */
export function ProofPageHero({
  kicker,
  heading,
  body,
  principles,
  actions,
}: {
  kicker: string;
  heading: string;
  body: string;
  principles: string[];
  actions?: CTA[];
}) {
  return (
    <section className="cya-page-hero">
      <Container>
        <div className="max-w-2xl">
          <Kicker>{kicker}</Kicker>
          <h1 className="cya-page-title mt-5">{heading}</h1>
          <p className="cya-lead mt-6">{body}</p>
        </div>
        <ol className="mt-10 grid gap-6 border-t border-divider pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <li key={principle} className="flex gap-3">
              <span aria-hidden="true" className="shrink-0 text-sm font-bold text-ochre-ink">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed text-body">{principle}</span>
            </li>
          ))}
        </ol>
        {actions && actions.length > 0 && (
          <div className="cya-action-row mt-8">
            {actions.map((action) => (
              <CtaLink key={action.label} href={action.href} variant={action.variant}>
                {action.label}
              </CtaLink>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
