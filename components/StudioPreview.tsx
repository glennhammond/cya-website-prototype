import { Container, Section, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { EvidencePlaceholder } from "@/components/EvidencePlaceholder";
import { memberSignInHref } from "@/content/navigation";
import { site } from "@/content/site";

export function StudioPreview() {
  return (
    <Section tone="teal">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Kicker tone="gold">{site.studioLockup}</Kicker>
            <h2 className="mt-3 text-[28px] text-white sm:text-[34px]">
              Practical digital wellbeing support, available beyond the scheduled session.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Give employees access to short live and on-demand practices designed for different moments in the
              workday and beyond. Wellbeing Studio is CYA&rsquo;s continuous digital layer — it stands alongside
              live delivery, not apart from it.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaLink href="/wellbeing-studio" variant="primary">
                Book a Studio walkthrough
              </CtaLink>
              <CtaLink href={memberSignInHref} variant="secondary" external>
                Member sign-in
              </CtaLink>
            </div>
          </div>
          <EvidencePlaceholder
            variant="studio"
            caption="Product placeholder — Wellbeing Studio member screens."
            status="evidence-required"
            note="Verified schedule, screenshots and reporting model required before publication."
          />
        </div>
      </Container>
    </Section>
  );
}
