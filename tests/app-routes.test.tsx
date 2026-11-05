import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CatalogPage from '@/app/catalog/page';
import { mockApi } from './api-fixtures';
import { RoomProvider } from '@/components/room/room-provider';

describe('public application routes', () => {
  it('renders the Catalog shell without an account prompt', async () => {
    mockApi();
    render(<CatalogPage />, { wrapper: RoomProvider });

    expect(screen.getByRole('heading', { name: 'Catalog' })).toBeVisible();
    expect(screen.queryByText(/sign in|log in/i)).not.toBeInTheDocument();
    expect(await screen.findByRole('button', { name: 'View Linen Box Quilt (Dusk)' })).toBeVisible();
  });
});
