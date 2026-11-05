import { Bookmark } from 'lucide-react';
import Image from 'next/image';
import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface ProductTileProps {
  image?: { src: string; alt: string };
  brand: string;
  name: string;
  subtitle?: string;
  /** Shown over the image, for availability. */
  flag?: string;
  saved: boolean;
  viewLabel: string;
  onView: () => void;
  /** Overflow menu pinned to the image corner. */
  actions: ReactNode;
  children: ReactNode;
}

/** One product in a results grid: no box, the image carries the tile. */
export function ProductTile({ image, brand, name, subtitle, flag, saved, viewLabel, onView, actions, children }: ProductTileProps) {
  return (
    <article className="group/tile relative flex min-w-0 flex-col gap-2.5">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 30vw, 18vw"
            loading="lazy"
            className="object-cover transition-transform duration-(--duration-spring-snappy) ease-(--ease-spring-snappy) pointer-fine:group-hover/tile:scale-(--hover-scale)"
          />
        ) : null}
        {flag ? (
          <span className="absolute top-2 left-2 z-10 rounded-md bg-card/90 px-1.5 py-0.5 text-xs font-medium text-muted-foreground">{flag}</span>
        ) : null}
        {saved ? (
          <span className="pop absolute bottom-2 left-2 z-10 grid size-7 place-items-center rounded-full bg-foreground text-background">
            <Bookmark className="size-3.5 fill-current" aria-label="Saved" />
          </span>
        ) : null}
        <div
          className={cn(
            'absolute top-2 right-2 z-20 transition-opacity duration-(--duration-fast)',
            'pointer-fine:opacity-0 pointer-fine:group-hover/tile:opacity-100 pointer-fine:focus-within:opacity-100 pointer-fine:has-[[aria-expanded=true]]:opacity-100',
          )}
        >
          {actions}
        </div>
      </div>
      <div className="pointer-events-none relative z-10 flex min-w-0 flex-1 flex-col gap-1 px-0.5">
        <p className="truncate text-xs text-muted-foreground">{brand}</p>
        <h2 className="line-clamp-2 text-sm leading-snug font-medium text-foreground">{name}</h2>
        {subtitle ? <p className="line-clamp-1 text-xs text-muted-foreground">{subtitle}</p> : null}
        {children}
      </div>
      <button
        type="button"
        aria-label={viewLabel}
        onClick={onView}
        className="absolute inset-0 z-0 cursor-pointer rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-card"
      />
    </article>
  );
}

/** Shared result grid track: two columns on phones, fluid columns from `sm`. */
export const TILE_GRID = 'grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-[repeat(auto-fill,minmax(10.5rem,1fr))]';

export function NoMatches({ hint }: { hint: string }) {
  return (
    <div className="flex min-h-64 flex-1 flex-col items-center justify-center gap-1.5 px-6 text-center">
      <p className="font-serif text-2xl text-foreground">No exact matches</p>
      <p className="max-w-sm text-sm text-muted-foreground">{hint}</p>
    </div>
  );
}
