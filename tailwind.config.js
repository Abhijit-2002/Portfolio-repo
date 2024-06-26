/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        byan: "linear-gradient(to right, #3b82f6, #10b981)",
      },
    },
  },
  plugins: [],
};
