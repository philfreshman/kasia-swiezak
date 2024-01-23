import type { Config } from "tailwindcss"

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
    ],
    theme: {
        extend: {
            fontSize: {
                "3xl": "1rem", // Set the desired size for text-3xl
            },
        },
        fontFamily: {
            "minion": "Raleway, serif",
        },
    },
    plugins: [],
} satisfies Config

