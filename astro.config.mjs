import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel/serverless"; // ← Recomendado para Vercel
import markdoc from "@astrojs/markdoc";
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  output: "static",
  site: 'https://www.nathaliecarvalho.adv.br',
  trailingSlash: 'never',
  adapter: vercel(),

  integrations: [react(), keystatic(), markdoc(), sitemap(), partytown({
      config: { 
        forward: ["dataLayer.push"],
      },
    }),],

  vite: {
    plugins: [tailwind()],
  },
  build: {
    inlineStylesheets: "auto"
  },
});
