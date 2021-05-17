const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addComponents, theme }) =>
      addComponents({
        ".componentX": {
          // "@apply w-full mx-auto px-4 py-8 bg-black text-white": {},
          width: "100%",
          margin: "0 auto",
          padding: "2rem 1rem",
          background: theme("colors.black"),
          color: "white",
          "@screen sm": { maxWidth: "540px" },
          "@screen md": { maxWidth: "720px" },
          "@screen lg": { maxWidth: "960px" },
          "@screen xl": { maxWidth: "1140px" },
          "@screen 2xl": { maxWidth: "1320px" },
        },
      })
    ),
  ],
};
