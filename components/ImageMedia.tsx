import Image from "next/image";
import { EvidenceBadge } from "@/components/AnnotationToggle";
import type { MediaAsset } from "@/lib/types";

/**
 * Renders a curated photograph from content/media.ts. Same card footprint as
 * EvidencePlaceholder (rounded, bordered, optional caption) so swapping one
 * for the other never shifts layout. Falls back to nothing if no asset is
 * supplied — callers should fall back to EvidencePlaceholder in that case.
 */
export function ImageMedia({
  asset,
  caption,
  priority = false,
  className = "",
}: {
  asset: MediaAsset;
  caption?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={`relative overflow-hidden rounded-[var(--radius-card)] border border-divider bg-mist ${className}`}>
      <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
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
