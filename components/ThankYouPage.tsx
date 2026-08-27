import Link from "next/link";
import { Container, Kicker, Section } from "@/components/Primitives";
import { LeadConversionSignal } from "@/components/LeadConversionSignal";

export function ThankYouPage({ online = false }: { online?: boolean }) {
  const successRoute = online ? "/contact-thank-you-online" : "/contact-thank-you";
  return (
    <Section tone="white">
      <LeadConversionSignal successRoute={successRoute} />
      <Container>
        <div className="mx-auto max-w-2xl py-12 sm:py-20">
          <Kicker>Enquiry received</Kicker>
          <h1 className="mt-5 text-[40px] sm:text-[52px]">Thank you.</h1>
          <p className="mt-5 text-lg leading-relaxed text-body">
            {online
              ? "Your online wellbeing enquiry has been received. A member of the Corporate Yoga Australia team will be in touch to discuss what could work for your team."
              : "Your enquiry has been received. A member of the Corporate Yoga Australia team will be in touch to discuss the next step."}
          </p>
          <p className="mt-8">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center rounded-[18px] border border-teal px-6 text-sm font-bold text-teal-dark hover:bg-mist"
            >
              Back to the website
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  );
}
