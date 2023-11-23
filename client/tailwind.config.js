/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./src/**/*.html", "./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
