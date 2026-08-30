"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Primitives";
import { CtaLink } from "@/components/CtaLink";
import { ImageMedia } from "@/components/ImageMedia";
import type { CTA, HeroMedia } from "@/lib/types";

/**
 * Homepage video hero. The poster image is what actually paints - it is
 * rendered unconditionally, at priority, filling the same box the video
 * will occupy, so there is never a layout shift and it doubles as the
 * reduced-motion fallback and the "no video configured yet" state. A
 * <video> element is only added to the DOM once, client-side, after
 * confirming the visitor hasn't asked for reduced motion *and* at least one
 * source is actually configured - so with no video files supplied yet (see
 * content/media.ts `homeHeroMedia`), no video request is ever made.
 */
export function HeroVideo({
  eyebrow,
  heading,
  primaryCta,
  media,
}: {
  eyebrow?: string;
  heading: string;
  primaryCta: CTA;
  media: HeroMedia;
}) {
  const hasVideo = Boolean(media.videoSrcDesktop || media.videoSrcMobile);
  const [playVideo, setPlayVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!hasVideo) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setPlayVideo(!query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, [hasVideo]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !playVideo) return;
    // Autoplay can be silently blocked by the browser even when muted; if it
    // is, the poster simply stays put underneath - never a broken state.
    el.play().catch(() => {});
  }, [playVideo]);

  const sources: { src: string; media?: string }[] = [];
  if (media.videoSrcDesktop && media.videoSrcMobile) {
    sources.push({ src: media.videoSrcDesktop, media: "(min-width: 1024px)" });
    sources.push({ src: media.videoSrcMobile });
  } else if (media.videoSrcDesktop) {
    sources.push({ src: media.videoSrcDesktop });
  } else if (media.videoSrcMobile) {
    sources.push({ src: media.videoSrcMobile });
  }

  return (
    <section className="relative isolate mx-3 mt-3 min-h-[560px] overflow-hidden rounded-[var(--cya-radius-panel)] bg-[var(--cya-surface-page)] sm:mx-6 sm:mt-6 lg:mx-8 lg:min-h-[720px]">
      <div className="absolute inset-0">
        <ImageMedia asset={media.poster} treatment="background" priority sizes="100vw" />
      </div>

      {playVideo && sources.length > 0 && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: media.poster.focalDesktop ?? media.poster.focal ?? "50% 50%" }}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          poster={media.poster.src}
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setVideoReady(true)}
        >
          {sources.map((source) => (
            <source key={source.src} src={source.src} media={source.media} type="video/mp4" />
          ))}
        </video>
      )}

      {/* Localised, neutral (non-teal) scrim - concentrated behind the text
          block rather than washed across the whole frame, so it holds
          contrast without colour-grading the photo or video underneath. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_100%_at_18%_100%,rgb(var(--cya-scrim)/0.78)_0%,rgb(var(--cya-scrim)/0.4)_38%,rgb(var(--cya-scrim)/0.1)_70%)] lg:bg-[radial-gradient(58%_85%_at_10%_50%,rgb(var(--cya-scrim)/0.72)_0%,rgb(var(--cya-scrim)/0.34)_45%,rgb(var(--cya-scrim)/0.08)_75%)]"
      />

      <div className="relative z-10 flex h-full min-h-[560px] items-end pb-12 lg:min-h-[720px] lg:items-center lg:pb-0">
        <Container>
          <div className="max-w-lg">
            {eyebrow && (
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-white/85">{eyebrow}</p>
            )}
            <h1 className="mt-4 text-display text-white">{heading}</h1>
            <div className="mt-8">
              <CtaLink href={primaryCta.href} variant={primaryCta.variant ?? "primary"}>
                {primaryCta.label}
              </CtaLink>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
