import Image from "next/image";
import { useId } from "react";
import { EvidenceBadge } from "@/components/AnnotationToggle";
import type { MediaAsset, PublicMediaAsset } from "@/lib/types";

type RenderableMediaAsset = MediaAsset | PublicMediaAsset;

/**
 * Applies `asset.focal` (and, above the lg breakpoint, `asset.focalDesktop`
 * if set) as the image's crop origin. Implemented with a scoped CSS var and
 * a tiny inline <style> block - rather than a Tailwind arbitrary-value class
 * - because the value comes from content data at request time, and
 * Tailwind's JIT scanner only generates CSS for class strings it can see in
 * source, not ones assembled at runtime.
 */
function useFocalStyle(asset: RenderableMediaAsset) {
  const reactId = useId();
  const scopeClass = `im-${reactId.replace(/[:]/g, "")}`;
  const focal = asset.focal ?? "50% 50%";
  const focalDesktop = asset.focalDesktop ?? focal;
  const css =
    focalDesktop === focal
      ? `.${scopeClass}{object-position:${focal};}`
      : `.${scopeClass}{object-position:${focal};} @media (min-width:1024px){.${scopeClass}{object-position:${focalDesktop};}}`;
  return { scopeClass, styleTag: <style>{css}</style> };
}

/**
 * Evidence annotations are a development/review aid only. The production
 * branch is resolved before the client EvidenceBadge boundary is created, so
 * internal status/notes are not serialised into public React payloads.
 */
function EvidenceAnnotation({ asset, background = false }: { asset: RenderableMediaAsset; background?: boolean }) {
  if (process.env.NODE_ENV === "production" || !("status" in asset)) return null;
  return (
    <div className={`absolute right-3 top-3${background ? " z-10" : ""}`}>
      <EvidenceBadge status={asset.status} note={asset.note} />
    </div>
  );
}

/**
 * Renders a curated photograph from content/media.ts. Three treatments:
 * "card" (default) - rounded, bordered, optional caption, fixed aspect ratio;
 * same footprint as EvidencePlaceholder so swapping one for the other never
 * shifts layout. "bleed" - no chrome, fills the parent's own sized box
 * edge-to-edge (parent controls size). "background" - bare fill image with
 * no wrapper, for dropping directly into a `relative`-positioned hero/section
 * that already has its own height, underneath a gradient scrim and text.
 */
export function ImageMedia({
  asset,
  caption,
  priority = false,
  className = "",
  treatment = "card",
  aspect = "4/3",
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: {
  asset: RenderableMediaAsset;
  caption?: string;
  priority?: boolean;
  className?: string;
  treatment?: "card" | "bleed" | "background";
  aspect?: string;
  sizes?: string;
}) {
  const { scopeClass, styleTag } = useFocalStyle(asset);

  if (treatment === "background") {
    return (
      <>
        {styleTag}
        <Image src={asset.src} alt={asset.alt} fill priority={priority} sizes={sizes} className={`object-cover ${scopeClass} ${className}`} />
        <EvidenceAnnotation asset={asset} background />
      </>
    );
  }

  if (treatment === "bleed") {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        {styleTag}
        <Image src={asset.src} alt={asset.alt} fill priority={priority} sizes={sizes} className={`object-cover ${scopeClass}`} />
        <EvidenceAnnotation asset={asset} />
      </div>
    );
  }

  return (
    <figure className={`relative overflow-hidden rounded-[var(--radius-card)] border border-divider bg-mist ${className}`}>
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        {styleTag}
        <Image src={asset.src} alt={asset.alt} fill priority={priority} sizes={sizes} className={`object-cover ${scopeClass}`} />
        <EvidenceAnnotation asset={asset} />
      </div>
      {caption && (
        <figcaption className="border-t border-divider bg-white px-4 py-3 text-sm text-body">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
