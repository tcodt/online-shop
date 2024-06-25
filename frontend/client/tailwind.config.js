/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0064D2",
        "primary-dark": "#2F294D",
        "primary-light": "#e6f0fb",
      },
    },
  },
  plugins: [],
};
