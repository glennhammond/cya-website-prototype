import Link from "next/link";
import { Container } from "@/components/Primitives";
import { AnalyticsPreferencesButton } from "@/components/AnalyticsPreferencesButton";
import { primaryNav, memberSignInHref } from "@/content/navigation";
import { site } from "@/content/site";

export function SiteFooter({ analyticsPreferencesEnabled = false }: { analyticsPreferencesEnabled?: boolean }) {
  const showPrototypeWarning = process.env.NODE_ENV !== "production" || process.env.VERCEL_ENV === "preview";

  return (
    <footer id="site-footer" className="border-t border-divider bg-teal-dark text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/cya-logo-inline-white.svg" alt="Corporate Yoga Australia" className="h-8 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-white/75">{site.description}</p>
        </div>

        {primaryNav.filter((item) => item.children?.length).map((group) => (
          <nav key={group.label} aria-label={`${group.label} footer navigation`} className="flex flex-col gap-2">
            <h2 className="mb-1 text-xs font-bold uppercase tracking-[0.08em] text-white/60">{group.label}</h2>
            {group.children?.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/85 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        ))}

        <nav aria-label="Explore and support" className="flex flex-col gap-2">
          <h2 className="mb-1 text-xs font-bold uppercase tracking-[0.08em] text-white/60">Explore</h2>
          <Link href="/blog" className="text-sm text-white/85 hover:text-white">Insights</Link>
          <Link href="/contact" className="text-sm text-white/85 hover:text-white">Start planning</Link>
          <a href={memberSignInHref} target="_blank" rel="noopener noreferrer" className="text-sm text-white/85 hover:text-white">
            Member sign-in<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <Link href="/privacy-policy" className="text-sm text-white/85 hover:text-white">Privacy</Link>
          <Link href="/terms" className="text-sm text-white/85 hover:text-white">Terms</Link>
          {analyticsPreferencesEnabled ? <AnalyticsPreferencesButton /> : null}
        </nav>
      </Container>
      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.legalEntity}. {site.studioLockup} supports CYA&rsquo;s online and ongoing service delivery.</p>
          <p>&copy; {new Date().getFullYear()} {site.name}.{showPrototypeWarning && " Prototype build - not for public release."}</p>
        </Container>
      </div>
    </footer>
  );
}
