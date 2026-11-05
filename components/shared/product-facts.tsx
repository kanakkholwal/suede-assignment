import { ExternalLink } from '@/components/icons';

import { SummaryDimensionLine } from '@/components/shared/dimension-line';
import type { CatalogProduct, DataConfidence } from '@/data/product-types';
import type { DimensionSummary } from '@/lib/dimensions';
import { formatLeadTime, formatPrice, startingPriceCents } from '@/lib/format';

function confidenceLabel(confidence: DataConfidence): string {
  if (confidence === 'verified') return 'Staging snapshot';
  if (confidence === 'exercise') return 'Exercise data';
  return 'Not provided';
}

export function ProductFacts({ product, dimensions }: { product: CatalogProduct; dimensions?: DimensionSummary }) {
  const price = startingPriceCents(product.variants);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-lg bg-muted/50 p-4 text-sm">
        <Fact label="Starting at" value={price === undefined ? 'Not provided' : formatPrice(price)} note={confidenceLabel(product.provenance.price)} />
        <Fact label="Lead time" value={formatLeadTime(product.leadTimeWeeks)} note={confidenceLabel(product.provenance.leadTime)} />
        <div className="col-span-2 min-w-0">
          <p className="text-xs text-muted-foreground">Size, W × D × H</p>
          {dimensions ? (
            <SummaryDimensionLine summary={dimensions} showUnknown className="mt-1 text-sm" />
          ) : (
            <p className="mt-1 font-medium text-foreground">Not on file</p>
          )}
        </div>
        <Fact label="Material" value={product.material ?? 'Not provided'} note="Product page" />
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Every size shows where it came from. Exact option availability is shown below; this snapshot does not include lead-time, material, or commercial data.
      </p>
      <a
        href={product.sourceUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-fit items-center gap-1.5 rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-ring"
      >
        View original product page <ExternalLink className="size-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}

function Fact({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="min-w-0">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 truncate font-medium text-foreground">{value}</p>
      <p className="mt-0.5 text-xs text-muted-foreground/80">{note}</p>
    </div>
  );
}
