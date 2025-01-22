/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "node_modules/preline/dist/*.js",
  ],
  plugins: [
    // require('@tailwindcss/forms'),
    require("preline/plugin"),
  ],
};
