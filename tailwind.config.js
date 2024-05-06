/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#B3955A",
        gold2: "#E5C672",
        gold3: "#987B4D",
        orange: "#FFA400",
        grayDark: "#111111",
      },
    },
  },
  plugins: [require("tailwindcss-no-scrollbar")],
};
