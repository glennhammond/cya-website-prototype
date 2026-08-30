"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/lib/types";

/**
 * Desktop primary-nav dropdown. Native disclosure semantics (button +
 * aria-expanded) plus predictable desktop dismissal: Escape returns focus,
 * clicking outside closes immediately, and pointer/focus rollout closes safely.
 */
export function NavDropdown({
  item,
  transparent = false,
  active = false,
}: {
  item: NavItem;
  transparent?: boolean;
  active?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function cancelScheduledClose() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function scheduleClose() {
    cancelScheduledClose();
    closeTimerRef.current = setTimeout(() => {
      setOpen(false);
      closeTimerRef.current = null;
    }, 180);
  }

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

  useEffect(() => () => cancelScheduledClose(), []);

  return (
    <li
      ref={rootRef}
      className="relative"
      onPointerEnter={cancelScheduledClose}
      onPointerLeave={scheduleClose}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          cancelScheduledClose();
          setOpen(false);
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={`nav-dropdown-${item.href}`}
        aria-current={active ? "page" : undefined}
        onClick={() => setOpen((prev) => !prev)}
        className={`flex cursor-pointer items-center gap-1 whitespace-nowrap border-b-2 px-2 pt-2 pb-1.5 text-sm font-bold transition-colors ${
          active
            ? transparent
              ? "border-white text-white"
              : "border-teal text-teal-dark"
            : `border-transparent ${transparent ? "text-white hover:text-white/75" : "text-ink hover:text-teal"}`
        }`}
      >
        {item.label}
        <ChevronIcon open={open} light={transparent} />
      </button>
      {open && (
        <div
          id={`nav-dropdown-${item.href}`}
          className="absolute left-0 top-full z-50 mt-2 w-64 rounded-[var(--radius-card)] border border-divider bg-white p-2 shadow-[var(--shadow-card)]"
        >
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

function ChevronIcon({ open, light = false }: { open: boolean; light?: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`transition-transform ${light ? "text-white/80" : "text-body"} ${open ? "rotate-180" : ""}`}
    >
      <path d="M2.5 4.5 L6 8 L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
