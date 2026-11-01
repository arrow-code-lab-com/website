// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://arrow-code-lab.com',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
