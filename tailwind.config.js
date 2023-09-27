const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.md", "./src/**/*.html", "./src/_includes/**/*.liquid"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    colors: {
      black: "#191919",
      gray: "#ffffffcf",
      white: colors.white,
    },
  },
};
