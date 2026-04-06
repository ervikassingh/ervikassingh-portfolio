const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./mdx-components.tsx",
		"content/**/*.mdx",
	],

	theme: {
		extend: {
			colors: {
				surface: "rgb(var(--color-surface) / <alpha-value>)",
				"surface-elevated":
					"rgb(var(--color-surface-elevated) / <alpha-value>)",
				"surface-inverse": "rgb(var(--color-surface-inverse) / <alpha-value>)",
				"surface-inverse-hover":
					"rgb(var(--color-surface-inverse-hover) / <alpha-value>)",
				"surface-inverse-soft":
					"rgb(var(--color-surface-inverse-soft) / <alpha-value>)",
				fg: "rgb(var(--color-fg) / <alpha-value>)",
				"fg-secondary": "rgb(var(--color-fg-secondary) / <alpha-value>)",
				"fg-muted": "rgb(var(--color-fg-muted) / <alpha-value>)",
				"fg-subtle": "rgb(var(--color-fg-subtle) / <alpha-value>)",
				"fg-on-inverse": "rgb(var(--color-fg-on-inverse) / <alpha-value>)",
				"fg-on-inverse-muted":
					"rgb(var(--color-fg-on-inverse-muted) / <alpha-value>)",
				border: "rgb(var(--color-border) / <alpha-value>)",
				"border-strong": "rgb(var(--color-border-strong) / <alpha-value>)",
				"border-inverse": "rgb(var(--color-border-inverse) / <alpha-value>)",
				link: "rgb(var(--color-link) / <alpha-value>)",
				accent: "rgb(var(--color-accent) / <alpha-value>)",
				"accent-soft": "rgb(var(--color-accent-soft) / <alpha-value>)",
				"accent-line": "rgb(var(--color-accent-line) / <alpha-value>)",
				"accent-line-soft":
					"rgb(var(--color-accent-line-soft) / <alpha-value>)",
				"ring-focus": "rgb(var(--color-ring-focus) / <alpha-value>)",
				"code-block": "rgb(var(--color-code-block) / <alpha-value>)",
				"code-inline-bg": "rgb(var(--color-code-inline-bg) / <alpha-value>)",
				"code-inline-fg": "rgb(var(--color-code-inline-fg) / <alpha-value>)",
				"code-line-highlight":
					"rgb(var(--color-code-line-highlight) / <alpha-value>)",
				"code-line-highlight-dark":
					"rgb(var(--color-code-line-highlight-dark) / <alpha-value>)",
				"table-stripe": "rgb(var(--color-table-stripe) / <alpha-value>)",
				"table-border": "rgb(var(--color-table-border) / <alpha-value>)",
				"quote-border": "rgb(var(--color-quote-border) / <alpha-value>)",
				"quote-fg": "rgb(var(--color-quote-fg) / <alpha-value>)",
				"quote-muted": "rgb(var(--color-quote-muted) / <alpha-value>)",
				"display-from": "rgb(var(--color-display-from) / <alpha-value>)",
				"display-via": "rgb(var(--color-display-via) / <alpha-value>)",
				"display-to": "rgb(var(--color-display-to) / <alpha-value>)",
				"timeline-line": "rgb(var(--color-timeline-line) / <alpha-value>)",
				"timeline-dot": "rgb(var(--color-timeline-dot) / <alpha-value>)",
				"timeline-ring": "rgb(var(--color-timeline-ring) / <alpha-value>)",
			},
			typography: {
				DEFAULT: {
					css: {
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
					},
				},
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
			fontFamily: {
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-calsans)"],
			},
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				"fade-in": "fade-in 3s ease-in-out forwards",
				title: "title 3s ease-out forwards",
				"fade-left": "fade-left 3s ease-in-out forwards",
				"fade-right": "fade-right 3s ease-in-out forwards",
				marquee: "marquee 45s linear infinite",
				"hero-rise": "hero-rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
				"marquee-slow": "marquee-slow 55s linear infinite",
				"ambient-drift": "ambient-drift 18s ease-in-out infinite alternate",
				"scroll-hint": "scroll-hint 2.2s ease-in-out infinite",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"75%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"fade-left": {
					"0%": {
						transform: "translateX(100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				"fade-right": {
					"0%": {
						transform: "translateX(-100%)",
						opacity: "0%",
					},

					"30%": {
						transform: "translateX(0%)",
						opacity: "100%",
					},
					"100%": {
						opacity: "0%",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
				"hero-rise": {
					"0%": { opacity: "0", transform: "translateY(14px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"marquee-slow": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
				"ambient-drift": {
					"0%": { transform: "translate(0, 0) scale(1)" },
					"100%": {
						transform: "translate(2%, -3%) scale(1.05)",
					},
				},
				"scroll-hint": {
					"0%": { transform: "translateY(-100%)", opacity: "0" },
					"20%": { opacity: "1" },
					"80%": { opacity: "1" },
					"100%": { transform: "translateY(280%)", opacity: "0" },
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwindcss-debug-screens"),
	],
};
