/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        kobi: {
          50: '#fbf4f8',
          100: '#f8ebf2',
          200: '#f3d7e6',
          300: '#ebb6d2',
          400: '#e39dc0',
          500: '#cf6597',
          600: '#bb4778',
          700: '#a13560',
          800: '#862e50',
          900: '#702b45',
          950: '#431426',
        },
      },
    },
  },
  plugins: [],
}
