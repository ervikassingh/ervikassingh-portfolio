"use client";

import React from "react";
import languages from "../../../content/languages";
import tools from "../../../content/tools";

export const SkillsMarquee = () => {
	const allSkills = [...languages, ...tools];

	return (
		<div
			className="relative max-h-[180px] overflow-hidden"
			style={{
				maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
				WebkitMaskImage:
					"linear-gradient(to bottom, black 60%, transparent 100%)",
			}}
		>
			<div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4 py-8">
				{allSkills.map((item, index) => (
					<div
						key={`${item.name}-${index}`}
						className="group flex items-center space-x-3 rounded-full border border-border-strong/90 bg-surface-elevated/80 px-5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-border-inverse dark:border-border dark:bg-surface-elevated/45 dark:hover:border-border-strong"
					>
						<img
							src={item.icon}
							alt={item.name}
							className="h-5 w-5 object-contain opacity-70 brightness-0 transition-opacity group-hover:opacity-100 dark:invert"
						/>
						<span className="text-sm font-medium text-fg-muted transition-colors group-hover:text-fg dark:text-fg-muted dark:group-hover:text-fg-secondary">
							{item.name}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};
