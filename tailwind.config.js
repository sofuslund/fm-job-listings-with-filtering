/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        boxShadow: {
            "md": "0 23px 15px -7px hsl(180, 29%, 88%)",
        },
        extend: {
            colors: {
                "cyan": "hsl(180, 29%, 50%)",
                "light-gray-bg": "hsl(180, 52%, 96%)",
                "light-gray": "hsl(180, 31%, 95%)",
                "gray": "hsl(180, 8%, 52%)",
                "dark-gray": "hsl(180, 14%, 20%)",
            },
            fontSize: {
                base: "15px", 
            },
            fontFamily: {
                "league-spartan": ["var(--font-league-spartan)"],
            }
        },
    },
    plugins: [],
};
