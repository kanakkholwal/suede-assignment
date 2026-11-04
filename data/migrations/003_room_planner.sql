-- Each row is one sourced claim; resolution merges claims per field by source rank.
create table product_dimensions (
  id integer primary key,
  product_id text not null references products(id) on delete cascade,
  variant_id text references variants(id) on delete cascade,
  workspace_id text references workspaces(id) on delete cascade,
  width_in real check (width_in is null or width_in > 0),
  depth_in real check (depth_in is null or depth_in > 0),
  height_in real check (height_in is null or height_in > 0),
  source text not null check (source in ('designer', 'verified', 'listing', 'synthetic')),
  source_url text,
  note text not null default '',
  captured_at text not null,
  check (width_in is not null or depth_in is not null or height_in is not null),
  check ((source = 'designer') = (workspace_id is not null))
);

create index product_dimensions_product on product_dimensions(product_id, variant_id);
create unique index product_dimensions_designer_entry
  on product_dimensions(workspace_id, product_id, coalesce(variant_id, ''))
  where source = 'designer';

create table rooms (
  id text primary key,
  workspace_id text not null references workspaces(id) on delete cascade,
  name text not null check (trim(name) <> ''),
  length_in real not null check (length_in > 0),
  width_in real not null check (width_in > 0),
  ceiling_in real check (ceiling_in is null or ceiling_in > 0),
  dimensions_status text not null check (dimensions_status in ('stated', 'assumed', 'confirmed')),
  client_message text not null default '',
  note text not null default ''
);

create unique index rooms_workspace on rooms(workspace_id);

create table room_features (
  id text primary key,
  room_id text not null references rooms(id) on delete cascade,
  kind text not null check (kind in ('window', 'door', 'radiator')),
  wall text not null check (wall in ('north', 'east', 'south', 'west')),
  offset_in real not null check (offset_in >= 0),
  width_in real not null check (width_in > 0),
  depth_in real check (depth_in is null or depth_in > 0),
  height_in real check (height_in is null or height_in > 0),
  sill_in real check (sill_in is null or sill_in >= 0),
  hinge text check (hinge is null or hinge in ('start', 'end')),
  swing text check (swing is null or swing in ('in', 'out')),
  status text not null check (status in ('stated', 'assumed', 'confirmed')),
  client_said text not null default '',
  assumption text not null default '',
  position integer not null check (position >= 0)
);

create index room_features_room on room_features(room_id, position);

-- A row with null coordinates is shortlisted for the room but not yet placed.
create table room_items (
  id text primary key,
  room_id text not null references rooms(id) on delete cascade,
  product_id text not null references products(id) on delete cascade,
  variant_id text references variants(id) on delete set null,
  x_in real,
  y_in real,
  rotation_deg integer not null default 0 check (rotation_deg in (0, 90, 180, 270)),
  position integer not null check (position >= 0),
  check ((x_in is null) = (y_in is null))
);

create index room_items_room on room_items(room_id, position);
