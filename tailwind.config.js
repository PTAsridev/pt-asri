/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      color: {
        "asrib": "#2482a0",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
