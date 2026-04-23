# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

There are no tests in this project.

## Architecture

This is a **single-page Next.js 15 website** for AlterMundi, a non-profit that builds open-source hardware/software for community networks. The site uses the App Router with a single route (`app/page.tsx`).

### Page structure

The page is composed as a vertical stack of full-width sections rendered in order:
`Navbar` → `Hero` → `About` → `HowWeWork` → `Projects` → `Contact` → `Footer`

Navigation is entirely scroll-based — there are no client-side routes. `<ScrollLink>` (`components/ui/scroll-link.tsx`) is a button wrapper that calls `scrollIntoView` on a target element id.

### Key patterns

- **`"use client"` boundary**: Only interactive components declare `"use client"`. Most section components are server components.
- **Project data**: Defined as a static `PROJECTS` array directly inside `components/projects.tsx`. To add/edit projects, modify that array.
- **3D model animation**: `components/project-animation.tsx` uses `@santiagocetran/ascii-3d-animation` loaded dynamically (`next/dynamic` with `ssr: false`) to render STL files as ASCII art. Models are served from `public/models/`.
- **Contact**: `components/contact.tsx` is a mailto link + GitHub link — no form, no server endpoint. If a form is reintroduced, POST to the AlterMundi n8n webhook (see `SITE.yml`) rather than a Next.js API route (this site is `output: "export"` / static).

### Design system

- **Fonts**: `Montserrat` (sans, body/headings) and `Source Code Pro` (mono, UI labels/code). Applied via CSS variables `--font-sans` / `--font-mono`.
- **Color palette** (AlterMundi brandbook, defined in `app/globals.css`):
  - Background: `#fff6e7` (warm cream)
  - Primary / foreground: `#074434` (dark green)
  - Secondary / muted: `#abc685` (sage green)
  - Surface / card: `#f7f9ce` (light yellow)
  - Accent: `#e8ff99` (bright lime)
- **Aesthetic**: terminal/retro aesthetic. Global CSS utilities: `.grid-background` (dot grid overlay), `.noise-texture` (SVG noise pseudo-element), `.scanlines`, `.crt-glow` (text-shadow effect), `.terminal-border` (corner bracket borders).
- **`TerminalCard`** (`components/ui/terminal-card.tsx`): the main card primitive with optional header/footer bars and corner bracket decorations.
- **`CornerBrackets`** (`components/ui/corner-brackets.tsx`): SVG corner accents placed on cards and sections.
- **Tailwind v4** is used (CSS-first config via `@import "tailwindcss"` in `globals.css`; no `tailwind.config.js`).
- **`cn()`** utility (`lib/utils.ts`): `clsx` + `tailwind-merge` for conditional class merging.

### Environment variables

None. The site is fully static (`output: "export"`) and ships no runtime secrets.

### Deploy

GitHub Actions (`runs-on: [self-hosted, yupanki]`) builds on the AlterMundi
org self-hosted runner on the yupanki PVE host, then streams `out/` into
CT 127 (`/srv/www/altermundi-website/`) via `sudo pct exec` tar-pipe. See
`.github/workflows/deploy.yml` and `SITE.yml`. Infra-as-code lives in
the `AlterMundi/Alter-infra` repo under `yupanki/static-sites/`.
