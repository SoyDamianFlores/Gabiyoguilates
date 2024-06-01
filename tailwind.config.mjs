/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-peach-beige":
          "linear-gradient(120deg, #FFDAB9 0%, #F5F5DC 100%)",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      transitionDelay: {
        2000: "2000ms",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
