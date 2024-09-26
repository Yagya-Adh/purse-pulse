import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        meroColor: {
          "jet-black": "#2a2a29",
          "light-grey": "#a5a6a8",
          "platinum-10": "#e9e5e5",
          "electric-indigo": " #6100ff",
          "dark-gray": " #56595d",
          "white-10": " white",
          "black-10": "black",
        },
      },
      maxWidth: {
        'screen-3xl': '1600px'
      }
    },
  },
  plugins: [],
};
export default config;
