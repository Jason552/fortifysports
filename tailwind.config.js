/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.php",
    "./resources/**/*.{php,js,ts,tsx,vue}",
    "./resources/views/**/*.php",
  ],
  theme: {
    extend: {
      fontFamily: {
        hind: ['"Hind"'],
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
      },
      fontSize: {
        "12-300": [
          "12px",
          {
            fontWeight: "300",
          },
        ],
      },
    },
  },
  plugins: [],
}

