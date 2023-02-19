import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import AstroPWA from "@vite-pwa/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://bukko.me/",
  integrations: [
    tailwind(), mdx(), sitemap(), react(),
    AstroPWA({
      manifest: {
        name: "特攻の拓総合サイト拓ペディア",
        short_name: "Takpedia",
        icons: [{
          src: "icon/taku-icon.png",
          sizes: "256x256",
          type: "image/png"
        }]
      }
    })
  ]
});