import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { ProductionAction, ProductionContainer, ProductionKicker } from "@/components/ProductionPrimitives";

export const metadata: Metadata = {
  title: { absolute: "Workplace Meditation & Corporate Mindfulness Workshops | Corporate Yoga Australia" },
  description: "Practical workplace meditation, mindfulness and breathwork that help Australian teams pause, reset and manage pressure.",
  alternates: { canonical: "/meditation-mindfulness" },
};

const formats = [
  { number: "01", title: "Short guided resets", body: "Brief practices that help people pause, settle and return to the day.", image: "/images/selected/cya-about-worldview-group-rest.webp", href: "/contact?interest=one-off" },
  { number: "02", title: "Mindfulness sessions", body: "Longer guided experiences for focus, transition and a calmer working rhythm.", image: "/images/selected/cya-conferences-hero-facilitator-led-group.webp", href: "/contact?interest=one-off" },
  { number: "03", title: "Ongoing support", body: "Repeatable live and digital practices people can return to over time.", image: "/images/selected/cya-conferences-studio-remote-grid.webp", href: "/online-wellbeing" },
] as const;

const process = [
  ["01", "Understand what the workplace needs to support"],
  ["02", "Choose the right format and facilitator approach"],
  ["03", "Make participation clear, optional and easy to access"],
  ["04", "Build continuity only where it is useful"],
] as const;

const faqs = [
  ["Do people need meditation experience?", "No. Sessions are designed for mixed confidence and experience. People can participate seated or standing, with eyes open or closed, and are not expected to perform meditation in a particular way."],
  ["How long can a mindfulness session be?", "The format can range from a short guided reset to a longer facilitated session. We shape the length around the working day, the purpose and how people will join."],
  ["Is workplace mindfulness therapy?", "No. These experiences are workplace wellbeing activities, not clinical or therapeutic services. We use clear, invitational language and keep appropriate boundaries around the purpose of the session."],
  ["Can sessions be delivered online?", "Yes. Meditation and mindfulness work well live online and can also form part of an ongoing program for hybrid or distributed teams."],
] as const;

export default function MeditationMindfulnessPage() {
  return (
    <>
      <ServiceStructuredData name="Workplace Mindfulness & Meditation" description="Practical workplace mindfulness, guided meditation and breathwork for Australian teams." path="/meditation-mindfulness" breadcrumbLabel="Mindfulness & Meditation" />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Mindfulness & Meditation" }]} />

      <section className="bg-[var(--cya-surface-page)] py-12 sm:py-14 lg:py-16">
        <ProductionContainer className="grid max-w-[1440px] gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14 xl:gap-16">
          <div>
            <ProductionKicker>Meditation & mindfulness</ProductionKicker>
            <h1 className="mt-5 max-w-3xl text-[clamp(3rem,4.8vw,4.55rem)] font-bold leading-[1.03] tracking-[-0.025em] text-[var(--cya-teal-dark)]">A useful pause in the working day</h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-[var(--cya-body)]">Guided meditation, mindfulness and breath practices that help people pause, reset and return without pressure to perform.</p>
            <div className="mt-9"><ProductionAction href="/contact?interest=one-off">Tell us what you’re planning</ProductionAction></div>
          </div>
          <figure className="relative aspect-[4/3] overflow-hidden bg-white"><Image src="/images/selected/cya-about-worldview-group-rest.webp" alt="A group takes part in a quiet guided workplace wellbeing session." fill priority sizes="(min-width: 1280px) 620px, (min-width: 1024px) 48vw, 100vw" className="object-cover" /></figure>
        </ProductionContainer>
        <ProductionContainer className="mt-10"><div className="grid border-t border-[var(--cya-ochre)] pt-6 md:grid-cols-2 md:items-center"><h2 className="text-2xl font-semibold tracking-[-0.015em] text-[var(--cya-teal-dark)]">Wellbeing belongs in the workday</h2><p className="mt-3 text-base text-[var(--cya-teal-dark)] md:mt-0 md:text-right">Quiet, practical and shaped around working life.</p></div></ProductionContainer>
      </section>

      <section className="bg-white py-20 lg:py-24"><ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16"><figure className="relative aspect-[4/3] overflow-hidden bg-[var(--cya-surface-page)]"><Image src="/images/selected/cya-conferences-hero-facilitator-led-group.webp" alt="A facilitator leads a quiet group wellbeing practice." fill sizes="(min-width: 1280px) 620px, (min-width: 1024px) 50vw, 100vw" className="object-cover" /></figure><div><ProductionKicker>Designed for working life</ProductionKicker><h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Calm, focus and connection are different jobs</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">A short reset before an important meeting needs a different approach from a longer mindfulness session or an ongoing practice. We start with what the workplace needs to support, then choose the format deliberately.</p><div className="mt-8"><ProductionAction href="/contact?interest=one-off" style="secondary">Discuss your workplace</ProductionAction></div></div></ProductionContainer></section>

      <section className="bg-[var(--cya-surface-page)] py-20 lg:py-24"><ProductionContainer><ProductionKicker>Ways to take part</ProductionKicker><h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Choose the kind of pause that fits</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--cya-body)]">Start with the moment, the people and what would make participation feel comfortable.</p><div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">{formats.map((item) => <article key={item.number} className="min-w-[84%] snap-start border-y border-[var(--cya-divider)] bg-white py-6 sm:min-w-[60%] md:min-w-0 md:px-6"><p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{item.number}</p><h3 className="mt-4 text-2xl font-semibold text-[var(--cya-teal-dark)]">{item.title}</h3><div className="relative mt-5 aspect-[16/9] overflow-hidden bg-[var(--cya-surface-page)]"><Image src={item.image} alt="" fill sizes="(min-width: 768px) 33vw, 84vw" className="object-cover" /></div><p className="mt-4 leading-7 text-[var(--cya-body)]">{item.body}</p><Link href={item.href} className="mt-5 inline-flex font-semibold text-[var(--cya-teal-dark)] hover:underline">Explore →</Link></article>)}</div><p className="mt-2 text-sm text-[var(--cya-body)] md:hidden">Swipe to explore →</p></ProductionContainer></section>

      <section className="bg-white py-20 lg:py-24"><ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(18rem,0.75fr)_minmax(0,1.25fr)] lg:gap-20"><div><ProductionKicker>How we work with you</ProductionKicker><h2 className="mt-5 max-w-xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Make the experience easy to approach</h2><p className="mt-6 max-w-xl text-lg leading-8 text-[var(--cya-body)]">Choice, clear language and appropriate boundaries are part of the design, not an afterthought.</p></div><div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 md:block md:overflow-visible md:pb-0">{process.map(([number,title]) => <article key={number} className="min-w-[78%] snap-start border-y border-[var(--cya-divider)] px-2 py-7 md:grid md:min-w-0 md:grid-cols-[3rem_1fr] md:border-t-0 md:border-b md:px-0 md:first:border-t"><p className="text-xs font-semibold text-[var(--cya-ochre-ink)]">{number}</p><h3 className="mt-3 text-xl font-semibold leading-7 text-[var(--cya-charcoal)] md:mt-0">{title}</h3></article>)}</div><p className="text-sm text-[var(--cya-body)] md:hidden lg:col-start-2">Swipe to continue →</p></ProductionContainer></section>

      <section className="bg-[var(--cya-surface-base)] py-20 lg:py-24"><ProductionContainer className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16"><div><ProductionKicker>Connected support</ProductionKicker><h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">Useful practices people can return to</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cya-body)]">For ongoing programs, live sessions can be supported by short digital practices people can use between scheduled moments, including across hybrid and distributed teams.</p><div className="mt-8"><ProductionAction href="/online-wellbeing">Explore online wellbeing</ProductionAction></div></div><figure className="relative aspect-[16/9] overflow-hidden bg-white"><Image src="/images/selected/cya-conferences-studio-remote-grid.webp" alt="Colleagues join a workplace wellbeing session remotely." fill sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" /></figure></ProductionContainer></section>

      <section className="bg-white py-20 lg:py-24"><ProductionContainer className="grid gap-10 lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1.35fr)] lg:gap-20"><div><ProductionKicker>Practical questions</ProductionKicker><h2 className="mt-5 text-4xl font-bold tracking-[-0.018em] text-[var(--cya-charcoal)] lg:text-5xl">Questions organisations often ask</h2></div><div className="border-t border-[var(--cya-divider)]">{faqs.map(([question,answer]) => <details key={question} className="group border-b border-[var(--cya-divider)] py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-[var(--cya-charcoal)]"><span>{question}</span><span aria-hidden="true" className="text-xl transition-transform group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl pr-10 leading-7 text-[var(--cya-body)]">{answer}</p></details>)}</div></ProductionContainer></section>

      <section className="border-t border-[var(--cya-ochre)] bg-[var(--cya-surface-page)] py-16 lg:py-20"><ProductionContainer className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center"><div><h2 className="max-w-3xl text-4xl font-bold tracking-[-0.018em] text-[var(--cya-teal-dark)] lg:text-5xl">What kind of pause would help your workplace?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--cya-teal-dark)]">Tell us about the people, the moment and what you would like the experience to support.</p></div><ProductionAction href="/contact?interest=one-off">Start a conversation</ProductionAction></ProductionContainer></section>
    </>
  );
}
