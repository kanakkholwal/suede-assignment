-- Presets stay one per workspace; rooms the user creates ('custom') can be many.
drop index rooms_workspace_preset;

create unique index rooms_workspace_preset on rooms(workspace_id, preset) where preset <> 'custom';
