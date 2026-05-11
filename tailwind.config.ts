import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["General Sans", "Inter", "system-ui", "sans-serif"]
            },
            colors: {
                matte: {
                    950: "#070503",
                    900: "#0d0a08",
                    800: "#1a1816",
                    700: "#272523"
                },
                neutral: {
                    50: "#f6f2ed",
                    100: "#efe8e0",
                    200: "#e4dbd2",
                    300: "#d2c6bb",
                    400: "#b7a99a",
                    500: "#998675",
                    600: "#7b6a5e",
                    700: "#63534b",
                    800: "#4a413b"
                }
            },
            boxShadow: {
                soft: "0 18px 60px rgba(15, 15, 15, 0.12)",
                elevated: "0 28px 90px rgba(13, 10, 8, 0.15)"
            }
        }
    },
    plugins: []
};

export default config;
