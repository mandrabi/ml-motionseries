module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Abhaya Libre"', "serif"],
        body: ['"Work Sans"', '"sans serif"'],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
