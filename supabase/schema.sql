-- Ejecuta este archivo en Supabase > SQL Editor.

create table if not exists public.projects (
  id bigint primary key generated always as identity,
  title text not null,
  description text not null,
  category text not null
);

insert into public.projects (title, description, category)
values
  ('Portfolio Web', 'Portfolio desarrollado con tecnologías modernas.', 'web'),
  ('Tienda Online', 'Catálogo sencillo de productos.', 'web'),
  ('App de Tareas', 'Aplicación para organizar tareas.', 'productividad'),
  ('API Biblioteca', 'API para gestión de libros.', 'backend'),
  ('Sistema de Reservas', 'Sistema sencillo de reservaciones.', 'backend');

alter table public.projects enable row level security;

grant select on table public.projects to anon;

drop policy if exists "Public projects are readable" on public.projects;

create policy "Public projects are readable"
on public.projects
for select
to anon
using (true);
