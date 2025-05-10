import type { Config } from 'tailwindcss';

import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        padding: '1rem',
        center: true,
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
} satisfies Config;
