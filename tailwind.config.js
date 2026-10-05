/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        incognito: ["var(--incognito)"],
        inter: ["var(--inter)"],
      },
      colors: {
        "primary-color": "#0A66C2",
        "secondary-color": "#004182",
        "tertiary-color": "#0A66C2",
        "primary-bg": "#F3F2EF",
        "secondary-bg": "#F3F2EF",
        zinc: {
          50: "#FFFFFF",
          100: "#F3F2EF",
          200: "#E0E0E0",
          300: "#555555",
          400: "#555555",
          500: "#555555",
          600: "#555555",
          700: "#1B1F23",
          800: "#1B1F23",
          900: "#1B1F23",
          950: "#1B1F23",
        },
      },
      boxShadow: {
        "line-light": "#E0E0E0 0px 1px 0px",
        "line-dark": "#E0E0E0 0px 1px 0px",
      },
      gridTemplateColumns: {
        custom: "1.2fr 1fr",
      },
      gridTemplateRows: {
        fit: "min-content 0fr",
        full: "min-content 1fr",
      },
      backgroundImage: {
        noise: "url('/noise.png')",
      },
      backgroundPosition: {
        zero: "0 0",
      },
    },
  },
  plugins: [],
};
