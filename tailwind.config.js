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
        "orange-f04c23": "#f04c23",
        "gray-444": "#444",
        "gray-edeef3": "#edeef3",
        "blue-007aff": "#007aff",
        "blue-0e1133": "#0e1133",
      },
      boxShadow: {
        customize: "rgba(9, 30, 66, 0.25) 0px 4px 4px ",
      },
      backgroundImage: {
        "banner-1": "url('../assets/images/banner-bg-1.jpg')",
        "banner-2": "url('../assets/images/banner-bg-2.jpg')",
        "banner-img-1": "url('../assets/images/banner-img-1.png')",
        "banner-img-2": "url('../assets/images/banner-img-2.png')",
        event: "url('../assets/images/events-shape.png')",
      },
      keyframes: {
        rightToLeftKf: {
          from: { transform: "translateX(60px)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        rightToLeft: "rightToLeftKf ease 0.5s",
      },
      fontFamily: {
        signika: "'Signika', sans-serif",
      },
    },
  },
  plugins: [],
};
