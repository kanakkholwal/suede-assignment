'use client';

import { Check, FolderPlus, Pencil, Plus, Trash2, X } from 'lucide-react';
import { useRef, useState, type Dispatch, type SetStateAction } from 'react';

import type { LibraryCollection } from '@/lib/library-state';
import type { IsLibraryMutationBlocked } from '@/lib/use-library';

interface LibraryCollectionsProps {
  collections: LibraryCollection[];
  isBlocked: IsLibraryMutationBlocked;
  savedCount: number;
  selectedCollectionId: string | null;
  onSelect: Dispatch<SetStateAction<string | null>>;
  onCreate: (name: string) => Promise<boolean>;
  onRename: (collectionId: string, name: string) => Promise<boolean>;
  onDelete: (collectionId: string) => Promise<boolean>;
}

export function LibraryCollections({
  collections,
  isBlocked,
  savedCount,
  selectedCollectionId,
  onSelect,
  onCreate,
  onRename,
  onDelete,
}: LibraryCollectionsProps) {
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState('');
  const [editingCollectionId, setEditingCollectionId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');
  const createRevision = useRef(0);
  const editRevision = useRef(0);

  const create = async () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const revision = createRevision.current;
    if (!await onCreate(trimmed)) return;
    if (revision !== createRevision.current) return;
    createRevision.current += 1;
    setName('');
    setCreating(false);
  };

  const startEditing = (collection: LibraryCollection) => {
    editRevision.current += 1;
    setEditingCollectionId(collection.id);
    setEditingName(collection.name);
  };

  const saveRename = async (collection: LibraryCollection) => {
    const trimmed = editingName.trim();
    if (!trimmed) return;
    const revision = editRevision.current;
    if (!await onRename(collection.id, trimmed)) return;
    if (revision !== editRevision.current) return;
    editRevision.current += 1;
    setEditingCollectionId(null);
    setEditingName('');
  };

  const deleteCollection = async (collection: LibraryCollection) => {
    const revision = editRevision.current;
    if (!await onDelete(collection.id)) return;
    onSelect((current) => current === collection.id ? null : current);
    if (revision !== editRevision.current) return;
    editRevision.current += 1;
    setEditingCollectionId(null);
    setEditingName('');
  };

  return (
    <aside className="flex min-h-full w-full flex-col gap-4" aria-label="Library collections">
      <div>
        <p className="px-1 text-xs font-medium text-muted-foreground">Collections</p>
        <div className="mt-2 flex flex-col gap-0.5">
          <button
            type="button"
            aria-label="All saved"
            onClick={() => onSelect(null)}
            className={`flex items-center justify-between rounded-lg px-2.5 py-2 text-left text-sm outline-none transition-[background-color,scale] duration-(--duration-fast) focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-row) ${selectedCollectionId === null ? 'bg-primary/10 font-medium text-foreground' : 'text-foreground hover:bg-foreground/[0.04]'}`}
          >
            <span>All saved</span><span className="text-xs tabular-nums text-muted-foreground">{savedCount}</span>
          </button>
          {collections.map((collection) => editingCollectionId === collection.id ? (
            <form
              key={collection.id}
              aria-label={`Manage ${collection.name}`}
              className="enter rounded-lg bg-muted/70 p-2"
              onSubmit={(event) => {
                event.preventDefault();
                saveRename(collection);
              }}
            >
              <label className="sr-only" htmlFor={`rename-${collection.id}`}>Rename {collection.name}</label>
              <input
                id={`rename-${collection.id}`}
                autoFocus
                value={editingName}
                onChange={(event) => { editRevision.current += 1; setEditingName(event.target.value); }}
                maxLength={60}
                className="h-8 w-full rounded-md border border-input bg-field px-2 text-base outline-none transition-[border-color,box-shadow] duration-(--duration-fast) focus:border-ring focus:ring-3 focus:ring-ring/20 md:text-sm"
              />
              <div className="mt-2 flex items-center justify-between gap-1">
                <button type="button" aria-label={`Delete ${collection.name}`} disabled={isBlocked({ operation: 'deleteCollection', collectionId: collection.id })} onClick={() => deleteCollection(collection)} className="inline-flex items-center gap-1 rounded-md px-1.5 py-1 text-xs text-destructive-strong outline-none hover:bg-destructive/10 focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50">
                  <Trash2 className="size-3" aria-hidden="true" /> Delete
                </button>
                <div className="flex items-center gap-1">
                  <button type="button" aria-label={`Cancel renaming ${collection.name}`} onClick={() => { editRevision.current += 1; setEditingCollectionId(null); }} className="grid size-7 place-items-center rounded-md text-muted-foreground outline-none hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">
                    <X className="size-3.5" aria-hidden="true" />
                  </button>
                  <button type="submit" aria-label={`Save ${collection.name}`} disabled={!editingName.trim() || isBlocked({ operation: 'renameCollection', collectionId: collection.id, name: editingName.trim() })} className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground outline-none hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50">
                    <Check className="size-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div key={collection.id} className="group/collection flex items-center gap-0.5">
              <button
                type="button"
                aria-label={collection.name}
                onClick={() => onSelect(collection.id)}
                className={`min-w-0 flex-1 flex items-center justify-between rounded-lg px-2.5 py-2 text-left text-sm outline-none transition-[background-color,scale] duration-(--duration-fast) focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-row) ${selectedCollectionId === collection.id ? 'bg-primary/10 font-medium text-foreground' : 'text-foreground hover:bg-foreground/[0.04]'}`}
              >
                <span className="truncate">{collection.name}</span><span className="ml-3 text-xs tabular-nums text-muted-foreground">{collection.productIds.length}</span>
              </button>
              <button type="button" aria-label={`Manage ${collection.name}`} onClick={() => startEditing(collection)} className="grid size-7 shrink-0 place-items-center rounded-md text-muted-foreground outline-none transition-[background-color,color,opacity] duration-(--duration-fast) hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring pointer-fine:opacity-0 pointer-fine:group-hover/collection:opacity-100 pointer-fine:focus-visible:opacity-100">
                <Pencil className="size-3" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </div>
      {creating ? (
        <form
          className="enter rounded-lg bg-muted/70 p-3"
          onSubmit={(event) => {
            event.preventDefault();
            create();
          }}
        >
          <label htmlFor="library-collection-name" className="text-xs text-muted-foreground">New collection name</label>
          <input id="library-collection-name" autoFocus value={name} onChange={(event) => { createRevision.current += 1; setName(event.target.value); }} maxLength={60} placeholder="e.g. Bedroom ideas" className="mt-1.5 h-8 w-full rounded-md border border-input bg-field px-2 text-base outline-none transition-[border-color,box-shadow] duration-(--duration-fast) focus:border-ring focus:ring-3 focus:ring-ring/20 md:text-sm" />
          <div className="mt-2 flex items-center justify-end gap-2">
            <button type="button" onClick={() => { createRevision.current += 1; setCreating(false); }} className="rounded-md px-2 py-1 text-xs text-muted-foreground outline-none hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">Cancel</button>
            <button type="submit" disabled={!name.trim() || isBlocked({ operation: 'createCollection', name: name.trim() })} className="rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground outline-none hover:bg-primary-hover focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-sm) disabled:opacity-50">Create collection</button>
          </div>
        </form>
      ) : (
        <button type="button" onClick={() => { createRevision.current += 1; setCreating(true); }} className="inline-flex w-fit items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm text-muted-foreground outline-none transition-[background-color,color] duration-(--duration-fast) hover:bg-foreground/[0.04] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">
          <Plus className="size-4" aria-hidden="true" /> New collection
        </button>
      )}
      <div className="mt-auto px-1 text-xs leading-relaxed text-muted-foreground">
        <div className="mb-0.5 flex items-center gap-1.5 text-foreground"><FolderPlus className="size-3.5" aria-hidden="true" /> Local SQLite library</div>
        Saved items and collections are private to this locally running app. There is no account or sync.
      </div>
    </aside>
  );
}
