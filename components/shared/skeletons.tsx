import { TILE_GRID } from '@/components/catalog/product-tile';
import { Island } from '@/components/shell/island';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

// Each placeholder mirrors the layout it stands in for, so nothing jumps when data lands.

const BONE = 'bg-muted';

function Status({ label, className, children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <div role="status" aria-label={label} aria-busy="true" className={className}>
      {children}
    </div>
  );
}

export function TileGridSkeleton({ label, count = 8 }: { label: string; count?: number }) {
  return (
    <Status label={label} className={TILE_GRID}>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="flex flex-col gap-3" aria-hidden="true">
          <Skeleton shape="block" className={cn(BONE, 'aspect-square h-auto')} />
          <div className="flex flex-col gap-1.5">
            <Skeleton className={cn(BONE, 'h-4 w-4/5')} />
            <Skeleton className={cn(BONE, 'h-3.5 w-1/2')} />
          </div>
        </div>
      ))}
    </Status>
  );
}

export function ShortlistSkeleton({ rows = 3 }: { rows?: number }) {
  return (
    <Status label="Loading room" className="flex flex-col gap-1 px-4 py-4">
      <Skeleton className={cn(BONE, 'mb-3 h-3.5 w-2/5')} />
      {Array.from({ length: rows }, (_, index) => (
        <div key={index} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-3 py-3" aria-hidden="true">
          <Skeleton shape="block" className={cn(BONE, 'size-10 rounded-lg')} />
          <div className="flex flex-col gap-2">
            <Skeleton className={cn(BONE, 'h-4 w-3/4')} />
            <Skeleton className={cn(BONE, 'h-3 w-1/2')} />
            <div className="flex gap-1.5">
              <Skeleton className={cn(BONE, 'h-6 w-24')} />
              <Skeleton className={cn(BONE, 'h-6 w-20')} />
            </div>
          </div>
        </div>
      ))}
    </Status>
  );
}

/** `ratio` is the room's length over width, so the placeholder already has the plan's shape. */
export function PlannerSkeleton({ ratio = 1.25 }: { ratio?: number }) {
  return (
    <main className="grid flex-1 gap-1.5 lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_23rem]">
      <Island>
        <Status label="Loading room" className="flex min-h-0 flex-1 flex-col">
          <div className="flex items-center justify-between gap-3 px-4 py-2.5" aria-hidden="true">
            <Skeleton className={cn(BONE, 'h-4 w-48')} />
            <Skeleton className={cn(BONE, 'h-8 w-56 rounded-lg')} />
          </div>
          <div className="m-6 grid min-h-80 flex-1 place-items-center [container-type:size]" aria-hidden="true">
            <Skeleton shape="block" style={{ aspectRatio: ratio, width: `min(100cqw, ${ratio} * 100cqh)` }} className={cn(BONE, 'h-auto')} />
          </div>
        </Status>
      </Island>
      <Island aria-hidden="true">
        <div className="flex gap-4 px-4 pt-4 pb-3">
          <Skeleton className={cn(BONE, 'h-5 w-16')} />
          <Skeleton className={cn(BONE, 'h-5 w-14')} />
          <Skeleton className={cn(BONE, 'h-5 w-12')} />
        </div>
        <div className="flex flex-col gap-3 p-4">
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className="flex items-center gap-3">
              <Skeleton shape="block" className={cn(BONE, 'size-10 rounded-lg')} />
              <div className="flex flex-1 flex-col gap-1.5">
                <Skeleton className={cn(BONE, 'h-4 w-2/3')} />
                <Skeleton className={cn(BONE, 'h-3 w-1/3')} />
              </div>
            </div>
          ))}
        </div>
      </Island>
    </main>
  );
}
