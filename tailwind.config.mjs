/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0a0f1d',
        surface: {
          50: '#0f172a',
          100: '#141f36',
          200: '#1b2a4a',
          300: '#253b66',
        },
        primary: {
          DEFAULT: '#3b82f6',
          hover: '#60a5fa',
          deep: '#1e40af',
          dim: 'rgba(59, 130, 246, 0.12)',
        },
        executive: {
          navy: '#1e3a8a',
          gold: '#f59e0b',
          emerald: '#10b981',
          rose: '#ef4444',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          strong: 'rgba(255, 255, 255, 0.16)',
          glow: 'rgba(59, 130, 246, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
