import { Container, Section, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";

export default function NotFound() {
  return (
    <Section tone="page">
      <Container>
        <Kicker>Page not found</Kicker>
        <h1 className="cya-page-title mt-5 max-w-3xl">This page isn&apos;t part of the current CYA website.</h1>
        <p className="cya-lead mt-6 max-w-2xl">
          The address may be old, incomplete or no longer relevant. Use one of the current destinations below rather than being sent to an unrelated page.
        </p>
        <div className="cya-action-row mt-8">
          <CtaLink href="/">Go to Home</CtaLink>
          <CtaLink href="/movement" variant="secondary">Explore services</CtaLink>
          <CtaLink href="/contact" variant="secondary">Contact CYA</CtaLink>
        </div>
      </Container>
    </Section>
  );
}
