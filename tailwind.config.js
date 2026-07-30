/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        navy: {
          950: "#020817",
          900: "#03102b",
          800: "#061a3f",
          700: "#0a2757",
          600: "#0f3670",
          500: "#154a94",
        },
        accent: {
          500: "#f5a524",
          600: "#e08e0b",
          400: "#ffc266",
        },
        sky: {
          400: "#38bdf8",
          500: "#0ea5e9",
        },
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(3, 16, 43, 0.25)",
        card: "0 8px 30px rgba(3, 16, 43, 0.08)",
        glow: "0 0 40px rgba(56, 189, 248, 0.35)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(2,8,23,0.92) 0%, rgba(6,26,63,0.85) 45%, rgba(10,39,87,0.75) 100%)",
        "navy-gradient": "linear-gradient(135deg, #03102b 0%, #0a2757 100%)",
        "accent-gradient": "linear-gradient(135deg, #f5a524 0%, #ffc266 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
