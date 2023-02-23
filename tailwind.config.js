/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgray: "#d1d2d1",
        darkseagreen: { 100: "#8f9d81", 200: "#79955f" },
        white: "#fff",
        black: "#000",
      },
      fontFamily: { inter: "Inter" },
    },
    fontSize: {},
  },
  corePlugins: { preflight: false },
};
