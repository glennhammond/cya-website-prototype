import { Container } from "@/components/Primitives";

/**
 * Concise orientation directly after the hero (brief §9). Deliberately not a
 * Section-scale block: no kicker, no CTA, no card — a single restrained
 * statement so it reads as reassurance, not another pitch.
 */
export function ReassuranceStrip({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="bg-white py-10 sm:py-12">
      <Container>
        <div className="max-w-2xl border-l-4 border-gold pl-6">
          <h2 className="text-heading-sm text-teal-dark">{heading}</h2>
          <p className="mt-2 text-base leading-relaxed text-body">{body}</p>
        </div>
      </Container>
    </section>
  );
}
