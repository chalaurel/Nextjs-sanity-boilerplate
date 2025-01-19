import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/utils/**/*.{js,ts,jsx,tsx}",
    "./src/interfaces/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        borderAccent: "var(--accent)",
        buttonBg: "var(--background)",
        buttonAccent: "var(--accent-hover)",
        buttonText: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          hover: "var(--primary)",
        },
        secondary: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent)",
        }
      },
      fontFamily: {
        main: ['MainFont'],
      },
      fontWeight: {
        thin: '100',
        regular: '400',
        bold: '700',
      },
      spacing: {
        128: "32rem", // Example custom spacing
        144: "36rem",
      },
      screens: {
        xs: "480px", // Extra small screens (custom breakpoint)
        sm: "640px", // Small screens
        md: "768px", // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra large screens
        "2xl": "1536px", // 2X Large screens
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
    },
  },
  plugins: [
    // require("@tailwindcss/forms"), // Plugin for styled form controls
    // require("@tailwindcss/typography"), // Plugin for better typography
    // require("@tailwindcss/aspect-ratio"), // Plugin for managing aspect ratios
  ],
};

export default tailwindConfig;
