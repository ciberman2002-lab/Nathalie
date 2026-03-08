export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bordeaux: "#4a0404",
        gold: "#c5a028",
        "gold-light": "#e8d082",
        "neutral-bg": "#fdfbf7",
      },
      fontFamily: {
        classic: ["Cinzel", "serif"],
        "serif-luxury": ["Playfair Display", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        heroFade: {
          '0%': { opacity: '0', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      },
      animation: {
        'hero-fade': 'heroFade 1.5s ease-out forwards',
      }
    },
  },
  plugins: [],
};
