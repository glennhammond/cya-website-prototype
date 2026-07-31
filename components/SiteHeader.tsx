import Link from "next/link";
import { Container } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { primaryNav, utilityNav, memberSignInHref, primaryCTA } from "@/content/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-divider bg-white">
      <Container className="flex h-20 items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Corporate Yoga Australia, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/cya-logo-inline.svg" alt="Corporate Yoga Australia" className="h-9 w-auto" />
        </Link>

        <DesktopNavigation />

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
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
          <CtaLink href={primaryCTA.href} variant="primary">
            {primaryCTA.label}
          </CtaLink>
        </div>

        <MobileNavigation />
      </Container>
    </header>
  );
}

function DesktopNavigation() {
  return (
    <nav aria-label="Primary" className="hidden xl:block">
      <ul className="flex items-center gap-1">
        {primaryNav.map((item) => (
          <li key={item.href} className="relative">
            {item.children && item.children.length > 0 ? (
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center gap-1 rounded-[var(--radius-control)] px-2 py-2 text-sm font-bold text-ink hover:text-teal [&::-webkit-details-marker]:hidden">
                  {item.label}
                  <ChevronIcon />
                </summary>
                <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-[var(--radius-card)] border border-divider bg-white p-2 shadow-[var(--shadow-card)]">
                  <Link
                    href={item.href}
                    className="block rounded-[var(--radius-control)] px-3 py-2 text-sm font-bold text-teal-dark hover:bg-mist"
                  >
                    All {item.label.toLowerCase()}
                  </Link>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-[var(--radius-control)] px-3 py-2 text-sm text-ink hover:bg-mist"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                href={item.href}
                className="block rounded-[var(--radius-control)] px-2 py-2 text-sm font-bold text-ink hover:text-teal"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNavigation() {
  return (
    <details className="relative xl:hidden">
      <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-[var(--radius-control)] border border-divider [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Menu</span>
        <MenuIcon />
      </summary>
      <div className="fixed inset-x-0 top-20 z-40 max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-divider bg-white px-5 py-6 shadow-[var(--shadow-card)]">
        <nav aria-label="Primary">
          <ul className="flex flex-col gap-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block min-h-11 rounded-[var(--radius-control)] px-3 py-3 text-base font-bold text-ink">
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block min-h-11 rounded-[var(--radius-control)] px-6 py-2 text-sm text-body"
                  >
                    {child.label}
                  </Link>
                ))}
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4 flex flex-col gap-1 border-t border-divider pt-4">
          {utilityNav.map((item) => (
            <Link key={item.href} href={item.href} className="block min-h-11 rounded-[var(--radius-control)] px-3 py-3 text-base font-bold text-ink">
              {item.label}
            </Link>
          ))}
          <a
            href={memberSignInHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block min-h-11 rounded-[var(--radius-control)] px-3 py-3 text-base font-bold text-ink"
          >
            Member sign-in
          </a>
        </div>
        <CtaLink href={primaryCTA.href} variant="primary" className="mt-4 w-full">
          {primaryCTA.label}
        </CtaLink>
      </div>
    </details>
  );
}

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="text-body">
      <path d="M2.5 4.5 L6 8 L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5.5H17M3 10H17M3 14.5H17" stroke="#253336" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
