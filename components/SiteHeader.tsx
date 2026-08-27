"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { NavDropdown } from "@/components/NavDropdown";
import { MobileNavigation } from "@/components/MobileNavigation";
import { primaryNav, utilityNav, primaryCTA, primaryCTAShort, isNavActive } from "@/content/navigation";

const NAV_BREAKPOINT = "hidden min-[1240px]:flex";

/** The Studio system uses one calm, solid navigation surface on every page. */
export function SiteHeader() {
  const pathname = usePathname();
  const transparent = false;

  return (
    <header
      className="sticky top-0 z-40 border-b border-divider bg-white/95 shadow-[0_4px_24px_rgba(16,63,69,0.04)] backdrop-blur"
    >
      <Container className="flex h-[88px] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Corporate Yoga Australia, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/cya-logo-inline.svg"
            alt="Corporate Yoga Australia"
            className="h-10 w-auto"
          />
        </Link>

        <DesktopNavigation transparent={transparent} />

        <div className={`shrink-0 items-center gap-2.5 ${NAV_BREAKPOINT}`}>
          {utilityNav.map((item) => {
            const active = isNavActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap border-b-2 pb-0.5 text-sm font-medium transition-colors ${
                  active
                    ? transparent
                      ? "border-white text-white"
                      : "border-teal text-teal-dark"
                    : `border-transparent ${transparent ? "text-white hover:text-white/75" : "text-ink hover:text-teal"}`
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <CtaLink href={primaryCTA.href} variant="primary" className="h-12 min-h-12 whitespace-nowrap py-0">
            <span className="min-[1450px]:hidden">{primaryCTAShort}</span>
            <span className="hidden min-[1450px]:inline">{primaryCTA.label}</span>
          </CtaLink>
        </div>

        <MobileNavigation transparent={transparent} />
      </Container>
    </header>
  );
}

function DesktopNavigation({ transparent }: { transparent: boolean }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Primary" className="hidden min-[1240px]:block">
      <ul className="flex items-center gap-0.5">
        {primaryNav.map((item) => {
          const active =
            isNavActive(pathname, item.href) || Boolean(item.children?.some((child) => isNavActive(pathname, child.href)));
          return item.children && item.children.length > 0 ? (
            <NavDropdown key={item.href} item={item} transparent={transparent} active={active} />
          ) : (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`block whitespace-nowrap border-b-2 px-2 pt-2 pb-1.5 text-sm font-medium transition-colors ${
                  active
                    ? transparent
                      ? "border-white text-white"
                      : "border-teal text-teal-dark"
                    : `border-transparent ${transparent ? "text-white hover:text-white/75" : "text-ink hover:text-teal"}`
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
