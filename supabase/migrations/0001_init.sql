-- ObGynVault Phase 2 schema: profiles and roles, synced personal vault, and the clinical review queue.
-- Run once in the Supabase SQL editor (or `supabase db push`). Safe to re-run: objects use IF NOT EXISTS / OR REPLACE.

-- 1. Profiles and roles -------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  full_name text,
  role text not null default 'reader' check (role in ('reader', 'editor', 'admin')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Create a profile row automatically when someone signs up.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email) values (new.id, new.email) on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Role helpers (security definer so policies can call them without recursion).
create or replace function public.current_role_name()
returns text language sql stable security definer set search_path = public as $$
  select coalesce((select role from public.profiles where id = auth.uid()), 'anon');
$$;

create or replace function public.is_editor()
returns boolean language sql stable security definer set search_path = public as $$
  select public.current_role_name() in ('editor', 'admin');
$$;

drop policy if exists "profiles: read own or admin" on public.profiles;
create policy "profiles: read own or admin" on public.profiles
  for select using (id = auth.uid() or public.current_role_name() = 'admin');

drop policy if exists "profiles: update own name" on public.profiles;
create policy "profiles: update own name" on public.profiles
  for update using (id = auth.uid())
  with check (id = auth.uid() and role = public.current_role_name());

drop policy if exists "profiles: admin manages roles" on public.profiles;
create policy "profiles: admin manages roles" on public.profiles
  for update using (public.current_role_name() = 'admin');

-- 2. Personal vault (bookmarks, notes, history, recent searches) ---------------
-- Stored as one JSON document per user; the app merges it with the on-device copy.
create table if not exists public.user_vaults (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.user_vaults enable row level security;

drop policy if exists "vault: owner only" on public.user_vaults;
create policy "vault: owner only" on public.user_vaults
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- 3. Clinical review queue ----------------------------------------------------
-- Every status change on a topic is a new row; the latest row is the topic's current status.
create table if not exists public.topic_reviews (
  id bigint generated always as identity primary key,
  topic_slug text not null,
  status text not null check (status in ('draft', 'in_review', 'changes_requested', 'verified')),
  comment text,
  reviewer_id uuid references auth.users (id) on delete set null,
  reviewer_name text,
  created_at timestamptz not null default now()
);

create index if not exists topic_reviews_slug_created on public.topic_reviews (topic_slug, created_at desc);

alter table public.topic_reviews enable row level security;

-- Anyone may read review status (readers need to know whether a topic is verified).
drop policy if exists "reviews: public read" on public.topic_reviews;
create policy "reviews: public read" on public.topic_reviews for select using (true);

-- Only editors and admins may record a review, and only in their own name.
drop policy if exists "reviews: editors insert" on public.topic_reviews;
create policy "reviews: editors insert" on public.topic_reviews
  for insert with check (public.is_editor() and reviewer_id = auth.uid());

-- Latest status per topic.
create or replace view public.topic_review_status with (security_invoker = true) as
  select distinct on (topic_slug) topic_slug, status, comment, reviewer_name, created_at
  from public.topic_reviews
  order by topic_slug, created_at desc;

-- 4. Make yourself admin after first sign-in (replace the email) ----------------
-- update public.profiles set role = 'admin' where email = 'you@example.com';
