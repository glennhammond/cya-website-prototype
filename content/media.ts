import type { HeroMedia, MediaAsset } from "@/lib/types";

/**
 * Curated CYA website photography.
 * Glenn confirmed on 26 August 2026 that all images in the governed CYA
 * website library are approved for website publication. Asset-level notes
 * below now record only useful production considerations, not permission gaps.
 */
const APPROVAL_NOTE = "Approved for CYA website publication — confirmed by Glenn Hammond on 26 August 2026.";

export const media = {
  homeHero: {
    src: "/images/selected/cya-home-hero-workplace-session.webp",
    width: 1080,
    height: 810,
    alt: "A diverse group of colleagues in a meeting room, seated with hands together in a shared moment of calm.",
    status: "approved",
    note: APPROVAL_NOTE + " Temporary poster only - replace with the final approved hero still or video frame when supplied.",
    focal: "50% 38%",
    focalDesktop: "50% 32%",
  },
  homeOneOff: {
    src: "/images/selected/cya-home-oneoff-desk-stretch.webp",
    width: 1600,
    height: 1200,
    alt: "Two colleagues pausing at a desk for a guided stretch.",
    status: "approved",
    note: APPROVAL_NOTE,
    focal: "50% 40%",
  },
  workplaceWellbeingHero: {
    src: "/images/selected/cya-workplace-wellbeing-hero-warehouse-group.webp",
    width: 1354,
    height: 1016,
    alt: "A team doing a standing stretch together on the floor of a warehouse.",
    status: "approved",
    note: APPROVAL_NOTE,
  },
  debbyTeacherPortrait: {
    src: "/images/selected/cya-people-debby-teacher-portrait.webp",
    width: 1600,
    height: 1200,
    alt: "Debby Lewis, seated and smiling, in a plant-filled studio space.",
    status: "approved",
    note: APPROVAL_NOTE,
    focal: "50% 22%",
  },
  workplaceWellbeingLunchLearn: {
    src: "/images/selected/cya-workplace-wellbeing-lunch-learn-team.webp",
    width: 1080,
    height: 810,
    alt: "A small team stretching together in an office breakout space, including a colleague in high-visibility workwear.",
    status: "approved",
    note: APPROVAL_NOTE,
    focal: "50% 35%",
  },
  movementHero: {
    src: "/images/selected/cya-movement-desk-stretch-office.webp",
    width: 1000,
    height: 750,
    alt: "A man in business attire stretching at his desk between meetings.",
    status: "approved",
    note: APPROVAL_NOTE + " Higher-resolution source preferred for large placements.",
  },
  movementGroupIndustrial: {
    src: "/images/selected/cya-movement-group-industrial.webp",
    width: 1600,
    height: 1200,
    alt: "A group of men doing a standing stretch together in an industrial facility.",
    status: "approved",
    note: APPROVAL_NOTE,
  },
  movementFacilitatorAdjustment: {
    src: "/images/selected/cya-movement-facilitator-adjustment.webp",
    width: 1600,
    height: 1200,
    alt: "A facilitator gently guiding a participant through a supported stretch.",
    status: "approved",
    note: APPROVAL_NOTE,
  },
  conferencesHero: {
    src: "/images/selected/cya-conferences-hero-facilitator-led-group.webp",
    width: 960,
    height: 720,
    alt: "A facilitator leading a group relaxation session in a bright indoor space.",
    status: "approved",
    note: APPROVAL_NOTE,
  },
  conferencesStudioAccess: {
    src: "/images/selected/cya-conferences-studio-remote-grid.webp",
    width: 742,
    height: 557,
    alt: "A grid of colleagues joining a wellbeing session remotely by video call.",
    status: "approved",
    note: APPROVAL_NOTE,
  },
  programsHero: {
    src: "/images/selected/cya-programs-hero-group-class.webp",
    width: 1600,
    height: 1200,
    alt: "A small group moving together during a facilitator-led class.",
    status: "approved",
    note: APPROVAL_NOTE,
  },
  programsContinuity: {
    src: "/images/selected/cya-programs-continuity-group-repeat.webp",
    width: 1600,
    height: 1200,
    alt: "Participants stretching together mid-class.",
    status: "approved",
    note: APPROVAL_NOTE,
  },
  programsMultiSite: {
    src: "/images/selected/cya-programs-multisite-outdoor.webp",
    width: 746,
    height: 560,
    alt: "A group in high-visibility workwear stretching together outdoors.",
    status: "approved",
    note: APPROVAL_NOTE,
  },
  studioEmployeeHome: {
    src: "/images/selected/cya-studio-employee-home-practice.webp",
    width: 1440,
    height: 1080,
    alt: "A person doing a quiet stretch practice at home.",
    status: "approved",
    note: APPROVAL_NOTE,
    focal: "50% 30%",
  },
  aboutHero: {
    src: "/images/source/Workplace Wellness Lunch & Learn Session outside in park Brisbane.webp",
    width: 892,
    height: 560,
    alt: "A group of workers in high-visibility clothing taking part in an outdoor movement session in a Brisbane park.",
    status: "approved",
    note: APPROVAL_NOTE,
    focal: "50% 50%",
  },
  aboutDebbyPortrait: {
    src: "/images/selected/cya-about-debby-lewis-portrait.webp",
    width: 1600,
    height: 1200,
    alt: "Debby Lewis, founder of Corporate Yoga Australia.",
    status: "approved",
    note: APPROVAL_NOTE,
  },
  aboutWorldview: {
    src: "/images/selected/cya-about-worldview-group-rest.webp",
    width: 960,
    height: 720,
    alt: "A group resting together on mats during a guided session.",
    status: "approved",
    note: APPROVAL_NOTE,
  },
  aboutFacilitator: {
    src: "/images/selected/cya-about-facilitator-representative.webp",
    width: 1080,
    height: 810,
    alt: "A CYA facilitator, one of the practitioners in the national network.",
    status: "approved",
    note: APPROVAL_NOTE + " Any public facilitator credential claims remain separately governed and must still be verified.",
  },
  aboutDelivery: {
    src: "/images/selected/cya-about-delivery-group-practice.webp",
    width: 1600,
    height: 1200,
    alt: "A facilitator-led group session in progress.",
    status: "approved",
    note: APPROVAL_NOTE,
  },
  proofHero: {
    src: "/images/selected/cya-proof-hero-group-practice.webp",
    width: 1600,
    height: 1200,
    alt: "A group mid-practice together during a facilitator-led session.",
    status: "approved",
    note: APPROVAL_NOTE + " Documentary-style image; not evidence for a specific named client case study.",
    focal: "50% 38%",
  },
} satisfies Record<string, MediaAsset>;

/**
 * Homepage hero video contract. The client-facing hero receives a deliberately
 * public-only poster shape so internal governance status/notes never cross the
 * server/client boundary into the React payload.
 */
export const homeHeroMedia: HeroMedia = {
  poster: {
    src: media.homeHero.src,
    width: media.homeHero.width,
    height: media.homeHero.height,
    alt: media.homeHero.alt,
    focal: media.homeHero.focal,
    focalDesktop: media.homeHero.focalDesktop,
  },
  videoSrcDesktop: undefined,
  videoSrcMobile: undefined,
};
