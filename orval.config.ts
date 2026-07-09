import { defineConfig } from 'orval';

/**
 * Generates typed API client + TanStack Query hooks from the NestJS OpenAPI spec.
 * Run `pnpm gen:api` with the backend running on :4000.
 */
export default defineConfig({
  beacon: {
    input: {
      target: 'http://localhost:4000/api/docs-json',
    },
    output: {
      mode: 'tags-split',
      target: 'src/lib/api/generated',
      schemas: 'src/lib/api/generated/model',
      client: 'react-query',
      httpClient: 'axios',
      clean: true,
      override: {
        mutator: {
          path: 'src/lib/api/mutator.ts',
          name: 'customInstance',
        },
      },
    },
  },
});
