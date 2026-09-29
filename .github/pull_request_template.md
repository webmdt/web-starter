## What changed

<!-- One or two sentences. Link the ticket, e.g. https://app.clickup.com/t/<task-id> or the Paperclip issue URL. -->

## Why

<!-- The problem or request this solves. -->

## How to verify

<!-- Exact steps a reviewer or QA can follow. Include URLs, commands, test data. -->

1.
2.

## Checklist (author)

- [ ] Branch name follows `type/ticket-short-description`
- [ ] `pnpm check` passes locally (lint, format, typecheck, tests, build)
- [ ] New behaviour has a test, or I explained below why not
- [ ] No secrets, credentials or customer data in the diff
- [ ] `.env.example` and `src/env.ts` (schema **and** `parseEnv` call) updated if env vars changed
- [ ] New dependency? One-line justification below, and no lighter alternative
- [ ] README / docs updated if setup or behaviour changed

## New dependencies

<!-- Package: why it is needed, why not the platform/framework feature. Delete if none. -->

## Screenshots / recordings

<!-- Required for any UI change. Before / after where relevant. -->
