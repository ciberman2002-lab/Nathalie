// import { defineConfig } from "astro/config";
// import react from "@astrojs/react";
// import tailwind from "@tailwindcss/vite";
// import keystatic from "@keystatic/astro";

// export default defineConfig({
//   integrations: [react(), keystatic()],
//   vite: {
//     plugins: [tailwind()],
//   },
//   output: "static", // Mantenha ou adicione esta linha (padrão atual)
// });

// astro.config.mjs

import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@tailwindcss/vite";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel";

export default defineConfig({
  // Use "static" em vez de "hybrid"
  output: "static",

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),

  integrations: [react(), keystatic()],
  vite: {
    plugins: [tailwind()],
  },
});
