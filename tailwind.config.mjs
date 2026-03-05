import { fontFamily } from 'tailwindcss/defaultTheme';
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['DM Sans', ...fontFamily.sans],
        sans: ['Inter', ...fontFamily.sans],
        field: ['Space Grotesk', ...fontFamily.sans],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: '#1C1C2E',
        chalk: '#F7F7F5',
        'sketch-gray': '#6b7280',
        'light-rule': '#e5e7eb',
        'deep-ink': '#0F0F1A',
        'field-blue': '#1D4ED8',
        'field-blue-light': '#3B82F6',
        'field-slate': '#475569',
        'field-white': '#F8FAFC',
        'field-dark': '#1E3A5F',
        'field-grid': '#CBD5E1',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
