'use client';

import { Check, FolderPlus, Heart, MoreHorizontal, Plus, X } from 'lucide-react';
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';

import type { CatalogProduct } from '@/data/product-types';
import type { LibraryCollection } from '@/lib/library-state';
import type { IsLibraryMutationBlocked } from '@/lib/use-library';

interface ProductActionsMenuProps {
  product: CatalogProduct;
  saved: boolean;
  collections: LibraryCollection[];
  isBlocked: IsLibraryMutationBlocked;
  onToggleSaved: (productId: string) => void;
  onAddToCollection: (collectionId: string, productId: string) => void;
  onCreateCollection: (name: string, productId: string) => Promise<boolean>;
  className?: string;
}

function stop(event: MouseEvent<HTMLElement>) {
  event.stopPropagation();
}

const MENU_VIEWPORT_PADDING = 12;
const MENU_TRIGGER_GAP = 8;

export function ProductActionsMenu({
  product,
  saved,
  collections,
  isBlocked,
  onToggleSaved,
  onAddToCollection,
  onCreateCollection,
  className = '',
}: ProductActionsMenuProps) {
  const [open, setOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState('');
  const [menuPosition, setMenuPosition] = useState<{ left: number; top: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstMenuItemRef = useRef<HTMLButtonElement>(null);
  const createRevision = useRef(0);

  const closeMenu = useCallback((restoreFocus = true) => {
    createRevision.current += 1;
    setOpen(false);
    setCreating(false);
    setMenuPosition(null);
    if (restoreFocus) triggerRef.current?.focus();
  }, []);

  const openMenu = useCallback(() => {
    setMenuPosition(null);
    setOpen(true);
  }, []);

  const updateMenuPosition = useCallback(() => {
    const trigger = triggerRef.current;
    const menu = menuRef.current;
    if (!trigger || !menu) return;

    const triggerBounds = trigger.getBoundingClientRect();
    const menuBounds = menu.getBoundingClientRect();
    const maxLeft = Math.max(MENU_VIEWPORT_PADDING, window.innerWidth - menuBounds.width - MENU_VIEWPORT_PADDING);
    const left = Math.min(Math.max(MENU_VIEWPORT_PADDING, triggerBounds.right - menuBounds.width), maxLeft);
    const below = triggerBounds.bottom + MENU_TRIGGER_GAP;
    const above = triggerBounds.top - menuBounds.height - MENU_TRIGGER_GAP;
    const top = below + menuBounds.height <= window.innerHeight - MENU_VIEWPORT_PADDING || above < MENU_VIEWPORT_PADDING
      ? below
      : above;

    setMenuPosition((current) => current?.left === left && current.top === top ? current : { left, top });
  }, []);

  useLayoutEffect(() => {
    if (!open) return;

    updateMenuPosition();
    window.addEventListener('resize', updateMenuPosition);
    window.addEventListener('scroll', updateMenuPosition, true);
    return () => {
      window.removeEventListener('resize', updateMenuPosition);
      window.removeEventListener('scroll', updateMenuPosition, true);
    };
  }, [collections.length, creating, open, updateMenuPosition]);

  useEffect(() => {
    if (!open) return;

    firstMenuItemRef.current?.focus();
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!menuRef.current?.contains(target) && !triggerRef.current?.contains(target)) {
        closeMenu(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [closeMenu, open]);

  const submitCollection = async () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const revision = createRevision.current;
    if (!await onCreateCollection(trimmed, product.id)) return;
    if (revision !== createRevision.current) return;
    createRevision.current += 1;
    setName('');
    setCreating(false);
  };

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu();
      return;
    }
    if (event.key === 'Tab') {
      closeMenu(false);
      return;
    }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;

    const items = [...(menuRef.current?.querySelectorAll<HTMLButtonElement>('[role="menuitem"]') ?? [])]
      .filter((item) => !item.disabled);
    if (!items.length) return;
    event.preventDefault();
    const currentIndex = items.indexOf(document.activeElement as HTMLButtonElement);
    const nextIndex =
      event.key === 'Home' ? 0 :
        event.key === 'End' ? items.length - 1 :
          event.key === 'ArrowUp' ? (currentIndex <= 0 ? items.length - 1 : currentIndex - 1) :
            currentIndex >= items.length - 1 ? 0 : currentIndex + 1;
    items[nextIndex]?.focus();
  };

  return (
    <div className={`${className || 'relative'} z-20`} onClick={stop}>
      <button
        ref={triggerRef}
        type="button"
        aria-label={`Product actions for ${product.name}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? `product-actions-${product.id}` : undefined}
        onClick={() => (open ? closeMenu(false) : openMenu())}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            openMenu();
          }
        }}
        className="grid size-8 place-items-center rounded-full bg-white/88 text-[#201a16] shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#886b54]"
      >
        <MoreHorizontal className="size-4" aria-hidden="true" />
      </button>
      {open && typeof document !== 'undefined' ? createPortal(
        <div
          ref={menuRef}
          id={`product-actions-${product.id}`}
          role="menu"
          aria-label={`Actions for ${product.name}`}
          onKeyDown={handleMenuKeyDown}
          className="fixed z-40 w-56 rounded-lg border border-[#ded9d3] bg-white p-1.5 shadow-[0_14px_38px_rgba(43,35,29,0.16)]"
          style={{
            left: menuPosition?.left ?? 0,
            top: menuPosition?.top ?? 0,
            visibility: menuPosition ? 'visible' : 'hidden',
          }}
        >
          <button
            ref={firstMenuItemRef}
            type="button"
            role="menuitem"
            disabled={isBlocked({ operation: 'toggleSaved', productId: product.id })}
            onClick={() => onToggleSaved(product.id)}
            className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm text-[#29221e] hover:bg-[#f4f1ed]"
          >
            <Heart className={`size-4 ${saved ? 'fill-[#29221e]' : ''}`} aria-hidden="true" />
            {saved ? 'Remove from library' : 'Save to library'}
          </button>
          <div className="my-1 border-t border-[#eeeae6]" />
          {collections.length ? (
            <div className="px-2.5 pb-1 pt-1 text-[10px] font-semibold uppercase tracking-[0.11em] text-[#81766d]">
              Add to collection
            </div>
          ) : null}
          {collections.map((collection) => {
            const selected = collection.productIds.includes(product.id);
            return (
              <button
                key={collection.id}
                type="button"
                role="menuitem"
                disabled={isBlocked({ operation: 'addToCollection', collectionId: collection.id, productId: product.id })}
                onClick={() => onAddToCollection(collection.id, product.id)}
                className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm text-[#29221e] hover:bg-[#f4f1ed]"
              >
                {selected ? <Check className="size-4 text-[#6b5544]" aria-hidden="true" /> : <FolderPlus className="size-4" aria-hidden="true" />}
                <span className="truncate">{collection.name}</span>
              </button>
            );
          })}
          {creating ? (
            <div className="mt-1 rounded-md bg-[#f4f1ed] p-2">
              <label className="sr-only" htmlFor={`collection-${product.id}`}>
                Collection name
              </label>
              <input
                id={`collection-${product.id}`}
                autoFocus
                value={name}
                maxLength={60}
                onChange={(event) => { createRevision.current += 1; setName(event.target.value); }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') submitCollection();
                  if (event.key === 'Escape') { createRevision.current += 1; setCreating(false); }
                }}
                placeholder="Collection name"
                className="h-8 w-full rounded border border-[#d9d2ca] bg-white px-2 text-sm outline-none focus:border-[#886b54]"
              />
              <div className="mt-2 flex justify-end gap-1">
                <button
                  type="button"
                  aria-label="Cancel collection"
                  onClick={() => { createRevision.current += 1; setCreating(false); }}
                  className="grid size-7 place-items-center rounded text-[#70665d] hover:bg-white"
                >
                  <X className="size-3.5" />
                </button>
                <button
                  type="button"
                  onClick={submitCollection}
                  className="rounded bg-[#29221e] px-2 py-1 text-xs font-medium text-white disabled:opacity-50"
                  disabled={!name.trim() || isBlocked({ operation: 'createCollection', name: name.trim(), productId: product.id })}
                >
                  Create
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              role="menuitem"
              onClick={() => { createRevision.current += 1; setCreating(true); }}
              className="flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-sm text-[#29221e] hover:bg-[#f4f1ed]"
            >
              <Plus className="size-4" aria-hidden="true" />
              New collection…
            </button>
          )}
        </div>,
        document.body,
      ) : null}
    </div>
  );
}
