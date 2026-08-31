import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Corporate Yoga Australia privacy policy — working draft pending final business and privacy/legal approval.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: false },
};

const purposes = [
  "respond to enquiries and understand a prospective client’s brief",
  "confirm schedules, formats, locations and practical requirements",
  "prepare proposals, quotes, agreements and invoices",
  "plan, provide and support workplace wellbeing services",
  "manage registrations, attendance, access and participant communications",
  "make reasonable accessibility or safety arrangements",
  "communicate with clients, participants, facilitators, suppliers and partners",
  "improve our website, services and participant experience",
  "maintain business, financial, safety and service records",
  "prevent misuse, manage risks and protect our systems",
  "comply with applicable legal, regulatory, insurance and contractual obligations",
] as const;

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
      <section className="bg-[var(--cya-canvas)] py-12 sm:py-16 lg:py-20">
        <ProductionContainer>
          <div className="max-w-4xl">
            <ProductionKicker>Privacy</ProductionKicker>
            <h1 className="mt-4 text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1.04] text-[var(--cya-teal-dark)]">
              Corporate Yoga Australia Privacy Policy
            </h1>
            <div className="mt-7 border border-[var(--cya-gold)] bg-white p-5 text-sm leading-6 text-[var(--cya-body)]">
              <p className="font-bold text-[var(--cya-teal-dark)]">Working draft — 29 August 2026</p>
              <p className="mt-2">
                This is a plain-English working draft for business and privacy review. It must not be published as final until the operational checks are complete and the wording is approved by Debby Lewis and the appointed privacy/legal reviewer.
              </p>
            </div>
          </div>
        </ProductionContainer>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <ProductionContainer>
          <article className="max-w-4xl space-y-12 text-base leading-7 text-[var(--cya-body)]">
            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">About this policy</h2>
              <p className="mt-4">Corporate Yoga Australia respects your privacy and is committed to handling personal information carefully, transparently and securely.</p>
              <p className="mt-4">This policy explains how we collect, hold, use and disclose personal information when you visit our website; contact us or submit an enquiry; ask us to prepare a proposal or arrange a workplace wellbeing service; participate in a Corporate Yoga Australia session, program, event or online experience; communicate with us as a client, prospective client, facilitator, supplier or partner; or otherwise interact with Corporate Yoga Australia.</p>
              <p className="mt-4">In this policy, <strong>Corporate Yoga Australia</strong>, <strong>we</strong>, <strong>us</strong> and <strong>our</strong> refer to Deborah Gail Lewis, ABN 59 474 451 715, trading as Corporate Yoga Australia.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">What personal information we collect</h2>
              <p className="mt-4">The personal information we collect depends on how you interact with us. It may include your name, work email address, telephone number, organisation and role; information about the service, event, program or workplace experience you are considering; scheduling, location, delivery-format and practical-requirement information; communications, enquiries, feedback, complaints and support requests; booking, attendance and participation information; billing, payment and transaction information relating to a client engagement; limited technical information generated when you use our website; and other information you choose to provide.</p>
              <p className="mt-4">Where reasonably necessary for safe and accessible participation, we may also collect limited health, accessibility or other sensitive information. We will only collect this information with consent or where otherwise permitted by law, and only to the extent needed for the relevant purpose.</p>
              <p className="mt-4 font-semibold">Please do not include health information or other sensitive personal information in a general website enquiry unless it is necessary for your request.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">How we collect personal information</h2>
              <p className="mt-4">We usually collect personal information directly from you when you complete a website form; email, telephone or otherwise contact us; register for or participate in a session, event or program; provide feedback or respond to a survey; or communicate with us during the planning or delivery of a service.</p>
              <p className="mt-4">We may also receive relevant information from your employer or the organisation arranging a Corporate Yoga Australia service; an authorised organiser, contact person or event partner; a facilitator or service provider working with us; or our website, communications and analytics systems.</p>
              <p className="mt-4">If someone provides us with personal information about another person, they should have authority to do so and should make that person aware of this policy where appropriate.</p>
              <p className="mt-4">Where practicable, you may interact with us anonymously or using a pseudonym. In some circumstances, however, we need identifying or contact information to respond to an enquiry, arrange a service, manage a booking or meet legal and safety obligations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">Why we collect and use personal information</h2>
              <p className="mt-4">We collect and use personal information where reasonably necessary to:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">{purposes.map((purpose) => <li key={purpose}>{purpose}.</li>)}</ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">Enquiries and marketing communications</h2>
              <p className="mt-4">When you submit a <strong>Plan with Corporate Yoga Australia</strong> enquiry, we use the information you provide to respond to and manage that enquiry.</p>
              <p className="mt-4">Submitting an enquiry does <strong>not</strong> subscribe you to marketing communications. We will only send marketing communications where you have separately agreed to receive them or where the communication is otherwise permitted by law. You can unsubscribe at any time using the unsubscribe option in the message or by contacting us.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">When we disclose personal information</h2>
              <p className="mt-4">We may disclose personal information where reasonably necessary to Corporate Yoga Australia personnel and authorised facilitators involved in planning or delivering a service; the organisation arranging or funding a service, but only to the extent appropriate for administration, delivery or agreed reporting; service providers that support our website, email, customer communications, bookings, payments, analytics, file storage, video delivery or other business systems; professional advisers, insurers, auditors or regulators; or emergency services, government bodies or other parties where required or authorised by law, or where reasonably necessary to address a serious threat to health or safety.</p>
              <p className="mt-4"><strong>We do not sell personal information.</strong></p>
              <p className="mt-4">Where we report participation or engagement to a client organisation, we aim to use aggregated or de-identified information unless identifiable information is necessary, authorised and appropriate.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">Overseas processing and disclosure</h2>
              <p className="mt-4">Some technology and service providers we use may store or process information outside Australia. The locations involved can depend on the provider and its infrastructure.</p>
              <p className="mt-4">Before publication of this policy, Corporate Yoga Australia will identify the service providers that handle personal information, determine whether overseas disclosure is likely and, where practicable, state the relevant countries. Where overseas processing or disclosure occurs, we will take reasonable steps appropriate to the circumstances to protect the information and comply with applicable Australian privacy requirements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">Website analytics, cookies and similar technologies</h2>
              <p className="mt-4">Our website may use cookies and similar technologies that are necessary for the website to function and, where enabled, to help us understand website use and improve the experience.</p>
              <p className="mt-4">Analytics tools may collect information such as browser and device type, approximate location, pages visited, referring pages and interactions with the website. We do not use general website analytics to ask for health information.</p>
              <p className="mt-4">Before publication of this policy, Corporate Yoga Australia will confirm the analytics and tracking tools present on the production website, their purposes, applicable retention settings and whether a consent or cookie-management mechanism is required.</p>
              <p className="mt-4">You can control some cookies through your browser settings. Disabling certain cookies may affect how parts of the website work.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">How we hold and protect personal information</h2>
              <p className="mt-4">We may hold personal information in electronic business systems, email, secure cloud services and, where necessary, business records.</p>
              <p className="mt-4">We take reasonable steps appropriate to the nature of the information to protect it from misuse, interference, loss and unauthorised access, modification or disclosure. These steps may include access controls, authentication, appropriate service-provider settings, secure devices, backups and limiting access to people who need the information for an authorised purpose.</p>
              <p className="mt-4">No method of electronic transmission or storage is completely secure. If we become aware of a data breach, we will assess and respond to it in accordance with applicable legal requirements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">How long we retain personal information</h2>
              <p className="mt-4">We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, to maintain appropriate business records, or to meet legal, contractual, insurance and dispute-resolution requirements.</p>
              <p className="mt-4">When personal information is no longer required, we take reasonable steps to destroy it securely or de-identify it, unless the law requires or permits us to retain it.</p>
              <p className="mt-4">Before publication of this policy, Corporate Yoga Australia will confirm the practical retention rules applying to website enquiries, client and participant records, analytics data and marketing records.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">Accessing or correcting your personal information</h2>
              <p className="mt-4">You may ask us to confirm whether we hold personal information about you; give you access to personal information we hold about you; or correct information that is inaccurate, out of date, incomplete, irrelevant or misleading.</p>
              <p className="mt-4">To make a request, contact us using the details below. We may need to verify your identity before acting on a request. We will respond within a reasonable period and explain any lawful reason if we cannot provide access or make a requested correction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">Privacy questions and complaints</h2>
              <p className="mt-4">If you have a privacy question or believe we have mishandled your personal information, please contact us using the details below. Please explain the issue and provide enough information for us to investigate it.</p>
              <p className="mt-4">We will acknowledge and assess the matter, investigate where appropriate and respond within a reasonable period. We may contact you if we need more information.</p>
              <p className="mt-4">If you are not satisfied with our response, you may be able to make a complaint to the Office of the Australian Information Commissioner. Information about privacy complaints is available at <a className="font-semibold underline underline-offset-4" href="https://www.oaic.gov.au/privacy/privacy-complaints">oaic.gov.au</a>.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">Third-party websites and services</h2>
              <p className="mt-4">Our website may link to websites, platforms or services operated by other organisations. Those organisations are responsible for their own privacy practices. We recommend reviewing their privacy information before providing personal information to them.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">Changes to this policy</h2>
              <p className="mt-4">We may update this policy when our services, systems, practices or legal obligations change. The current version will be published on our website with its effective date.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--cya-teal-dark)]">Contact us</h2>
              <address className="mt-4 not-italic">
                <strong>Corporate Yoga Australia</strong><br />
                Deborah Gail Lewis, ABN 59 474 451 715, trading as Corporate Yoga Australia<br />
                Email: <a className="font-semibold underline underline-offset-4" href="mailto:info@corporateyoga.com.au">info@corporateyoga.com.au</a><br />
                Phone: <a className="font-semibold underline underline-offset-4" href="tel:1300373363">1300 373 363</a>
              </address>
              <p className="mt-4"><strong>Effective date:</strong> To be inserted following approval.</p>
            </section>

            <p className="border-t border-[var(--cya-divider)] pt-8 text-sm leading-6">
              This review page is intentionally excluded from search until the policy is approved. Return to <Link className="font-semibold underline underline-offset-4" href="/contact">Plan with Corporate Yoga Australia</Link>.
            </p>
          </article>
        </ProductionContainer>
      </section>
    </>
  );
}
