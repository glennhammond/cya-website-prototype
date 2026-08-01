import Link from "next/link";
import { Container } from "@/components/Primitives";
import { primaryNav, utilityNav, memberSignInHref, footerLegalNav } from "@/content/navigation";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer id="site-footer" className="border-t border-divider bg-teal-dark text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/cya-logo-inline-white.svg" alt="Corporate Yoga Australia" className="h-8 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-white/75">{site.description}</p>
        </div>

        <nav aria-label="Site" className="flex flex-col gap-2">
          <h2 className="mb-1 text-xs font-bold uppercase tracking-[0.08em] text-white/60">Explore</h2>
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/85 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Utility" className="flex flex-col gap-2">
          <h2 className="mb-1 text-xs font-bold uppercase tracking-[0.08em] text-white/60">Support</h2>
          {utilityNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/85 hover:text-white">
              {item.label}
            </Link>
          ))}
          <a href={memberSignInHref} target="_blank" rel="noopener noreferrer" className="text-sm text-white/85 hover:text-white">
            Member sign-in
          </a>
          <Link href="/consultation" className="text-sm text-white/85 hover:text-white">
            Book a wellbeing consultation
          </Link>
        </nav>

        <nav aria-label="Legal" className="flex flex-col gap-2">
          <h2 className="mb-1 text-xs font-bold uppercase tracking-[0.08em] text-white/60">Legal</h2>
          {footerLegalNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/85 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.legalEntity}. {site.studioLockup} is CYA&rsquo;s continuous digital wellbeing platform.
          </p>
          <p>&copy; {new Date().getFullYear()} {site.name}. Prototype build — not for public release.</p>
        </Container>
      </div>
    </footer>
  );
}
