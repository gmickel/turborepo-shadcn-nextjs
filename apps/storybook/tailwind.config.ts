import uiConfig from '@repo/ui/tailwind.config';
import type { Config } from 'tailwindcss';

const config: Config = {
  ...uiConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
    '../../apps/web/src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

export default config;
