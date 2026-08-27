import type { Metadata } from "next";
import { Container, Kicker, Section } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";

export const metadata: Metadata = {
  title: "Cromwell Wellbeing Program Registration",
  description: "Register to continue to the Cromwell wellbeing program in the CYA Wellbeing Studio.",
  alternates: { canonical: "/program-registration" },
  robots: { index: false, follow: true },
};

export default function ProgramRegistrationPage() {
  return (
    <Section tone="white">
      <Container>
        <div className="mx-auto max-w-2xl py-10 sm:py-16">
          <Kicker>Cromwell wellbeing program</Kicker>
          <h1 className="mt-5 text-[40px] sm:text-[52px]">Register for the Cromwell wellbeing program.</h1>
          <p className="mt-5 text-lg leading-relaxed text-body">
            Continue to the CYA Wellbeing Studio to create your account and access the program. You will enter
            your registration details securely in the Studio signup process.
          </p>
          <div className="mt-8">
            <CtaLink href="https://studio.corporateyoga.com.au/login/signup.php" external>
              Continue to Studio signup
            </CtaLink>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-body">
            After creating your account, select the Cromwell client group when prompted. If you already have an
            account, use the Studio sign-in option instead.
          </p>
        </div>
      </Container>
    </Section>
  );
}
