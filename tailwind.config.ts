import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ["class"],
    theme: {
        container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
        extend: {
            colors: {
                "bleusky-100": "var(--bleusky-100)",
                "bleusky-500": "var(--bleusky-500)",
                "bleusky-600": "var(--bleusky-600)",
                "bleusky-700": "var(--bleusky-700)",
                "greengreen-300": "var(--greengreen-300)",
                "orangeorange-100": "var(--orangeorange-100)",
                "orangeorange-200": "var(--orangeorange-200)",
                "orangeorange-400": "var(--orangeorange-400)",
                "orangeorange-50": "var(--orangeorange-50)",
                "orangeorange-500": "var(--orangeorange-500)",
                "orangeorange-600": "var(--orangeorange-600)",
                "orangeorange-700": "var(--orangeorange-700)",
                "orangeorange-900": "var(--orangeorange-900)",
                "orangeorange-950": "var(--orangeorange-950)",
                "purple-200": "var(--purple-200)",
                "purple-300": "var(--purple-300)",
                "purple-50": "var(--purple-50)",
                "roserose-400": "var(--roserose-400)",
                "roserose-500": "var(--roserose-500)",
                "texticonprimary-black": "var(--texticonprimary-black)",
                "texticonprimary-white": "var(--texticonprimary-white)",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
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
            },
            fontFamily: {
                "h1-semiblod": "var(--h1-semiblod-font-family)",
                "h2-semibold": "var(--h2-semibold-font-family)",
                "h3-light": "var(--h3-light-font-family)",
                "h4-bold": "var(--h4-bold-font-family)",
                "h5-bold": "var(--h5-bold-font-family)",
                "h5-regular": "var(--h5-regular-font-family)",
                "h5-semibold": "var(--h5-semibold-font-family)",
                "h6-light": "var(--h6-light-font-family)",
                "h6-medium": "var(--h6-medium-font-family)",
                "h6-semibold": "var(--h6-semibold-font-family)",
                "paragraphe-p-medium": "var(--paragraphe-p-medium-font-family)",
                "paragraphe-p-regular": "var(--paragraphe-p-regular-font-family)",
                sans: [
                    "ui-sans-serif",
                    "system-ui",
                    "sans-serif",
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ],
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
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [],
};

export default config;
