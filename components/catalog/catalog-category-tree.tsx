'use client';

import { ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';

import type {
  CatalogCategoryFilter,
  CatalogCategoryNode,
} from '@/lib/catalog-contract';

interface CatalogCategoryTreeProps {
  nodes: readonly CatalogCategoryNode[];
  selected: CatalogCategoryFilter;
  onSelect: (category: CatalogCategoryFilter) => void;
}

function containsSelection(node: CatalogCategoryNode, selected: CatalogCategoryFilter): boolean {
  if (node.id === selected) return true;
  return node.children.some((child) => containsSelection(child, selected));
}

function categoryKey(id: CatalogCategoryNode['id']): string {
  return String(id);
}

/**
 * Mirrors the catalog's ontology rail: a top-level category selects its full
 * subtree, while the adjacent disclosure reveals its concrete children.
 */
export function CatalogCategoryTree({ nodes, selected, onSelect }: CatalogCategoryTreeProps) {
  const selectedTopLevel = useMemo(
    () => nodes.find((node) => containsSelection(node, selected))?.id ?? null,
    [nodes, selected],
  );
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(selectedTopLevel === null ? [] : [categoryKey(selectedTopLevel)]),
  );

  const toggle = (id: CatalogCategoryNode['id']) => {
    const key = categoryKey(id);
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const renderNode = (node: CatalogCategoryNode, depth: number) => {
    const key = categoryKey(node.id);
    const hasChildren = node.children.length > 0;
    const isOpen = expanded.has(key) || selectedTopLevel === node.id;
    const isSelected = selected === node.id;

    return (
      <div key={key} className="min-w-0">
        <div className="flex items-center gap-0.5" style={{ paddingLeft: `${depth * 12}px` }}>
          {hasChildren ? (
            <button
              type="button"
              aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${node.name}`}
              aria-expanded={isOpen}
              onClick={() => toggle(node.id)}
              className="grid size-6 shrink-0 place-items-center rounded text-[#82776d] hover:bg-[#efeae4] focus-visible:outline-2 focus-visible:outline-[#886b54]"
            >
              <ChevronRight className={`size-3.5 transition-transform ${isOpen ? 'rotate-90' : ''}`} aria-hidden="true" />
            </button>
          ) : (
            <span className="inline-block size-6 shrink-0" aria-hidden="true" />
          )}
          <button
            type="button"
            aria-label={`Filter by ${node.name}`}
            aria-pressed={isSelected}
            onClick={() => onSelect(node.id)}
            className={`flex min-w-0 flex-1 items-center justify-between gap-2 rounded px-1.5 py-1.5 text-left text-sm transition focus-visible:outline-2 focus-visible:outline-[#886b54] ${
              isSelected
                ? 'bg-[#ebe3da] font-medium text-[#241c17]'
                : 'text-[#3c322b] hover:bg-[#f0ece7]'
            }`}
          >
            <span className="truncate">{node.name}</span>
            <span className="shrink-0 text-[11px] tabular-nums text-[#8a7f76]" aria-hidden="true">
              {node.count}
            </span>
          </button>
        </div>
        {hasChildren && isOpen ? node.children.map((child) => renderNode(child, depth + 1)) : null}
      </div>
    );
  };

  return (
    <div className="max-h-72 overflow-y-auto pr-1" role="group" aria-label="Category tree">
      <button
        type="button"
        aria-pressed={selected === null}
        onClick={() => onSelect(null)}
        className={`mb-1 flex w-full items-center rounded px-2 py-1.5 text-left text-sm transition hover:bg-[#f0ece7] focus-visible:outline-2 focus-visible:outline-[#886b54] ${
          selected === null ? 'bg-[#ebe3da] font-medium text-[#241c17]' : 'text-[#3c322b]'
        }`}
      >
        All categories
      </button>
      {nodes.map((node) => renderNode(node, 0))}
    </div>
  );
}
