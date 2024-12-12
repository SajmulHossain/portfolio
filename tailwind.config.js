import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
      },

      backgroundImage: {
        gradient:
          "linear-gradient(225deg, rgba(38,51,224,1) 0%, rgba(42,237,61,1) 100%);",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [daisyui],
};
