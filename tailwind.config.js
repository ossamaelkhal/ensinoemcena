/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2a55a3',
          DEFAULT: '#1A3D7C',
          dark: '#0f244a',
        },
        secondary: {
          light: '#8e5ec2',
          DEFAULT: '#7A3EB1',
          dark: '#5a2d82',
        },
        accent: {
          light: '#ffe070',
          DEFAULT: '#FFD23F',
          dark: '#cca31f',
        },
        highlight: '#FF6B6B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
