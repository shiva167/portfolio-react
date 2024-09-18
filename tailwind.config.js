/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-clockwise-1': 'spin-clockwise-1 10s linear infinite',
        'spin-counterclockwise-1': 'spin-counterclockwise-1 10s linear infinite',
        'spin-clockwise-2': 'spin-clockwise-2 10s linear infinite',
        'spin-counterclockwise-2': 'spin-counterclockwise-2 10s linear infinite',
      },
      keyframes: {
        'spin-clockwise-1': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-counterclockwise-1': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'spin-clockwise-2': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-counterclockwise-2': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      textColor: {
        'transparent': 'transparent',
      },
      fontFamily: {
        codic: ['codic', 'monospace'],
        beauty: ['beauty', 'cursive'],
        defall: ['defall', 'sans-serif'],
        titillium: ['"Titillium Web"', 'sans-serif'],
      },
      backgroundColor: {
        'translucent': 'rgba(0,0,0,0.7)',
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke-1': {
          '-webkit-text-stroke': '1px #fcd34d',
        },
        '.text-fill-transparent': {
          '-webkit-text-fill-color': 'transparent',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
      }, ['responsive', 'hover']);
    },
  ],
};
