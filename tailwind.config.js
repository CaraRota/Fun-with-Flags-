/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        particle: {
          '0%': {
            opacity: '1',
            transform: 'translate(-50%, -50%) translate(0px, 0px) scale(1)',
          },
          '100%': {
            opacity: '0',
            transform:
              'translate(-50%, -50%) translate(var(--tx), var(--ty)) scale(0)',
          },
        },
      },
      animation: {
        particle: 'particle 0.5s ease-out forwards',
      },
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
