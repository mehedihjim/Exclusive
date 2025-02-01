/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1170px',
      },
      colors: {
        'secondary': '#363738',
        'secondary': '#DB4444',
      },
    },
  },
  plugins: [],
}