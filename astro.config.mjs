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
      favicon: "./src/assets/favicon.ico",
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
          label: "Application Development",
          items: [
            {
              label: "Getting Started",
              collapsed: false,
              items: [
                { label: "Overview", slug: "getting-started/overview" },
                { label: "Installation", slug: "getting-started/installation" },
                { label: "Quick Start", slug: "getting-started/quick-start" },
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
                { label: "Controllers", slug: "concepts/controllers-routing" },
                { label: "Middleware", slug: "guides/middleware" },
                {
                  label: "Guards & Interceptors",
                  slug: "guides/guards-interceptors",
                },
                { label: "Architecture", slug: "concepts/architecture" },
              ],
            },
            {
              label: "Advanced Techniques",
              collapsed: true,
              items: [
                { label: "OpenAPI Setup", slug: "guides/openapi-from-scratch" },
                { label: "Database (SQL)", slug: "guides/database-workflow" },
                { label: "Database (Mongo)", slug: "guides/mongo-workflow" },
                { label: "Caching (Redis)", slug: "guides/redis-workflow" },
                { label: "Configuration", slug: "concepts/configuration" },
                { label: "Testing", slug: "guides/testing" },
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
          ],
        },
        {
          label: "Framework Contribution",
          items: [
            {
              label: "Internal Docs",
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
        },
      ],
    }),
  ],
});
