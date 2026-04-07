"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
	navLinkClass,
	navMobileLinkClass,
} from "@/app/styles/classes/navigation";
import { ThemeToggle } from "../ui/theme-toggle";

export const SITE_NAV = [
	{ name: "Experience", href: "/experience" },
	{ name: "Skills", href: "/skills" },
	{ name: "Projects", href: "/projects" },
	{ name: "Certifications", href: "/certifications" },
] as const;

const headerLayoutClass =
	"fixed inset-x-0 top-0 z-50 border-b border-border/80 backdrop-saturate-150 dark:border-border/50";

const headerFrostDefaultClass =
	"bg-surface/60 backdrop-blur-md supports-[backdrop-filter]:bg-surface/45 dark:bg-surface/55 dark:supports-[backdrop-filter]:bg-surface/40";

const headerFrostProjectClass =
	"bg-surface/50 backdrop-blur-xl supports-[backdrop-filter]:bg-surface/30 dark:bg-surface/45 dark:supports-[backdrop-filter]:bg-surface/22";

export type SiteHeaderProps = {
	trailing?: ReactNode;
	themeToggleClassName?: string;
	/** Stronger glass + lower tint on project detail pages. */
	variant?: "default" | "project";
};

export function SiteHeader({
	trailing,
	themeToggleClassName = "shrink-0",
	variant = "default",
}: SiteHeaderProps) {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const closeMobileNav = useCallback(() => setMobileNavOpen(false), []);

	useEffect(() => {
		if (!mobileNavOpen) return;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeMobileNav();
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [mobileNavOpen, closeMobileNav]);

	useEffect(() => {
		if (!mobileNavOpen) return;
		const mq = window.matchMedia("(min-width: 768px)");
		const onChange = () => {
			if (mq.matches) closeMobileNav();
		};
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, [mobileNavOpen, closeMobileNav]);

	useEffect(() => {
		document.body.style.overflow = mobileNavOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileNavOpen]);

	const frostClass =
		variant === "project" ? headerFrostProjectClass : headerFrostDefaultClass;

	return (
		<header className={`${headerLayoutClass} ${frostClass}`}>
			<div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between gap-3 py-3.5 sm:gap-4 sm:py-4">
					<Link
						href="/"
						onClick={closeMobileNav}
						className="flex shrink-0 items-center font-display text-base font-medium tracking-wide text-fg transition-colors hover:text-fg-secondary sm:text-lg"
					>
						ervikassingh
					</Link>

					<div className="flex min-w-0 flex-1 items-center justify-end gap-1 sm:gap-2 md:gap-4">
						<nav aria-label="Primary" className="hidden md:block">
							<ul className="flex flex-nowrap items-center justify-end gap-6 text-sm font-medium lg:gap-8">
								{SITE_NAV.map((item) => (
									<li key={item.href} className="shrink-0">
										<Link href={item.href} className={navLinkClass}>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						</nav>
						{trailing ? (
							<div className="flex shrink-0 items-center gap-2 sm:gap-3">
								{trailing}
							</div>
						) : null}
						<ThemeToggle className={themeToggleClassName} />
						<button
							type="button"
							className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-surface-elevated/80 hover:text-fg md:hidden"
							aria-expanded={mobileNavOpen}
							aria-controls="site-mobile-nav"
							aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
							onClick={() => setMobileNavOpen((o) => !o)}
						>
							{mobileNavOpen ? (
								<X className="h-5 w-5" aria-hidden />
							) : (
								<Menu className="h-5 w-5" aria-hidden />
							)}
						</button>
					</div>
				</div>

				<div
					id="site-mobile-nav"
					className={`border-t border-border/60 pb-4 pt-1 dark:border-border/50 md:hidden ${
						mobileNavOpen ? "block" : "hidden"
					}`}
					aria-hidden={!mobileNavOpen}
				>
					<nav aria-label="Primary">
						<ul className="flex flex-col">
							{SITE_NAV.map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className={navMobileLinkClass}
										onClick={closeMobileNav}
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}
