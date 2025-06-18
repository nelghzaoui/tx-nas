import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{html,ts,md,analog,ag}'],
  theme: {
    extend: {
      colors: {
        primary: '#4EE1A0',
        onPrimary: '#0F0F0F',
        background: '#151515',
        surface: '#242424',
        onSurface: '#D9D9D9',
        secondary: '#61DAFB',
        error: '#EF4444',
        success: '#22C55E'
      }
    }
  },
  plugins: []
} satisfies Config;
