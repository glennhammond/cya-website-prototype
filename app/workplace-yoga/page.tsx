import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

export const metadata: Metadata = {
  title: { absolute: "Workplace Yoga Classes Australia | Corporate Yoga Australia" },
  description: "Inclusive workplace yoga classes for Australian teams, delivered onsite, online or hybrid. Flexible sessions shaped around your people and workday.",
  alternates: { canonical: "/workplace-yoga" },
};

const deliveryFormats = [
  { number: "01", title: "One-off sessions", body: "A useful introduction, team moment or wellbeing-day activation.", image: "/images/selected/cya-movement-desk-stretch-office.webp", href: "/contact?interest=one-off" },
  { number: "02", title: "Regular classes", body: "A consistent rhythm of movement and breathing in the workday.", image: "/images/selected/cya-movement-outdoor-group.webp", href: "/workplace-wellbeing-programs" },
  { number: "03", title: "Events & conferences", body: "Accessible movement that changes the energy of the room.", image: "/images/selected/cya-conferences-hero-facilitator-led-group.webp", href: "/conferences-events" },
] as const;

const process = [
  ["01", "Understand the people and setting"],
  ["02", "Choose the right style and length"],
  ["03", "Make the session easy to access"],
  ["04", "Deliver with an experienced facilitator"],
] as const;

const faqs = [
  ["What if people have never tried yoga?", "That is completely fine. Workplace yoga is adapted for mixed experience and confidence, with clear options so people can participate at a level that feels appropriate."],
  ["What space and equipment do we need?", "The format can be shaped around the space available. Depending on the session, that may mean chairs, standing movement or mat-based practice. We confirm practical requirements with you before delivery."],
  ["Can sessions be delivered online?", "Yes. Workplace yoga can be delivered onsite or live online, and ongoing programs can combine both where that helps distributed or hybrid teams participate."],
] as const;

export default function WorkplaceYogaPage() {
  return (
    <>
      <ServiceStructuredData name="Workplace Yoga" description="Human-led workplace yoga sessions for Australian teams, adapted to real workplaces." path="/workplace-yoga" breadcrumbLabel="Workplace Yoga" breadcrumbs={[{ name: "Movement", path: "/movement" }, { name: "Workplace Yoga", path: "/workplace-yoga" }]} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Movement", href: "/movement" }, { label: "Workplace Yoga" }]} />

      <section className="bg-[var(--cya-surface-page)] py-12 sm:py-14 lg:py-16">
        <ProductionContainer className="grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14 xl:gap-16">
          <div>
            <ProductionKicker>Workplace yoga</ProductionKicker>
            <h1 className="mt-5 max-w-3xl text-[clamp(3rem,4.8vw,4.55rem)] font-bold leading-[1.03] tracking-[-0.025em] text-[var(--cya-teal-dark)]">Workplace yoga designed for real working days</h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[var(--cya-body)]">Inclusive sessions that help people move, breathe and reset without asking them to leave the realities of work behind.</p>
            <div className="mt-9"><ProductionAction href="/contact?interest=one-off">Tell us what you’re planning</ProductionAction></div>
          </div>
          <figure className="relative aspect-[4/3] overflow-hidden bg-white"><Image src="/images/selected/cya-home-oneoff-desk-stretch.webp" alt="Employees take part in an accessible workplace yoga session using chairs in a meeting room." fill priority sizes="(min-width: 1280px) 620px, (min-width: 1024px) 48vw, 100vw" className="object-cover" /></figure>
        </ProductionContainer>
        <ProductionContainer className="mt-10"><div className="grid border-t border-[var(--cya-ochre)] pt-6 md:grid-cols-2 md:items-center"><h2 className="text-2xl font-semibold tracking-[-0.015em] text-[var(--cya-teal-dark)]">Wellbeing belongs in the workday</h2><p className="mt-3 text-base text-[var(--cya-teal-dark)] md:mt-0 md:text-right">Practical, inclusive and shaped around working life.</p></div></ProductionContainer>
      </section>

      <section className="bg-white py-20 lg:py-24"><ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16"><figure className="relative aspect-[4/3] overflow-hidden bg-[var(--cya-surface-page)]"><Image src="/images/selected/cya-movement-desk-stretch-office.webp" alt="A group follows accessible movement during a workplace session in a meeting room." fill sizes="(min-width: 1280px) 620px, (min-width: 1024px) 50vw, 100vw" className="object-cover" /></figure><div><ProductionKicker>Designed for working life</ProductionKicker><h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">A practical pause people can step into</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">Workplace yoga can be gentle, energising or restorative. We shape the style, length and delivery around the people taking part, the room available and the rhythm of the working day.</p><div className="mt-8"><ProductionAction href="/contact?interest=one-off" style="secondary">Discuss your workplace</ProductionAction></div></div></ProductionContainer></section>

      <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24"><ProductionContainer><ProductionKicker>Ways to take part</ProductionKicker><h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Choose a delivery format</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">Start with what would help people take part comfortably.</p><div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">{deliveryFormats.map((item) => <article key={item.number} className="min-w-[84%] snap-start border-y border-[var(--cya-divider)] bg-white py-6 sm:min-w-[60%] md:min-w-0 md:px-6"><p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{item.number}</p><h3 className="mt-4 text-2xl font-semibold text-[var(--cya-teal-dark)]">{item.title}</h3><div className="relative mt-5 aspect-[16/9] overflow-hidden bg-[var(--cya-surface-page)]"><Image src={item.image} alt="" fill sizes="(min-width: 768px) 33vw, 84vw" className="object-cover" /></div><p className="mt-4 leading-7 text-[var(--cya-body)]">{item.body}</p><Link href={item.href} className="mt-5 inline-flex font-semibold text-[var(--cya-teal-dark)] hover:underline">Explore →</Link></article>)}</div><p className="mt-2 text-sm text-[var(--cya-body)] md:hidden">Swipe to explore →</p></ProductionContainer></section>

      <section className="bg-white py-20 lg:py-24"><ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(18rem,0.75fr)_minmax(0,1.25fr)] lg:gap-20"><div><ProductionKicker>How we work with you</ProductionKicker><h2 className="mt-5 max-w-xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">The right session starts with the workplace</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[var(--cya-body)]">A clear process keeps the experience useful for your people and workable for your organisation.</p></div><div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:block md:overflow-visible md:pb-0">{process.map(([number,title]) => <article key={number} className="min-w-[78%] snap-start border-y border-[var(--cya-divider)] px-2 py-7 md:grid md:min-w-0 md:grid-cols-[3rem_1fr] md:border-t-0 md:border-b md:px-0 md:first:border-t"><p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p><h3 className="mt-3 text-xl font-semibold leading-7 text-[var(--cya-charcoal)] md:mt-0">{title}</h3></article>)}</div><p className="text-sm text-[var(--cya-body)] md:hidden lg:col-start-2">Swipe to continue →</p></ProductionContainer></section>

      <section className="bg-[var(--cya-surface-base)] py-20 lg:py-24"><ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16"><div><ProductionKicker>Connected support</ProductionKicker><h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Support participation across locations</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">Combine onsite yoga with live online delivery when your people work across offices, homes or time zones.</p><div className="mt-8"><ProductionAction href="/online-wellbeing">Explore online wellbeing</ProductionAction></div></div><figure className="relative aspect-[16/9] overflow-hidden bg-white"><Image src="/images/selected/cya-movement-outdoor-group.webp" alt="A group takes part in a facilitated outdoor yoga session." fill sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" /></figure></ProductionContainer></section>

      <section className="bg-white py-20 lg:py-24"><ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1.35fr)] lg:gap-20"><div><ProductionKicker>Practical questions</ProductionKicker><h2 className="mt-5 text-4xl font-bold tracking-[-0.018em] text-[var(--cya-charcoal)] lg:text-5xl">Questions organisations often ask</h2></div><div className="border-t border-[var(--cya-divider)]">{faqs.map(([question,answer]) => <details key={question} className="group border-b border-[var(--cya-divider)] py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-[var(--cya-charcoal)]"><span>{question}</span><span aria-hidden="true" className="text-xl transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl pr-10 leading-7 text-[var(--cya-body)]">{answer}</p></details>)}</div></ProductionContainer></section>

      <section className="border-t border-[var(--cya-ochre)] bg-[var(--cya-surface-page)] py-16 lg:py-20"><ProductionContainer className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center"><div><h2 className="max-w-3xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Could workplace yoga help your people right now?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--cya-teal-dark)]">Tell us about your workplace and we will help you choose a useful starting point.</p></div><ProductionAction href="/contact?interest=one-off">Start a conversation</ProductionAction></ProductionContainer></section>
    </>
  );
}
