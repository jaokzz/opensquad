import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:        '#050505',
        'bg-card': '#0D0D1A',
        'bg-sub':  '#111120',
        purple: {
          DEFAULT: '#7C3AED',
          light:   '#A855F7',
          dark:    '#5B21B6',
          glow:    'rgba(124,58,237,0.25)',
        },
        silver: {
          DEFAULT: '#C8C8D4',
          muted:   '#7A7A8C',
          dark:    '#3A3A4A',
        },
        cream: '#F5F5FA',
      },
      fontFamily: {
        display: ['var(--font-outfit)', 'sans-serif'],
        body:    ['var(--font-dm-sans)', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config
