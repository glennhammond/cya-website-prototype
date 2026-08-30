import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbStructuredData } from "@/components/StructuredData";
import { ConsultationForm } from "@/components/ConsultationForm";
import { ProductionAction, ProductionCard, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";
import { interestLabelByType } from "@/content/consultation";

export const metadata: Metadata = { title: "Contact Corporate Yoga Australia", description: "Tell Corporate Yoga Australia what needs to happen and begin planning a useful workplace wellbeing experience.", alternates: { canonical: "/contact" } };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const { interest } = await searchParams;
  const contextualLabel = interest ? interestLabelByType[interest] : undefined;
  return <>
    <BreadcrumbStructuredData items={[{ name: "Contact", path: "/contact" }]} />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
    <section className="bg-white py-10 sm:py-14 lg:py-16"><ProductionContainer className="grid min-w-0 gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center"><div className="min-w-0"><ProductionKicker>Plan with CYA</ProductionKicker><h1 className="mt-4 max-w-4xl text-[clamp(2.5rem,11vw,4.5rem)] font-bold leading-[1.02]">{contextualLabel ? `Tell us about ${contextualLabel.toLowerCase()}.` : "Tell us what you are trying to make happen."}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">You do not need to arrive with the format or package already solved. A few useful details are enough for CYA to understand the context and respond personally.</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><ProductionAction href="#planning-form">Start planning</ProductionAction><ProductionAction href="mailto:info@corporateyoga.com.au" style="secondary">Email CYA</ProductionAction><ProductionAction href="tel:1300373363" style="secondary">Call 1300 373 363</ProductionAction></div></div><aside className="hidden bg-[var(--cya-teal-dark)] p-8 text-white lg:block"><ProductionKicker light>Planning starts here</ProductionKicker><ul className="mt-6 space-y-4"><li>People</li><li>Workplace context</li><li>What needs to happen</li></ul></aside></ProductionContainer></section>
    <section id="planning-form" className="scroll-mt-24 bg-white pb-14 pt-4 sm:pb-20 sm:pt-6 lg:py-20"><ProductionContainer className="min-w-0"><ProductionKicker>Planning form</ProductionKicker><h2 className="mt-3 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">A short, useful enquiry.</h2><p className="mt-3 max-w-3xl text-base leading-7 text-[var(--cya-body)]">Tell us what you want to make happen. You do not need to know the service name.</p><div className="mt-7 max-w-3xl border-t border-[var(--cya-divider)] pt-7"><ConsultationForm initialInterest={interest} /></div></ProductionContainer></section>
    <section className="bg-[var(--cya-canvas)] py-20 lg:py-24"><ProductionContainer><ProductionKicker>What happens next</ProductionKicker><h2 className="mt-5 text-4xl font-bold lg:text-5xl">A human takes it from here.</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">CYA will respond to your enquiry within two business days.</p><div className="mt-10 grid gap-5 md:grid-cols-3"><ProductionCard title="1 · CYA reviews the context" body="Your enquiry is considered by a person—not routed through an automated recommendation engine." tone="paper" /><ProductionCard title="2 · We clarify only what matters" body="CYA may ask about timing, access, format, facilitator needs or internal approval." tone="paper" /><ProductionCard title="3 · You receive a practical next step" body="A recommended starting point, scope or conversation—without pressure to buy a program." tone="paper" /></div></ProductionContainer></section>
  </>;
}
