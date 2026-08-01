import Link from "next/link";
import { Container } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { NavDropdown } from "@/components/NavDropdown";
import { MobileNavigation } from "@/components/MobileNavigation";
import { primaryNav, utilityNav, memberSignInHref, primaryCTA, primaryCTAShort } from "@/content/navigation";

const NAV_BREAKPOINT = "hidden min-[1240px]:flex";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-divider bg-white">
      <Container className="flex h-20 items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Corporate Yoga Australia, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/cya-logo-inline.svg" alt="Corporate Yoga Australia" className="h-9 w-auto" />
        </Link>

        <DesktopNavigation />

        <div className={`shrink-0 items-center gap-2.5 ${NAV_BREAKPOINT}`}>
          {utilityNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-bold text-ink hover:text-teal">
              {item.label}
            </Link>
          ))}
          <a
            href={memberSignInHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-ink hover:text-teal"
          >
            Member sign-in
          </a>
          <CtaLink href={primaryCTA.href} variant="primary" className="whitespace-nowrap">
            <span className="min-[1350px]:hidden">{primaryCTAShort}</span>
            <span className="hidden min-[1350px]:inline">{primaryCTA.label}</span>
          </CtaLink>
        </div>

        <MobileNavigation />
      </Container>
    </header>
  );
}

function DesktopNavigation() {
  return (
    <nav aria-label="Primary" className={`min-[1240px]:block hidden`}>
      <ul className="flex items-center gap-0.5">
        {primaryNav.map((item) =>
          item.children && item.children.length > 0 ? (
            <NavDropdown key={item.href} item={item} />
          ) : (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-[var(--radius-control)] px-2 py-2 text-sm font-bold text-ink hover:text-teal"
              >
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
