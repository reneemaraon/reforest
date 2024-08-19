/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        belle: ["La Belle Aurore"],
        lora: ["Lora"],
      },
      colors: {
        "theme-base": "#FFFFFF",
        "theme-negative-base": "#000000",
        "text-dark": "#000000",
        "light-text": "#676573",
        "lighter-text": "#B6BCC6",
        "primary-green": "#346C61",
        "primary-green-hv": "#2A564E",
      },
    },
  },
  plugins: [],
};
