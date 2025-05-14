/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.css",
  ],
  theme: {
    extend: {
      boxShadow: {
        base: '0 8px 20px rgba(0, 0, 0, 0.08)', // O cualquier valor personalizado
      },
    },
  },
  plugins: [],
};
