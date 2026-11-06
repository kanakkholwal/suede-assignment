import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it } from 'vitest';

import PresentPage from '@/app/present/page';
import RoomPage from '@/app/room/page';
import { resolveDimensions } from '@/lib/dimensions';
import type { RoomSnapshot } from '@/lib/room-state';
import { armchair, mockApi, roomFixture } from './api-fixtures';
import { AppProviders } from './providers';

function roomWithChairInDoorway(): RoomSnapshot {
  const base = roomFixture();
  const dimensions = resolveDimensions(
    [{ productId: armchair.id, variantId: null, width: 37, depth: 30.25, height: 30.5, source: 'verified', sourceUrl: null, note: '', capturedAt: '2026-11-04' }],
    null,
  );
  return {
    ...base,
    products: [armchair],
    items: [{ id: 'chair', productId: armchair.id, variantId: null, xIn: 158, yIn: 126, rotationDeg: 0, dimensions }],
  };
}

it('shows a door conflict as possible while the door is assumed, with questions for the client', async () => {
  mockApi({ room: roomWithChairInDoorway() });
  render(<RoomPage />, { wrapper: AppProviders });

  const fitCheck = await screen.findByRole('region', { name: 'Fit check' });
  expect(within(fitCheck).getByText('Possible conflict')).toBeVisible();
  expect(within(fitCheck).getByText('Antwerp Armchair blocks the door')).toBeVisible();
  expect(within(fitCheck).getByText(/Depends on: Door position and size are assumed/)).toBeVisible();

  await userEvent.click(screen.getByRole('tab', { name: /Room/ }));
  const facts = screen.getByRole('region', { name: 'What we know about the room' });
  expect(within(facts).getByText(/We drew the door on the south wall/)).toBeVisible();
  expect(screen.getByRole('button', { name: /Antwerp Armchair, 37 × 30¼ × 30½ in, facing south, has a conflict/ })).toBeVisible();
});

it('keeps the fit check beside the plan when switching to the elevation', async () => {
  mockApi({ room: roomWithChairInDoorway() });
  render(<RoomPage />, { wrapper: AppProviders });
  await screen.findByRole('region', { name: 'Fit check' });

  await userEvent.click(screen.getByRole('button', { name: 'Elevation' }));
  expect(screen.getByRole('img', { name: /seen from inside: .* 8′ 6″ ceiling, 1 pieces shown against a 5 foot 6 person/ })).toBeVisible();
  expect(screen.getByRole('region', { name: 'Fit check' })).toBeVisible();
  expect(screen.getByRole('link', { name: /Show the client/ })).toHaveAttribute('href', '/present');
});

it('gives the client numbered outlines, the questions to answer first, and flags what blocks sending', async () => {
  mockApi({ room: roomWithChairInDoorway() });
  render(<PresentPage />, { wrapper: AppProviders });

  expect(await screen.findByRole('heading', { name: 'Tape it on your floor' })).toBeVisible();
  const steps = screen.getByRole('region', { name: 'Outlines to tape' });
  expect(within(steps).getAllByText(/^From the (north|south|east|west) wall$/)).toHaveLength(2);
  expect(screen.getByRole('link', { name: '1 fit problem' })).toHaveAttribute('href', '/room?view=plan&tab=fit');
  const check = screen.getByRole('region', { name: 'Before you tape, please check' });
  expect(within(check).getByText(/We drew the door on the south wall/)).toBeVisible();
  expect(screen.getByRole('button', { name: 'Copy text' })).toBeVisible();
});

it('sends an empty client sheet back to the plan', async () => {
  mockApi({ room: roomFixture() });
  render(<PresentPage />, { wrapper: AppProviders });

  expect(await screen.findByText('Nothing to show yet')).toBeVisible();
  expect(screen.getByRole('link', { name: /Open the plan/ })).toHaveAttribute('href', '/room?view=plan&tab=pieces');
  expect(screen.queryByRole('button', { name: 'Print' })).toBeNull();
});

it('opens the view and wall named in the URL', async () => {
  mockApi({ room: roomWithChairInDoorway() });
  render(<RoomPage />, { wrapper: ({ children }) => <AppProviders searchParams="?view=wall&wall=south">{children}</AppProviders> });

  expect(await screen.findByRole('img', { name: /^south wall seen from inside/ })).toBeVisible();
  expect(screen.getByRole('button', { name: 'south wall' })).toHaveAttribute('aria-pressed', 'true');
});

it('places a piece with no size at a typical size, drawn as an estimate the fit check names', async () => {
  const base = roomFixture();
  mockApi({ room: { ...base, products: [armchair], items: [{ id: 'chair', productId: armchair.id, variantId: null, xIn: null, yIn: null, rotationDeg: 0, dimensions: resolveDimensions([], null) }] } });
  render(<RoomPage />, { wrapper: ({ children }) => <AppProviders searchParams="?tab=pieces">{children}</AppProviders> });

  expect(await screen.findByText('Size unknown')).toBeVisible();
  expect(screen.getByText(/Draws a typical armchair, 32″ × 34″, dashed until you enter its real size\./)).toBeVisible();
  expect(screen.getByRole('button', { name: /Place at typical size/ })).toBeEnabled();
  expect(screen.getByRole('button', { name: /Enter size/ })).toBeEnabled();
});

it('adds a radiator from the Room tab, starting from a typical size the user corrects', async () => {
  const fetchMock = mockApi({ room: roomFixture() });
  render(<RoomPage />, { wrapper: ({ children }) => <AppProviders searchParams="?tab=room">{children}</AppProviders> });

  await userEvent.click(await screen.findByRole('button', { name: /Add radiator/ }));
  const dialog = screen.getByRole('dialog');
  expect(within(dialog).getByRole('heading', { name: 'Add radiator' })).toBeVisible();
  await userEvent.clear(within(dialog).getByLabelText('Width'));
  await userEvent.type(within(dialog).getByLabelText('Width'), '40');
  await userEvent.click(within(dialog).getByRole('button', { name: 'Save' }));

  const posted = fetchMock.mock.calls.map(([, init]) => init?.body).filter(Boolean).map((body) => JSON.parse(String(body)));
  expect(posted).toContainEqual({
    operation: 'addFeature',
    kind: 'radiator',
    patch: { wall: 'north', offsetIn: 24, widthIn: 40, depthIn: 8, heightIn: 24, sillIn: null, hinge: null, swing: null },
    status: 'stated',
  });
});
