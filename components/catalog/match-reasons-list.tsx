import { Check } from 'lucide-react';

import type { MatchReason } from '@/lib/match-reasons';

/** Compact "why it's here" line. */
export function MatchReasonsList({ reasons }: { reasons: readonly MatchReason[] }) {
  if (!reasons.length) return null;
  return (
    <ul aria-label="Why it matches" className="flex flex-wrap gap-x-2.5 gap-y-1 text-[11px] leading-tight">
      {reasons.map((reason) => (
        <li key={reason.label} className="inline-flex items-center gap-1 text-success-strong">
          <Check className="size-3" aria-hidden="true" />
          <span>{reason.label}</span>
        </li>
      ))}
    </ul>
  );
}
