# CLAUDE.md — BEACON

## What this is

BEACON is a technology company that designs and builds custom systems for modern
businesses. This repo is the BEACON marketing website (plus a client-facing Work
Progress dashboard). Premium, black, minimal, system-themed. Tagline: "Build
Forward."

## Stack & layout

- Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4
- Package manager: **pnpm** (a `pnpm-lock.yaml` is committed; do not use npm/yarn)
- Design system: **shadcn/ui** (radix-nova style, components in `src/components/ui`)
- Repo root is `beacon/`; this is the folder pushed to GitHub
  (github.com/elijaharhinful/beacon).

```
src/
  app/            route segments (page.tsx per route) + globals.css, layout.tsx
  components/
    ui/           shadcn primitives (button, card, ...) — owned, editable
    layout/       Navbar, Footer
    sections/     page sections grouped by page (e.g. sections/home/Hero.tsx)
  hooks/          shared hooks
  lib/            utils (cn) and shared helpers
  theme/          legacy color tokens — migrate into globals.css vars, then drop
screenshot.mjs    design screenshot tool (see Screenshot workflow)
screenshots/      scratch output, git-ignored
```

## Commands

- dev:   `pnpm dev`     (http://localhost:3000)
- build: `pnpm build`
- start: `pnpm start`
- lint:  `pnpm lint`

## Design source of truth

- **Style** comes from the AI-generated mockups in
  `../beacon-files/UI/*` (Home, About, Services, Projects, Get in Touch). They
  have inconsistencies — copy the *style* (layout, spacing, color, type), not the
  literal text, and reconcile the inconsistencies to one coherent system.
- **Text/copy** comes from `../beacon-files/BEACOND.MD`. BLOCK/ALL-CAPS labels and
  italic notes in that doc are design guidance and must NOT appear on the site.

## Design tokens (non-negotiable)

- Canvas near-black `#0a0d0f`, text `#f0f4f8`, brand teal `#00d4aa`
  (`--teal` / mapped to `--primary`), muted `#6b7280`, hairline borders
  `rgba(255,255,255,0.08)`.
- The BEACON palette lives in the `.dark` block of `src/app/globals.css`; the site
  ships **always dark** (`<html class="dark">`). Reference tokens
  (`bg-background`, `text-foreground`, `text-primary`, `border-border`), never
  one-off hex/px in markup. If a value is not a token, it is probably wrong.

## Conventions (non-negotiable)

- No `any`. Lint must pass.
- Reuse over reinvent: port the closest shadcn/ui component before hand-rolling;
  when hand-rolling, build from the tokens above. Treat the `theme/` dir and any
  off-system styling as debt to migrate, not a pattern to copy.
- Screenshot workflow (below) for **every** visual task — page, section,
  component, empty/loading state, modal.
- Forms: React Hook Form + Zod (schema co-located with the form).
- Server state: TanStack Query. Client/UI state: Zustand (theme, toasts, etc.).
- Accessibility: semantic HTML, labels tied to inputs, visible focus, keyboard
  nav, adequate contrast.
- Cursors: every clickable element (buttons, links, cards, tabs, toggles, menu
  items, anything with an `onClick`) must show `cursor-pointer`; disabled states
  use `cursor-not-allowed`. Tailwind v4 no longer sets this by default, so it is
  explicit. Bake it into the shared primitive (Button, interactive Card) so
  call sites inherit it rather than repeating the class.
- Responsive: design mobile + desktop; verify with `--mobile` / `--tablet` shots.

## Screenshot workflow (visual build loop)

Make the localhost screenshot match the target. Every visual task:

1. Screenshot the target (UI mockup / reference), Read the PNG, study it.
2. Shop for parts in `components/ui` + existing sections before writing markup.
3. Build with shadcn parts + the tokens above.
4. Run `pnpm dev`, then `node screenshot.mjs http://localhost:3000/<route> <label>`.
5. Read both PNGs, compare concretely (spacing, font size/weight, exact hex,
   borders, radius, shadow, icon, states), fix diffs, re-shoot. Repeat until match.

Flags: `--mobile` `--tablet` `--width/--height` `--full` `--selector=".x"`
`--wait=N` `--out=name` `--login` (uses `APP_EMAIL`/`APP_PASSWORD`). All shots are
`@2x`. Output → `screenshots/`.

## Text generation

- No em-dashes (—) anywhere in generated code, comments, or docs. Use "-" or reword.
- No emojis anywhere on the website (page copy, UI labels, buttons, icons) unless
  the user explicitly asks for one in a given place. Use SVG/lucide icons instead.
