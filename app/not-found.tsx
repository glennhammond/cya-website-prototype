import Link from "next/link";
import { Container, Section, Kicker } from "@/components/Primitives";

export default function NotFound() {
  return (
    <Section tone="mist">
      <Container>
        <Kicker>Page not found</Kicker>
        <h1 className="mt-3 max-w-3xl text-[38px] leading-tight sm:text-[54px]">This page isn&apos;t part of the current CYA website.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
          The address may be old, incomplete or no longer relevant. Use one of the current destinations below rather than being sent to an unrelated page.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="inline-flex min-h-12 items-center rounded-full bg-ink px-6 py-3 font-semibold text-white" href="/">
            Go to Home
          </Link>
          <Link className="inline-flex min-h-12 items-center rounded-full border border-ink px-6 py-3 font-semibold text-ink" href="/movement">
            Explore services
          </Link>
          <Link className="inline-flex min-h-12 items-center rounded-full border border-ink px-6 py-3 font-semibold text-ink" href="/contact">
            Contact CYA
          </Link>
        </div>
      </Container>
    </Section>
  );
}
