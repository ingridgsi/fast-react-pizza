/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // Apply automatically for all files
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    // Apply only if we call it
    extend: {
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      height: { screen: "100dvh" },
    },
  },
  plugins: [],
};
