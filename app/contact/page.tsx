import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BreadcrumbStructuredData } from "@/components/StructuredData";
import { ConsultationForm } from "@/components/ConsultationForm";
import { ProductionAction, ProductionCard, ProductionContainer, ProductionKicker, ProductionPhoto } from "@/components/ProductionPrimitives";
import { interestLabelByType } from "@/content/consultation";
import { media } from "@/content/media";

export const metadata: Metadata = { title: "Contact Corporate Yoga Australia", description: "Tell Corporate Yoga Australia what needs to happen and begin planning a useful workplace wellbeing experience.", alternates: { canonical: "/contact" } };

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const { interest } = await searchParams;
  const contextualLabel = interest ? interestLabelByType[interest] : undefined;
  return <>
    <BreadcrumbStructuredData items={[{ name: "Contact", path: "/contact" }]} />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
    <section className="bg-white py-16 lg:py-20"><ProductionContainer className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center"><div><ProductionKicker>Plan with CYA</ProductionKicker><h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05]">{contextualLabel ? `Tell us about ${contextualLabel.toLowerCase()}.` : "Tell us what needs to happen."}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">Start with the people, workplace context and moment you need to support. You do not need to know the service name before getting in touch.</p><div className="mt-8 flex gap-3"><ProductionAction href="#planning-form">Start planning</ProductionAction><ProductionAction href="mailto:hello@corporateyoga.com.au" style="secondary">Contact directly</ProductionAction></div></div><aside className="bg-[var(--cya-teal-dark)] p-8 text-white"><ProductionKicker light>Planning starts here</ProductionKicker><ul className="mt-6 space-y-4"><li>People</li><li>Workplace context</li><li>What needs to happen</li></ul></aside></ProductionContainer></section>
    <ProductionPhoto asset={media.workplaceWellbeingHero} label="CYA photography · planning" priority />
    <section id="planning-form" className="bg-white py-20 lg:py-24"><ProductionContainer><ProductionKicker>Planning form</ProductionKicker><h2 className="mt-5 max-w-4xl text-4xl font-bold lg:text-5xl">A useful enquiry should not require product knowledge.</h2><p className="mt-5 max-w-4xl text-lg text-[var(--cya-body)]">The form asks for enough context to begin well, while keeping the first contact proportionate and accessible.</p><div className="mt-10 grid gap-5 md:grid-cols-3"><ProductionCard title="Your details" body="Name, organisation, email and preferred contact method." /><ProductionCard title="The workplace context" body="Locations, approximate audience and delivery environment." /><ProductionCard title="What needs to happen" body="The moment, need or organisational change you want to support." /></div><div className="mt-12 border-t border-[var(--cya-divider)] pt-12"><ConsultationForm initialInterest={interest} /></div></ProductionContainer></section>
    <section className="bg-[var(--cya-canvas)] py-20 lg:py-24"><ProductionContainer><ProductionKicker>What happens next</ProductionKicker><h2 className="mt-5 text-4xl font-bold lg:text-5xl">Clear expectations reduce conversion anxiety.</h2><div className="mt-10 grid gap-5 md:grid-cols-3"><ProductionCard title="1 · CYA reviews the context" body="The enquiry is considered by a person—not routed through an automated recommendation engine." tone="paper" /><ProductionCard title="2 · We clarify fit" body="CYA may ask about timing, access, format, facilitator needs or internal approval." tone="paper" /><ProductionCard title="3 · You receive a practical next step" body="A recommended starting point, scope or conversation—without pressure to buy a program." tone="paper" /></div></ProductionContainer></section>
  </>;
}
