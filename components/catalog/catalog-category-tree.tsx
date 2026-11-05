'use client';

import { useMemo, useState } from 'react';

import { Check, ChevronRight, Search } from '@/components/icons';
import { Input } from '@/components/ui/input';
import type { CatalogCategoryFilter, CatalogCategoryNode } from '@/lib/catalog-contract';
import { cn } from '@/lib/utils';

interface CatalogCategoryTreeProps {
  nodes: readonly CatalogCategoryNode[];
  selected: CatalogCategoryFilter;
  onSelect: (category: CatalogCategoryFilter) => void;
}

interface FlatNode {
  node: CatalogCategoryNode;
  path: string[];
  ancestors: string[];
}

function flatten(nodes: readonly CatalogCategoryNode[], path: string[] = [], ancestors: string[] = []): FlatNode[] {
  return nodes.flatMap((node) => [
    { node, path, ancestors },
    ...flatten(node.children, [...path, node.name], [...ancestors, String(node.id)]),
  ]);
}

function containsSelection(node: CatalogCategoryNode, selected: CatalogCategoryFilter): boolean {
  return node.id === selected || node.children.some((child) => containsSelection(child, selected));
}

/** Why a category matched: its own name, or an ontology synonym such as "couch" for Sofa. */
function matchReason({ node }: FlatNode, needle: string): 'name' | string | null {
  if (node.name.toLowerCase().includes(needle)) return 'name';
  const alias = node.aliases?.find((term) => term.toLowerCase().replace(/_/g, ' ').includes(needle));
  return alias ? alias.replace(/_/g, ' ') : null;
}

const ROW = 'flex min-h-9 min-w-0 flex-1 items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm outline-none transition-[background-color,scale] duration-(--duration-fast) focus-visible:ring-2 focus-visible:ring-ring active:scale-(--press-scale-row)';

function CategoryButton({ node, selected, depth, detail, onSelect }: { node: CatalogCategoryNode; selected: boolean; depth: number; detail?: string; onSelect: () => void }) {
  return (
    <button
      type="button"
      aria-label={`Filter by ${node.name}`}
      aria-pressed={selected}
      onClick={onSelect}
      className={cn(ROW, selected ? 'bg-primary/10 font-medium text-foreground' : depth ? 'text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground' : 'text-foreground hover:bg-foreground/[0.04]')}
    >
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate">{node.name}</span>
        {detail ? <span className="truncate text-xs font-normal text-muted-foreground">{detail}</span> : null}
      </span>
      {selected ? <Check className="size-3.5 text-primary" aria-hidden="true" /> : <span className="text-xs tabular-nums text-muted-foreground">{node.count}</span>}
    </button>
  );
}

/**
 * The catalog's ontology: a parent selects its whole subtree, the chevron reveals its children,
 * and search reaches any depth without expanding anything.
 */
export function CatalogCategoryTree({ nodes, selected, onSelect }: CatalogCategoryTreeProps) {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(nodes.filter((node) => containsSelection(node, selected)).map((node) => String(node.id))),
  );
  const flat = useMemo(() => flatten(nodes), [nodes]);
  const needle = query.trim().toLowerCase();
  const results = needle
    ? flat.flatMap((entry) => {
        const reason = matchReason(entry, needle);
        return reason ? [{ ...entry, alias: reason === 'name' ? null : reason }] : [];
      }).slice(0, 40)
    : [];
  const pick = (id: CatalogCategoryFilter) => {
    const ancestors = flat.find((entry) => entry.node.id === id)?.ancestors ?? [];
    if (ancestors.length) setExpanded((current) => new Set([...current, ...ancestors]));
    onSelect(id === selected ? null : id);
  };

  const toggle = (key: string) =>
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const renderNode = (node: CatalogCategoryNode, depth: number) => {
    const key = String(node.id);
    const open = expanded.has(key);
    const isSelected = selected === node.id;
    return (
      <li key={key} className="flex min-w-0 flex-col">
        <div className="flex items-center gap-0.5" style={{ paddingLeft: depth * 16 }}>
          {node.children.length ? (
            <button
              type="button"
              aria-label={`${open ? 'Collapse' : 'Expand'} ${node.name}`}
              aria-expanded={open}
              onClick={() => toggle(key)}
              className="grid size-7 shrink-0 place-items-center rounded-md text-muted-foreground outline-none transition-colors duration-(--duration-fast) hover:bg-foreground/[0.06] hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronRight className={cn('size-3.5 transition-transform duration-(--duration-base) ease-(--ease-ui-out)', open && 'rotate-90')} aria-hidden="true" />
            </button>
          ) : (
            <span className="size-7 shrink-0" aria-hidden="true" />
          )}
          <CategoryButton node={node} selected={isSelected} depth={depth} onSelect={() => pick(node.id)} />
        </div>
        {node.children.length && open ? <ul className="enter flex flex-col">{node.children.map((child) => renderNode(child, depth + 1))}</ul> : null}
      </li>
    );
  };

  return (
    <div className="flex flex-col gap-2" role="group" aria-label="Category tree">
      <div className="relative">
        <label htmlFor="category-search" className="sr-only">Find a category</label>
        <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input id="category-search" type="search" size="sm" value={query} placeholder="Find a category" onChange={(event) => setQuery(event.target.value)} className="w-full pl-8" />
      </div>
      {needle ? (
        results.length ? (
          <ul className="flex flex-col" aria-label="Matching categories">
            {results.map(({ node, path, alias }) => (
              <li key={String(node.id)} className="flex">
                <CategoryButton
                  node={node}
                  selected={selected === node.id}
                  depth={0}
                  detail={[path.join(' / '), alias ? `also called ${alias}` : ''].filter(Boolean).join(' · ')}
                  onSelect={() => pick(node.id)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-2 py-3 text-sm text-muted-foreground">No category matches “{query.trim()}”.</p>
        )
      ) : (
        <ul className="-ml-1 flex flex-col">{nodes.map((node) => renderNode(node, 0))}</ul>
      )}
    </div>
  );
}
