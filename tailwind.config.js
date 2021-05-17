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
          "@apply w-full mx-auto px-4 py-8 bg-black text-white": {},
          // other styles below...
        },
      })
    ),
  ],
};
