/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Outfit", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#07040f",
        plum: "#160b2c",
        orchid: "#c084fc",
        neon: "#fb7185",
        ice: "#67e8f9",
      },
      boxShadow: {
        glow: "0 0 40px rgba(192, 132, 252, 0.25)",
      },
    },
  },
  plugins: [],
};
