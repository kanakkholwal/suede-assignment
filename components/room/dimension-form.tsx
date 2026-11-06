'use client';

import { type FormEvent, useId, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
    <form onSubmit={submit} className="flex flex-col gap-4" aria-label="Enter size">
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-semibold text-foreground">Enter the real size</p>
        <p className="text-xs text-muted-foreground">On the brand’s product page, look for “Dimensions”. Width is side to side, depth is front to back. Saved as your own entry.</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {DIMENSION_FIELDS.map((field) => {
          const known = current[field];
          return (
            <label key={field} htmlFor={`${formId}-${field}`} className="flex min-w-0 flex-col gap-1.5">
              <span className="text-xs text-muted-foreground">{FIELD_LABEL[field]}</span>
              <Input
                size="sm"
                id={`${formId}-${field}`}
                inputMode="decimal"
                autoFocus={field === 'width'}
                value={text[field]}
                onChange={(event) => setText((previous) => ({ ...previous, [field]: event.target.value }))}
                placeholder={known.value !== null && known.source !== 'designer' ? formatInchValue(known.value) : 'in'}
                className="min-w-0 tabular-nums"
              />
            </label>
          );
        })}
      </div>
      <label htmlFor={`${formId}-note`} className="flex flex-col gap-1.5">
        <span className="text-xs text-muted-foreground">Where did you find it? (optional)</span>
        <Input
          size="sm"
          id={`${formId}-note`}
          value={note}
          maxLength={280}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Brand website, measured in store"
        />
      </label>
      {error ? <p role="alert" className="text-xs text-destructive-strong">{error}</p> : null}
      <div className="flex items-center gap-2">
        {onClear ? (
          <Button type="button" size="sm" variant="ghost" className="-ml-2 text-destructive-strong" onClick={onClear}>
            Remove my entry
          </Button>
        ) : null}
        <Button type="button" size="sm" variant="ghost" className="ml-auto" onClick={onCancel}>Cancel</Button>
        <Button type="submit" size="sm" loading={saving} loadingLabel="Saving">Save size</Button>
      </div>
    </form>
  );
}
