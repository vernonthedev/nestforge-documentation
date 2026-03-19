// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeSix from "@six-tech/starlight-theme-six";

export default defineConfig({
  integrations: [
    starlight({
      title: "NestForge Docs",
      description:
        "Documentation for building applications with NestForge, with a separate section for framework contributors.",
      disable404Route: true,
      customCss: ["./src/styles/starlight-overrides.css"],
      logo: {
        src: "./src/assets/logo.svg",
        alt: "NestForge",
      },
      favicon: "/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/vernonthedev/nestforge",
        },
      ],
      plugins: [
        starlightThemeSix({
          navLinks: [
            {
              label: "Learning Path",
              link: "/getting-started/learning-path/",
            },
            {
              label: "Workflows",
              link: "/guides/testing-workflow/",
            },
          ],
          footerText:
            "NestForge docs for application developers, with separate contributor documentation for framework work.",
        }),
      ],
      lastUpdated: true,
      sidebar: [
        {
          label: "Getting Started",
          collapsed: false,
          items: [
            { label: "Overview", slug: "getting-started/overview" },
            { label: "Installation", slug: "getting-started/installation" },
            { label: "Quick Start", slug: "getting-started/quick-start" },
            { label: "Feature Modules", slug: "getting-started/feature-modules" },
            { label: "DTOs, Services & Routes", slug: "getting-started/dtos-services-routes" },
            { label: "Database Setup", slug: "getting-started/database-setup" },
            { label: "CLI Workflow", slug: "getting-started/cli-workflow" },
            {
              label: "First Steps",
              slug: "getting-started/build-your-first-feature",
            },
          ],
        },
        {
          label: "Core Fundamentals",
          collapsed: true,
          items: [
            { label: "Modules", slug: "concepts/modules-and-di" },
            { label: "Services", slug: "concepts/services" },
            { label: "Controllers", slug: "concepts/controllers-routing" },
            { label: "Middleware", slug: "guides/middleware" },
            {
              label: "Guards & Interceptors",
              slug: "guides/guards-interceptors",
            },
            { label: "Macros", slug: "guides/macros" },
            { label: "Data Layer", slug: "guides/data-layer" },
            { label: "Resource Services", slug: "guides/resource-services" },
            { label: "Architecture", slug: "concepts/architecture" },
            { label: "Request Pipeline", slug: "concepts/request-pipeline" },
          ],
        },
        {
          label: "Advanced Techniques",
          collapsed: true,
          items: [
            { label: "OpenAPI Setup", slug: "guides/openapi-from-scratch" },
            { label: "OpenAPI & Auth", slug: "guides/auth-openapi" },
            { label: "OpenAPI Workflow", slug: "guides/auth-openapi-workflow" },
            { label: "Database (SQL)", slug: "guides/database-workflow" },
            { label: "Database (Mongo)", slug: "guides/mongo-workflow" },
            { label: "Caching (Redis)", slug: "guides/redis-workflow" },
            { label: "Configuration", slug: "concepts/configuration" },
            { label: "Testing", slug: "guides/testing" },
            { label: "Testing Workflow", slug: "guides/testing-workflow" },
          ],
        },
        {
          label: "Examples",
          collapsed: true,
          items: [
            { label: "Hello NestForge", slug: "examples/hello-nestforge" },
            { label: "Example API", slug: "examples/example-api" },
            { label: "Database Users", slug: "examples/database-backed-users-feature" },
            { label: "Mongo Users", slug: "examples/mongo-users-feature" },
            { label: "Redis Cache", slug: "examples/redis-cache-feature" },
            { label: "GraphQL", slug: "examples/hello-nestforge-graphql" },
            { label: "gRPC", slug: "examples/hello-nestforge-grpc" },
            { label: "WebSockets", slug: "examples/hello-nestforge-websockets" },
            { label: "Microservices", slug: "examples/hello-nestforge-microservices" },
          ],
        },
        {
          label: "Editor Tooling",
          collapsed: true,
          items: [
            { label: "Overview", slug: "editor-tooling/overview" },
            {
              label: "NestForge CLI",
              slug: "editor-tooling/nestforge-cli",
            },
            {
              label: "VS Code Extension",
              slug: "editor-tooling/vscode-extension",
            },
          ],
        },
        {
          label: "Transports",
          collapsed: true,
          items: [
            { label: "GraphQL", slug: "transports/graphql" },
            { label: "gRPC", slug: "transports/grpc" },
            { label: "WebSockets", slug: "transports/websockets" },
            { label: "Microservices", slug: "transports/microservices" },
            { label: "Scheduling", slug: "transports/scheduling" },
          ],
        },
        {
          label: "NestForge Web",
          collapsed: false,
          items: [
            { label: "Overview", slug: "nestforge-web/overview" },
            { label: "Routing", slug: "nestforge-web/routing" },
            { label: "Backend Integration", slug: "nestforge-web/backend-integration" },
            { label: "Rendering Modes", slug: "nestforge-web/rendering-modes" },
            { label: "Configuration", slug: "nestforge-web/configuration" },
            { label: "Architecture", slug: "nestforge-web/architecture" },
            { label: "Performance", slug: "nestforge-web/performance" },
            { label: "CLI Reference", slug: "nestforge-web/cli" },
          ],
        },
        {
          label: "Framework Contribution",
          collapsed: true,
          items: [
            { label: "Contributing Guide", slug: "framework/contributing" },
            {
              label: "Crate Architecture",
              slug: "framework/crate-architecture",
            },
            {
              label: "Workspace Structure",
              slug: "framework/workspace-structure",
            },
          ],
        },
      ],
    }),
  ],
});
