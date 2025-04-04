import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#B026FF", // Neon Purple
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#D580FF", // Light Purple
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "#D580FF", // Light Purple
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "#B026FF", // Neon Purple
          foreground: "hsl(0 0% 98%)",
        },
        muted: {
          DEFAULT: "#C8C8FF", // Light Purple-Blue for text
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#B026FF", // Neon Purple
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: {
          purple: "#B026FF",
          lightpurple: "#D580FF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-neon": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-neon": "pulse-neon 2s ease-in-out infinite",
      },
      backgroundImage: {
        "neon-grid":
          "linear-gradient(rgba(176, 38, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(176, 38, 255, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        "neon-grid": "30px 30px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

