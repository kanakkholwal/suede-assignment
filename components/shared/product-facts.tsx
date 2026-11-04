import { ExternalLink } from 'lucide-react';

import type { CatalogProduct, DataConfidence } from '@/data/product-types';
import { formatLeadTime, formatPrice, startingPriceCents } from '@/lib/format';

function confidenceLabel(confidence: DataConfidence): string {
  if (confidence === 'verified') return 'Staging snapshot';
  if (confidence === 'exercise') return 'Exercise data';
  return 'Not provided';
}

function dimensions(product: CatalogProduct): string {
  const { width, depth, height } = product.dimensionsIn;
  return width !== null && depth !== null && height !== null ? `${width} × ${depth} × ${height} in` : 'Not provided';
}

export function ProductFacts({ product }: { product: CatalogProduct }) {
  const price = startingPriceCents(product.variants);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-[#e4ded7] py-4 text-sm">
        <Fact label="Starting at" value={price === undefined ? 'Not provided' : formatPrice(price)} note={confidenceLabel(product.provenance.price)} />
        <Fact label="Lead time" value={formatLeadTime(product.leadTimeWeeks)} note={confidenceLabel(product.provenance.leadTime)} />
        <Fact label="Dimensions" value={dimensions(product)} note="Product page" />
        <Fact label="Material" value={product.material ?? 'Not provided'} note="Product page" />
      </div>
      <p className="text-xs leading-relaxed text-[#72675e]">
        Known information is labeled. Exact option availability is shown below; this snapshot does not include lead-time, dimensions, material, or commercial data.
      </p>
      <a
        href={product.sourceUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#6b5544] underline decoration-[#b7aa9f] underline-offset-4 hover:text-[#241c17]"
      >
        View original product page <ExternalLink className="size-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}

function Fact({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="min-w-0">
      <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#81766d]">{label}</p>
      <p className="mt-1 flex items-center gap-1 truncate font-medium text-[#211b17]">{value}</p>
      <p className="mt-0.5 text-[11px] text-[#8a8179]">{note}</p>
    </div>
  );
}
