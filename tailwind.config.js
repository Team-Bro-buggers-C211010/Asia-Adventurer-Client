/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        Montserrat: "Montserrat",
        Roboto: "Roboto",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "forest",
      "luxury",
      "sunset",
      "dim",
      "synthwave",
      "night",
    ],
  },
};
