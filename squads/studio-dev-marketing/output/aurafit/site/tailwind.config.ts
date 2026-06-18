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
        bg: "#0A0A0A",
        surface: "#131313",
        surface2: "#1C1C1C",
        green: {
          brand: "#22c55e",
          light: "#4ade80",
          dark: "#16a34a",
        },
        zinc: {
          950: "#09090b",
          900: "#18181b",
          800: "#27272a",
          700: "#3f3f46",
          600: "#52525b",
          500: "#71717a",
          400: "#a1a1aa",
          300: "#d4d4d8",
          200: "#e4e4e7",
          100: "#f4f4f5",
          50:  "#fafafa",
        },
      },
      fontFamily: {
        sans:    ["var(--font-montserrat)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        ticker: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%":     { transform: "translate(30px,-50px) scale(1.1)" },
          "66%":     { transform: "translate(-20px,20px) scale(0.9)" },
        },
        kenBurns: {
          "0%,100%": { transform: "scale(1)" },
          "50%":     { transform: "scale(1.06)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-8px)" },
        },
      },
      animation: {
        ticker:     "ticker var(--dur,40s) linear infinite",
        blob:       "blob 14s ease-in-out infinite",
        "blob-2":   "blob 14s 2s ease-in-out infinite",
        "blob-3":   "blob 14s 4.5s ease-in-out infinite",
        "ken-burns": "kenBurns 22s ease-in-out infinite",
        "fade-up":  "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        float:      "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
