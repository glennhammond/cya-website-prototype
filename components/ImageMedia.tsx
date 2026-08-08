import Image from "next/image";
import { EvidenceBadge } from "@/components/AnnotationToggle";
import type { MediaAsset } from "@/lib/types";

/**
 * Renders a curated photograph from content/media.ts. Three treatments:
 * "card" (default) — rounded, bordered, optional caption, fixed aspect ratio;
 * same footprint as EvidencePlaceholder so swapping one for the other never
 * shifts layout. "bleed" — no chrome, fills the parent's own sized box
 * edge-to-edge (parent controls size). "background" — bare fill image with
 * no wrapper, for dropping directly into a `relative`-positioned hero/section
 * that already has its own height, underneath a gradient scrim and text.
 * Falls back to nothing if no asset is supplied — callers should fall back
 * to EvidencePlaceholder in that case.
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
  asset: MediaAsset;
  caption?: string;
  priority?: boolean;
  className?: string;
  treatment?: "card" | "bleed" | "background";
  aspect?: string;
  sizes?: string;
}) {
  if (treatment === "background") {
    return (
      <>
        <Image src={asset.src} alt={asset.alt} fill priority={priority} sizes={sizes} className={`object-cover ${className}`} />
        <div className="absolute right-3 top-3 z-10">
          <EvidenceBadge status={asset.status} note={asset.note} />
        </div>
      </>
    );
  }

  if (treatment === "bleed") {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        <Image src={asset.src} alt={asset.alt} fill priority={priority} sizes={sizes} className="object-cover" />
        <div className="absolute right-3 top-3">
          <EvidenceBadge status={asset.status} note={asset.note} />
        </div>
      </div>
    );
  }

  return (
    <figure className={`relative overflow-hidden rounded-[var(--radius-card)] border border-divider bg-mist ${className}`}>
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        <Image src={asset.src} alt={asset.alt} fill priority={priority} sizes={sizes} className="object-cover" />
        <div className="absolute right-3 top-3">
          <EvidenceBadge status={asset.status} note={asset.note} />
        </div>
      </div>
      {caption && (
        <figcaption className="border-t border-divider bg-white px-4 py-3 text-sm text-body">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
