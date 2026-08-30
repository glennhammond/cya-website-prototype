import { LeadConversionSignal } from "@/components/LeadConversionSignal";
import {
  ProductionAction,
  ProductionContainer,
  ProductionKicker,
} from "@/components/ProductionPrimitives";

export function ThankYouPage({ online = false }: { online?: boolean }) {
  const successRoute = online ? "/contact-thank-you-online" : "/contact-thank-you";
  return (
    <section className="bg-[var(--cya-surface-page)] py-20 lg:py-28">
      <LeadConversionSignal successRoute={successRoute} />
      <ProductionContainer>
        <div className="max-w-3xl border-l-4 border-[var(--cya-gold)] pl-7 sm:pl-10">
          <ProductionKicker>Enquiry received</ProductionKicker>
          <h1 className="mt-5 text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] text-[var(--cya-teal-dark)]">
            Thank you
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--cya-body)]">
            {online
              ? "Your online wellbeing enquiry has been received. A member of the Corporate Yoga Australia team will be in touch to discuss what could work for your team."
              : "Your enquiry has been received. A member of the Corporate Yoga Australia team will be in touch to discuss the next step."}
          </p>
          <div className="mt-8">
            <ProductionAction href="/" style="secondary">Back to the website</ProductionAction>
          </div>
        </div>
      </ProductionContainer>
    </section>
  );
}
