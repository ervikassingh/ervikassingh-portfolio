"use client";

import Link from "next/link";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import socialsData from "@/content/socials";

const iconMap = {
	Mail,
	Github,
	Linkedin,
	Twitter,
	Instagram,
} as const;

export function SiteFooter() {
	const socials = socialsData.map((social) => {
		const IconComponent = iconMap[social.icon as keyof typeof iconMap];
		return {
			...social,
			icon: <IconComponent size={20} />,
		};
	});

	return (
		<footer className="relative z-10 border-t border-border/90 px-6 py-12 dark:border-border/80">
			<div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
				<span className="text-sm font-medium text-fg-subtle">
					© {new Date().getFullYear()} ervikassingh.com
				</span>
				<div className="flex items-center gap-6">
					{socials.map((social) => (
						<Link
							key={`footer-${social.label}`}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							className="cursor-pointer text-fg-subtle transition-colors duration-200 hover:text-fg"
							aria-label={social.label}
						>
							{social.icon}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}
