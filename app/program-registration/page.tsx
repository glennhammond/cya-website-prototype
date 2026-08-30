import type { Metadata } from "next";
import {
  ProductionAction,
  ProductionContainer,
  ProductionKicker,
} from "@/components/ProductionPrimitives";

export const metadata: Metadata = {
  title: "Cromwell Wellbeing Program Registration",
  description: "Register to continue to the Cromwell wellbeing program in the CYA Wellbeing Studio.",
  alternates: { canonical: "/program-registration" },
  robots: { index: false, follow: true },
};

export default function ProgramRegistrationPage() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <ProductionContainer>
        <div className="max-w-3xl">
          <ProductionKicker>Cromwell wellbeing program</ProductionKicker>
          <h1 className="mt-5 text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] text-[var(--cya-teal-dark)]">
            Register for the Cromwell wellbeing program.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--cya-body)]">
            Continue to the CYA Wellbeing Studio to create your account and access the program. You will enter
            your registration details securely in the Studio signup process.
          </p>
          <div className="mt-8">
            <ProductionAction href="https://studio.corporateyoga.com.au/login/signup.php">
              Continue to Studio signup
            </ProductionAction>
          </div>
          <p className="mt-6 max-w-2xl border-l-2 border-[var(--cya-divider)] pl-5 text-sm leading-6 text-[var(--cya-body)]">
            After creating your account, select the Cromwell client group when prompted. If you already have an
            account, use the Studio sign-in option instead.
          </p>
        </div>
      </ProductionContainer>
    </section>
  );
}
