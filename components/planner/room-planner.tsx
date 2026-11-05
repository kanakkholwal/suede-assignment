'use client';

import { Columns3, MapIcon, Printer, Ruler } from '@/components/icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';

import { ElevationView } from '@/components/planner/elevation-view';
import { fitSummary, FitWarnings } from '@/components/planner/fit-warnings';
import { PiecesPanel } from '@/components/planner/pieces-panel';
import { PlanCanvas } from '@/components/planner/plan-canvas';
import { PlanLegend } from '@/components/planner/plan-legend';
import { RoomFactsPanel } from '@/components/planner/room-facts-panel';
import { SelectionBar } from '@/components/planner/selection-bar';
import { TapeOutSheet } from '@/components/planner/tape-out-sheet';
import { useRoomStore } from '@/components/room/room-provider';
import { type SegmentOption, SegmentedControl } from '@/components/shared/segmented-control';
import { Island } from '@/components/shell/island';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { CatalogProduct } from '@/data/product-types';
import type { DimensionValues } from '@/lib/dimensions';
import { evaluateFit } from '@/lib/fit-rules';
import { frontSide } from '@/lib/geometry';
import { pieceKind } from '@/lib/piece-kind';
import { defaultPlacement, type Placement, type PlanPiece, planPieces, rotateClockwise, snapPlacement } from '@/lib/plan-model';
import type { RoomItem, Wall } from '@/lib/room-state';
import { WALLS } from '@/lib/room-state';
import { formatFeetInches } from '@/lib/units';

type PlannerView = 'plan' | 'wall' | 'tape';
type InspectorTab = 'fit' | 'pieces' | 'room';

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

const VIEW_COPY: Record<PlannerView, { title: string; lede: string }> = {
  plan: { title: 'Fit the room', lede: 'Dashed lines are assumptions until confirmed.' },
  wall: { title: 'Show the client', lede: 'True scale, against the ceiling and a 5′ 6″ person.' },
  tape: { title: 'Show the client', lede: 'Print it and tape each outline on the floor.' },
};

const OPPOSITE: Record<Wall, Wall> = { north: 'south', south: 'north', east: 'west', west: 'east' };

function parseView(value: string | null): PlannerView {
  return value === 'wall' || value === 'tape' ? value : 'plan';
}

function Count({ value, tone = 'muted' }: { value: number; tone?: 'muted' | 'alert' }) {
  if (!value) return null;
  return (
    <span
      key={value}
      className={`pop ml-1 grid h-4.5 min-w-4.5 place-items-center rounded-full px-1 text-xs tabular-nums ${tone === 'alert' ? 'bg-destructive text-destructive-foreground' : 'bg-foreground/[0.07] text-muted-foreground'}`}
    >
      {value}
    </span>
  );
}

export function RoomPlanner() {
  const room = useRoomStore();
  const router = useRouter();
  const view = parseView(useSearchParams().get('view'));
  const setView = useCallback((next: PlannerView) => router.replace(`/room?view=${next}`, { scroll: false }), [router]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [overrides, setOverrides] = useState<Record<string, Placement>>({});
  const [chosenWall, setChosenWall] = useState<Wall | null>(null);
  const [tab, setTab] = useState<InspectorTab | null>(null);
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
      <main className="flex flex-1 items-center justify-center">
        {room.loading ? <p role="status" className="text-sm text-muted-foreground">Loading room…</p> : <p role="alert" className="text-sm text-destructive-strong">{room.error}</p>}
      </main>
    );
  }

  const { room: details, features } = snapshot;
  const selected = pieces.find((piece) => piece.id === selectedId) ?? null;
  const elevationWall: Wall = chosenWall ?? (selected ? OPPOSITE[frontSide(selected.rotation)] : 'north');
  const problems = warnings.filter((warning) => warning.severity !== 'tip').length;
  const assumed = features.filter((feature) => feature.status !== 'confirmed').length;
  const activeTab: InspectorTab = tab ?? (pieces.length ? 'fit' : 'pieces');

  const place = (item: RoomItem, product: CatalogProduct) => {
    const width = item.dimensions.width.value as number;
    const depth = item.dimensions.depth.value as number;
    commit(item.id, snapPlacement(details, defaultPlacement(details, pieceKind(product), width, depth), width, depth));
    setSelectedId(item.id);
    setTab('pieces');
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

  const toolbar = (
    <header className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-2 px-3 py-2 sm:px-4 print:hidden">
      <div className="flex min-w-0 flex-1 items-baseline gap-2">
        <h1 className="truncate text-sm font-semibold text-foreground">{VIEW_COPY[view].title}</h1>
        <p className="hidden truncate text-xs text-muted-foreground sm:block">
          <span className="tabular-nums">{formatFeetInches(details.lengthIn)} × {formatFeetInches(details.widthIn)}</span> · {VIEW_COPY[view].lede}
        </p>
      </div>
      {view === 'wall' ? <SegmentedControl label="Wall" value={elevationWall} options={WALL_OPTIONS} onChange={setChosenWall} /> : null}
      {view === 'tape' ? (
        <Button size="sm" variant="outline" onClick={() => window.print()} disabled={pieces.length === 0}>
          <Printer aria-hidden="true" /> Print
        </Button>
      ) : null}
      <SegmentedControl label="Planner view" value={view} options={VIEWS} onChange={setView} compact />
    </header>
  );

  return (
    <main className={`grid flex-1 gap-1.5 lg:min-h-0 ${view === 'plan' ? 'lg:grid-cols-[minmax(0,1fr)_23rem]' : ''} print:block`}>
      <Island aria-label={VIEWS.find((option) => option.value === view)?.label} className="print:bg-transparent">
        {toolbar}
        {room.error ? <p role="alert" className="px-4 pt-3 text-sm text-destructive-strong print:hidden">{room.error}</p> : null}

        {view === 'plan' ? (
          <div key="plan" className="flex min-h-0 flex-1 flex-col">
            <div className="flex min-h-0 flex-1 items-center justify-center p-3 sm:p-6">
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
                fill
              />
            </div>
            <div className="flex shrink-0 flex-col items-stretch gap-2 px-3 pb-3 sm:px-4 xl:flex-row xl:items-end xl:justify-between">
              <PlanLegend />
              {selected ? (
                <div className="w-full xl:max-w-2xl">
                  <SelectionBar
                    key={selected.id}
                    room={details}
                    piece={selected}
                    warnings={warnings}
                    onRotate={() => rotate(selected)}
                    onUnplace={() => unplace(selected.id)}
                    onClose={() => setSelectedId(null)}
                  />
                </div>
              ) : null}
            </div>
          </div>
        ) : view === 'wall' ? (
          <div key="wall" className="flex min-h-0 flex-1 flex-col gap-3 p-3 sm:p-6">
            <div className="flex min-h-0 flex-1 items-center justify-center">
              <ElevationView room={details} features={features} pieces={pieces} wall={elevationWall} selectedId={selectedId} fill />
            </div>
            <p className="mx-auto max-w-2xl text-center text-xs text-muted-foreground">
              Seen from inside the room. Pieces farther from this wall are lighter; dashed outlines are unknown heights or assumed openings.
            </p>
          </div>
        ) : (
          <div key="tape" className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-6 print:overflow-visible print:p-0">
            <TapeOutSheet room={details} features={features} pieces={pieces} warnings={warnings} />
          </div>
        )}
      </Island>

      {view === 'plan' ? (
        <Island aria-label="Room details" className="print:hidden">
          <Tabs value={activeTab} onValueChange={(next) => setTab(next as InspectorTab)} variant="underline" className="min-h-0 flex-1">
            <div className="shrink-0 px-3 pt-2">
              <TabsList>
                <TabsTrigger value="fit">Fit check<Count value={problems} tone="alert" /></TabsTrigger>
                <TabsTrigger value="pieces">Pieces<Count value={snapshot.items.length} /></TabsTrigger>
                <TabsTrigger value="room">Room<Count value={assumed} /></TabsTrigger>
              </TabsList>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto p-3">
              <TabsContent value="fit" className="flex flex-col gap-2">
                {pieces.length ? <p className="px-1 text-xs text-muted-foreground">{fitSummary(warnings) || 'Everything placed clears the rules.'}</p> : null}
                <FitWarnings warnings={warnings} placedCount={pieces.length} selectedId={selectedId} onFocusPiece={setSelectedId} />
              </TabsContent>
              <TabsContent value="pieces">
                <PiecesPanel
                  items={snapshot.items}
                  products={products}
                  pieces={pieces}
                  selectedId={selectedId}
                  disabled={false}
                  onSelect={setSelectedId}
                  onPlace={place}
                  onSaveDimensions={saveDimensions}
                />
              </TabsContent>
              <TabsContent value="room">
                <RoomFactsPanel room={details} features={features} disabled={false} onUpdateRoom={room.updateRoom} onUpdateFeature={room.updateFeature} />
              </TabsContent>
            </div>
          </Tabs>
        </Island>
      ) : null}
    </main>
  );
}
