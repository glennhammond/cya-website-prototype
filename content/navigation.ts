import type { CTA, NavItem } from "@/lib/types";

export const primaryNav: NavItem[] = [
  {
    label: "Workplace wellbeing",
    href: "/workplace-wellbeing",
    children: [
      {
        label: "Movement",
        href: "/workplace-wellbeing/movement",
        description: "Yoga, Pilates, mobility and desk movement, adapted to real workplaces.",
      },
      {
        label: "Conferences and events",
        href: "/conferences-events",
        description: "Short activations and wellbeing streams built around the event, venue and agenda.",
      },
    ],
  },
  { label: "Programs", href: "/workplace-wellbeing-programs" },
  { label: "Wellbeing Studio", href: "/wellbeing-studio" },
  { label: "About", href: "/about-us" },
];

export const utilityNav: NavItem[] = [
  { label: "Resources", href: "/resources" },
  { label: "Member access", href: "/member-access" },
];

export const memberSignInHref = "https://studio.corporateyoga.com.au";

export const primaryCTA: CTA = {
  label: "Book a wellbeing consultation",
  href: "/contact",
  variant: "primary",
};

/** Shorter form for the fixed-width header bar; full phrase is used everywhere else. */
export const primaryCTAShort = "Book now";

export const footerLegalNav: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Member access", href: "/member-access" },
];

/** Matches Wellbeing Studio's own current-page convention (a teal underline on the active nav item). Exact match, or a descendant route (e.g. /workplace-wellbeing/movement under /workplace-wellbeing). */
export function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
