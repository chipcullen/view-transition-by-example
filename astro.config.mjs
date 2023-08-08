import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [image()],
  server: {
    port: 4000
  },
});
