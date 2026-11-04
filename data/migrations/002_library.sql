create table workspaces (
  id text primary key
);

create table saved_products (
  workspace_id text not null references workspaces(id) on delete cascade,
  product_id text not null references products(id) on delete cascade,
  primary key (workspace_id, product_id)
);

create table collections (
  id text primary key,
  workspace_id text not null references workspaces(id) on delete cascade,
  name text not null check (trim(name) <> '')
);

create unique index collections_workspace_name
  on collections(workspace_id, lower(name));

create table collection_products (
  collection_id text not null references collections(id) on delete cascade,
  product_id text not null references products(id) on delete cascade,
  primary key (collection_id, product_id)
);
