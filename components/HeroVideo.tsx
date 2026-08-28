"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { HeroMedia } from "@/lib/types";

type HeroLink = { label: string; href: string };
type ContextItem = { term: string; detail: string };

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
};

type NavigatorWithConnection = Navigator & {
  connection?: NetworkInformation;
};

/**
 * Decorative homepage motion hero. The responsive poster is always present,
 * establishes the layout and remains the reduced-motion, reduced-data and
 * playback-failure state. Video is added only after client capability checks.
 */
export function HeroVideo({
  kicker,
  heading,
  body,
  primaryCta,
  secondaryCta,
  contextKicker,
  context,
  media,
}: {
  kicker: string;
  heading: string;
  body: string;
  primaryCta: HeroLink;
  secondaryCta: HeroLink;
  contextKicker: string;
  context: ContextItem[];
  media: HeroMedia;
}) {
  const hasVideo = Boolean(media.videoSrcDesktop || media.videoSrcMobile);
  const [playVideo, setPlayVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!hasVideo) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as NavigatorWithConnection).connection;
    const constrained = Boolean(
      connection?.saveData ||
      connection?.effectiveType === "slow-2g" ||
      connection?.effectiveType === "2g",
    );

    const applyPreference = () => setPlayVideo(!motion.matches && !constrained);
    applyPreference();
    motion.addEventListener("change", applyPreference);
    return () => motion.removeEventListener("change", applyPreference);
  }, [hasVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !playVideo || videoFailed) return;
    video.play().catch(() => setVideoFailed(true));
  }, [playVideo, videoFailed]);

  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-[var(--cya-teal-dark)] sm:min-h-[640px] lg:min-h-[720px]">
      <picture className="absolute inset-0 block">
        {media.posterMobile && (
          <source media="(max-width: 767px)" srcSet={media.posterMobile.src} />
        )}
        <img
          src={media.poster.src}
          alt=""
          width={media.poster.width}
          height={media.poster.height}
          className="h-full w-full object-cover"
          style={{ objectPosition: media.poster.focalDesktop ?? media.poster.focal ?? "50% 50%" }}
          fetchPriority="high"
        />
      </picture>

      {playVideo && !videoFailed && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"}`}
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          poster={media.poster.src}
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        >
          {media.videoSrcDesktop && (
            <source src={media.videoSrcDesktop} media="(min-width: 768px)" type="video/mp4" />
          )}
          {media.videoSrcMobile && <source src={media.videoSrcMobile} type="video/mp4" />}
        </video>
      )}

      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,20,22,0.82)_0%,rgba(6,20,22,0.66)_42%,rgba(6,20,22,0.24)_72%,rgba(6,20,22,0.32)_100%)] max-lg:bg-[linear-gradient(180deg,rgba(6,20,22,0.34)_0%,rgba(6,20,22,0.7)_48%,rgba(6,20,22,0.92)_100%)]" />

      <div className="relative z-10 mx-auto grid min-h-[680px] w-full max-w-[1280px] gap-10 px-6 py-12 sm:min-h-[640px] sm:px-10 lg:min-h-[720px] lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center lg:px-12 lg:py-16">
        <div className="self-end lg:self-center">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#f0c46c]">{kicker}</p>
          <h1 className="mt-5 max-w-3xl text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.035em] text-white">{heading}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/90">{body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={primaryCta.href} className="inline-flex min-h-12 items-center justify-center rounded-[4px] bg-[var(--cya-teal)] px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--cya-teal-dark)]">{primaryCta.label}</Link>
            <Link href={secondaryCta.href} className="inline-flex min-h-12 items-center justify-center rounded-[4px] border border-white/70 bg-white/10 px-6 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[var(--cya-teal-dark)]">{secondaryCta.label}</Link>
          </div>
        </div>

        <aside className="self-end border border-white/25 bg-[rgba(14,67,74,0.86)] p-6 text-white backdrop-blur-sm sm:p-7 lg:self-center">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#f0c46c]">{contextKicker}</p>
          <dl className="mt-6 space-y-5">
            {context.map((item) => (
              <div key={item.term}>
                <dt className="text-xs font-semibold uppercase tracking-[0.04em] text-white/75">{item.term}</dt>
                <dd className="mt-1 text-base leading-7 text-white">{item.detail}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
