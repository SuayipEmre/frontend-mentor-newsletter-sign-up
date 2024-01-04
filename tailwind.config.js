/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'active': '0 25px 40px -15px rgba(255, 98, 87, 1)',
      }
    },
  },
  plugins: [],
}