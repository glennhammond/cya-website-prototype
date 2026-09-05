import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

export const metadata: Metadata = {
  title: { absolute: "Online Workplace Wellbeing Australia | Corporate Yoga Australia" },
  description: "Human-led online workplace wellbeing for remote, hybrid and distributed teams, including live online experiences and Wellbeing Studio support.",
  alternates: { canonical: "/online-wellbeing" },
};

const supportFormats = [
  ["01", "Live online experiences", "Human-led movement, mindfulness and wellbeing sessions adapted for online participation."],
  ["02", "Wellbeing Studio", "Short practices and useful resources people can return to between scheduled moments."],
  ["03", "Connected programs", "Online and onsite experiences combined into one practical workplace wellbeing rhythm."],
] as const;

const process = [
  ["01", "Understand where and how people work"],
  ["02", "Choose the right live and digital mix"],
  ["03", "Make access simple and useful"],
  ["04", "Review what people return to"],
] as const;

const faqs = [
  ["Can online wellbeing support hybrid and distributed teams?", "Yes. Online delivery can help create a shared experience across offices, homes and locations, while allowing the wider program to adapt to different working patterns."],
  ["Is Wellbeing Studio a standalone wellbeing platform?", "Wellbeing Studio is designed to support an ongoing Corporate Yoga Australia service relationship. It extends access between live experiences rather than replacing human facilitation, planning or support."],
  ["What can people access between live sessions?", "Depending on the program, participants may be able to return to short movement, mindfulness and wellbeing practices, useful resources and campaign content selected around the workplace need."],
  ["How do you know whether online support is useful?", "We look at proportionate signals such as aggregate participation, delivery experience and voluntary feedback rather than monitoring individual wellbeing."],
] as const;

export default function OnlineWellbeingPage() {
  return (
    <>
      <ServiceStructuredData name="Online Workplace Wellbeing" description="Human-led online workplace wellbeing for remote, hybrid and distributed teams." path="/online-wellbeing" breadcrumbLabel="Online Wellbeing" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Online Wellbeing" }]} />

      <section className="bg-[var(--cya-surface-page)] py-12 sm:py-14 lg:py-16">
        <ProductionContainer className="grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-14 xl:gap-16">
          <div>
            <ProductionKicker>Online wellbeing</ProductionKicker>
            <h1 className="mt-5 max-w-3xl text-[clamp(3rem,4.8vw,4.55rem)] font-bold leading-[1.03] tracking-[-0.025em] text-[var(--cya-teal-dark)]">Wellbeing support people can return to wherever work happens</h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[var(--cya-body)]">Live online experiences and Wellbeing Studio support help extend workplace wellbeing across locations, working patterns and the spaces between scheduled sessions.</p>
            <div className="mt-9"><ProductionAction href="/contact?interest=online">Tell us what you’re planning</ProductionAction></div>
          </div>
          <figure className="relative aspect-[4/3] overflow-hidden bg-white"><Image src="/images/selected/cya-conferences-studio-remote-grid.webp" alt="Colleagues join a workplace wellbeing experience remotely from different locations." fill priority sizes="(min-width: 1280px) 620px, (min-width: 1024px) 48vw, 100vw" className="object-cover" /></figure>
        </ProductionContainer>
        <ProductionContainer className="mt-10"><div className="grid border-t border-[var(--cya-ochre)] pt-6 md:grid-cols-2 md:items-center"><h2 className="text-2xl font-semibold tracking-[-0.015em] text-[var(--cya-teal-dark)]">Wellbeing belongs in the workday</h2><p className="mt-3 text-base text-[var(--cya-teal-dark)] md:mt-0 md:text-right">Useful support, easier to reach across the places people work.</p></div></ProductionContainer>
      </section>

      <section className="bg-white py-20 lg:py-24"><ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16"><figure className="relative aspect-[4/3] overflow-hidden bg-[var(--cya-surface-page)]"><Image src="/images/selected/cya-studio-employee-home-practice.webp" alt="A person takes part in a short wellbeing practice at home during the working day." fill sizes="(min-width: 1280px) 620px, (min-width: 1024px) 50vw, 100vw" className="object-cover" /></figure><div><ProductionKicker>Designed for continuity</ProductionKicker><h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Support does not have to stop when the live session ends</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">Online wellbeing can create useful continuity between live experiences. People can join a scheduled session, return to a short practice later and stay connected to the same workplace wellbeing rhythm without turning wellbeing into another task.</p><div className="mt-8"><ProductionAction href="/contact?interest=online" style="secondary">Discuss your workplace</ProductionAction></div></div></ProductionContainer></section>

      <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24"><ProductionContainer><ProductionKicker>Ways to stay connected</ProductionKicker><h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Choose the level of online support that fits the program</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">Online support can stand alongside onsite delivery, support distributed teams or extend access between live moments.</p><div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">{supportFormats.map(([number,title,body]) => <article key={number} className="min-w-[84%] snap-start border-y border-[var(--cya-divider)] bg-white px-1 py-7 sm:min-w-[60%] md:min-w-0 md:px-6"><p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p><h3 className="mt-4 text-2xl font-semibold text-[var(--cya-teal-dark)]">{title}</h3><p className="mt-4 leading-7 text-[var(--cya-body)]">{body}</p></article>)}</div><p className="mt-2 text-sm text-[var(--cya-body)] md:hidden">Swipe to explore →</p></ProductionContainer></section>

      <section className="bg-white py-20 lg:py-24"><ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(18rem,0.75fr)_minmax(0,1.25fr)] lg:gap-20"><div><ProductionKicker>How we work with you</ProductionKicker><h2 className="mt-5 max-w-xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Build online support around how people already work</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[var(--cya-body)]">The aim is not to add another digital destination. It is to make useful support easier to access within the working day.</p></div><div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:block md:overflow-visible md:pb-0">{process.map(([number,title]) => <article key={number} className="min-w-[78%] snap-start border-y border-[var(--cya-divider)] px-2 py-7 md:grid md:min-w-0 md:grid-cols-[3rem_1fr] md:border-t-0 md:border-b md:px-0 md:first:border-t"><p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p><h3 className="mt-3 text-xl font-semibold leading-7 text-[var(--cya-charcoal)] md:mt-0">{title}</h3></article>)}</div><p className="text-sm text-[var(--cya-body)] md:hidden lg:col-start-2">Swipe to continue →</p></ProductionContainer></section>

      <section className="overflow-hidden bg-[var(--cya-surface-base)] py-20 lg:py-24"><ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center lg:gap-16"><div><ProductionKicker>Wellbeing Studio by Corporate Yoga Australia</ProductionKicker><h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">A useful place to return to between live moments</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">Wellbeing Studio gives participants access to practical workplace wellbeing support selected around the program. Planning, curation and the relationship with your organisation remain human-led.</p><div className="mt-8"><ProductionAction href="https://wellbeingstudio.com.au" style="secondary">Visit Wellbeing Studio</ProductionAction></div></div><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-[var(--cya-ochre-ink)]">Live experience → return → continuity</p><figure className="relative aspect-[2048/970] overflow-hidden border border-[var(--cya-divider)] bg-white shadow-[0_18px_50px_rgba(14,67,74,0.08)]"><Image src="/images/selected/wellbeing-studio-placeholder.png" alt="Wellbeing Studio interface showing practical wellbeing support for different moments in the working day." fill sizes="(min-width: 1024px) 62vw, 100vw" className="object-contain" /></figure></div></ProductionContainer></section>

      <section className="bg-white py-20 lg:py-24"><ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1.35fr)] lg:gap-20"><div><ProductionKicker>Practical questions</ProductionKicker><h2 className="mt-5 text-4xl font-bold tracking-[-0.018em] text-[var(--cya-charcoal)] lg:text-5xl">Questions organisations often ask</h2></div><div className="border-t border-[var(--cya-divider)]">{faqs.map(([question,answer]) => <details key={question} className="group border-b border-[var(--cya-divider)] py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-[var(--cya-charcoal)]"><span>{question}</span><span aria-hidden="true" className="text-xl transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl pr-10 leading-7 text-[var(--cya-body)]">{answer}</p></details>)}</div></ProductionContainer></section>

      <section className="border-t border-[var(--cya-ochre)] bg-[var(--cya-surface-page)] py-16 lg:py-20"><ProductionContainer className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center"><div><h2 className="max-w-3xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">What would help your people between live moments?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--cya-teal-dark)]">Tell us where your people work, what they already have access to and what kind of continuity would be useful.</p></div><ProductionAction href="/contact?interest=online">Start a conversation</ProductionAction></ProductionContainer></section>
    </>
  );
}
