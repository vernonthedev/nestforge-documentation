# NestForge Documentation

```text
███╗   ██╗███████╗███████╗████████╗███████╗ ██████╗ ██████╗  ██████╗ ███████╗
████╗  ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝██╔═══██╗██╔══██╗██╔════╝ ██╔════╝
██╔██╗ ██║█████╗  ███████╗   ██║   █████╗  ██║   ██║██████╔╝██║  ███╗█████╗
██║╚██╗██║██╔══╝  ╚════██║   ██║   ██╔══╝  ██║   ██║██╔══██╗██║   ██║██╔══╝
██║ ╚████║███████╗███████║   ██║   ██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗
╚═╝  ╚═══╝╚══════╝╚══════╝   ╚═╝   ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝
```

Welcome to the NestForge documentation!

[![Rust](https://img.shields.io/badge/rust-v1.75+-orange.svg)](https://www.rust-lang.org/)
[![Axum](https://img.shields.io/badge/framework-Axum-blue.svg)](https://github.com/tokio-rs/axum)
[![NestForge](https://img.shields.io/badge/core-NestForge-green.svg)](https://github.com/nestforge/nestforge)

This repository contains the Astro + Starlight site for the NestForge documentation. It is written for two audiences:

- application teams building APIs and services with NestForge
- framework contributors working inside the `nestforge/` workspace

The published site covers framework concepts, transport guides, runnable examples, CLI workflow, and internal architecture.

## Documentation Areas

Author content lives in `src/content/docs/`:

- `getting-started/` for installation, quick start, and CLI usage
- `concepts/` for modules, DI, routing, configuration, and request flow
- `guides/` for middleware, auth, testing, macros, and data-layer topics
- `transports/` for GraphQL, gRPC, WebSockets, microservices, scheduling, and caching
- `examples/` for example app walkthroughs
- `framework/` for crate architecture, public API boundaries, contribution flow, and release process

Navigation is configured in `astro.config.mjs`. Static assets for this site are imported from `src/assets/`.

## Local Development

Install dependencies and run the docs locally from the repository root:

```bash
yarn install
yarn dev
```

Useful commands:

- `yarn dev` starts the site at `http://localhost:4321`
- `yarn build` creates a production build in `dist/`
- `yarn preview` serves the built site locally
- `yarn astro check` validates Astro content and configuration changes

## Writing and Updating Docs

Each page in `src/content/docs/` should use `.md` or `.mdx` and start with frontmatter:

```md
---
title: Architecture
description: The high-level mental model behind NestForge.
---
```

Use lowercase kebab-case file names so routes stay predictable, such as `guides/resource-services.mdx`. When adding or moving pages, update the Starlight sidebar in `astro.config.mjs`.

## Contribution Notes

Before opening a PR, run `yarn build` and `yarn astro check`. Verify links, code fences, and asset references in local preview. Keep content aligned with the current NestForge workspace and prefer updating an existing page over creating overlapping docs.

## Releases

This repo uses semantic-release on `main`.

- tags use the format `vX.Y.Z`
- GitHub releases are generated automatically from conventional commits
- `CHANGELOG.md` and `package.json` are updated during release commits

Release behavior for conventional commits:

- `feat:` triggers a minor release
- `fix:`, `docs:`, `refactor:`, `style:`, and `build:` trigger a patch release
- `BREAKING CHANGE:` or `type!:` triggers a major release
