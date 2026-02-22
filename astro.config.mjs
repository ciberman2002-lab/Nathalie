import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel/serverless"; // ← Recomendado para Vercel
import markdoc from "@astrojs/markdoc";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: "static",
  site: 'https://www.nathaliecarvalho.adv.br/',
  adapter: vercel(),

  integrations: [react(), keystatic(), markdoc(), sitemap()],

  vite: {
    plugins: [tailwind()],
  },
});
