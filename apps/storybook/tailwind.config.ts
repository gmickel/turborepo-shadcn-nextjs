import path from 'node:path';
import uiConfig from '@repo/ui/tailwind.config';
import type { Config } from 'tailwindcss';

const config: Config = {
  ...uiConfig,
  content: [
    ...uiConfig.content,
    path.join(__dirname, '**/*.{js,ts,jsx,tsx,mdx}'),
    path.join(__dirname, '.storybook/**/*.{js,ts,jsx,tsx,mdx}'),
  ],
};

export default config;
