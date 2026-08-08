import Link from "next/link";
import { Container, Section, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { memberSignInHref } from "@/content/navigation";

export function MemberAccessPanel() {
  return (
    <Section tone="white">
      <Container>
        <div className="mx-auto max-w-2xl rounded-[var(--radius-card)] border border-divider bg-mist p-8 text-center">
          <Kicker>Wellbeing Studio members</Kicker>
          <h1 className="mt-3 text-heading-lg">Sign in to Wellbeing Studio</h1>
          <p className="mt-4 text-lg leading-relaxed text-body">
            Wellbeing Studio member access is handled separately from the CYA consultation process. Sign in
            directly at studio.corporateyoga.com.au to reach live sessions, the practice library and your account.
          </p>
          <div className="mt-6 flex justify-center">
            <CtaLink href={memberSignInHref} variant="primary" external>
              Sign in to Wellbeing Studio
            </CtaLink>
          </div>
          <p className="mt-6 text-sm text-body">
            Not a member yet, or asking on behalf of your organisation?{" "}
            <Link href="/consultation?interest=studio" className="font-bold text-teal-dark underline decoration-2 underline-offset-4">
              Book a Studio walkthrough
            </Link>{" "}
            instead.
          </p>
        </div>
      </Container>
    </Section>
  );
}
