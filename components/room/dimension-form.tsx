'use client';

import { type FormEvent, useId, useState } from 'react';

import { Button } from '@/components/ui/button';
import { DIMENSION_FIELDS, type DimensionField, type DimensionValues, type ResolvedDimensions } from '@/lib/dimensions';
import { formatInchValue, parseLength } from '@/lib/units';

const FIELD_LABEL: Record<DimensionField, string> = { width: 'Width', depth: 'Depth', height: 'Height' };

interface DimensionFormProps {
  current: ResolvedDimensions;
  onSave: (values: DimensionValues, note: string) => Promise<boolean>;
  onCancel: () => void;
  onClear?: () => void;
}

function initialText(current: ResolvedDimensions, field: DimensionField): string {
  const { value, source } = current[field];
  return source === 'designer' && value !== null ? formatInchValue(value) : '';
}

/** The designer's own measurement. Saved as `designer`, never mixed into brand or listing data. */
export function DimensionForm({ current, onSave, onCancel, onClear }: DimensionFormProps) {
  const formId = useId();
  const [text, setText] = useState<Record<DimensionField, string>>({
    width: initialText(current, 'width'),
    depth: initialText(current, 'depth'),
    height: initialText(current, 'height'),
  });
  const [note, setNote] = useState(current.width.source === 'designer' ? current.width.note : '');
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = {} as DimensionValues;
    for (const field of DIMENSION_FIELDS) {
      const raw = text[field].trim();
      const parsed = raw ? parseLength(raw) : null;
      if (raw && parsed === null) {
        setError(`${FIELD_LABEL[field]}: use inches like 86.5, or feet and inches like 7' 2.5".`);
        return;
      }
      values[field] = parsed;
    }
    if (values.width === null && values.depth === null && values.height === null) {
      setError('Enter at least one measurement.');
      return;
    }
    setError(null);
    setSaving(true);
    const saved = await onSave(values, note.trim());
    setSaving(false);
    if (saved) onCancel();
  };

  return (
    <form onSubmit={submit} className="mt-2 flex flex-col gap-2.5 rounded-lg border border-border bg-[#fbf9f6] p-3" aria-label="Enter size">
      <div className="grid grid-cols-3 gap-2">
        {DIMENSION_FIELDS.map((field) => {
          const known = current[field];
          return (
            <label key={field} htmlFor={`${formId}-${field}`} className="flex min-w-0 flex-col gap-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">{FIELD_LABEL[field]}</span>
              <input
                id={`${formId}-${field}`}
                inputMode="decimal"
                value={text[field]}
                onChange={(event) => setText((previous) => ({ ...previous, [field]: event.target.value }))}
                placeholder={known.value !== null && known.source !== 'designer' ? formatInchValue(known.value) : 'in'}
                className="h-8 min-w-0 rounded-md border border-input bg-white px-2 text-sm tabular-nums outline-none focus:border-ring focus:ring-2 focus:ring-ring/15"
              />
            </label>
          );
        })}
      </div>
      <label htmlFor={`${formId}-note`} className="flex flex-col gap-1">
        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">Where is this from?</span>
        <input
          id={`${formId}-note`}
          value={note}
          maxLength={280}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Brand spec sheet, showroom tape, vendor email…"
          className="h-8 rounded-md border border-input bg-white px-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/15"
        />
      </label>
      {error ? <p role="alert" className="text-xs text-destructive-strong">{error}</p> : null}
      <div className="flex items-center gap-2">
        <Button type="submit" size="xs" loading={saving} loadingLabel="Saving">Save size</Button>
        <Button type="button" size="xs" variant="ghost" onClick={onCancel}>Cancel</Button>
        {onClear ? (
          <Button type="button" size="xs" variant="link" className="ml-auto text-destructive-strong" onClick={onClear}>
            Remove my entry
          </Button>
        ) : null}
      </div>
    </form>
  );
}
