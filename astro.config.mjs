import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel/serverless"; // ← Recomendado para Vercel
import markdoc from "@astrojs/markdoc";

export default defineConfig({
  output: "static",

  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: true, // opcional, se quiser otimização de imagens
  }),

  integrations: [react(), keystatic(), markdoc()],

  vite: {
    plugins: [tailwind()],
  },
});
