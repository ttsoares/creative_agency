/** @type {import('tailwindcss').Config} */
import { platformSelect } from "nativewind/theme";

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontSize: {
        size1: ["5rem", "5.5rem"],
        size2: ["3.5rem", "4rem"],
        size27: ["2.5rem", "2.5rem"],
        size25: ["2rem", "2.5rem"],
        size3: ["1.25rem", "2rem"],
        size4: ["1.125rem", "2rem"],
        size5: [".9375rem", "1rem"],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
      colors: {
        c_black: "rgb(25, 25, 33)",
        c_red: "rgb(249, 79, 79)",
      },
      fontFamily: {
        sans: ["Commissioner", "sans-serif"],
        system: platformSelect({
          ios: "Georgia",
          android: "sans-serif",
          default: "sans",
        }),
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
