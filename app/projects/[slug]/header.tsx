"use client";

import Link from "next/link";
import React from "react";
import { SiteHeader } from "@/app/components/layout/site-header";
import { siteContentColumnClass } from "@/app/styles/classes/layout";
import { subpageHeroBackdropClass } from "@/app/styles/classes/sections";

type Props = {
	project: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
	};
};

export const Header: React.FC<Props> = ({ project }) => {
	const links: { label: string; href: string }[] = [];
	if (project.repository) {
		links.push({
			label: "GitHub",
			href: `https://github.com/${project.repository}`,
		});
	}
	if (project.url) {
		links.push({
			label: "Website",
			href: project.url,
		});
	}

	return (
		<div className="relative isolate z-10 overflow-hidden">
			<SiteHeader />
			<div
				className={`relative isolate border-b border-border/80 pb-16 pt-28 dark:border-border/60 sm:pb-20 sm:pt-32 ${subpageHeroBackdropClass}`}
			>
				<div className={siteContentColumnClass}>
					<div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
						<h1 className="font-display text-4xl font-bold tracking-tight text-fg sm:text-5xl md:text-6xl">
							{project.title}
						</h1>
						<p className="mt-6 text-lg leading-8 text-fg-muted">
							{project.description}
						</p>
					</div>

					{links.length > 0 ? (
						<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
							<div className="flex flex-col items-center gap-y-4 text-base font-semibold leading-7 text-fg sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 lg:justify-start lg:gap-x-10">
								{links.map((link) => (
									<Link
										key={link.label}
										target="_blank"
										rel="noopener noreferrer"
										href={link.href}
										className="text-fg-secondary transition-colors hover:text-fg"
									>
										{link.label} <span aria-hidden="true">&rarr;</span>
									</Link>
								))}
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};
