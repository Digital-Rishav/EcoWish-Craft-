import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ecowish: {
          bg: '#FAF8F3',
          card: '#FFFFFF',
          sand: '#F3EFE6',
          border: '#E8E2D5',
          primary: {
            DEFAULT: '#1B4332',
            hover: '#143326',
            light: '#245640',
          },
          secondary: {
            DEFAULT: '#2D6A4F',
            hover: '#245640',
            light: '#408A68',
          },
          accent: {
            DEFAULT: '#C9A96E',
            hover: '#B59458',
            light: '#E2CB9E',
            dark: '#8E7036',
          },
          charcoal: {
            DEFAULT: '#1E2420',
            muted: '#525B54',
            light: '#849087',
          },
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(27, 67, 50, 0.06), 0 2px 6px -1px rgba(27, 67, 50, 0.04)',
        elevated: '0 12px 36px -4px rgba(27, 67, 50, 0.12), 0 4px 12px -2px rgba(27, 67, 50, 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
