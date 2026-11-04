import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it } from 'vitest';

import RoomPage from '@/app/room/page';
import { resolveDimensions } from '@/lib/dimensions';
import type { RoomSnapshot } from '@/lib/room-state';
import { armchair, mockApi, roomFixture } from './api-fixtures';

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
  render(<RoomPage />);

  const fitCheck = await screen.findByRole('region', { name: 'Fit check' });
  expect(within(fitCheck).getByText('Possible conflict')).toBeVisible();
  expect(within(fitCheck).getByText('Antwerp Armchair blocks the door')).toBeVisible();
  expect(within(fitCheck).getByText(/Depends on: Door position and size are assumed/)).toBeVisible();

  const facts = screen.getByRole('region', { name: 'What we know about the room' });
  expect(within(facts).getByText(/Which corner is the door in/)).toBeVisible();
  expect(screen.getByRole('button', { name: /Antwerp Armchair, 37 × 30¼ × 30½ in, facing south, has a conflict/ })).toBeVisible();
});

it('switches to the wall view and the printable tape-out sheet', async () => {
  mockApi({ room: roomWithChairInDoorway() });
  render(<RoomPage />);
  await screen.findByRole('region', { name: 'Fit check' });

  await userEvent.click(screen.getByRole('button', { name: 'Wall view' }));
  expect(screen.getByRole('img', { name: /seen from inside: .* 8′ 6″ ceiling, 1 pieces shown against a 5 foot 6 person/ })).toBeVisible();

  await userEvent.click(screen.getByRole('button', { name: 'Tape-out' }));
  expect(screen.getByRole('heading', { name: 'Tape it on your floor' })).toBeVisible();
  expect(screen.getByText(/rectangle \(east–west by north–south\)/)).toBeVisible();
});
