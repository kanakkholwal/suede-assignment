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
    <aside className="flex w-full shrink-0 flex-col gap-5 md:w-52 lg:w-60" aria-label="Library collections">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#776c63]">Collections</p>
        <div className="mt-2 flex flex-col gap-0.5">
          <button
            type="button"
            aria-label="All saved"
            onClick={() => onSelect(null)}
            className={`flex items-center justify-between rounded-md px-2.5 py-2 text-left text-sm transition ${selectedCollectionId === null ? 'bg-[#e9e2d9] font-medium text-[#2b211b]' : 'text-[#5e544c] hover:bg-white/70'}`}
          >
            <span>All saved</span><span className="text-xs tabular-nums text-[#85796f]">{savedCount}</span>
          </button>
          {collections.map((collection) => editingCollectionId === collection.id ? (
            <form
              key={collection.id}
              aria-label={`Manage ${collection.name}`}
              className="rounded-md border border-[#d9d0c7] bg-white p-2"
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
                className="h-8 w-full rounded border border-[#d8d1ca] px-2 text-sm outline-none focus:border-[#886b54] focus:ring-2 focus:ring-[#886b54]/15"
              />
              <div className="mt-2 flex items-center justify-between gap-1">
                <button type="button" aria-label={`Delete ${collection.name}`} disabled={isBlocked({ operation: 'deleteCollection', collectionId: collection.id })} onClick={() => deleteCollection(collection)} className="inline-flex items-center gap-1 px-1 py-1 text-xs text-[#91554b] hover:text-[#6e3029] disabled:opacity-50">
                  <Trash2 className="size-3" aria-hidden="true" /> Delete
                </button>
                <div className="flex items-center gap-1">
                  <button type="button" aria-label={`Cancel renaming ${collection.name}`} onClick={() => { editRevision.current += 1; setEditingCollectionId(null); }} className="grid size-7 place-items-center rounded text-[#756960] hover:bg-[#f3efeb]">
                    <X className="size-3.5" aria-hidden="true" />
                  </button>
                  <button type="submit" aria-label={`Save ${collection.name}`} disabled={!editingName.trim() || isBlocked({ operation: 'renameCollection', collectionId: collection.id, name: editingName.trim() })} className="grid size-7 place-items-center rounded bg-[#29221e] text-white disabled:opacity-50">
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
                className={`flex min-w-0 flex-1 items-center justify-between rounded-md px-2.5 py-2 text-left text-sm transition ${selectedCollectionId === collection.id ? 'bg-[#e9e2d9] font-medium text-[#2b211b]' : 'text-[#5e544c] hover:bg-white/70'}`}
              >
                <span className="truncate">{collection.name}</span><span className="ml-3 text-xs tabular-nums text-[#85796f]">{collection.productIds.length}</span>
              </button>
              <button type="button" aria-label={`Manage ${collection.name}`} onClick={() => startEditing(collection)} className="grid size-7 shrink-0 place-items-center rounded text-[#8c8177] hover:bg-white hover:text-[#40352e] focus-visible:outline-2 focus-visible:outline-[#886b54]">
                <Pencil className="size-3" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </div>
      {creating ? (
        <form
          className="rounded-lg border border-[#d9d0c7] bg-white p-3 shadow-sm"
          onSubmit={(event) => {
            event.preventDefault();
            create();
          }}
        >
          <label htmlFor="library-collection-name" className="text-[10px] font-semibold uppercase tracking-[0.11em] text-[#776c63]">New collection name</label>
          <input id="library-collection-name" autoFocus value={name} onChange={(event) => { createRevision.current += 1; setName(event.target.value); }} maxLength={60} placeholder="e.g. Bedroom ideas" className="mt-2 h-9 w-full rounded-md border border-[#d8d1ca] px-2.5 text-sm outline-none focus:border-[#886b54] focus:ring-2 focus:ring-[#886b54]/15" />
          <div className="mt-2 flex items-center justify-end gap-2">
            <button type="button" onClick={() => { createRevision.current += 1; setCreating(false); }} className="px-1.5 py-1 text-xs text-[#756960] hover:text-[#27201b]">Cancel</button>
            <button type="submit" disabled={!name.trim() || isBlocked({ operation: 'createCollection', name: name.trim() })} className="rounded bg-[#29221e] px-2.5 py-1.5 text-xs font-medium text-white disabled:opacity-50">Create collection</button>
          </div>
        </form>
      ) : (
        <button type="button" onClick={() => { createRevision.current += 1; setCreating(true); }} className="inline-flex w-fit items-center gap-1.5 px-2.5 py-2 text-sm text-[#645449] hover:text-[#241c17]">
          <Plus className="size-4" aria-hidden="true" /> New collection
        </button>
      )}
      <div className="rounded-lg border border-[#e0d9d1] bg-[#faf8f5] p-3.5 text-xs leading-relaxed text-[#776c63]">
        <div className="mb-1.5 flex items-center gap-1.5 font-medium text-[#574a40]"><FolderPlus className="size-3.5" aria-hidden="true" /> Local SQLite library</div>
        Saved items and collections are private to this locally running app. There is no account or sync.
      </div>
    </aside>
  );
}
