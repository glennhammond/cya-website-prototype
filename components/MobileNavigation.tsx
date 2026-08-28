"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CtaLink } from "@/components/CtaLink";
import { primaryNav, utilityNav, primaryCTA, isNavActive } from "@/content/navigation";

const NAV_BREAKPOINT = "min-[1240px]:hidden";

/**
 * Accessible disclosure nav: aria-expanded on the trigger, Escape closes and
 * returns focus, background gets `inert` while open (removes it from the tab
 * order and AT tree instead of leaving focus stranded behind the panel), body
 * scroll is locked, and every link closes the panel on selection.
 *
 * The panel is portalled to `document.body` so viewport-fixed positioning is
 * not captured by the sticky header's backdrop-filter containing block.
 */
export function MobileNavigation({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname();
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

  const panel = open ? (
    <div
      id="mobile-nav-panel"
      ref={panelRef}
      tabIndex={-1}
      className="fixed inset-x-0 top-24 bottom-0 z-30 overflow-y-auto border-t border-divider bg-white px-5 py-6 shadow-[var(--shadow-card)] focus:outline-none"
    >
      <nav aria-label="Primary">
        <ul className="flex flex-col gap-1">
          {primaryNav.map((item) => {
            const active =
              isNavActive(pathname, item.href) ||
              Boolean(item.children?.some((child) => isNavActive(pathname, child.href)));
            if (item.children && item.children.length > 0) {
              return (
                <li key={item.label}>
                  <details open={active} className="group rounded-[var(--radius-control)]">
                    <summary
                      className={`flex min-h-12 cursor-pointer items-center px-3 py-3 text-base font-bold ${
                        active ? "text-teal" : "text-ink"
                      }`}
                    >
                      {item.label}
                    </summary>
                    <div className="pb-2">
                      {item.children.map((child) => {
                        const childActive = isNavActive(pathname, child.href);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => close(false)}
                            aria-current={childActive ? "page" : undefined}
                            className={`block min-h-12 rounded-[var(--radius-control)] px-6 py-3 text-sm ${
                              childActive ? "font-bold text-teal" : "text-body"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </details>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => close(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block min-h-12 rounded-[var(--radius-control)] px-3 py-3 text-base font-bold ${
                    active ? "text-teal" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-4 flex flex-col gap-1 border-t border-divider pt-4">
        {utilityNav.map((item) => {
          const active = isNavActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => close(false)}
              aria-current={active ? "page" : undefined}
              className={`block min-h-11 rounded-[var(--radius-control)] px-3 py-3 text-base font-bold ${
                active ? "text-teal" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <CtaLink
        href={primaryCTA.href}
        variant="primary"
        className="mt-4 w-full"
        onClick={() => close(false)}
      >
        {primaryCTA.label}
      </CtaLink>
    </div>
  ) : null;

  return (
    <div className={NAV_BREAKPOINT}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
        className={`flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-control)] border transition-colors ${
          open
            ? "border-divider bg-white"
            : transparent
              ? "border-white/40 bg-transparent"
              : "border-divider bg-white"
        }`}
      >
        {open ? <CloseIcon /> : <MenuIcon light={transparent} />}
      </button>

      {panel && typeof document !== "undefined" ? createPortal(panel, document.body) : null}
    </div>
  );
}

function MenuIcon({ light = false }: { light?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M3 5.5H17M3 10H17M3 14.5H17"
        stroke={light ? "#ffffff" : "#253336"}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4.5 4.5 L15.5 15.5 M15.5 4.5 L4.5 15.5"
        stroke="#253336"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
