'use client';

import { ArrowRight, Columns3, MapIcon } from '@/components/icons';
import Link from 'next/link';
import { useCallback, useMemo, useState } from 'react';

import { ElevationView } from '@/components/planner/elevation-view';
import { fitSummary, FitWarnings } from '@/components/planner/fit-warnings';
import { PiecesPanel } from '@/components/planner/pieces-panel';
import { PlanCanvas } from '@/components/planner/plan-canvas';
import { PlanLegend } from '@/components/planner/plan-legend';
import { RoomFactsPanel } from '@/components/planner/room-facts-panel';
import { SelectionBar } from '@/components/planner/selection-bar';
import { useRoomStore } from '@/components/room/room-provider';
import { RoomThumb } from '@/components/room/room-thumb';
import { CountBadge } from '@/components/shared/count-badge';
import { type SegmentOption, SegmentedControl } from '@/components/shared/segmented-control';
import { PlannerSkeleton } from '@/components/shared/skeletons';
import { Island } from '@/components/shell/island';
import { Button, button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { CatalogProduct } from '@/data/product-types';
import { isRoomPresetId, roomPreset } from '@/data/room-presets';
import type { DimensionValues } from '@/lib/dimensions';
import { frontSide, wallLength } from '@/lib/geometry';
import { pieceKind } from '@/lib/piece-kind';
import { defaultPlacement, footprintOf, type Placement, type PlanPiece, rotateClockwise, snapPlacement } from '@/lib/plan-model';
import type { RoomItem, Wall } from '@/lib/room-state';
import { WALLS } from '@/lib/room-state';
import { plural } from '@/lib/format';
import { formatFeetInches } from '@/lib/units';
import { type InspectorTab, type PlannerView, usePlannerUrlState, useRoomHref, useRoomKey } from '@/lib/url-state';
import { countOpenFacts, STATUS_WORD } from '@/lib/room-certainty';
import { countProblems, countTypical, usePlan } from '@/lib/use-plan';

const VIEWS: readonly SegmentOption<PlannerView>[] = [
  { value: 'plan', label: 'Plan', icon: MapIcon },
  { value: 'wall', label: 'Elevation', icon: Columns3 },
];

const WALL_OPTIONS: readonly SegmentOption<Wall>[] = WALLS.map((wall) => ({
  value: wall,
  label: wall[0].toUpperCase() + wall.slice(1),
  ariaLabel: `${wall} wall`,
}));

const OPPOSITE: Record<Wall, Wall> = { north: 'south', south: 'north', east: 'west', west: 'east' };

function Count({ value, tone = 'muted' }: { value: number; tone?: 'muted' | 'alert' }) {
  return value ? <CountBadge tone={tone} className="ml-1">{value}</CountBadge> : null;
}

export function RoomPlanner() {
  const room = useRoomStore();
  const roomHref = useRoomHref();
  const [url, setUrl] = usePlannerUrlState();
  const [roomKey] = useRoomKey();
  const pending = isRoomPresetId(roomKey) ? roomPreset(roomKey).template : null;
  const { view, tab, wall: chosenWall, piece: selectedId } = url;
  const setView = useCallback((next: PlannerView) => void setUrl({ view: next }), [setUrl]);
  const setSelectedId = useCallback((piece: string | null) => void setUrl({ piece }), [setUrl]);
  const setChosenWall = useCallback((wall: Wall) => void setUrl({ wall }), [setUrl]);
  const setTab = useCallback((next: InspectorTab) => void setUrl({ tab: next }), [setUrl]);
  const [overrides, setOverrides] = useState<Record<string, Placement>>({});
  const snapshot = room.snapshot;
  const { pieces, warnings } = usePlan(snapshot, overrides);
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
    if (room.loading) return <PlannerSkeleton ratio={pending ? pending.lengthIn / pending.widthIn : undefined} />;
    return (
      <main className="flex flex-1 items-center justify-center">
        <p role="alert" className="text-sm text-destructive-strong">{room.error}</p>
      </main>
    );
  }

  const { room: details, features } = snapshot;
  const selected = pieces.find((piece) => piece.id === selectedId) ?? null;
  const elevationWall: Wall = chosenWall ?? (selected ? OPPOSITE[frontSide(selected.rotation)] : 'north');
  const problems = countProblems(warnings);
  const unconfirmed = countOpenFacts(details, features);
  const sizeStatus = details.dimensionsStatus === 'confirmed' ? 'measured' : STATUS_WORD[details.dimensionsStatus];
  const activeTab: InspectorTab = tab ?? (pieces.length ? 'fit' : 'pieces');
  const unplaced = snapshot.items.length - pieces.length;
  const typical = countTypical(pieces);
  const ready = pieces.length > 0 && unplaced === 0 && problems === 0 && typical === 0;
  const hint =
    view === 'plan'
      ? `${formatFeetInches(details.lengthIn)} × ${formatFeetInches(details.widthIn)} ${sizeStatus} · dashed means position not measured`
      : `${formatFeetInches(wallLength(details, elevationWall))} wide · ${details.ceilingIn ? formatFeetInches(details.ceilingIn) : 'unknown'} ceiling, ${sizeStatus} · seen from inside`;

  const place = (item: RoomItem, product: CatalogProduct) => {
    const { widthIn, depthIn } = footprintOf(item, product);
    commit(item.id, snapPlacement(details, defaultPlacement(details, pieceKind(product), widthIn, depthIn), widthIn, depthIn));
    void setUrl({ piece: item.id, tab: 'pieces' });
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

  return (
    <main className="grid flex-1 gap-1.5 lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_23rem]">
      <Island aria-label={view === 'plan' ? 'Floor plan' : 'Wall elevation'}>
        <header className="flex min-h-12 shrink-0 items-center gap-3 px-3 py-2 sm:px-4">
          <h1 className="sr-only">Fit the room</h1>
          <SegmentedControl label="Planner view" value={view} options={VIEWS} onChange={setView} />
          <p className="hidden min-w-0 flex-1 truncate text-xs text-muted-foreground tabular-nums sm:block">{hint}</p>
          <Link
            href={roomHref('/present')}
            className={button({ variant: ready ? 'default' : 'default_soft', size: 'sm', className: 'ml-auto shrink-0' })}
          >
            Show the client <ArrowRight aria-hidden="true" />
          </Link>
        </header>
        {room.error ? <p role="alert" className="px-4 pt-1 text-sm text-destructive-strong">{room.error}</p> : null}

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
        ) : (
          <div key="wall" className="flex min-h-0 flex-1 flex-col">
            <div className="flex min-h-0 flex-1 items-center justify-center p-3 sm:p-6">
              <ElevationView room={details} features={features} pieces={pieces} wall={elevationWall} selectedId={selectedId} fill />
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-between gap-x-4 gap-y-2 px-3 pb-3 sm:px-4">
              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-12 shrink-0 place-items-center rounded-md bg-muted/70 p-1" title={`Facing the ${elevationWall} wall`}>
                  <RoomThumb room={{ ...details, features }} highlight={elevationWall} className="max-h-full max-w-full" />
                </span>
                <SegmentedControl label="Wall" value={elevationWall} options={WALL_OPTIONS} onChange={setChosenWall} />
              </div>
              <p className="text-xs text-muted-foreground">Farther pieces are lighter. Dashed means height unknown or position not measured.</p>
            </div>
          </div>
        )}
      </Island>

      <Island aria-label="Room details">
        <Tabs value={activeTab} onValueChange={(next) => setTab(next as InspectorTab)} variant="underline" className="min-h-0 flex-1">
          <div className="shrink-0 px-3 pt-2">
            <TabsList>
              <TabsTrigger value="fit">Fit check<Count value={problems} tone="alert" /></TabsTrigger>
              <TabsTrigger value="pieces">Pieces<Count value={snapshot.items.length} /></TabsTrigger>
              <TabsTrigger value="room">Room<Count value={unconfirmed} /></TabsTrigger>
            </TabsList>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto p-3">
            <TabsContent value="fit" className="flex flex-col gap-2">
              {warnings.length ? <p className="px-1 text-xs text-muted-foreground">{fitSummary(warnings)}</p> : null}
              <FitWarnings warnings={warnings} placedCount={pieces.length} selectedId={selectedId} onFocusPiece={setSelectedId} />
              {unplaced ? (
                <div className="flex items-center justify-between gap-3 rounded-lg bg-muted/60 py-2 pr-2 pl-3">
                  <p className="text-xs text-foreground">{plural(unplaced, 'piece')} not on the plan yet.</p>
                  <Button size="xs" variant="outline" onClick={() => setTab('pieces')}>Go to pieces</Button>
                </div>
              ) : typical ? (
                <div className="flex items-center justify-between gap-3 rounded-lg bg-muted/60 py-2 pr-2 pl-3">
                  <p className="text-xs text-foreground">{plural(typical, 'piece')} drawn at a typical size. Enter real sizes before sending.</p>
                  <Button size="xs" variant="outline" onClick={() => setTab('pieces')}>Go to pieces</Button>
                </div>
              ) : ready ? (
                <div className="flex items-center justify-between gap-3 rounded-lg bg-muted/60 py-2 pr-2 pl-3">
                  <p className="text-xs text-foreground">Everything is placed. Next, the client sheet.</p>
                  <Link href={roomHref('/present')} className={button({ size: 'xs' })}>
                    Show the client <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              ) : null}
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
                onSelectVariant={(item, variantId) => void room.selectVariant(item.id, variantId)}
                onSaveDimensions={saveDimensions}
              />
            </TabsContent>
            <TabsContent value="room">
              <RoomFactsPanel room={details} features={features} disabled={false} onUpdateRoom={room.updateRoom} onUpdateFeature={room.updateFeature} onAddFeature={room.addFeature} onRemoveFeature={room.removeFeature} />
            </TabsContent>
          </div>
        </Tabs>
      </Island>
    </main>
  );
}
