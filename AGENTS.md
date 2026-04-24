# AGENTS.md — HW07 Routing Next.js (NoteHub)

## Project Overview
NoteHub app built with Next.js (App Router), TypeScript, CSS Modules, Axios, TanStack Query.
Continuation of HW06 with advanced routing features.

## Key Requirements
1. **404 Not Found Page** — `app/not-found.tsx`
2. **Parallel Routes** — `/notes/filter/{tag}` with sidebar for tag filtering
3. **Modal Preview** — Route interception for note details in a modal
4. Components in `components/` folder, each with `.tsx` + `.module.css`
5. Types in `types/note.ts`, API in `lib/api.ts`
6. CSS from `react-notehub-styles` hw-07 branch

## Tags
`"Todo" | "Work" | "Personal" | "Meeting" | "Shopping"`

## API
- Base URL: `https://notehub-public.goit.study/api`
- `GET /notes` — params: `page`, `perPage`, `search`, `tag`
- `GET /notes/:id`
- `POST /notes`
- `DELETE /notes/:id`
- Tag `"all"` means no tag filter (don't send `tag` param)
