"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/lib/types";

/**
 * Desktop primary-nav dropdown. Native disclosure semantics (button +
 * aria-expanded) plus the two behaviours <details> can't give us for free:
 * Escape closes and returns focus, and clicking outside closes it too.
 */
export function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <li ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={`nav-dropdown-${item.href}`}
        onClick={() => setOpen((prev) => !prev)}
        className="flex cursor-pointer items-center gap-1 whitespace-nowrap rounded-[var(--radius-control)] px-2 py-2 text-sm font-bold text-ink hover:text-teal"
      >
        {item.label}
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div
          id={`nav-dropdown-${item.href}`}
          className="absolute left-0 top-full z-50 mt-2 w-64 rounded-[var(--radius-card)] border border-divider bg-white p-2 shadow-[var(--shadow-card)]"
        >
          <Link
            href={item.href}
            onClick={() => setOpen(false)}
            className="block rounded-[var(--radius-control)] px-3 py-2 text-sm font-bold text-teal-dark hover:bg-mist"
          >
            All {item.label.toLowerCase()}
          </Link>
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block rounded-[var(--radius-control)] px-3 py-2 text-sm text-ink hover:bg-mist"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`text-body transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M2.5 4.5 L6 8 L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
