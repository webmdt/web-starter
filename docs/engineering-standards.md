# Engineering Standards

One page. Every rule here is either **[CI]** enforced automatically on each pull request, or **[Review]** an item on the code review checklist. If a rule cannot be checked one of those two ways, it does not belong here.

## Coding standards

1. **TypeScript strict, no `any`.** Use `unknown` and narrow. **[CI]** `tsc --noEmit`, `@typescript-eslint/no-explicit-any`.
2. **Lint clean, Prettier formatted.** Every `eslint-disable` carries a reason (`-- why`). **[CI]** `eslint`, `prettier --check`, `eslint-comments/require-description`.
3. **No dead code.** No unused variables, imports or exports left behind. **[CI]** `no-unused-vars`; **[Review]** unused exports and files.
4. **No `console.log` in committed code.** Use `console.warn` / `console.error` deliberately or a logger. **[CI]** `no-console`.
5. **Environment variables go through `src/env.ts`.** Never read `process.env` elsewhere. **[CI]** `no-restricted-syntax` on `process.env` outside `src/env.ts`. Every variable is listed in `.env.example`; server secrets are never `NEXT_PUBLIC_`. **[Review]**
6. **No secrets in the repo.** `.env*` is git-ignored except `.env.example`. **[Review]** any key, token or customer data in the diff blocks the PR.
7. **Small, named units.** Components and functions do one thing and are named for what they do. Files under ~200 lines; split when bigger. **[Review]**
8. **Server first.** Default to Server Components; add `"use client"` only where interaction needs it. Data fetching and secrets stay on the server. **[Review]**
9. **Accessible by default.** Semantic HTML, labelled controls, keyboard reachable, visible focus, images have `alt`. **[CI]** `jsx-a11y` rules via `eslint-config-next`; **[Review]** keyboard walk-through for new UI.
10. **Tests live next to the code** as `*.test.ts(x)` and run in CI. New logic and bug fixes ship with a test. **[CI]** `vitest run`; **[Review]** test actually asserts the behaviour.
11. **Dependencies are deliberate.** Prefer platform and framework features. Adding a package needs a one-line justification in the PR's "New dependencies" section. **[CI]** `pnpm install --frozen-lockfile`; **[Review]** justification present.
12. **Branch, commit and PR conventions** as in `CONTRIBUTING.md`. **[Review]**

## Definition of done (code)

A change is done when all of these are true:

- [ ] PR merged to `main` via squash with green CI (lint, format, typecheck, tests, build) and a named reviewer sign-off on the task. **[CI]** for the checks; **[Review]** for the sign-off.
- [ ] Reviewer is someone other than the author and is named on the Paperclip/ClickUp task; all PR threads resolved. **[Review]**
- [ ] Behaviour verified by the steps in the PR's "How to verify" section, by the reviewer or QA. **[Review]**
- [ ] New or changed behaviour covered by tests, or the PR states why not. **[Review]**
- [ ] Docs, `README`, `.env.example` and `src/env.ts` updated for anything a new developer would need. **[Review]**
- [ ] No known regressions; UI changes include before/after screenshots. **[Review]**
- [ ] Ticket updated with a link to the PR and what to verify. **[Review]**

## Code review checklist

Reviewer works through this list; anything unchecked is a blocking comment.

**Correctness**

- [ ] Does what the ticket asks, and nothing unrelated.
- [ ] Edge cases handled: empty, error, loading, unauthenticated, slow network.
- [ ] Errors are surfaced, not swallowed.

**Safety**

- [ ] No secrets, tokens or customer data in the diff.
- [ ] Env vars added to `src/env.ts` and `.env.example`; server-only values not `NEXT_PUBLIC_`.
- [ ] User input validated on the server (zod or equivalent) before use.

**Design**

- [ ] Follows existing patterns in the repo; no parallel way of doing the same thing.
- [ ] Server Components by default; `"use client"` justified.
- [ ] Units are small and named for what they do; no dead code.
- [ ] New dependency has a justification and no lighter alternative.

**Quality**

- [ ] Tests exist and assert behaviour, not implementation details.
- [ ] Accessible: semantic elements, labels, keyboard, focus, `alt` text.
- [ ] Performance-aware: images via `next/image`, no unbounded lists, no heavy client bundles.

**Handoff**

- [ ] PR description says what changed, why and how to verify.
- [ ] Screenshots for UI changes.
- [ ] Docs updated where a newcomer would need them.
