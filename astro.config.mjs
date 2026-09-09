import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';

const staticBuild = process.env.SKIP_KEYSTATIC === 'true';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://specx3d.github.io',
  output: 'static',
  integrations: [
    react(),
    markdoc(),
    sitemap({ filter: (page) => !page.includes('/keystatic') }),
    ...(staticBuild ? [] : [keystatic()]),
  ],
  image: {
    responsiveStyles: true,
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
