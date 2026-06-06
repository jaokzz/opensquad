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
        bg:     "#0F0B07",
        bg2:    "#1A120A",
        bg3:    "#231608",
        amber:  "#E8890C",
        amber2: "#F5A623",
        muted:  "#9A8878",
        red:    "#C0392B",
        wood:   "#8B5E3C",
        cream:  "#F5F0E8",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body:    ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
