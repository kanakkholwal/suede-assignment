import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it } from 'vitest';

import CatalogPage from '@/app/catalog/page';
import { armchair, mockApi } from './api-fixtures';
import { AppProviders } from './providers';

async function renderCatalog() {
  render(<CatalogPage />, { wrapper: AppProviders });
  await screen.findByRole('button', { name: 'View Antwerp Armchair' });
}

function catalogCalls(fetchMock: ReturnType<typeof mockApi>): string[] {
  return fetchMock.mock.calls.map(([input]) => String(input)).filter((url) => url.startsWith('/api/catalog'));
}

it('turns a sentence brief into filters, chips and openly unfiltered terms', async () => {
  const fetchMock = mockApi();
  await renderCatalog();

  await userEvent.type(screen.getByLabelText('Describe what the client needs'), 'cozy armchair under $2k, in stock');
  await userEvent.click(screen.getByRole('button', { name: /Find/ }));

  await waitFor(() =>
    expect(catalogCalls(fetchMock)).toContain('/api/catalog?category=30&maxPriceCents=200000&inStockOnly=true'),
  );
  const brief = screen.getByRole('region', { name: 'Client brief' });
  expect(within(brief).getByText('Armchair')).toBeVisible();
  expect(within(brief).getByText('Up to $2,000')).toBeVisible();
  expect(within(brief).getByText('Available to order')).toBeVisible();
  expect(within(brief).getByText('cozy')).toBeVisible();
  expect(within(brief).getByText(/Not used as filters/)).toBeVisible();

  await userEvent.click(within(brief).getByRole('button', { name: 'Remove Up to $2,000' }));
  await waitFor(() => expect(catalogCalls(fetchMock).at(-1)).toBe('/api/catalog?category=30&inStockOnly=true'));
});

it('adds a product to the room shortlist from its card', async () => {
  const fetchMock = mockApi();
  await renderCatalog();

  const toggle = await screen.findByRole('button', { name: `Add ${armchair.name} to room shortlist` });
  await waitFor(() => expect(toggle).toBeEnabled());
  await userEvent.click(toggle);

  await waitFor(() =>
    expect(fetchMock).toHaveBeenCalledWith(
      '/api/room',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({ operation: 'addItem', productId: armchair.id, variantId: null }),
      }),
    ),
  );
});

it('restores the brief, its chips and the filters from the URL', async () => {
  const fetchMock = mockApi();
  render(<CatalogPage />, {
    wrapper: ({ children }) => (
      <AppProviders searchParams="?brief=cozy+armchair&terms=cozy&category=30&max=2000&stock=true">{children}</AppProviders>
    ),
  });

  await waitFor(() => expect(catalogCalls(fetchMock)).toContain('/api/catalog?category=30&maxPriceCents=200000&inStockOnly=true'));
  const brief = screen.getByRole('region', { name: 'Client brief' });
  expect(within(brief).getByLabelText('Describe what the client needs')).toHaveValue('cozy armchair');
  expect(within(brief).getByText('Up to $2,000')).toBeVisible();
  expect(within(brief).getByText('cozy')).toBeVisible();
});
