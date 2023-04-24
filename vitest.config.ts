import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    includeSource: ['**/*.spec.ts'],
    coverage: {
      all: true,
    },
    reporters: 'verbose',
  },
})
