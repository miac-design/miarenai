import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    DEFAULT: "#0A1628",
                    light: "#141E30",
                },
                teal: {
                    DEFAULT: "#00D4AA",
                    light: "#E6FBF5",
                    dark: "#00B894",
                },
                "soft-white": "#F8FAFB",
                "warm-gray": "#6B7B8D",
                coral: "#FF6B6B",
            },
            fontFamily: {
                sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
                mono: ["var(--font-jetbrains)", "monospace"],
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "fade-up": "fadeUp 0.6s ease-out forwards",
            },
        },
    },
    plugins: [],
};

export default config;