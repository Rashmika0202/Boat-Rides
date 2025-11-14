/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Merriweather', 'serif'],
        mina: "var(--font-mina)",
        mohave: "var(--font-mohave)",
        molengo: "var(--font-molengo)",
        montserrat: "var(--font-montserrat)",
        petrona: "var(--font-petrona)",
        merriweather: ['Merriweather', 'serif'],
        nokora: ['Nokora', 'serif'],
        muktamalar: ['Mukta Malar', 'sans-serif'],
        nicomoji: ["Nico Moji", "serif"],
        norican: ['Norican', 'cursive'],
      },
      screens: {
        sm: "440px",
        md: "768px",
        lg: "1280px",
        xl: "1720px",
      },
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",

        primary: "#180934",
        green: "#2E3C31",
      },
      container: {
        padding: {
          DEFAULT: "10px",
          xl: "70px",
          lg: "40px",
          md: "16px",
        },
        center: true,
      },
    },
  },
  plugins: [
      require('tailwind-scrollbar-hide')
  ],
}