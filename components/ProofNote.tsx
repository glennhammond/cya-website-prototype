import { Container, Section, Kicker } from "@/components/Primitives";
import { EvidencePlaceholder } from "@/components/EvidencePlaceholder";
import type { EvidenceStatus } from "@/lib/types";

/**
 * Contextual proof note used on service/format pages. Development builds keep
 * the evidence placeholder visible for production governance; production builds
 * render the qualified evidence copy without exposing internal placeholder
 * captions or status language to public visitors.
 */
export function ProofNote({
  kicker = "Evidence",
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
  const showGovernancePlaceholder = process.env.NODE_ENV !== "production";

  return (
    <Section tone={tone}>
      <Container>
        {showGovernancePlaceholder ? (
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
        ) : (
          <div className="max-w-3xl">
            <Kicker>{kicker}</Kicker>
            <h2 className="mt-3 text-heading-lg">{heading}</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">{body}</p>
          </div>
        )}
      </Container>
    </Section>
  );
}
