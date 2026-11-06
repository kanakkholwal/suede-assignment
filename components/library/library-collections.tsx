'use client';

import { Database, Pencil, Plus, Trash2 } from '@/components/icons';
import { type FormEvent, type ReactNode, useId, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import type { LibraryCollection } from '@/lib/library-state';
import type { IsLibraryMutationBlocked } from '@/lib/use-library';
import { cn } from '@/lib/utils';

interface LibraryCollectionsProps {
  collections: LibraryCollection[];
  isBlocked: IsLibraryMutationBlocked;
  savedCount: number;
  selectedCollectionId: string | null;
  onSelect: (collectionId: string | null) => void;
  onCreate: (name: string) => Promise<boolean>;
  onRename: (collectionId: string, name: string) => Promise<boolean>;
  onDelete: (collectionId: string) => Promise<boolean>;
  /** Clears the selection only if it still points at the deleted collection. */
  onDeleted: (collectionId: string) => void;
}

const ROW = 'flex min-w-0 flex-1 items-center justify-between gap-3 rounded-lg px-2.5 py-2 text-left text-sm outline-none transition-[background-color,scale] duration-(--duration-fast) focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-row)';

interface NamePopoverProps {
  trigger: ReactNode;
  triggerLabel: string;
  triggerClassName: string;
  label: string;
  initial: string;
  submitText: string;
  submitLabel?: string;
  blocked: (name: string) => boolean;
  onSubmit: (name: string) => Promise<boolean>;
  /** Extra action on the left of the footer, given a way to close the popover. */
  aside?: (close: () => void) => ReactNode;
}

/** A name field in a popover, so the list never swaps a row for a form. */
function NamePopover({ trigger, triggerLabel, triggerClassName, label, initial, submitText, submitLabel, blocked, onSubmit, aside }: NamePopoverProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(initial);
  // Bumped by every edit, open or close, so a slow save never closes or clears a newer draft.
  const revision = useRef(0);
  const id = useId();
  const trimmed = name.trim();

  const toggle = (next: boolean) => {
    revision.current += 1;
    setOpen(next);
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!trimmed) return;
    const sent = revision.current;
    if (!(await onSubmit(trimmed)) || sent !== revision.current) return;
    setName(initial ? trimmed : '');
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={toggle}>
      <PopoverTrigger aria-label={triggerLabel} className={triggerClassName}>
        {trigger}
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72 p-3">
        <form onSubmit={submit} className="flex flex-col gap-2.5">
          <label htmlFor={id} className="text-xs font-medium text-foreground">{label}</label>
          <Input size="sm" id={id} autoFocus value={name} onChange={(event) => { revision.current += 1; setName(event.target.value); }} maxLength={60} placeholder="e.g. Bedroom ideas" className="w-full" />
          <div className="flex items-center justify-between gap-2">
            {aside?.(() => setOpen(false)) ?? <span />}
            <div className="flex items-center gap-1">
              <Button type="button" size="xs" variant="ghost" onClick={() => toggle(false)}>Cancel</Button>
              <Button type="submit" size="xs" aria-label={submitLabel} disabled={!trimmed || blocked(trimmed)}>{submitText}</Button>
            </div>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

export function LibraryCollections({ collections, isBlocked, savedCount, selectedCollectionId, onSelect, onCreate, onRename, onDelete, onDeleted }: LibraryCollectionsProps) {
  const remove = async (collection: LibraryCollection, close: () => void) => {
    if (!(await onDelete(collection.id))) return;
    close();
    onDeleted(collection.id);
  };

  return (
    <aside className="flex min-h-full w-full flex-col gap-3" aria-label="Library collections">
      <div className="flex items-center justify-between gap-2 px-1">
        <p className="text-xs font-medium text-muted-foreground">Collections</p>
        <NamePopover
          trigger={<><Plus aria-hidden="true" /> New collection</>}
          triggerLabel="New collection"
          triggerClassName="inline-flex h-6 items-center gap-1 rounded-md px-1.5 text-xs font-medium text-primary outline-none transition-colors duration-(--duration-fast) hover:bg-primary/8 focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-3.5"
          label="New collection name"
          initial=""
          submitText="Create collection"
          blocked={(name) => isBlocked({ operation: 'createCollection', name })}
          onSubmit={onCreate}
        />
      </div>
      <nav aria-label="Collections" className="flex flex-col gap-0.5">
        <button
          type="button"
          aria-label="All saved"
          aria-current={selectedCollectionId === null ? 'page' : undefined}
          onClick={() => onSelect(null)}
          className={cn(ROW, selectedCollectionId === null ? 'bg-primary/10 font-medium text-foreground' : 'text-foreground hover:bg-foreground/4')}
        >
          <span>All saved</span>
          <span className="text-xs tabular-nums text-muted-foreground">{savedCount}</span>
        </button>
        {collections.map((collection) => {
          const selected = selectedCollectionId === collection.id;
          return (
            <div key={collection.id} className="group/collection flex items-center gap-0.5">
              <button
                type="button"
                aria-label={collection.name}
                aria-current={selected ? 'page' : undefined}
                onClick={() => onSelect(collection.id)}
                className={cn(ROW, selected ? 'bg-primary/10 font-medium text-foreground' : 'text-foreground hover:bg-foreground/4')}
              >
                <span className="truncate">{collection.name}</span>
                <span className="text-xs tabular-nums text-muted-foreground">{collection.productIds.length}</span>
              </button>
              <NamePopover
                trigger={<Pencil className="size-3" aria-hidden="true" />}
                triggerLabel={`Manage ${collection.name}`}
                triggerClassName="grid size-7 shrink-0 place-items-center rounded-md text-muted-foreground outline-none transition-[background-color,color,opacity] duration-(--duration-fast) hover:bg-foreground/6 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring data-popup-open:opacity-100 pointer-fine:opacity-0 pointer-fine:group-hover/collection:opacity-100 pointer-fine:focus-visible:opacity-100"
                label={`Rename ${collection.name}`}
                initial={collection.name}
                submitText="Save"
                submitLabel={`Save ${collection.name}`}
                blocked={(name) => isBlocked({ operation: 'renameCollection', collectionId: collection.id, name })}
                onSubmit={(name) => onRename(collection.id, name)}
                aside={(close) => (
                  <Button
                    type="button"
                    size="xs"
                    variant="ghost"
                    aria-label={`Delete ${collection.name}`}
                    disabled={isBlocked({ operation: 'deleteCollection', collectionId: collection.id })}
                    onClick={() => void remove(collection, close)}
                    className="text-destructive-strong hover:bg-destructive/10 hover:text-destructive-strong"
                  >
                    <Trash2 aria-hidden="true" /> Delete
                  </Button>
                )}
              />
            </div>
          );
        })}
      </nav>
      {collections.length === 0 ? (
        <p className="px-1 text-xs leading-relaxed text-muted-foreground">Group saved pieces by client or room. Collections keep pieces in your library; they do not add them to the room.</p>
      ) : null}
      <p className="mt-auto flex items-start gap-1.5 px-1 text-xs leading-relaxed text-muted-foreground">
        <Database className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
        <span><span className="font-medium text-foreground">Local SQLite library</span>. Private to this app; no account or sync.</span>
      </p>
    </aside>
  );
}
