/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"]
      },
      backgroundColor: {
        BODY_BG: "#fffcf1",
        YELLOW: "#fef5d5"
      },
      colors: {
        MAIN_COLOR: "#fcdc73",
        DARK_BLUE: "#193948",
        TEXT_GRAY: "#A2A5BF"
      }
    },
  },
  plugins: [],
}