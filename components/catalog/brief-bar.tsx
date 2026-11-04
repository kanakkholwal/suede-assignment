'use client';

import { CircleHelp, CornerDownLeft, Sparkles, X } from 'lucide-react';
import { type FormEvent, useId, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { type BriefVocabulary, describeFilters, type FilterChipKey, parseBrief, type ParsedBrief } from '@/lib/brief';
import type { CatalogFilters } from '@/lib/catalog-contract';

const EXAMPLES = [
  'Warm, durable family-room sofa under $6k, 84 to 96 inches, in stock',
  'Oak coffee table up to 50 in',
  'Armchair $1k-2k',
];

interface BriefBarProps {
  filters: CatalogFilters;
  softTerms: readonly string[];
  vocabulary: BriefVocabulary;
  onApply: (brief: ParsedBrief) => void;
  onRemoveChip: (key: FilterChipKey) => void;
  onRemoveSoftTerm: (term: string) => void;
}

export function BriefBar({ filters, softTerms, vocabulary, onApply, onRemoveChip, onRemoveSoftTerm }: BriefBarProps) {
  const [text, setText] = useState('');
  const inputId = useId();
  const hintId = useId();
  const chips = describeFilters(filters, vocabulary.categories);
  const idle = chips.length === 0 && softTerms.length === 0;

  const apply = (value: string) => {
    if (!value.trim()) return;
    setText(value);
    onApply(parseBrief(value, vocabulary));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    apply(text);
  };

  return (
    <section aria-label="Client brief" className="flex flex-col gap-3">
      <form onSubmit={submit} className="flex items-center gap-2 rounded-xl border border-input bg-white p-1.5 pl-3.5 shadow-surface focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/15">
        <Sparkles className="size-4 shrink-0 text-primary" aria-hidden="true" />
        <label htmlFor={inputId} className="sr-only">Describe what the client needs</label>
        <input
          id={inputId}
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Describe the brief: “family-room sofa under $6k, 84 to 96 in, in stock”"
          aria-describedby={hintId}
          autoComplete="off"
          className="h-9 min-w-0 flex-1 bg-transparent text-[15px] text-foreground outline-none placeholder:text-[#958a81]"
        />
        <Button type="submit" size="sm" disabled={!text.trim()}>
          Find <CornerDownLeft aria-hidden="true" />
        </Button>
      </form>
      <p id={hintId} className="sr-only">
        Sizes need a unit, prices need a dollar sign or k. Anything the catalog has no data for is listed separately.
      </p>

      {idle ? (
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-muted-foreground">
          <span>Try</span>
          {EXAMPLES.map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => apply(example)}
              className="rounded-md px-1.5 py-0.5 text-[#6b5544] underline decoration-[#cdbfb3] underline-offset-4 hover:bg-accent hover:decoration-current"
            >
              {example}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap items-center gap-1.5" aria-live="polite">
          {chips.map((chip) => (
            <Badge key={chip.key} variant="outline" size="lg" className="bg-white pr-1">
              {chip.label}
              <button
                type="button"
                aria-label={`Remove ${chip.label}`}
                onClick={() => onRemoveChip(chip.key)}
                className="grid size-5 place-items-center rounded-sm text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                <X className="size-3" aria-hidden="true" />
              </button>
            </Badge>
          ))}
          {softTerms.length ? (
            <span className="ml-1 inline-flex flex-wrap items-center gap-1.5" title="The catalog has no material, durability, comfort or room data. Judge these from the product page.">
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                <CircleHelp className="size-3.5" aria-hidden="true" /> Not in the data, judge yourself:
              </span>
              {softTerms.map((term) => (
                <Badge key={term} variant="outline" size="lg" className="border-dashed pr-1 text-muted-foreground">
                  {term}
                  <button
                    type="button"
                    aria-label={`Dismiss ${term}`}
                    onClick={() => onRemoveSoftTerm(term)}
                    className="grid size-5 place-items-center rounded-sm hover:bg-accent hover:text-foreground"
                  >
                    <X className="size-3" aria-hidden="true" />
                  </button>
                </Badge>
              ))}
            </span>
          ) : null}
        </div>
      )}
    </section>
  );
}
