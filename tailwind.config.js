/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      mob: "480px",
      tab: "1024px",
      pc: "1280px",
    },
    colors: {
      "blue-primary": "#12CCF4",
      "black-primary": "#062126",
      "orange-new": "#E5661E",
      blue: "#0F97B5",
      brown: "#CF7D4E",
      "new-primary": "#24BEE0",
      "color-shadow": "#24BEE040",
      white: "#ffffff",
    },
    fontFamily: {
      popp: ["Poppins", "sans-serif"],
    },
    extend: {
      fontSize: {
        "fs-72": "72px",
        "fs-64": "64px",
        "fs-48": "48px",
        "fs-24": "24px",
        "fs-20": "20px",
        "fs-18": "18px",
        "fs-16": "16px",
        "fs-14": "14px",
        "fs-12": "12px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("flowbite/plugin"),
    // require("tw-elements/plugin.cjs"),
  ],
};
