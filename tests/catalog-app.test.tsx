import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, expect, it } from 'vitest';

import CatalogPage from '@/app/catalog/page';
import { armchair, boneQuilt, catalogFixture, deferred, fullCatalogProducts, libraryFixture, mockApi, quilt } from './api-fixtures';

const LINEN_BOX_QUILT = 'Linen Box Quilt (Dusk)';
const ANTWERP_ARMCHAIR = 'Antwerp Armchair';

beforeEach(() => { mockApi(); });

async function renderCatalog() {
  render(<CatalogPage />);
  await screen.findByRole('button', { name: `View ${LINEN_BOX_QUILT}` });
}

it('requests compact product results and requests variant references only in variant view', async () => {
  const fetchMock = mockApi();
  await renderCatalog();
  expect(fetchMock).toHaveBeenCalledWith('/api/catalog', expect.anything());
  await userEvent.click(screen.getByRole('button', { name: 'Variants view' }));
  await waitFor(() => expect(fetchMock).toHaveBeenCalledWith('/api/catalog?includeVariants=true', expect.anything()));
  expect(await screen.findByRole('button', { name: 'View Antwerp Armchair, Bone' })).toBeVisible();
  await userEvent.click(screen.getByRole('button', { name: 'Products view' }));
  await waitFor(() => expect(fetchMock).toHaveBeenLastCalledWith('/api/catalog', expect.anything()));
});

it('loads variant references before rendering and skips references with inconsistent product or SKU IDs', async () => {
  const response = deferred<Response>();
  mockApi({ catalog: (url) => {
    if (url.searchParams.get('includeVariants') === 'true') return response.promise;
    const productsOnly = catalogFixture([quilt]);
    delete productsOnly.variants;
    return Response.json(productsOnly);
  } });
  await renderCatalog();
  await userEvent.click(screen.getByRole('button', { name: 'Variants view' }));
  expect(screen.getByRole('status', { name: 'Loading catalog' })).toBeVisible();
  const result = catalogFixture([quilt]);
  result.variants?.push(
    { key: 'missing-product', productId: 'missing-product', variantId: quilt.variants[0].id },
    { key: 'wrong-product-sku', productId: quilt.id, variantId: armchair.variants[0].id },
  );
  await act(async () => response.resolve(Response.json(result)));
  expect(await screen.findByRole('button', { name: `View ${LINEN_BOX_QUILT}, ${quilt.variants[0].label}` })).toBeVisible();
  expect(screen.getByText(`Showing ${quilt.variants.length} of ${quilt.variants.length} variants`)).toBeVisible();
  expect(screen.queryByRole('status', { name: 'Loading catalog' })).not.toBeInTheDocument();
});

it('loads Catalog through the API and sends literal search text immediately', async () => {
  const fetchMock = mockApi();
  await renderCatalog();
  fireEvent.change(screen.getByRole('searchbox', { name: 'Search' }), { target: { value: 'Linen Box Quilt' } });
  await waitFor(() => expect(fetchMock).toHaveBeenCalledWith('/api/catalog?query=Linen+Box+Quilt', expect.objectContaining({ signal: expect.any(AbortSignal) })));
  expect(await screen.findByText(LINEN_BOX_QUILT)).toBeVisible();
});

it('shows loading and an accessible database recovery error without static fallback', async () => {
  const response = deferred<Response>();
  mockApi({ catalog: () => response.promise });
  render(<CatalogPage />);
  expect(screen.getByRole('status', { name: 'Loading catalog' })).toBeVisible();
  expect(screen.queryByText(LINEN_BOX_QUILT)).not.toBeInTheDocument();
  await act(async () => response.resolve(Response.json({ error: 'The local catalog database is unavailable. Run pnpm db:reset to restore it.' }, { status: 503 })));
  expect(await screen.findByRole('alert')).toHaveTextContent('pnpm db:reset');
  expect(screen.queryByText(LINEN_BOX_QUILT)).not.toBeInTheDocument();
});

it('does not suggest resetting the database for a network failure', async () => {
  mockApi({ catalog: () => Promise.reject(new Error('offline')) });
  render(<CatalogPage />);
  expect(await screen.findByRole('alert')).toHaveTextContent(/try again/i);
  expect(screen.getByRole('alert')).not.toHaveTextContent('pnpm db:reset');
});

it('cancels stale Catalog requests so a late response cannot replace current results', async () => {
  const oldResponse = deferred<Response>();
  let oldSignal: AbortSignal | null | undefined;
  mockApi({ catalog: (url, init) => {
    if (!url.searchParams.has('query')) { oldSignal = init?.signal; return oldResponse.promise; }
    return Response.json(catalogFixture([armchair]));
  } });
  render(<CatalogPage />);
  fireEvent.change(screen.getByRole('searchbox', { name: 'Search' }), { target: { value: ANTWERP_ARMCHAIR } });
  expect(await screen.findByText(ANTWERP_ARMCHAIR)).toBeVisible();
  expect(oldSignal?.aborted).toBe(true);
  await act(async () => oldResponse.resolve(Response.json(catalogFixture([quilt]))));
  expect(screen.queryByText(LINEN_BOX_QUILT)).not.toBeInTheDocument();
});

it('posts a save mutation, suppresses duplicates, and uses the returned snapshot', async () => {
  const response = deferred<Response>();
  const fetchMock = mockApi({ mutation: () => response.promise });
  await renderCatalog();
  await userEvent.click(screen.getByLabelText(`Product actions for ${LINEN_BOX_QUILT}`));
  const save = screen.getByRole('menuitem', { name: 'Save to library' });
  await userEvent.dblClick(save);
  expect(save).toBeDisabled();
  expect(screen.getByRole('menuitem', { name: 'New collection…' })).toBeEnabled();
  const posts = fetchMock.mock.calls.filter(([, init]) => init?.method === 'POST');
  expect(posts).toHaveLength(1);
  expect(JSON.parse(posts[0][1]!.body as string)).toEqual({ operation: 'toggleSaved', productId: '7a7e801d-cb56-42ed-aa20-5b0dfa146d32' });
  expect(posts[0][1]?.headers).toEqual({ 'Content-Type': 'application/json' });
  await act(async () => response.resolve(Response.json(libraryFixture([quilt]))));
  expect(await screen.findByRole('menuitem', { name: 'Remove from library' })).toBeEnabled();
});

it('keeps Save non-actionable until a delayed Library snapshot reveals an existing save', async () => {
  const initial = deferred<Response>();
  const fetchMock = mockApi({ library: initial.promise });
  await renderCatalog();
  await userEvent.click(screen.getByLabelText(`Product actions for ${LINEN_BOX_QUILT}`));
  const save = screen.getByRole('menuitem', { name: 'Save to library' });
  expect(save).toBeDisabled();
  await userEvent.click(save);
  await act(async () => initial.resolve(Response.json(libraryFixture([quilt], [{ id: 'family-room', name: 'Family room', productIds: [quilt.id] }]))));
  expect(await screen.findByRole('menuitem', { name: 'Remove from library' })).toBeEnabled();
  expect(screen.getByRole('menuitem', { name: 'Family room' })).toBeVisible();
  expect(fetchMock.mock.calls.filter(([, init]) => init?.method === 'POST')).toHaveLength(0);
});

it('keeps Save non-actionable when Library initialization fails', async () => {
  const initial = deferred<Response>();
  const fetchMock = mockApi({ library: initial.promise });
  await renderCatalog();
  await userEvent.click(screen.getByLabelText(`Product actions for ${LINEN_BOX_QUILT}`));
  await act(async () => initial.resolve(Response.json({ error: 'Unable to load library. Please try again.' }, { status: 503 })));
  expect(await screen.findByRole('alert')).toHaveTextContent('Unable to load library');
  const save = screen.getByRole('menuitem', { name: 'Save to library' });
  expect(save).toBeDisabled();
  await userEvent.click(save);
  expect(fetchMock.mock.calls.filter(([, init]) => init?.method === 'POST')).toHaveLength(0);
});

it('blocks a conflicting Save while collection creation for that product is pending', async () => {
  const response = deferred<Response>();
  const fetchMock = mockApi({ mutation: () => response.promise });
  await renderCatalog();
  await userEvent.click(screen.getByLabelText(`Product actions for ${LINEN_BOX_QUILT}`));
  await userEvent.click(screen.getByRole('menuitem', { name: 'New collection…' }));
  await userEvent.type(screen.getByRole('textbox', { name: 'Collection name' }), 'Family room');
  await userEvent.click(screen.getByRole('button', { name: 'Create' }));
  const save = screen.getByRole('menuitem', { name: 'Save to library' });
  expect(save).toBeDisabled();
  await userEvent.click(save);
  await userEvent.click(screen.getByLabelText('Product actions for Antwerp Armchair'));
  expect(screen.getByRole('menuitem', { name: 'Save to library' })).toBeEnabled();
  await userEvent.click(screen.getByLabelText(`Product actions for ${LINEN_BOX_QUILT}`));
  expect(screen.getByRole('menuitem', { name: 'Save to library' })).toBeDisabled();
  await act(async () => response.resolve(Response.json(libraryFixture([quilt], [{ id: 'family-room', name: 'Family room', productIds: [quilt.id] }]))));
  expect(await screen.findByRole('menuitem', { name: 'Remove from library' })).toBeEnabled();
  expect(screen.getByRole('menuitem', { name: 'Family room' })).toBeVisible();
  expect(fetchMock.mock.calls.filter(([, init]) => init?.method === 'POST')).toHaveLength(1);
});

it.each(['new input', 'reopened editor'])('keeps %s after an earlier Catalog collection creation completes', async (scenario) => {
  const response = deferred<Response>();
  mockApi({ mutation: () => response.promise });
  await renderCatalog();
  await userEvent.click(screen.getByLabelText(`Product actions for ${LINEN_BOX_QUILT}`));
  await userEvent.click(screen.getByRole('menuitem', { name: 'New collection…' }));
  await userEvent.type(screen.getByRole('textbox', { name: 'Collection name' }), 'Family room');
  await userEvent.click(screen.getByRole('button', { name: 'Create' }));
  if (scenario === 'new input') {
    await userEvent.clear(screen.getByRole('textbox', { name: 'Collection name' }));
    await userEvent.type(screen.getByRole('textbox', { name: 'Collection name' }), 'Newer draft');
  } else {
    await userEvent.click(screen.getByRole('button', { name: 'Cancel collection' }));
    await userEvent.click(screen.getByRole('menuitem', { name: 'New collection…' }));
  }
  await act(async () => response.resolve(Response.json(libraryFixture([quilt], [{ id: 'family-room', name: 'Family room', productIds: [quilt.id] }]))));
  expect(screen.getByRole('textbox', { name: 'Collection name' })).toHaveValue(scenario === 'new input' ? 'Newer draft' : 'Family room');
});

it('keeps literal search intentionally narrow while narrowing the visible catalog', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  await user.type(screen.getByRole('searchbox', { name: 'Search' }), 'Linen Box Quilt');

  expect(screen.getByText(LINEN_BOX_QUILT)).toBeVisible();
  expect(screen.queryByText('Down Alternative Pillow')).not.toBeInTheDocument();
});

it('renders a local copy of each staging product image without a reference-image disclaimer', async () => {
  await renderCatalog();

  expect(screen.queryByText('Reference image')).not.toBeInTheDocument();
  expect(screen.getByAltText(`${LINEN_BOX_QUILT} by Parachute Home`)).toBeVisible();
});

it('keeps results reachable on small screens and opens filters on demand', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  expect(screen.getByRole('button', { name: 'Filters' })).toBeVisible();
  expect(screen.queryByRole('dialog', { name: 'Catalog filters' })).not.toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: 'Filters' }));

  expect(screen.getByRole('dialog', { name: 'Catalog filters' })).toBeVisible();
});

it('applies a mobile parent category filter and returns the visitor to its results', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  await user.click(screen.getByRole('button', { name: 'Filters' }));
  const dialog = screen.getByRole('dialog', { name: 'Catalog filters' });
  await user.click(within(dialog).getByRole('button', { name: 'Filter by Decor' }));
  await user.click(within(dialog).getByRole('button', { name: /Show \d+ results?/ }));

  expect(screen.queryByRole('dialog', { name: 'Catalog filters' })).not.toBeInTheDocument();
  expect(screen.queryByText(LINEN_BOX_QUILT)).not.toBeInTheDocument();
});

it('switches from product cards to the concrete variants view', async () => {
  const user = userEvent.setup();
  mockApi({ catalog: () => Response.json(catalogFixture(fullCatalogProducts)) });
  await renderCatalog();

  await user.click(screen.getByRole('button', { name: 'Variants view' }));

  expect(screen.getByRole('button', { name: 'Products view' })).toHaveAttribute('aria-pressed', 'false');
  expect(screen.getByRole('button', { name: /Load .* more/ })).toBeVisible();
});

it('sends parent category, multiple brands, price windows, and availability to Catalog', async () => {
  const fetchMock = mockApi();
  await renderCatalog();
  await userEvent.click(screen.getByRole('button', { name: 'Filter by Decor' }));
  await userEvent.click(screen.getByRole('checkbox', { name: 'Parachute Home' }));
  await userEvent.click(screen.getByRole('checkbox', { name: 'House of Leon' }));
  fireEvent.change(screen.getByLabelText('Minimum price'), { target: { value: '200' } });
  fireEvent.change(screen.getByLabelText('Maximum price'), { target: { value: '350' } });
  await userEvent.click(screen.getByRole('checkbox', { name: 'Available to order only' }));
  await waitFor(() => expect(fetchMock).toHaveBeenCalledWith('/api/catalog?category=7&brand=Parachute+Home&brand=House+of+Leon&minPriceCents=20000&maxPriceCents=35000&inStockOnly=true', expect.anything()));
  await userEvent.click(screen.getByRole('button', { name: 'Clear all' }));
  expect(await screen.findByText(LINEN_BOX_QUILT)).toBeVisible();
  expect(fetchMock).toHaveBeenLastCalledWith('/api/catalog', expect.anything());
});

it('renders SKU-assigned images in variant cards and falls back to the primary image', async () => {
  await renderCatalog();
  await userEvent.click(screen.getByRole('button', { name: 'Variants view' }));
  expect(screen.getByAltText('Antwerp Armchair — Bone')).toHaveAttribute('src', expect.stringContaining(encodeURIComponent('/products/variants/staging-variant-1500.jpg')));
  expect(screen.getByAltText('Linen Box Quilt (Dusk) — King/Cal King / Dusk')).toHaveAttribute('src', expect.stringContaining(encodeURIComponent(quilt.images[0].src)));
});

it('uses the server-filtered variant list without reintroducing unavailable product variants', async () => {
  mockApi({ catalog: (url) => {
    const result = catalogFixture([boneQuilt]);
    if (url.searchParams.get('inStockOnly') === 'true') result.variants = result.variants?.slice(1);
    return Response.json(result);
  } });
  render(<CatalogPage />);
  await screen.findByRole('button', { name: 'View Linen Box Quilt (Bone)' });
  await userEvent.click(screen.getByRole('button', { name: 'Variants view' }));
  expect(screen.getByRole('button', { name: 'View Linen Box Quilt (Bone), Twin/Twin XL / Bone' })).toBeVisible();
  await userEvent.click(screen.getByRole('checkbox', { name: 'Available to order only' }));
  expect(await screen.findByRole('button', { name: 'View Linen Box Quilt (Bone), Full/Queen / Bone' })).toBeVisible();
  expect(screen.queryByRole('button', { name: 'View Linen Box Quilt (Bone), Twin/Twin XL / Bone' })).not.toBeInTheDocument();
});

it('creates a collection for a Catalog product through its action menu', async () => {
  const response = deferred<Response>();
  const fetchMock = mockApi({ mutation: () => response.promise });
  await renderCatalog();
  await userEvent.click(screen.getByLabelText(`Product actions for ${LINEN_BOX_QUILT}`));
  await userEvent.click(screen.getByRole('menuitem', { name: 'New collection…' }));
  await userEvent.type(screen.getByRole('textbox', { name: 'Collection name' }), 'Family room');
  await userEvent.dblClick(screen.getByRole('button', { name: 'Create' }));
  expect(screen.getByRole('button', { name: 'Create' })).toBeDisabled();
  expect(screen.getByRole('menuitem', { name: 'Save to library' })).toBeDisabled();
  expect(fetchMock.mock.calls.filter(([, init]) => init?.method === 'POST')).toHaveLength(1);
  expect(fetchMock).toHaveBeenCalledWith('/api/library', expect.objectContaining({ method: 'POST', body: JSON.stringify({ operation: 'createCollection', name: 'Family room', productId: quilt.id }) }));
  await act(async () => response.resolve(Response.json(libraryFixture([quilt], [{ id: '5298808c-2411-42fd-a4d1-a039cfe0271d', name: 'Family room', productIds: [quilt.id] }]))));
  expect(await screen.findByRole('menuitem', { name: 'Family room' })).toBeVisible();
  expect(screen.getByRole('menuitem', { name: 'Remove from library' })).toBeVisible();
});

it('preselects the exact SKU that opened product details', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  await user.type(screen.getByRole('searchbox', { name: 'Search' }), 'Linen Box Quilt');
  await user.click(screen.getByRole('button', { name: 'Variants view' }));
  await user.click(
    screen.getByRole('button', { name: 'View Linen Box Quilt (Bone), Twin/Twin XL / Bone' }),
  );

  expect(
    screen.getByRole('radio', {
      name: 'Twin/Twin XL / Bone — $223 — Unavailable',
    }),
  ).toBeChecked();

  const selectedVariant = screen.getByRole('status', { name: 'Selected variant' });
  expect(within(selectedVariant).getByText('Twin/Twin XL / Bone')).toBeVisible();
  expect(within(selectedVariant).getByText('$223')).toBeVisible();
  expect(within(selectedVariant).getByText('Unavailable in snapshot')).toBeVisible();
  expect(
    within(screen.getByRole('dialog', { name: 'Linen Box Quilt (Bone)' })).queryByText(
      'Available to order',
    ),
  ).not.toBeInTheDocument();
});

it('updates variant-specific details when a visitor chooses another option', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  await user.type(screen.getByRole('searchbox', { name: 'Search' }), 'Linen Box Quilt');
  await user.click(screen.getByRole('button', { name: 'Variants view' }));
  await user.click(
    screen.getByRole('button', { name: 'View Linen Box Quilt (Bone), Twin/Twin XL / Bone' }),
  );

  const availableOption = screen.getByRole('radio', {
    name: 'Full/Queen / Bone — $309 — Available',
  });
  await user.click(availableOption);

  expect(availableOption).toBeChecked();
  const selectedVariant = screen.getByRole('status', { name: 'Selected variant' });
  expect(within(selectedVariant).getByText('Full/Queen / Bone')).toBeVisible();
  expect(within(selectedVariant).getByText('$309')).toBeVisible();
  expect(within(selectedVariant).getByText('Available to order')).toBeVisible();
});

it('switches the detail image when a selected SKU has a distinct staging image', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  await user.type(screen.getByRole('searchbox', { name: 'Search' }), ANTWERP_ARMCHAIR);
  await user.click(screen.getByRole('button', { name: `View ${ANTWERP_ARMCHAIR}` }));

  const dialog = screen.getByRole('dialog', { name: ANTWERP_ARMCHAIR });
  const vintageBlackImage = within(dialog).getByAltText('Antwerp Armchair — Vintage Black');
  const vintageBlackSource = vintageBlackImage.getAttribute('src');

  await user.click(
    within(dialog).getByRole('radio', { name: 'Bone — $1,750 — Available' }),
  );

  const boneImage = within(dialog).getByAltText('Antwerp Armchair — Bone');
  expect(boneImage.getAttribute('src')).not.toBe(vintageBlackSource);
});

it('retains the primary image when a selected SKU has no staging image assignment', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  await user.type(screen.getByRole('searchbox', { name: 'Search' }), LINEN_BOX_QUILT);
  await user.click(screen.getByRole('button', { name: `View ${LINEN_BOX_QUILT}` }));

  const dialog = screen.getByRole('dialog', { name: LINEN_BOX_QUILT });
  const primaryImage = within(dialog).getByAltText(`${LINEN_BOX_QUILT} by Parachute Home`);
  const primarySource = primaryImage.getAttribute('src');

  await user.click(
    within(dialog).getByRole('radio', { name: 'King/Cal King / Dusk — $329 — Available' }),
  );

  expect(within(dialog).getByAltText(`${LINEN_BOX_QUILT} by Parachute Home`)).toHaveAttribute(
    'src',
    primarySource ?? '',
  );
  expect(
    within(dialog).getByText('Primary product image captured with the static staging snapshot.'),
  ).toBeVisible();
});

it('updates variant-specific details with keyboard option selection', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  await user.type(screen.getByRole('searchbox', { name: 'Search' }), 'Linen Box Quilt');
  await user.click(screen.getByRole('button', { name: 'Variants view' }));
  await user.click(
    screen.getByRole('button', { name: 'View Linen Box Quilt (Bone), Twin/Twin XL / Bone' }),
  );

  const initiallySelected = screen.getByRole('radio', {
    name: 'Twin/Twin XL / Bone — $223 — Unavailable',
  });
  await user.click(initiallySelected);
  await user.keyboard('{ArrowDown}');

  expect(
    screen.getByRole('radio', {
      name: 'Full/Queen / Bone — $309 — Available',
    }),
  ).toBeChecked();
  const selectedVariant = within(screen.getByRole('status', { name: 'Selected variant' }));
  expect(selectedVariant.getByText('$309')).toBeVisible();
  expect(selectedVariant.getByText('Available to order')).toBeVisible();
});

it('keeps Tab focus inside product details after the active variant option', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  await user.type(screen.getByRole('searchbox', { name: 'Search' }), 'Linen Box Quilt');
  await user.click(screen.getByRole('button', { name: 'Variants view' }));
  await user.click(
    screen.getByRole('button', { name: 'View Linen Box Quilt (Bone), Twin/Twin XL / Bone' }),
  );

  const selectedOption = screen.getByRole('radio', {
    name: 'Twin/Twin XL / Bone — $223 — Unavailable',
  });
  await user.click(selectedOption);
  expect(selectedOption).toHaveFocus();

  await user.tab();

  expect(screen.getByRole('button', { name: 'Close details' })).toHaveFocus();
});

it('supports keyboard dismissal and focus return for the mobile filter drawer', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  const filtersButton = screen.getByRole('button', { name: 'Filters' });
  await user.click(filtersButton);

  expect(screen.getByRole('button', { name: 'Close filters' })).toHaveFocus();
  await user.keyboard('{Escape}');

  expect(screen.queryByRole('dialog', { name: 'Catalog filters' })).not.toBeInTheDocument();
  expect(filtersButton).toHaveFocus();
});

it('lets a visitor save a catalog product locally from its action menu', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  await user.click(screen.getByLabelText(`Product actions for ${LINEN_BOX_QUILT}`));
  await user.click(screen.getByRole('menuitem', { name: 'Save to library' }));

  expect(screen.getByRole('menuitem', { name: 'Remove from library' })).toBeVisible();
});

it('renders the product action menu outside overflow-clipping card layers', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  await user.click(screen.getByLabelText(`Product actions for ${LINEN_BOX_QUILT}`));

  expect(
    screen.getByRole('menu', { name: `Actions for ${LINEN_BOX_QUILT}` }).closest('.overflow-hidden'),
  ).toBeNull();
});

it('portals the product action menu above card and viewport boundaries', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  await user.click(screen.getByLabelText(`Product actions for ${LINEN_BOX_QUILT}`));

  expect(screen.getByRole('menu', { name: `Actions for ${LINEN_BOX_QUILT}` }).parentElement).toBe(
    document.body,
  );
});

it('opens a product detail dialog from a catalog card', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  await user.click(screen.getByRole('button', { name: `View ${LINEN_BOX_QUILT}` }));

  expect(screen.getByRole('dialog', { name: LINEN_BOX_QUILT })).toBeVisible();
  expect(screen.getByText(/Every size shows where it came from/)).toBeVisible();
});

it('restores catalog results when a cleared price field has no constraint', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  const maximumPrice = screen.getByLabelText('Maximum price');
  await user.type(maximumPrice, '100');
  expect(screen.queryByText(LINEN_BOX_QUILT)).not.toBeInTheDocument();

  await user.clear(maximumPrice);

  expect(screen.getByText(LINEN_BOX_QUILT)).toBeVisible();
  expect(screen.queryByRole('button', { name: /Clear all/ })).not.toBeInTheDocument();
});

it('supports keyboard dismissal and focus return for a product action menu', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  const actions = screen.getByLabelText(`Product actions for ${LINEN_BOX_QUILT}`);
  await user.click(actions);

  expect(screen.getByRole('menuitem', { name: 'Save to library' })).toHaveFocus();
  await user.keyboard('{Escape}');

  expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  expect(actions).toHaveFocus();
});

it('supports keyboard dismissal and focus return for a product detail dialog', async () => {
  const user = userEvent.setup();
  await renderCatalog();

  const viewButton = screen.getByRole('button', { name: `View ${LINEN_BOX_QUILT}` });
  await user.click(viewButton);

  expect(screen.getByRole('button', { name: 'Close details' })).toHaveFocus();
  await user.keyboard('{Escape}');

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(viewButton).toHaveFocus();
});
