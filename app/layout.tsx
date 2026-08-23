import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { ThemeProvider } from "./components/ui/theme-provider";

export const metadata: Metadata = {
	title: {
		default: "Vikas Singh | Senior Backend Engineer",
		template: "%s | ervikassingh.com",
	},
	description:
		"Portfolio of Vikas Singh, a senior backend engineer with 6+ years of experience building NestJS systems, distributed APIs, and agentic AI.",
	openGraph: {
		title: "Vikas Singh | Senior Backend Engineer",
		description:
			"Portfolio of Vikas Singh, a senior backend engineer building NestJS systems, distributed APIs, and agentic AI.",
		url: "https://ervikassingh.com",
		siteName: "Vikas Singh Portfolio",
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		shortcut: "/favicon/favicon.ico",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={[inter.variable, calSans.variable].join(" ")}
			suppressHydrationWarning
		>
			<head />
			<body
				className={`min-h-screen bg-surface text-fg-secondary antialiased ${
					process.env.NODE_ENV === "development" ? "debug-screens" : ""
				}`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
