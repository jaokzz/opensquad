import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      "#0F0B07",
        "bg-card": "#1A1208",
        "bg-hover": "#221810",
        amber:   "#E8890C",
        "amber-light": "#F5A633",
        "amber-dim": "#9E5C08",
        cream:   "#F5F0E8",
        red:     "#C0392B",
        wood:    "#8B5E3C",
        "wood-light": "#A67A52",
      },
      fontFamily: {
        bebas:   ["var(--font-bebas)", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        "ember-radial": "radial-gradient(ellipse at bottom, #3D1F0820 0%, transparent 70%)",
        "amber-glow":   "radial-gradient(ellipse at center, #E8890C30 0%, transparent 70%)",
      },
      animation: {
        "marquee":      "marquee 30s linear infinite",
        "marquee-slow": "marquee 50s linear infinite",
        "float":        "float 4s ease-in-out infinite",
        "glow-pulse":   "glowPulse 2s ease-in-out infinite",
        "fade-up":      "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px #E8890C40" },
          "50%":      { boxShadow: "0 0 40px #E8890C80" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
