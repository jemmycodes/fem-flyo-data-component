module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      colors: {
        gradientLightPink: "hsl(6, 100%,80%)",
        gradientDarkPink: "hsl(335, 100%, 65%)",
        paleBlue: "hsl(243, 100%, 93%)",
        grayishBlue: "hsl(229, 7%, 55%)",
        darkBlue: "hsl(228, 56%, 26%)",
        veryDarkBlue: "hsl(229, 57%, 11%)",
      },
    },
  },
  plugins: [],
};
