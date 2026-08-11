/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#080b14",
          850: "#0b0f1c",
          800: "#0f1424",
          700: "#161d33",
          600: "#1e2740",
        },
        accent: {
          DEFAULT: "#22e3c3",
          teal: "#22e3c3",
          blue: "#2ea6ff",
          glow: "#3affd8",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(34,227,195,0.35)",
        card: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseline: {
          "0%": { strokeDashoffset: 40 },
          "100%": { strokeDashoffset: 0 },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
