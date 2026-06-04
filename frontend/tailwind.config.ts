import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4A843",
          foreground: "#1A1A1A",
          hover: "#C49A3A",
          light: "#E8C96A",
        },
        secondary: {
          DEFAULT: "#1B3A5C",
          foreground: "#FFFFFF",
          hover: "#152D4A",
          light: "#2D5F8B",
        },
        accent: {
          DEFAULT: "#2D8B4E",
          foreground: "#FFFFFF",
          hover: "#24703F",
        },
        muted: {
          DEFAULT: "#F5F5F0",
          foreground: "#6B7280",
        },
        warm: {
          DEFAULT: "#FAFAF7",
        },
        dark: {
          DEFAULT: "#1C1C1C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-noto-kufi)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["3.5rem", { lineHeight: "4rem", fontWeight: "800" }],
        "display-lg": ["2.25rem", { lineHeight: "2.75rem", fontWeight: "700" }],
        "display-md": ["1.75rem", { lineHeight: "2.25rem", fontWeight: "700" }],
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
      boxShadow: {
        gold: "0 4px 14px rgba(212, 168, 67, 0.25)",
        "gold-lg": "0 8px 25px rgba(212, 168, 67, 0.35)",
        card: "0 4px 6px rgba(0, 0, 0, 0.07)",
        "card-hover": "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "pulse-gold": "pulseGold 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 168, 67, 0.4)" },
          "50%": { boxShadow: "0 0 0 10px rgba(212, 168, 67, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
