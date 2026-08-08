import { Container, Section, Kicker } from "@/components/Primitives";
import { EvidencePlaceholder } from "@/components/EvidencePlaceholder";
import type { EvidenceStatus } from "@/lib/types";

/**
 * Contextual proof note used on each service/format page. Shared so five
 * near-identical inline blocks don't drift, but `reverse` varies the image
 * side per page so the pattern doesn't read as one component copy-pasted
 * site-wide (brief §17 editorial rhythm).
 */
export function ProofNote({
  kicker = "Proof",
  heading,
  body,
  placeholderVariant,
  placeholderCaption,
  status = "evidence-required",
  note,
  tone = "white",
  reverse = false,
}: {
  kicker?: string;
  heading: string;
  body: string;
  placeholderVariant: "movement" | "conference" | "studio" | "workplace" | "portrait" | "gathering";
  placeholderCaption: string;
  status?: EvidenceStatus;
  note?: string;
  tone?: "white" | "mist";
  reverse?: boolean;
}) {
  return (
    <Section tone={tone}>
      <Container>
        <div
          className={`grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <EvidencePlaceholder variant={placeholderVariant} caption={placeholderCaption} status={status} note={note} />
          <div>
            <Kicker>{kicker}</Kicker>
            <h2 className="mt-3 text-heading-lg">{heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
