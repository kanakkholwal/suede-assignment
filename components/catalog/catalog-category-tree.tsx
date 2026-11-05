'use client';

import { ChevronRight } from '@/components/icons';
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
              className="grid size-6 shrink-0 place-items-center rounded-md text-muted-foreground outline-none transition-colors duration-(--duration-fast) hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronRight className={`size-3.5 transition-transform duration-(--duration-base) ease-(--ease-ui-out) ${isOpen ? 'rotate-90' : ''}`} aria-hidden="true" />
            </button>
          ) : (
            <span className="inline-block size-6 shrink-0" aria-hidden="true" />
          )}
          <button
            type="button"
            aria-label={`Filter by ${node.name}`}
            aria-pressed={isSelected}
            onClick={() => onSelect(node.id)}
            className={`flex min-w-0 flex-1 items-center justify-between gap-2 rounded-md px-1.5 py-1.5 text-left text-sm outline-none transition-[background-color,color,scale] duration-(--duration-fast) focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-row) ${
              isSelected ? 'bg-primary/10 font-medium text-foreground' : 'text-foreground hover:bg-foreground/[0.04]'
            }`}
          >
            <span className="truncate">{node.name}</span>
            <span className="shrink-0 text-xs tabular-nums text-muted-foreground" aria-hidden="true">
              {node.count}
            </span>
          </button>
        </div>
        {hasChildren && isOpen ? <div className="enter">{node.children.map((child) => renderNode(child, depth + 1))}</div> : null}
      </div>
    );
  };

  return (
    <div className="flex flex-col" role="group" aria-label="Category tree">
      <div className="flex items-center gap-0.5">
      <span className="inline-block size-6 shrink-0" aria-hidden="true" />
      <button
        type="button"
        aria-pressed={selected === null}
        onClick={() => onSelect(null)}
        className={`flex min-w-0 flex-1 items-center rounded-md px-1.5 py-1.5 text-left text-sm outline-none transition-[background-color,scale] duration-(--duration-fast) focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-row) ${
          selected === null ? 'bg-primary/10 font-medium text-foreground' : 'text-foreground hover:bg-foreground/[0.04]'
        }`}
      >
        All categories
      </button>
      </div>
      {nodes.map((node) => renderNode(node, 0))}
    </div>
  );
}
