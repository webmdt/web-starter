# Web Starter

WebMDT's starter template for custom web projects. Clone, install, run. CI checks every pull request.

**Stack:** Next.js (App Router) · TypeScript (strict) · Tailwind CSS · Vitest + Testing Library · ESLint + Prettier · pnpm · GitHub Actions.

## Use this template

1. On GitHub click **Use this template → Create a new repository**, or clone directly:
   ```bash
   git clone git@github.com:webmdt/web-starter.git my-project
   cd my-project
   ```
2. Rename the project in `package.json` (`name`) and `src/app/layout.tsx` (`metadata`).
3. Replace this section of the README with the project's own description.

## Prerequisites

- **Node 22** (see `.nvmrc`; `nvm use` picks it up).
- **pnpm 10**. Enable via Corepack (`corepack enable`) or `npm i -g pnpm`.

## Setup

```bash
pnpm install
cp .env.example .env.local   # fill in values; never commit .env.local
pnpm dev                      # http://localhost:3000
```

## Scripts

| Command              | What it does                                                       |
| -------------------- | ------------------------------------------------------------------ |
| `pnpm dev`           | Start the dev server                                               |
| `pnpm build`         | Production build                                                   |
| `pnpm start`         | Serve the production build                                         |
| `pnpm lint`          | ESLint (Next.js core-web-vitals + TypeScript + a11y rules)         |
| `pnpm lint:fix`      | ESLint with auto-fix                                               |
| `pnpm format`        | Prettier write                                                     |
| `pnpm format:check`  | Prettier check (what CI runs)                                      |
| `pnpm typecheck`     | `tsc --noEmit`                                                     |
| `pnpm test`          | Vitest, single run                                                 |
| `pnpm test:watch`    | Vitest in watch mode                                               |
| `pnpm test:coverage` | Vitest with V8 coverage report (`coverage/`)                       |
| `pnpm check`         | Everything CI runs, in order: lint, format, typecheck, test, build |

## Environment variables

All variables are declared and validated in `src/env.ts` with zod and documented in `.env.example`. The app fails fast at startup with a readable message if something is missing or malformed.

- Browser-visible values must be prefixed `NEXT_PUBLIC_`.
- Server-only values (database URLs, API keys) must **not** be.
- Add a variable, three places in `src/env.ts` and `.env.example`:
  1. `src/env.ts`: add it to `serverSchema` or `clientSchema`.
  2. `src/env.ts`: add `NAME: process.env.NAME` to the `parseEnv({ ... })` call at the bottom. Next.js only inlines `NEXT_PUBLIC_*` values that are accessed literally, so this step is required.
  3. `.env.example`: document it with a placeholder value.
     Then use `env.NAME` in code. ESLint rejects `process.env` anywhere outside `src/env.ts`.

## Project layout

```
.github/            CI workflow, PR template, CODEOWNERS
docs/               Engineering standards
public/             Static assets served from the site root (robots.txt, images)
src/app/            Routes, layouts, favicon, global styles (App Router)
src/components/     Reusable UI components (+ tests alongside)
src/lib/            Framework-agnostic helpers (+ tests alongside)
src/env.ts          Typed, validated environment variables
vitest.config.mts   Test runner config (jsdom, Testing Library, coverage)
AGENTS.md           Notes for AI coding agents; `next dev` maintains the Next.js block
```

## Styling

Tailwind CSS 4, light theme only. Fonts (Geist Sans / Mono) are loaded with `next/font` and exposed as `font-sans` / `font-mono`. To add dark mode, define colour tokens in `src/app/globals.css` and use `dark:` variants; do not add unlayered `body {}` rules, they silently override Tailwind utilities.

## Testing

Tests sit next to the code as `*.test.ts` / `*.test.tsx` and run with Vitest in a jsdom environment. `vitest.setup.ts` loads jest-dom matchers and cleans up after each test.

```bash
pnpm test
```

## CI

`.github/workflows/ci.yml` runs on every pull request and on pushes to `main`: install with a frozen lockfile, then lint, format check, typecheck, tests, build. A PR cannot be merged until it is green. Run the same thing locally with `pnpm check`.

## Conventions

- Branching, commits and PR rules: [`CONTRIBUTING.md`](./CONTRIBUTING.md)
- Coding standards, definition of done, review checklist: [`docs/engineering-standards.md`](./docs/engineering-standards.md)
- PR template: `.github/pull_request_template.md`

## Deployment

The template is host-agnostic. `pnpm build` produces a standard Next.js build that runs on Vercel, Cloudflare, or any Node host with `pnpm start`. Deployment is configured per project, not in the template.
