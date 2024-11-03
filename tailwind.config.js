/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/components/**/*.{html,ts}',
    './src/app/app.component.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['"Comic Sans MS"', 'cursive', 'sans-serif'],
        serif: ['Times New Roman', 'serif'],
      },
      keyframes: {
        flyInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        flyInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        flyInLeft: 'flyInLeft 1s ease-out forwards',
        flyInRight: 'flyInRight 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
