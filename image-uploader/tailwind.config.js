/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "progress-bar": "indeterminate-progress-bar 1s linear infinite",
      },
      keyframes: {
        "indeterminate-progress-bar": {
          "0%": { left: "-30%" },
          "100%": { left: "100%" },
        },
      },
    },
  },
  plugins: [],
};
