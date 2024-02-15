/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        // Define "negative" breakpoints for a desktop-first approach
        desktop: { max: "1279px" }, // Styles apply for screens smaller than 1280px
        tablet: { max: "1023px" }, // Styles apply for screens smaller than 1024px
        mobile: { max: "639px" }, // Styles apply for screens smaller than 640px
        beforeMobile: { min: "640px" }, // Styles apply for screens smaller than 640px
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        grotesk: ['"Space Grotesk"', "sans-serif"],
        inter: ["Inter", 'sans-serif']

      },
    },
  },
  plugins: [],
};
