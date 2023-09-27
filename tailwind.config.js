const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.md", "./src/**/*.html", "./src/_includes/**/*.liquid"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    colors: {
      black: "#191919",
      gray: colors.slate,
      white: colors.white,
    },
  },
};
