module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        wallet: {
          border: "rgba(133, 133, 133, 0.1)",
        },
      },
    },
    boxShadow: {
      innerpod: "rgba(0, 0, 0, 0.06) 0 2px 4px 0 inset",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
