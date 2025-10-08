/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4k': '2560px',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '6rem',
        '3xl': '8rem',
        '4k': '10rem',
      },
    },
    extend: {
      keyframes: {
        moveIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        moveIn2: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        borderMove: { to: { '--border-angle': '360deg' } },
        rotateBorder: { to: { '--border-angle': '360deg' } },
      },
      animation: {
        borderMove: 'border 4s linear infinite',
        moveIn: 'moveIn 0.8s ease-out forwards',
        moveIn2: 'moveIn2 0.9s ease-out forwards',
        rotateBorder: 'rotateBorder 3s linear infinite',
      },
      letterSpacing: {
        widest2: '0.4em',
      },
      textShadow: {
        blue: '1px 1px 1px rgba(30, 64, 175, 0.8)',
        green: '1px 1px 1px rgba(22, 163, 74, 0.9)'
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
};


