import { Container, Section, Kicker } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import { memberSignInHref } from "@/content/navigation";
import { site } from "@/content/site";
import { media } from "@/content/media";

export function StudioPreview() {
  return (
    <Section tone="teal">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Kicker tone="pale">{site.studioLockup}</Kicker>
            <h2 className="mt-3 text-heading-lg text-white">
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
          <div className="relative h-[280px] overflow-hidden rounded-[var(--radius-card)] sm:h-[360px] lg:h-[420px]">
            <ImageMedia asset={media.studioEmployeeHome} treatment="bleed" sizes="(min-width: 1024px) 45vw, 100vw" />
            <div className="absolute inset-0 flex items-center justify-center bg-teal-dark/10">
              <span
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-[var(--shadow-card)]"
              >
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
                  <path d="M2 2 L18 12 L2 22 Z" fill="#103F45" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
