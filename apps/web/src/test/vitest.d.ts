/// <reference types="vitest" />

import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare global {
  namespace Vi {
    interface Assertion<T = unknown> extends TestingLibraryMatchers<T, void> {}
    interface AsymmetricMatchersContaining
      extends TestingLibraryMatchers<unknown, void> {}
  }
}
