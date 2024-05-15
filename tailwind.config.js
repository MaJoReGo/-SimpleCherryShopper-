/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'pinkPrincipal': '#f28482', 
      'greenTextPrincipal': '#84a59d',
      'pinkie': '#f5cac3',
      'beige': '#f7ede2',
      'yellow': '#f6bd60',
    },
   },
  },
  plugins: [],
}