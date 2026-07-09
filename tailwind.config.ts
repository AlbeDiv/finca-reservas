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
        // Paleta sugerida: verdes naturales y dorados tierra
        'forest-dark': '#3F6B3F',
        'forest': '#5A8A5A',
        'forest-light': '#7BA37B',
        'earth-gold': '#9C7A3C',
        'earth-light': '#B8956A',
        'cream': '#FAF8F3',
        'cream-dark': '#F5F2E8',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
