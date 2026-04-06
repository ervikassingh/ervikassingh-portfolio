import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
	showcaseCardHoverClass,
	showcaseCardSurfaceClass,
	showcaseCardTopShineClass,
} from "@/app/styles/classes/cards";
import {
	sectionActionLinkClass,
	sectionHeadingClass,
} from "@/app/styles/classes/sections";
type ShowcaseProject = {
	slug: string;
	path: string;
	title: string;
	description: string;
};

type CurrentRole = {
	title: string;
	company: string;
	startDate: string;
	endDate: string;
	location: string;
};

function projectDisplayTitle(title: string) {
	if (title.includes(".") && !title.includes(" ") && !title.includes("-")) {
		return title.charAt(0).toUpperCase() + title.slice(1);
	}
	return title
		.split(/[-_]/)
		.filter(Boolean)
		.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
		.join(" ");
}

const linkEase =
	"transition-all duration-300 ease-out motion-safe:hover:scale-[1.02] motion-safe:active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100";

type HomeBottomShowcaseProps = {
	projects: ShowcaseProject[];
	currentRole: CurrentRole;
};

export function HomeBottomShowcase({
	projects,
	currentRole,
}: HomeBottomShowcaseProps) {
	return (
		<div className="flex w-full flex-col gap-16 md:gap-20">
			<section aria-labelledby="home-experience-heading">
				<div className="flex items-end justify-between gap-4">
					<h2 id="home-experience-heading" className={sectionHeadingClass}>
						Experience
					</h2>
					<Link href="/experience" className={sectionActionLinkClass}>
						All experience
						<ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0.5" />
					</Link>
				</div>
				<Link
					href="/experience"
					className={`group relative mt-8 flex cursor-pointer flex-col overflow-hidden ${showcaseCardSurfaceClass} ${linkEase} ${showcaseCardHoverClass}`}
				>
					<div className={showcaseCardTopShineClass} />
					<div>
						<p className="text-xs font-medium uppercase tracking-wider text-fg-subtle">
							{currentRole.startDate} - {currentRole.endDate}
						</p>
						<p className="mt-2 font-display text-xl font-semibold text-fg transition-colors duration-200 group-hover:text-fg-secondary">
							{currentRole.title}
						</p>
						<p className="mt-1 text-sm text-fg-muted">{currentRole.company}</p>
						<p className="mt-2 text-xs text-fg-subtle">
							{currentRole.location}
						</p>
					</div>
				</Link>
			</section>

			<section aria-labelledby="home-work-heading">
				<div className="flex items-end justify-between gap-4">
					<h2 id="home-work-heading" className={sectionHeadingClass}>
						Recent work
					</h2>
					<Link href="/projects" className={sectionActionLinkClass}>
						All projects
						<ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0.5" />
					</Link>
				</div>

				<ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{projects.map((p) => (
						<li key={p.slug}>
							<Link
								href={p.path}
								className={`group relative flex h-full cursor-pointer flex-col overflow-hidden ${showcaseCardSurfaceClass} ${linkEase} ${showcaseCardHoverClass}`}
							>
								<div className={showcaseCardTopShineClass} />
								<h3 className="font-display text-base font-semibold text-fg transition-colors duration-200 group-hover:text-fg-secondary">
									{projectDisplayTitle(p.title)}
								</h3>
								<p className="mt-3 flex-1 text-sm leading-relaxed text-fg-muted line-clamp-3 dark:text-fg-subtle">
									{p.description}
								</p>
								<span className="mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-fg-subtle transition-colors duration-200 group-hover:text-fg-secondary">
									View case study
									<ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0.5" />
								</span>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
