import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
        border: '#333',
        input: '#444',
        ring: '#555',
        background: '#000',
        foreground: '#fff',
        primary: {
          DEFAULT: '#fff',
          foreground: '#000',
        },
        secondary: {
          DEFAULT: '#222',
          foreground: '#fff',
        },
        destructive: {
          DEFAULT: '#ff0000',
          foreground: '#fff',
        },
        muted: {
          DEFAULT: '#222',
          foreground: '#888',
        },
        accent: {
          DEFAULT: '#333',
          foreground: '#fff',
        },
        popover: {
          DEFAULT: '#000',
          foreground: '#fff',
        },
        card: {
          DEFAULT: '#000',
          foreground: '#fff',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
