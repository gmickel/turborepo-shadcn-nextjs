/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: { config: '../../packages/ui/tailwind.config.js' },
    autoprefixer: {},
  },
};

export default config;
