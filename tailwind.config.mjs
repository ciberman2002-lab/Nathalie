/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Cores extraídas do seu :root
        bordeaux: "#4a0404",
        gold: "#c5a028",
        "gold-light": "#e8d082",
        "neutral-bg": "#fdfbf7",
      },
      fontFamily: {
        // Nomes que você já usa nos seus componentes .tsx
        classic: ["Cinzel", "serif"],
        "serif-luxury": ["Playfair Display", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
