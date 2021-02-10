const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'

  theme: {
    extend: {
      transitionProperty: {
        // 'height': 'height',
        // 'spacing': 'margin, padding',
        "border-radius": "border-radius",
      },
      spacing: {
        "1/6": "16.66667%",
        "3/5": "60%",
        "2/3": "66.66667%",
        "7/10": "70%",
        "3/4": "75%",
        "4/5": "80%",
        "9/10": "90%",
        "13/10": "130%",
        "4.5": "1.125rem",
      },
      boxShadow: {
        spread: "0px 4px 16px rgba(0, 0, 0, 0.16)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      inset: {
        "1/5": "20%",
        "-1/5": "-20%",
      },
      colors: {
        // primary: "#e4ab81",
        primary: "#db7125",
        secondary: "#F7E6D9",
        light: "#FCF9F3",
        warmGray: colors.warmGray,
      },
      fontFamily: {
        sans: ["Nunito", "system-ui"],
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {
      transitionDuration: ["hover", "focus"],
      borderRadius: ["hover", "focus"],
    },
  },
  plugins: [],
};
