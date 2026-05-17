/** @type {import('next').NextConfig} */

import nextra from 'nextra';

const nextConfig = {
  transpilePackages: ['@repo/ui'],
  pageExtensions: ['tsx', 'ts', 'mdx'],
  reactStrictMode: true,
};

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
});

export default withNextra(nextConfig);
