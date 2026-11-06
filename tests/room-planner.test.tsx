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
  expect(within(facts).getByText(/Which corner is the door in/)).toBeVisible();
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

it('gives the client a tape-out sheet and says what is still open on the plan', async () => {
  mockApi({ room: roomWithChairInDoorway() });
  render(<PresentPage />, { wrapper: AppProviders });

  expect(await screen.findByRole('heading', { name: 'Tape it on your floor' })).toBeVisible();
  expect(screen.getByText(/rectangle \(east-west by north-south\)/)).toBeVisible();
  expect(screen.getByRole('link', { name: '1 fit problem' })).toHaveAttribute('href', '/room?view=plan&tab=fit');
  expect(screen.getByRole('link', { name: 'room size client-stated' })).toHaveAttribute('href', '/room?view=plan&tab=room');
  expect(screen.getByRole('link', { name: /positions assumed$/ })).toBeVisible();
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
