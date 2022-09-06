/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#1e1e1e'
      },
      keyframes: {
        initFade: {
          '0%': { transform: 'translateY(100%) scale(0)', opacity: 0 },
          '100%': { transform: 'translateY(0%) scale(1)', opacity: 1 }
        }
      },
      animation: {
        initFade: 'initFade 1s ease-in-out'
      },
      backgroundImage: {
        unset: 'unset'
      }
    }
  },
  plugins: []
}
