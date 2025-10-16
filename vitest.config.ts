import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    deps: {
      // 'Not' interpret CJS module's default as named exports
      interopDefault: false
    }
  }
});
