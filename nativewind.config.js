module.exports = {
  theme: {
    extend: {},
  },
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  // 👇 This is the key line: apply `font-sans` to every Text
  defaultStyles: {
    Text: "font-sans",
  },
};
