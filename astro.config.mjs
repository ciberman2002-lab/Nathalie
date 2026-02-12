import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel/serverless"; // ← Recomendado para Vercel
import markdoc from "@astrojs/markdoc";

export default defineConfig({
  output: "server",

  adapter: vercel(),

  integrations: [react(), keystatic(), markdoc()],

  vite: {
    plugins: [tailwind()],
  },
});
