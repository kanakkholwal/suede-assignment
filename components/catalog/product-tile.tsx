import { BookmarkSolid } from '@/components/icons';
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
  /** Overflow menu, top-right of the image, revealed on hover for fine pointers. */
  actions: ReactNode;
  /** The tile's one primary action, top-right of the image and always visible. */
  imageAction?: ReactNode;
  /** Leads the second line, ahead of the brand or option, as on most marketplaces. */
  price: string;
  /** Size and fit lines between the brand and the price. */
  children?: ReactNode;
  /** Secondary actions under the price, for pages without an image action. */
  footer?: ReactNode;
}

/**
 * One product in a results grid. Order is fixed so rows scan alike:
 * image, name, price with brand, then size and fit.
 */
export function ProductTile({ image, brand, name, subtitle, flag, saved, viewLabel, onView, actions, imageAction, price, children, footer }: ProductTileProps) {
  return (
    <article className="group/tile relative flex min-w-0 flex-col gap-3">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
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
          <span className="absolute top-2.5 left-2.5 z-10 rounded-full bg-card/90 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">{flag}</span>
        ) : null}
        {saved ? (
          <span className="pop absolute bottom-2.5 left-2.5 z-10 grid size-8 place-items-center rounded-full bg-card/90 text-foreground backdrop-blur-sm">
            <BookmarkSolid className="size-3.5" aria-label="Saved" />
          </span>
        ) : null}
        <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5">
          {actions ? (
            <div
              className={cn(
                'transition-opacity duration-(--duration-fast)',
                'pointer-fine:opacity-0 pointer-fine:group-hover/tile:opacity-100 pointer-fine:focus-within:opacity-100 pointer-fine:has-[[aria-expanded=true]]:opacity-100',
              )}
            >
              {actions}
            </div>
          ) : null}
          {imageAction}
        </div>
      </div>
      <div className="pointer-events-none relative z-10 flex min-w-0 flex-col">
        <h2 className="line-clamp-2 text-base leading-6 font-medium tracking-tight text-foreground">{name}</h2>
        <p className="mt-0.5 truncate text-sm leading-5 text-muted-foreground">
          <span className="font-medium tabular-nums text-foreground">{price}</span> · {subtitle ?? brand}
        </p>
        {children ? <div className="mt-1.5 flex flex-col gap-0.5">{children}</div> : null}
        {footer ? <div className="pointer-events-auto mt-2">{footer}</div> : null}
      </div>
      <button
        type="button"
        aria-label={viewLabel}
        onClick={onView}
        className="absolute inset-0 z-0 cursor-pointer rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-card"
      />
    </article>
  );
}

/** Shared result grid track: two columns on phones, fluid columns from `sm`. */
export const TILE_GRID = 'grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-[repeat(auto-fill,minmax(13.5rem,1fr))]';

export function NoMatches({ hint }: { hint: string }) {
  return (
    <div className="flex min-h-64 flex-1 flex-col items-center justify-center gap-1.5 px-6 text-center">
      <p className="font-serif text-2xl text-foreground">No exact matches</p>
      <p className="max-w-sm text-sm text-muted-foreground">{hint}</p>
    </div>
  );
}
