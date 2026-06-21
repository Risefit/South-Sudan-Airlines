import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core institutional palette
        nile: {
          DEFAULT: "#0A4F75", // Nile Blue
          900: "#072E45",
          700: "#0A4F75",
          500: "#1B6E9C",
          100: "#DCE9F1",
        },
        gold: {
          DEFAULT: "#D4A845", // Papyrus Gold
          600: "#B98C2E",
          300: "#E6CB8A",
        },
        paper: "#FAF6EF", // warm off-white background
        ink: "#1F1F1F", // charcoal text
        slatey: "#595959", // mid-grey support
        // Flag accents — fine punctuation only
        flag: {
          red: "#CE1126",
          green: "#078930",
          black: "#000000",
        },
      },
      fontFamily: {
        // Display serif — Source Serif 4 stands in for licensed Tiempos Headline
        serif: ["var(--font-display)", "Georgia", "serif"],
        // Humanist sans for body + UI
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        site: "1280px",
      },
      letterSpacing: {
        kicker: "0.22em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,79,117,0.04), 0 12px 32px -12px rgba(10,79,117,0.18)",
        widget: "0 8px 40px -12px rgba(7,46,69,0.35)",
      },
      keyframes: {
        "draw-underline": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
