import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://alanchester.com',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
  ],
  build: {
    format: 'directory',
  },
});
