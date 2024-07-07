import path from 'node:path';
import { defineConfig, devices } from '@playwright/test';

const config = defineConfig({
  testDir: path.join(__dirname, 'tests/e2e'),
  testMatch: '**/*.spec.ts',
  outputDir: path.join(__dirname, 'tests/e2e/coverage'),
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'bun run dev:test',
    url: 'http://localhost:4000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});

export default config;
