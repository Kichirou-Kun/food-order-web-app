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
        YELLOW: "#fef5d5",
        SECONDARY_DARK: "#292A2D",
        PRIMARY_DARK: "#2F3033",
        CHECKOUT_BG: "#333437",
        BG_GRAY: "#F6FAFB",
        SUCCESS: "#3DA496",
        PENDING: "#4FA8EA",
        PREPARING: "#E2A1ED",
      },
      colors: {
        MAIN_COLOR: "#fcdc73",
        DARK_BLUE: "#193948",
        TEXT_GRAY: "#A2A5BF",
        SUCCESS: "#3DA496",
        PENDING: "#4FA8EA",
        PREPARING: "#E2A1ED",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}