# Contributing

Short version: branch from `main`, keep PRs small, let CI decide.

## Branches

`main` is always deployable. Never push to it directly; every change arrives via a pull request with green CI.

Branch names: `type/ticket-short-description`, lowercase, hyphens.

| Type       | Use for                                  | Example                          |
| ---------- | ---------------------------------------- | -------------------------------- |
| `feat`     | New user-facing functionality            | `feat/WEB-42-contact-form`       |
| `fix`      | Bug fix                                  | `fix/WEB-57-mobile-nav-overlap`  |
| `chore`    | Tooling, deps, config, no product change | `chore/WEB-12-bump-next`         |
| `docs`     | Documentation only                       | `docs/WEB-9-readme-deploy-steps` |
| `refactor` | Code change with no behaviour change     | `refactor/WEB-33-extract-button` |
| `test`     | Tests only                               | `test/WEB-21-env-parsing`        |
| `hotfix`   | Urgent production fix, reviewed after    | `hotfix/WEB-99-checkout-500`     |

Use the ticket id when one exists. If there is none, drop it: `chore/upgrade-eslint`.

## Commits

Conventional Commits: `type(scope): summary`, imperative, under 72 characters.

```
feat(contact): add server action for form submission
fix(nav): close mobile menu on route change
```

Squash-merge PRs so `main` history is one commit per change.

## Pull requests

- One concern per PR. Under ~400 changed lines is the goal.
- Fill in the template: what, why, how to verify.
- CI must be green. Do not merge with failing or skipped checks.
- At least one approving review. The author never approves their own PR.
- Resolve every review thread before merging.

## Local checks

```bash
pnpm check   # lint + format + typecheck + tests + build, same as CI
```

Fix formatting with `pnpm format` and auto-fixable lint with `pnpm lint:fix`.
