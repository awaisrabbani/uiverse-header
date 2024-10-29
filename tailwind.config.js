/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs' : '576px',
        'sm': '768px',
        'md': '992px',
        'lg': '1023px',
        'xl': '1200px',
      },
      colors: {
        'dark-700': 'rgb(23 23 23)',
        'dark-600': 'rgb(41 41 41)',
        'dark-500': 'rgb(33 33 33)',
      },
    },
  },
  plugins: [],
}