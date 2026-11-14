/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#F7F4F1',
          900: '#F0EBE5',
          850: '#F5F0EA',
          800: '#FFFEFC',
          700: '#E5DED6',
        },
        electric: {
          300: '#D99A50',
          400: '#D99A50',
          500: '#78452F',
          600: '#5E3425',
        },
        cyan: {
          200: '#A69B91',
          300: '#D99A50',
          400: '#78452F',
          500: '#5E3425',
        },
        slate: {
          100: '#2C2420',
          200: '#2C2420',
          300: '#2C2420',
          400: '#81766D',
          500: '#81766D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        dm: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #78452F 0%, #D99A50 100%)',
      },
    },
  },
  plugins: [],
};
