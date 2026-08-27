import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceStructuredData } from "@/components/StructuredData";
import { SpecialistServiceProduction } from "@/components/SpecialistServiceProduction";
import { media } from "@/content/media";

export const metadata: Metadata = { title: { absolute: "Workplace Yoga Classes Australia | Corporate Yoga Australia" }, description: "Inclusive workplace Yoga classes for Australian teams, delivered onsite, online or hybrid. Flexible sessions shaped around your people and workday.", alternates: { canonical: "/workplace-yoga" } };

export default function WorkplaceYogaPage() {
  return <>
    <ServiceStructuredData name="Workplace Yoga" description="Human-led workplace Yoga sessions for Australian teams, adapted to real workplaces." path="/workplace-yoga" breadcrumbLabel="Workplace Yoga" breadcrumbs={[{ name: "Movement", path: "/movement" }, { name: "Workplace Yoga", path: "/workplace-yoga" }]} />
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Movement", href: "/movement" }, { label: "Workplace Yoga" }]} />
    <SpecialistServiceProduction
      kicker="Fit for here · Workplace Yoga"
      heading="Workplace Yoga shaped for where people really are."
      body="Practical sessions for offices, teams, conferences and hybrid work—adapted to the space, confidence and mobility in the room."
      primaryAction={{ label: "Plan workplace Yoga", href: "/contact?interest=one-off" }}
      image={media.homeOneOff}
      imageLabel="CYA photography · workplace"
      evidenceLine="No assumed experience. The format follows the people, room and working day."
      firstKicker="Designed around the room"
      firstHeading="Movement people can actually join."
      firstBody="A specialist service proof that starts with workplace reality: space, clothing, confidence, access and the shape of the working day."
      firstCards={[{ title: "In the room", body: "Chair-based, mat-based or standing formats selected for the space available." }, { title: "For mixed confidence", body: "Clear options and human facilitation make joining feel possible, not performative." }, { title: "Across the working day", body: "A useful reset before work, between meetings or as a regular team rhythm." }]}
      secondKicker="Field Notes"
      secondHeading="What good workplace Yoga looks like in context."
      secondCards={[{ title: "A meeting room at lunch", body: "Chairs stayed in. The session met the room instead of pretending it was a studio." }, { title: "A regular team reset", body: "A small, repeatable session became part of the working week—not another initiative to remember." }, { title: "A broader Working Rhythm", body: "Keep it one-off, repeat it, or connect it only when useful.", href: "/workplace-wellbeing-programs" }]}
      closingHeading="Find the right Yoga format for your workplace."
      closingBody="Tell us about the people, place and moment. We’ll recommend a useful starting point."
    />
  </>;
}
