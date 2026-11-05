-- A workspace keeps one room per preset, each with its own shortlist and layout.
alter table rooms add column preset text not null default 'client-living-room';

drop index rooms_workspace;

create unique index rooms_workspace_preset on rooms(workspace_id, preset);
