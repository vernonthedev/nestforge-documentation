// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeSix from '@six-tech/starlight-theme-six';

export default defineConfig({
  integrations: [
    starlight({
      title: 'NestForge Docs',
      description:
        'Detailed documentation for building applications with NestForge and contributing to the framework itself.',
      disable404Route: true,
      customCss: ['./src/styles/starlight-overrides.css'],
      logo: {
        src: './src/assets/logo.svg',
        alt: 'NestForge',
      },
      favicon: '/favicon.svg',
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
              label: 'Quick Start',
              link: '/getting-started/quick-start/',
            },
            {
              label: 'Framework Internals',
              link: '/framework/crate-architecture/',
            },
          ],
          footerText:
            'NestForge documentation for application teams and framework contributors.',
        }),
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Overview', slug: 'getting-started/overview' },
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
            { label: 'CLI Workflow', slug: 'getting-started/cli-workflow' },
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
          label: 'Application Guides',
          items: [
            { label: 'Middleware', slug: 'guides/middleware' },
            { label: 'Guards and Interceptors', slug: 'guides/guards-interceptors' },
            { label: 'Auth and OpenAPI', slug: 'guides/auth-openapi' },
            { label: 'Testing', slug: 'guides/testing' },
            { label: 'Resource Services', slug: 'guides/resource-services' },
            { label: 'Macros', slug: 'guides/macros' },
            { label: 'Data Layer', slug: 'guides/data-layer' },
          ],
        },
        {
          label: 'Transports and Runtime',
          items: [
            { label: 'GraphQL', slug: 'transports/graphql' },
            { label: 'gRPC', slug: 'transports/grpc' },
            { label: 'WebSockets', slug: 'transports/websockets' },
            { label: 'Microservices', slug: 'transports/microservices' },
            { label: 'Scheduling', slug: 'transports/scheduling' },
            { label: 'Caching', slug: 'transports/caching' },
          ],
        },
        {
          label: 'Examples',
          items: [
            { label: 'Hello NestForge', slug: 'examples/hello-nestforge' },
            { label: 'GraphQL Example', slug: 'examples/hello-nestforge-graphql' },
            { label: 'gRPC Example', slug: 'examples/hello-nestforge-grpc' },
            { label: 'WebSocket Example', slug: 'examples/hello-nestforge-websockets' },
            { label: 'Microservices Example', slug: 'examples/hello-nestforge-microservices' },
            { label: 'Example API', slug: 'examples/example-api' },
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
