/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        notable: "Notable",
        poppins: "Poppins",
        "fugaz-one": "'Fugaz One'",
      },
    },
    fontSize: {
      xl: "20px",
      "5xl": "24px",
      "7xl": "26px",
      "17xl": "36px",
      "3xl": "22px",
      "13xl": "32px",
      "4xl": "23px",
      "11xl": "30px",
      "21xl": "40px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  plugins: [],
}

