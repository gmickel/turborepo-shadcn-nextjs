import path from 'node:path';
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'bun run dev',
    url: 'http://localhost:4000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
  testDir: path.join(__dirname, 'tests/e2e'),
  testMatch: '**/*.spec.ts',
  outputDir: path.join(__dirname, 'tests/e2e/coverage'),
  use: {
    baseURL: 'http://localhost:4000',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
};

export default config;
