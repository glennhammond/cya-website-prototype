import { LeadConversionSignal } from "@/components/LeadConversionSignal";
import {
  ProductionAction,
  ProductionContainer,
  ProductionKicker,
} from "@/components/ProductionPrimitives";

export function ThankYouPage({ online = false }: { online?: boolean }) {
  const successRoute = online ? "/contact-thank-you-online" : "/contact-thank-you";
  return (
    <section className="cya-page-hero">
      <LeadConversionSignal successRoute={successRoute} />
      <ProductionContainer>
        <div className="max-w-3xl border-l-4 border-[var(--cya-gold)] pl-7 sm:pl-10">
          <ProductionKicker>Enquiry received</ProductionKicker>
          <h1 className="cya-page-title mt-5">
            Thank you.
          </h1>
          <p className="cya-lead mt-6">
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
