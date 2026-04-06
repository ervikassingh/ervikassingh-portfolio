import { Navigation } from "../components/layout/nav";
import { PageHero } from "../components/layout/page-hero";
import { SiteFooter } from "../components/layout/site-footer";
import { SitePageShell } from "../components/layout/site-page-shell";
import { siteContentColumnClass } from "@/app/styles/classes/layout";
import languages from "../../content/languages";
import tools from "../../content/tools";

const skillLinkClass =
	"group flex cursor-pointer items-center space-x-4 rounded-lg border border-border-strong/90 bg-surface-elevated/80 px-4 py-2 transition-all duration-300 hover:border-border-inverse dark:border-border-inverse/50 dark:bg-surface-elevated/25 dark:hover:border-border-strong";

export default function SkillsPage() {
	return (
		<SitePageShell>
			<Navigation />
			<PageHero
				title="Skills & technologies"
				description="Languages, frameworks, and platforms I reach for when shipping production Web3 backends, indexers, and full-stack products."
			/>

			<div
				className={`relative z-10 space-y-12 pb-16 pt-10 md:space-y-14 md:pt-14 ${siteContentColumnClass}`}
			>
				<div>
					<div>
						<h3 className="mb-6 font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
							Programming Languages
						</h3>
						<div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
							{languages.map((lang) => (
								<a
									href={lang.link}
									target="_blank"
									rel="noopener noreferrer"
									key={lang.name}
									className={skillLinkClass}
								>
									<div className="flex-shrink-0">
										<img
											src={lang.icon}
											alt={lang.name}
											className="h-auto w-6 brightness-0 dark:invert"
										/>
									</div>
									<span className="font-medium text-fg-secondary transition-colors duration-300 group-hover:text-fg dark:text-fg-muted dark:group-hover:text-fg">
										{lang.name}
									</span>
								</a>
							))}
						</div>
					</div>

					<div className="mt-12">
						<h3 className="mb-6 font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl">
							Tools & Frameworks
						</h3>
						<div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
							{tools.map((tool) => (
								<a
									href={tool.link}
									target="_blank"
									rel="noopener noreferrer"
									key={tool.name}
									className={skillLinkClass}
								>
									<div className="flex-shrink-0">
										<img
											src={tool.icon}
											alt={tool.name}
											className="h-auto w-6 brightness-0 dark:invert"
										/>
									</div>
									<span className="font-medium text-fg-secondary transition-colors duration-300 group-hover:text-fg dark:text-fg-muted dark:group-hover:text-fg">
										{tool.name}
									</span>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
			<SiteFooter />
		</SitePageShell>
	);
}
