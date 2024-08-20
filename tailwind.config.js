/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      red: "hsl(var(--red))",
      green: "hsl(var(--green))",
      "rose-50": "hsl(var(--rose-50))",
      "rose-100": "hsl(var(--rose-100))",
      "rose-300": "hsl(var(--rose-300))",
      "rose-400": "hsl(var(--rose-400))",
      "rose-500": "hsl(var(--rose-500))",
      "rose-900": "hsl(var(--rose-900))",
    },
  },
  plugins: [],
};
