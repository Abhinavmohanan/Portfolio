import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://abhinavmohanan.github.io',
  base: 'Portfolio',
  integrations: [react(), tailwind()],
  experimental: { assets: true },
});
