/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFF8E6',
          100: '#FFEFC2',
          200: '#FFE08A',
          300: '#FFD152',
          400: '#FFC11F',
          500: '#F5A800',
          600: '#D68A00',
          700: '#A96500',
          800: '#7A4700',
          900: '#4D2C00',
        },
      },
    },
  },
  plugins: [],
}

