import { act, render, renderHook, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it } from 'vitest';

import LibraryPage from '@/app/library/page';
import { useLibrary } from '@/lib/use-library';
import type { LibraryMutation } from '@/lib/library-state';
import { armchair, deferred, libraryFixture, mockApi, quilt } from './api-fixtures';

const collection = { id: 'collection-family-room', name: 'Family room', productIds: [quilt.id] };

it('shows fetched products inside their collection, including products absent from static catalog data', async () => {
  const product = { ...quilt, id: 'api-only-product', name: 'API-only quilt' };
  mockApi({ library: libraryFixture([product], [{ ...collection, productIds: [product.id] }]) });
  render(<LibraryPage />);
  expect(await screen.findByText('API-only quilt')).toBeVisible();
  await userEvent.click(screen.getByRole('button', { name: 'Family room' }));
  expect(screen.getByText('1 saved item')).toBeVisible();
  expect(screen.getByText('API-only quilt')).toBeVisible();
  expect(screen.getByText('Local SQLite library')).toBeVisible();
});

it('creates a collection through the Library endpoint', async () => {
  const created = { id: 'server-created-collection', name: 'Guest room options', productIds: [] };
  const fetchMock = mockApi({ mutation: () => Response.json(libraryFixture([], [created])) });
  render(<LibraryPage />);
  await screen.findByText('Your library is empty');
  await userEvent.click(screen.getByRole('button', { name: 'New collection' }));
  await userEvent.type(screen.getByLabelText('New collection name'), 'Guest room options');
  await userEvent.click(screen.getByRole('button', { name: 'Create collection' }));
  expect(await screen.findByRole('button', { name: 'Guest room options' })).toBeVisible();
  expect(fetchMock).toHaveBeenCalledWith('/api/library', expect.objectContaining({ method: 'POST', body: JSON.stringify({ operation: 'createCollection', name: 'Guest room options' }) }));
});

it('renames and deletes collections using authoritative mutation snapshots', async () => {
  const renamed = { ...collection, name: 'Primary bedroom' };
  const mutations: LibraryMutation[] = [];
  mockApi({ library: libraryFixture([quilt], [collection]), mutation: (init) => {
    const mutation = JSON.parse(init.body as string) as LibraryMutation;
    mutations.push(mutation);
    return Response.json(libraryFixture([quilt], mutation.operation === 'renameCollection' ? [renamed] : []));
  } });
  render(<LibraryPage />);
  await userEvent.click(await screen.findByRole('button', { name: 'Manage Family room' }));
  await userEvent.clear(screen.getByLabelText('Rename Family room'));
  await userEvent.type(screen.getByLabelText('Rename Family room'), 'Primary bedroom');
  await userEvent.click(screen.getByRole('button', { name: 'Save Family room' }));
  await userEvent.click(await screen.findByRole('button', { name: 'Manage Primary bedroom' }));
  await userEvent.click(screen.getByRole('button', { name: 'Delete Primary bedroom' }));
  await waitFor(() => expect(screen.queryByRole('button', { name: 'Primary bedroom' })).not.toBeInTheDocument());
  expect(mutations).toEqual([
    { operation: 'renameCollection', collectionId: 'collection-family-room', name: 'Primary bedroom' },
    { operation: 'deleteCollection', collectionId: 'collection-family-room' },
  ]);
  expect(screen.getByText(quilt.name)).toBeVisible();
});

it('keeps the last valid snapshot after a failed save removal and permits retry', async () => {
  const response = deferred<Response>();
  const fetchMock = mockApi({ library: libraryFixture([quilt]), mutation: () => response.promise });
  render(<LibraryPage />);
  await screen.findByText(quilt.name);
  const remove = screen.getByRole('button', { name: 'Remove' });
  await userEvent.dblClick(remove);
  expect(remove).toBeDisabled();
  expect(screen.getByRole('button', { name: 'New collection' })).toBeEnabled();
  expect(fetchMock.mock.calls.filter(([, init]) => init?.method === 'POST')).toHaveLength(1);
  await act(async () => response.resolve(Response.json({ error: 'Please try again.' }, { status: 503 })));
  expect(await screen.findByRole('alert')).toHaveTextContent('Please try again.');
  expect(screen.getByText(quilt.name)).toBeVisible();
  expect(remove).toBeEnabled();
  fetchMock.mockResolvedValueOnce(Response.json(libraryFixture()));
  await userEvent.click(remove);
  expect(await screen.findByText('Your library is empty')).toBeVisible();
  expect(screen.queryByRole('alert')).not.toBeInTheDocument();
});

it('shows an accessible Library load error without presenting an empty snapshot as loaded', async () => {
  mockApi({ library: Promise.resolve(Response.json({ error: 'The local catalog database is unavailable. Run pnpm db:reset to restore it.' }, { status: 503 })) });
  render(<LibraryPage />);
  expect(screen.getByRole('status', { name: 'Loading library' })).toBeVisible();
  expect(await screen.findByRole('alert')).toHaveTextContent('pnpm db:reset');
  expect(screen.queryByText('Your library is empty')).not.toBeInTheDocument();
});

it('sends collection membership mutations and replaces products from each response', async () => {
  const mutations: LibraryMutation[] = [];
  mockApi({ library: libraryFixture(), mutation: (init) => {
    const mutation = JSON.parse(init.body as string) as LibraryMutation;
    mutations.push(mutation);
    return Response.json(libraryFixture([quilt], [{ ...collection, productIds: mutation.operation === 'addToCollection' ? [quilt.id] : [] }]));
  } });
  const { result } = renderHook(() => useLibrary());
  await waitFor(() => expect(result.current.loading).toBe(false));
  await act(async () => { await result.current.addToCollection(collection.id, quilt.id); });
  expect(result.current.state.collections[0].productIds).toEqual([quilt.id]);
  expect(result.current.products[0].name).toBe(quilt.name);
  await act(async () => { await result.current.removeFromCollection(collection.id, quilt.id); });
  expect(result.current.state.collections[0].productIds).toEqual([]);
  expect(mutations).toEqual([
    { operation: 'addToCollection', collectionId: 'collection-family-room', productId: quilt.id },
    { operation: 'removeFromCollection', collectionId: 'collection-family-room', productId: quilt.id },
  ]);
});

it('rejects product mutations before initialization and serializes later distinct mutations', async () => {
  const initial = deferred<Response>();
  const firstMutation = deferred<Response>();
  const fetchMock = mockApi({ library: initial.promise, mutation: () => firstMutation.promise });
  const { result } = renderHook(() => useLibrary());
  act(() => {
    void result.current.toggleSaved(quilt.id);
  });
  expect(fetchMock.mock.calls.filter(([, init]) => init?.method === 'POST')).toHaveLength(0);
  await act(async () => initial.resolve(Response.json(libraryFixture())));
  expect(fetchMock.mock.calls.filter(([, init]) => init?.method === 'POST')).toHaveLength(0);
  act(() => {
    void result.current.toggleSaved(quilt.id);
    void result.current.createCollection('Family room');
  });
  await waitFor(() => expect(fetchMock.mock.calls.filter(([, init]) => init?.method === 'POST')).toHaveLength(1));
  fetchMock.mockResolvedValueOnce(Response.json(libraryFixture([quilt], [collection])));
  await act(async () => firstMutation.resolve(Response.json(libraryFixture([quilt]))));
  await waitFor(() => expect(result.current.state.collections).toHaveLength(1));
  expect(result.current.state.savedIds).toEqual([quilt.id]);
});

it('retains the collection form on failure and disables only its pending request', async () => {
  const response = deferred<Response>();
  mockApi({ library: libraryFixture([quilt], [collection]), mutation: () => response.promise });
  render(<LibraryPage />);
  await userEvent.click(await screen.findByRole('button', { name: 'Manage Family room' }));
  await userEvent.clear(screen.getByLabelText('Rename Family room'));
  await userEvent.type(screen.getByLabelText('Rename Family room'), 'Primary bedroom');
  await userEvent.click(screen.getByRole('button', { name: 'Save Family room' }));
  expect(screen.getByRole('button', { name: 'Save Family room' })).toBeDisabled();
  expect(screen.getByRole('button', { name: 'Delete Family room' })).toBeEnabled();
  expect(screen.getByRole('button', { name: 'Remove' })).toBeEnabled();
  await act(async () => response.resolve(Response.json({ error: 'A collection with that name already exists.' }, { status: 409 })));
  expect(await screen.findByRole('alert')).toHaveTextContent('already exists');
  expect(screen.getByLabelText('Rename Family room')).toHaveValue('Primary bedroom');
  expect(screen.getByRole('button', { name: 'Save Family room' })).toBeEnabled();
  expect(screen.getByText(quilt.name)).toBeVisible();
});

it('deduplicates concurrent identical hook mutations before the next render', async () => {
  const response = deferred<Response>();
  const fetchMock = mockApi({ mutation: () => response.promise });
  const { result } = renderHook(() => useLibrary());
  await waitFor(() => expect(result.current.loading).toBe(false));
  act(() => {
    void result.current.toggleSaved(quilt.id);
    void result.current.toggleSaved(quilt.id);
  });
  await waitFor(() => expect(fetchMock.mock.calls.filter(([, init]) => init?.method === 'POST')).toHaveLength(1));
  await act(async () => response.resolve(Response.json(libraryFixture([quilt]))));
  expect(result.current.isSaved(quilt.id)).toBe(true);
});

it.each(['another collection', 'new input'])('keeps editing %s after an earlier rename completes', async (scenario) => {
  const other = { id: 'collection-bedroom', name: 'Bedroom', productIds: [] };
  const response = deferred<Response>();
  mockApi({ library: libraryFixture([quilt], [collection, other]), mutation: () => response.promise });
  render(<LibraryPage />);
  await userEvent.click(await screen.findByRole('button', { name: 'Manage Family room' }));
  await userEvent.clear(screen.getByLabelText('Rename Family room'));
  await userEvent.type(screen.getByLabelText('Rename Family room'), 'Renamed family room');
  await userEvent.click(screen.getByRole('button', { name: 'Save Family room' }));
  if (scenario === 'another collection') await userEvent.click(screen.getByRole('button', { name: 'Manage Bedroom' }));
  const input = screen.getByLabelText(scenario === 'another collection' ? 'Rename Bedroom' : 'Rename Family room');
  await userEvent.clear(input);
  await userEvent.type(input, 'Newer draft');
  await act(async () => response.resolve(Response.json(libraryFixture([quilt], [{ ...collection, name: 'Renamed family room' }, other]))));
  expect(screen.getByLabelText(scenario === 'another collection' ? 'Rename Bedroom' : 'Rename Renamed family room')).toHaveValue('Newer draft');
});

it('keeps a newer collection selection and editor after an earlier delete completes', async () => {
  const other = { id: 'collection-bedroom', name: 'Bedroom', productIds: [armchair.id] };
  const response = deferred<Response>();
  mockApi({ library: libraryFixture([quilt, armchair], [collection, other]), mutation: () => response.promise });
  render(<LibraryPage />);
  await userEvent.click(await screen.findByRole('button', { name: 'Family room' }));
  await userEvent.click(screen.getByRole('button', { name: 'Manage Family room' }));
  await userEvent.click(screen.getByRole('button', { name: 'Delete Family room' }));
  await userEvent.click(screen.getByRole('button', { name: 'Bedroom' }));
  await userEvent.click(screen.getByRole('button', { name: 'Manage Bedroom' }));
  await userEvent.clear(screen.getByLabelText('Rename Bedroom'));
  await userEvent.type(screen.getByLabelText('Rename Bedroom'), 'Newer draft');
  await act(async () => response.resolve(Response.json(libraryFixture([quilt, armchair], [other]))));
  expect(screen.queryByText(quilt.name)).not.toBeInTheDocument();
  expect(screen.getByText(armchair.name)).toBeVisible();
  expect(screen.getByLabelText('Rename Bedroom')).toHaveValue('Newer draft');
});

it.each(['new input', 'reopened editor'])('keeps %s after an earlier Library collection creation completes', async (scenario) => {
  const response = deferred<Response>();
  mockApi({ mutation: () => response.promise });
  render(<LibraryPage />);
  await screen.findByText('Your library is empty');
  await userEvent.click(screen.getByRole('button', { name: 'New collection' }));
  await userEvent.type(screen.getByLabelText('New collection name'), 'Family room');
  await userEvent.click(screen.getByRole('button', { name: 'Create collection' }));
  if (scenario === 'new input') {
    await userEvent.clear(screen.getByLabelText('New collection name'));
    await userEvent.type(screen.getByLabelText('New collection name'), 'Newer draft');
  } else {
    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    await userEvent.click(screen.getByRole('button', { name: 'New collection' }));
  }
  await act(async () => response.resolve(Response.json(libraryFixture([], [{ ...collection, productIds: [] }]))));
  expect(screen.getByLabelText('New collection name')).toHaveValue(scenario === 'new input' ? 'Newer draft' : 'Family room');
});
