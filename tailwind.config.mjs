/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#F6F0D7',
          sage: '#C5D89D',
          olive: '#9CAB84',
          moss: '#89986D',
          ink: '#1D2416',
        },
        surface: {
          page: 'var(--bg-page)',
          card: 'var(--bg-card)',
          subtle: 'var(--bg-subtle)',
        },
        content: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
        },
        accent: {
          primary: 'var(--accent-primary)',
          hover: 'var(--accent-hover)',
          strong: 'var(--accent-strong)',
        },
        line: {
          DEFAULT: 'var(--border-color)',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        display: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(29, 36, 22, 0.08)',
        card: '0 4px 20px -2px rgba(29, 36, 22, 0.06)',
        elevated: '0 20px 40px -15px rgba(29, 36, 22, 0.14)',
      },
    },
  },
  plugins: [],
};
