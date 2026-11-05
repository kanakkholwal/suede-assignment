'use client';

import { type FormEvent, type KeyboardEvent, type ReactNode, useId, useState } from 'react';

import { ArrowUp, CircleHelp, Sparkles, X } from '@/components/icons';
import { type BriefVocabulary, describeFilters, type FilterChipKey, parseBrief, type ParsedBrief } from '@/lib/brief';
import type { CatalogFilters } from '@/lib/catalog-contract';
import { cn } from '@/lib/utils';

const EXAMPLES = [
  'Warm, durable family-room sofa under $6k, 84 to 96 inches, in stock',
  'Oak coffee table up to 50 in',
  'Armchair $1k-2k',
];

interface BriefBarProps {
  filters: CatalogFilters;
  softTerms: readonly string[];
  /** The brief as last run, from the URL; the composer starts from it and follows back/forward. */
  brief: string;
  vocabulary: BriefVocabulary;
  onApply: (text: string, parsed: ParsedBrief) => void;
  onRemoveChip: (key: FilterChipKey) => void;
  onRemoveSoftTerm: (term: string) => void;
}

function Chip({ label, removeLabel, onRemove, soft = false }: { label: string; removeLabel: string; onRemove: () => void; soft?: boolean }) {
  return (
    <span
      className={cn(
        'pop inline-flex h-7 items-center gap-1 rounded-full pr-1 pl-2.5 text-sm',
        soft ? 'border border-dashed border-border-strong text-muted-foreground' : 'bg-card text-foreground shadow-(--surface-shadow)',
      )}
    >
      {label}
      <button
        type="button"
        aria-label={removeLabel}
        onClick={onRemove}
        className="relative grid size-5 place-items-center rounded-full text-muted-foreground outline-none after:absolute after:-inset-1 hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        <X className="size-3" aria-hidden="true" />
      </button>
    </span>
  );
}

function Row({ label, children }: { label: ReactNode; children: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-wrap items-center gap-1.5">
      <span className="mr-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground">{label}</span>
      {children}
    </div>
  );
}

/**
 * The brief as a composer: type what the client said, the catalog turns what it can into filters
 * and keeps the rest visible as words it could not use.
 */
export function BriefBar({ filters, softTerms, brief, vocabulary, onApply, onRemoveChip, onRemoveSoftTerm }: BriefBarProps) {
  const [text, setText] = useState(brief);
  const [shownBrief, setShownBrief] = useState(brief);
  if (brief !== shownBrief) {
    setShownBrief(brief);
    setText(brief);
  }
  const inputId = useId();
  const hintId = useId();
  const chips = describeFilters(filters, vocabulary.categories);
  const idle = chips.length === 0 && softTerms.length === 0;

  const apply = (value: string) => {
    if (!value.trim()) return;
    setText(value);
    setShownBrief(value);
    onApply(value, parseBrief(value, vocabulary));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    apply(text);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== 'Enter' || event.shiftKey || event.nativeEvent.isComposing) return;
    event.preventDefault();
    apply(text);
  };

  return (
    <section aria-label="Client brief">
      <form
        onSubmit={submit}
        className="flex flex-col gap-3 rounded-2xl bg-muted/60 p-3 transition-[background-color,box-shadow] duration-(--duration-fast) focus-within:bg-card focus-within:ring-3 focus-within:ring-ring/15 focus-within:shadow-(--surface-shadow)"
      >
        <div className="flex items-start gap-2.5 px-1">
          <Sparkles className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
          <label htmlFor={inputId} className="sr-only">Describe what the client needs</label>
          <textarea
            id={inputId}
            rows={1}
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyDown={onKeyDown}
            placeholder="What does the client need?"
            aria-describedby={hintId}
            autoComplete="off"
            className="field-sizing-content max-h-32 min-h-6 min-w-0 flex-1 resize-none bg-transparent text-base leading-6 text-foreground outline-none placeholder:text-muted-foreground/80"
          />
        </div>
        <p id={hintId} className="sr-only">
          Press Enter to find. Sizes need a unit, prices need a dollar sign or k. Words the catalog has no data for are listed separately.
        </p>

        <div className="flex items-end gap-3">
          <div className="flex min-w-0 flex-1 flex-col gap-2" aria-live="polite">
            {idle ? (
              <Row label="Try">
                {EXAMPLES.map((example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => apply(example)}
                    className="inline-flex h-7 max-w-full items-center truncate rounded-full bg-card px-2.5 text-xs text-foreground outline-none transition-[background-color,scale] duration-(--duration-fast) hover:bg-foreground/[0.04] focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-sm)"
                  >
                    {example}
                  </button>
                ))}
              </Row>
            ) : (
              <>
                {chips.length ? (
                  <Row label="Searching for">
                    {chips.map((chip) => (
                      <Chip key={chip.key} label={chip.label} removeLabel={`Remove ${chip.label}`} onRemove={() => onRemoveChip(chip.key)} />
                    ))}
                  </Row>
                ) : null}
                {softTerms.length ? (
                  <Row
                    label={
                      <span
                        className="inline-flex items-center gap-1"
                        title="These words don’t map to catalog data such as category, size, price or stock, so they don’t narrow the results. Judge them from the product page."
                      >
                        <CircleHelp className="size-3.5" aria-hidden="true" /> Not used as filters:
                      </span>
                    }
                  >
                    {softTerms.map((term) => (
                      <Chip key={term} label={term} removeLabel={`Dismiss ${term}`} onRemove={() => onRemoveSoftTerm(term)} soft />
                    ))}
                  </Row>
                ) : null}
              </>
            )}
          </div>
          <button
            type="submit"
            aria-label="Find"
            disabled={!text.trim()}
            className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground outline-none transition-[background-color,opacity,scale] duration-(--duration-fast) hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-(--press-scale-icon) disabled:opacity-35"
          >
            <ArrowUp className="size-4" aria-hidden="true" />
          </button>
        </div>
      </form>
    </section>
  );
}
