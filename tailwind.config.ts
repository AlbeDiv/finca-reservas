import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-dark': '#1a3a3a',
        'forest': '#2d5a5a',
        'forest-light': '#4a7575',
        'earth': '#8b6f47',
        'earth-light': '#a0845c',
        'cream': '#f5f1e8',
        'cream-dark': '#e8e1d4',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
