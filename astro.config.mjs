// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeSix from '@six-tech/starlight-theme-six';

export default defineConfig({
  integrations: [
    starlight({
      title: 'NestForge Docs',
      description:
        'Documentation for building applications with NestForge, with a separate section for framework contributors.',
      disable404Route: true,
      customCss: ['./src/styles/starlight-overrides.css'],
      logo: {
        src: './src/assets/logo.svg',
        alt: 'NestForge',
      },
      favicon: './src/assets/favicon.ico',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/vernonthedev/nestforge',
        },
      ],
      plugins: [
        starlightThemeSix({
          navLinks: [
            {
              label: 'Learning Path',
              link: '/getting-started/learning-path/',
            },
            {
              label: 'Workflows',
              link: '/guides/testing-workflow/',
            },
          ],
          footerText:
            'NestForge docs for application developers, with separate contributor documentation for framework work.',
        }),
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Learning Path', slug: 'getting-started/learning-path' },
            { label: 'Overview', slug: 'getting-started/overview' },
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
            { label: 'Feature Modules', slug: 'getting-started/feature-modules' },
            { label: 'DTOs, Services, and Routes', slug: 'getting-started/dtos-services-routes' },
            { label: 'Build Your First Feature', slug: 'getting-started/build-your-first-feature' },
            { label: 'Database Setup', slug: 'getting-started/database-setup' },
            { label: 'CLI Workflow', slug: 'getting-started/cli-workflow' },
          ],
        },
        {
          label: 'Guided Workflows',
          items: [
            { label: 'Database Workflow', slug: 'guides/database-workflow' },
            { label: 'Auth and OpenAPI Workflow', slug: 'guides/auth-openapi-workflow' },
            { label: 'Testing Workflow', slug: 'guides/testing-workflow' },
            { label: 'GraphQL Workflow', slug: 'transports/graphql-workflow' },
            { label: 'gRPC Workflow', slug: 'transports/grpc-workflow' },
            { label: 'Microservices Workflow', slug: 'transports/microservices-workflow' },
            { label: 'WebSockets Workflow', slug: 'transports/websockets-workflow' },
            { label: 'Scheduling Workflow', slug: 'transports/scheduling-workflow' },
            { label: 'Caching Workflow', slug: 'transports/caching-workflow' },
          ],
        },
        {
          label: 'Examples',
          items: [
            { label: 'Hello NestForge', slug: 'examples/hello-nestforge' },
            { label: 'Database-Backed Users Feature', slug: 'examples/database-backed-users-feature' },
            { label: 'GraphQL Example', slug: 'examples/hello-nestforge-graphql' },
            { label: 'gRPC Example', slug: 'examples/hello-nestforge-grpc' },
            { label: 'WebSocket Example', slug: 'examples/hello-nestforge-websockets' },
            { label: 'Microservices Example', slug: 'examples/hello-nestforge-microservices' },
            { label: 'Example API', slug: 'examples/example-api' },
          ],
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'Architecture', slug: 'concepts/architecture' },
            { label: 'Modules and DI', slug: 'concepts/modules-and-di' },
            { label: 'Controllers and Routing', slug: 'concepts/controllers-routing' },
            { label: 'Request Pipeline', slug: 'concepts/request-pipeline' },
            { label: 'Configuration', slug: 'concepts/configuration' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Middleware', slug: 'guides/middleware' },
            { label: 'Guards and Interceptors', slug: 'guides/guards-interceptors' },
            { label: 'Auth and OpenAPI', slug: 'guides/auth-openapi' },
            { label: 'Testing', slug: 'guides/testing' },
            { label: 'Data Layer', slug: 'guides/data-layer' },
            { label: 'Resource Services', slug: 'guides/resource-services' },
            { label: 'Macros', slug: 'guides/macros' },
            { label: 'GraphQL', slug: 'transports/graphql' },
            { label: 'gRPC', slug: 'transports/grpc' },
            { label: 'Microservices', slug: 'transports/microservices' },
            { label: 'WebSockets', slug: 'transports/websockets' },
            { label: 'Scheduling', slug: 'transports/scheduling' },
            { label: 'Caching', slug: 'transports/caching' },
          ],
        },
        {
          label: 'Framework Internals',
          items: [
            { label: 'Workspace Structure', slug: 'framework/workspace-structure' },
            { label: 'Crate Architecture', slug: 'framework/crate-architecture' },
            { label: 'Public API Surface', slug: 'framework/public-api-surface' },
            { label: 'Macro and Routing Internals', slug: 'framework/macro-routing-internals' },
            { label: 'Testing and Quality', slug: 'framework/testing-and-quality' },
            { label: 'Contributing', slug: 'framework/contributing' },
            { label: 'Release Process', slug: 'framework/release-process' },
          ],
        },
      ],
    }),
  ],
});
