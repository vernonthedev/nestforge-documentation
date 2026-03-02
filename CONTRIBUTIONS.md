# Contributing to NestForge Documentation

This repository documents the main NestForge framework at `https://github.com/vernonthedev/nestforge`. The rule is simple: if framework behavior changes there, the docs here must change in the same workstream or immediately after.

## Source of Truth

When content conflicts, use this order:

1. `vernonthedev/nestforge` source code and examples
2. the framework repo `README.md`, `CONTRIBUTING.md`, and release notes
3. published crate docs such as `docs.rs/crate/nestforge`
4. this documentation site

Do not invent APIs, CLI flags, crate names, or example behavior from memory.

## Changes That Require Docs Updates

Update this docs repo whenever the main framework changes:

- public API behavior or re-exports
- CLI commands, generators, or generated project structure
- example applications under `examples/`
- transport support such as GraphQL, gRPC, WebSockets, caching, scheduling, or microservices
- contributor workflow, testing, release flow, or workspace layout

If a change affects how a user builds, runs, generates, configures, or extends NestForge, it needs a docs review.

## Sync Workflow

For each framework change:

1. Identify the affected docs section in `src/content/docs/`.
2. Verify behavior against the main repo, not an older docs page.
3. Update navigation in `astro.config.mjs` if pages move or new topics are added.
4. Cross-check examples and command snippets against the current framework repo.
5. Record version-sensitive changes in the PR description.

Useful verification targets in the framework repo:

- `crates/`
- `examples/`
- `README.md`
- `CONTRIBUTING.md`
- changelogs and release notes

## Validation Before Merge

Run:

```bash
yarn astro check
yarn build
```

Also confirm:

- page titles and descriptions still match the current framework terminology
- code samples compile conceptually against the latest framework surface
- links to framework files, examples, or releases are still valid
- sidebar entries in `astro.config.mjs` match the actual content tree

## Pull Request Expectations

Use conventional commits such as `docs: update grpc guide for 1.1 behavior`. In the PR, link the related framework change, commit, issue, or release. If the docs intentionally lag the framework, state why and list the follow-up required to catch up.

## Release Automation

This repository uses semantic-release on the `main` branch.

Relevant release mappings:

- `feat:` -> minor
- `fix:` -> patch
- `docs:` -> patch
- `refactor:` -> patch
- `style:` -> patch
- `build:` -> patch
- `BREAKING CHANGE:` or `type!:` -> major

The release workflow generates GitHub releases, updates `CHANGELOG.md`, and commits the
new `package.json` version back to the repository.
