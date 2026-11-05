'use client';

import { Columns3, Map as MapIcon, Ruler } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';

import { ElevationView } from '@/components/planner/elevation-view';
import { FitWarnings } from '@/components/planner/fit-warnings';
import { PiecesPanel } from '@/components/planner/pieces-panel';
import { PlanCanvas } from '@/components/planner/plan-canvas';
import { RoomFactsPanel } from '@/components/planner/room-facts-panel';
import { TapeOutSheet } from '@/components/planner/tape-out-sheet';
import { type SegmentOption, SegmentedControl } from '@/components/shared/segmented-control';
import { WorkflowBar } from '@/components/shared/workflow-bar';
import type { CatalogProduct } from '@/data/product-types';
import type { DimensionValues } from '@/lib/dimensions';
import { evaluateFit } from '@/lib/fit-rules';
import { frontSide, wallDistances } from '@/lib/geometry';
import { pieceKind } from '@/lib/piece-kind';
import { defaultPlacement, type Placement, type PlanPiece, planPieces, rotateClockwise, snapPlacement } from '@/lib/plan-model';
import type { RoomItem, Wall } from '@/lib/room-state';
import { WALLS } from '@/lib/room-state';
import { useRoom } from '@/lib/use-room';

type PlannerView = 'plan' | 'wall' | 'tape';

const VIEWS: readonly SegmentOption<PlannerView>[] = [
  { value: 'plan', label: 'Plan', icon: MapIcon },
  { value: 'wall', label: 'Wall view', icon: Columns3 },
  { value: 'tape', label: 'Tape-out', icon: Ruler },
];

const WALL_OPTIONS: readonly SegmentOption<Wall>[] = WALLS.map((wall) => ({
  value: wall,
  label: wall[0].toUpperCase() + wall.slice(1),
  ariaLabel: `${wall} wall`,
}));

const VIEW_TITLE: Record<PlannerView, { title: string; lede: string }> = {
  plan: { title: 'Fit the room', lede: 'Place each piece, then fix what the fit check flags. Dashed lines are assumptions until confirmed.' },
  wall: { title: 'Show the client', lede: 'One wall at true scale, against the ceiling and a 5′ 6″ person.' },
  tape: { title: 'Show the client', lede: 'A sheet the client can print to tape each piece onto their own floor.' },
};

function parseView(value: string | null): PlannerView {
  return value === 'wall' || value === 'tape' ? value : 'plan';
}

const OPPOSITE: Record<Wall, Wall> = { north: 'south', south: 'north', east: 'west', west: 'east' };

function Legend() {
  const item = 'inline-flex items-center gap-1.5';
  return (
    <ul aria-label="Legend" className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-muted-foreground">
      <li className={item}><span className="h-3 w-5 rounded-sm border border-[#3a2f28] bg-[#d8c6b2]" /> Verified or designer size</li>
      <li className={item}><span className="h-3 w-5 rounded-sm border border-dashed border-[#3a2f28] bg-[repeating-linear-gradient(45deg,#d8c6b2_0_2px,#b9a68f_2px_3px)]" /> Estimated size</li>
      <li className={item}><span className="h-0 w-5 border-t border-dashed border-[#3a2f28]" /> Assumed position</li>
      <li className={item}><span className="h-3 w-5 rounded-sm border-2 border-destructive bg-white" /> Conflict</li>
      <li className={item}><span className="h-3 w-5 rounded-sm border-2 border-warning bg-white" /> Tight</li>
      <li className={item}><span className="h-0 w-5 border-t-2 border-[#3a2f28]/55" /> Front edge</li>
    </ul>
  );
}

export function RoomPlanner() {
  const room = useRoom();
  const router = useRouter();
  const view = parseView(useSearchParams().get('view'));
  const setView = useCallback((next: PlannerView) => router.replace(`/room?view=${next}`, { scroll: false }), [router]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [overrides, setOverrides] = useState<Record<string, Placement>>({});
  const [chosenWall, setChosenWall] = useState<Wall | null>(null);
  const snapshot = room.snapshot;

  const pieces = useMemo(() => (snapshot ? planPieces(snapshot, overrides) : []), [snapshot, overrides]);
  const warnings = useMemo(
    () => (snapshot ? evaluateFit({ room: snapshot.room, features: snapshot.features, pieces }) : []),
    [snapshot, pieces],
  );
  const products = useMemo(() => new Map<string, CatalogProduct>((snapshot?.products ?? []).map((product) => [product.id, product])), [snapshot]);

  const preview = useCallback((id: string, placement: Placement) => setOverrides((current) => ({ ...current, [id]: placement })), []);

  const commit = useCallback(
    (id: string, placement: Placement) => {
      setOverrides((current) => ({ ...current, [id]: placement }));
      void room.placeItem(id, placement.xIn, placement.yIn, placement.rotationDeg).finally(() =>
        setOverrides((current) => {
          if (current[id] !== placement) return current;
          const { [id]: _settled, ...rest } = current;
          return rest;
        }),
      );
    },
    [room],
  );

  if (!snapshot) {
    return (
      <main className="mx-auto w-full max-w-[1600px] flex-1 px-4 py-8 sm:px-6 lg:px-8">
        {room.loading ? <p role="status" className="text-sm text-muted-foreground">Loading room…</p> : <p role="alert" className="text-sm text-destructive-strong">{room.error}</p>}
      </main>
    );
  }

  const { room: details, features } = snapshot;
  const selected = pieces.find((piece) => piece.id === selectedId) ?? null;
  const elevationWall: Wall =
    chosenWall ?? (selected ? OPPOSITE[frontSide(selected.rotation)] : 'north');

  const place = (item: RoomItem, product: CatalogProduct) => {
    const width = item.dimensions.width.value as number;
    const depth = item.dimensions.depth.value as number;
    commit(item.id, snapPlacement(details, defaultPlacement(details, pieceKind(product), width, depth), width, depth));
    setSelectedId(item.id);
  };

  const rotate = (piece: PlanPiece) => {
    const center = { xIn: (piece.rect.x0 + piece.rect.x1) / 2, yIn: (piece.rect.y0 + piece.rect.y1) / 2 };
    commit(piece.id, snapPlacement(details, { ...center, rotationDeg: rotateClockwise(piece.rotation) }, piece.widthIn, piece.depthIn));
  };

  const unplace = (id: string) => {
    void room.unplaceItem(id);
    setSelectedId(null);
  };

  const saveDimensions = (item: RoomItem, values: DimensionValues, note: string) =>
    room.setDimensions(item.productId, item.variantId, values, note);

  const nearestWall = selected
    ? (Object.entries(wallDistances(details, selected.rect)) as Array<[Wall, number]>).sort((a, b) => a[1] - b[1])[0][0]
    : null;

  return (
    <main className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 print:max-w-none print:p-0">
      <WorkflowBar
        room={details}
        active={view === 'plan' ? 'fit' : 'present'}
        shortlisted={snapshot.items.length}
        placed={pieces.length}
        problems={warnings.filter((warning) => warning.severity !== 'tip').length}
      />
      <header className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end print:hidden">
        <div className="flex flex-col gap-1.5">
          <h1 className="font-serif text-4xl leading-none tracking-[-0.045em] text-[#1c1612]">{VIEW_TITLE[view].title}</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[#70665d]">{VIEW_TITLE[view].lede}</p>
        </div>
        <SegmentedControl label="Planner view" value={view} options={VIEWS} onChange={setView} />
      </header>

      {room.error ? <p role="alert" className="text-sm text-destructive-strong print:hidden">{room.error}</p> : null}

      <div className={`grid gap-6 print:block ${view === 'plan' ? 'lg:grid-cols-[minmax(0,1fr)_360px]' : ''}`}>
        <section aria-label={VIEWS.find((option) => option.value === view)?.label} className="flex min-w-0 flex-col gap-3">
          {view === 'plan' ? (
            <>
              <div className="rounded-xl border border-border bg-white p-3 shadow-surface sm:p-5">
                <PlanCanvas
                  room={details}
                  features={features}
                  pieces={pieces}
                  warnings={warnings}
                  selectedId={selectedId}
                  onSelect={setSelectedId}
                  onPreview={preview}
                  onCommit={commit}
                  onUnplace={unplace}
                />
              </div>
              <Legend />
            </>
          ) : view === 'wall' ? (
            <>
              <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3">
                <SegmentedControl label="Wall" value={elevationWall} options={WALL_OPTIONS} onChange={setChosenWall} />
                {selected && nearestWall ? (
                  <p className="text-xs text-muted-foreground">{selected.name} is nearest the {nearestWall} wall.</p>
                ) : null}
              </div>
              <div className="mx-auto w-full max-w-5xl rounded-xl border border-border bg-white p-3 shadow-surface sm:p-6">
                <ElevationView room={details} features={features} pieces={pieces} wall={elevationWall} selectedId={selectedId} />
              </div>
              <p className="mx-auto w-full max-w-5xl text-xs leading-relaxed text-muted-foreground">
                Seen from inside the room, at true scale. Pieces farther from this wall are lighter; dashed outlines are unknown heights or assumed openings.
              </p>
            </>
          ) : (
            <div className="mx-auto w-full max-w-4xl"><TapeOutSheet room={details} features={features} pieces={pieces} warnings={warnings} /></div>
          )}
        </section>

        {view === 'plan' ? (
        <aside aria-label="Room details" className="flex flex-col gap-7 print:hidden">
          <FitWarnings warnings={warnings} placedCount={pieces.length} onFocusPiece={(id) => { setSelectedId(id); setView('plan'); }} />
          <PiecesPanel
            room={details}
            items={snapshot.items}
            products={products}
            pieces={pieces}
            selectedId={selectedId}
            disabled={false}
            onSelect={setSelectedId}
            onPlace={place}
            onRotate={rotate}
            onUnplace={unplace}
            onSaveDimensions={saveDimensions}
          />
          <RoomFactsPanel room={details} features={features} disabled={false} onUpdateRoom={room.updateRoom} onUpdateFeature={room.updateFeature} />
        </aside>
        ) : null}
      </div>
    </main>
  );
}
