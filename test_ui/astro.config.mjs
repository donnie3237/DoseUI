import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [tailwind(), vue(), svelte(), solidJs()]
});