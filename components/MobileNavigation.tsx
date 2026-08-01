"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CtaLink } from "@/components/CtaLink";
import { primaryNav, utilityNav, memberSignInHref, primaryCTA } from "@/content/navigation";

const NAV_BREAKPOINT = "min-[1240px]:hidden";

/**
 * Accessible disclosure nav: aria-expanded on the trigger, Escape closes and
 * returns focus, background gets `inert` while open (removes it from the tab
 * order and AT tree instead of leaving focus stranded behind the panel), body
 * scroll is locked, and every link closes the panel on selection.
 */
export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = (returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  };

  useEffect(() => {
    const main = document.getElementById("main-content");
    const footer = document.getElementById("site-footer");

    if (open) {
      document.body.style.overflow = "hidden";
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
      // Move focus into the panel itself (not a specific link) — the most
      // reliable anchor point, independent of how any child component
      // forwards refs.
      panelRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    }

    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close(true);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className={NAV_BREAKPOINT}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
        className="flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-control)] border border-divider"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && (
        <div
          id="mobile-nav-panel"
          ref={panelRef}
          tabIndex={-1}
          className="fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto border-t border-divider bg-white px-5 py-6 shadow-[var(--shadow-card)] focus:outline-none"
        >
          <nav aria-label="Primary">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => close(false)}
                    className="block min-h-11 rounded-[var(--radius-control)] px-3 py-3 text-base font-bold text-ink"
                  >
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => close(false)}
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
              <Link
                key={item.href}
                href={item.href}
                onClick={() => close(false)}
                className="block min-h-11 rounded-[var(--radius-control)] px-3 py-3 text-base font-bold text-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={memberSignInHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => close(false)}
              className="block min-h-11 rounded-[var(--radius-control)] px-3 py-3 text-base font-bold text-ink"
            >
              Member sign-in
            </a>
          </div>
          <CtaLink href={primaryCTA.href} variant="primary" className="mt-4 w-full">
            {primaryCTA.label}
          </CtaLink>
        </div>
      )}
    </div>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5.5H17M3 10H17M3 14.5H17" stroke="#253336" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4.5 4.5 L15.5 15.5 M15.5 4.5 L4.5 15.5" stroke="#253336" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
