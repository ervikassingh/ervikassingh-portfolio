import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { allProjects } from "contentlayer/generated";
import experienceData from "../content/experience";
import languages from "../content/languages";
import tools from "../content/tools";
import { HomeBottomShowcase } from "./components/home/home-bottom-showcase";
import { HomeStackSection } from "./components/home/home-stack-section";
import { ScrollIndicator } from "./components/layout/scroll-indicator";
import { SiteFooter } from "./components/layout/site-footer";
import { SiteHeader } from "./components/layout/site-header";
import { SitePageShell } from "./components/layout/site-page-shell";
import AnimatedText from "./components/ui/animated-text";
import {
	heroCtaContent,
	heroCtaOutlineClass,
	heroCtaSolidClass,
} from "./styles/classes/buttons";
import {
	heroDividerLineClass,
	homeStackSectionClass,
} from "./styles/classes/hero";
import { siteContentColumnClass } from "./styles/classes/site-content-column";

const skillStripItems = [...languages, ...tools];

export default function Home() {
	const featuredSlugs = [
		"custom-ai-agent",
		"prompt-relay-landing",
		"nestjs-microservices-template",
	];

	const featuredProjects = featuredSlugs
		.map((slug) => allProjects.find((p) => p.published && p.slug === slug))
		.filter(Boolean);

	return (
		<SitePageShell particleQuantity={150}>
			<SiteHeader />

			<section className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center pb-16 pt-24 md:min-h-screen md:pb-24">
				<div className="flex w-full flex-col items-center justify-center">
					<div
						className={heroDividerLineClass}
						style={{ animationDelay: "0.1s" }}
					/>
					<div
						className="opacity-0 motion-safe:animate-hero-rise motion-reduce:animate-none motion-reduce:opacity-100"
						style={{ animationDelay: "0.2s" }}
					>
						<AnimatedText text="vikas singh" className="my-2" />
					</div>
					<div
						className={heroDividerLineClass}
						style={{ animationDelay: "0.35s" }}
					/>

					<div
						className="mt-8 max-w-lg px-6 text-center opacity-0 motion-safe:animate-hero-rise motion-reduce:animate-none motion-reduce:opacity-100"
						style={{ animationDelay: "0.5s" }}
					>
						<h2 className="text-lg leading-relaxed text-fg-muted">
							Senior backend engineer with{" "}
							<span className="font-medium tracking-wide text-fg-secondary">
								6+ years of experience
							</span>{" "}
							building NestJS systems, distributed APIs, and agentic AI.
						</h2>
					</div>

					<div
						className="mt-12 flex flex-col items-center gap-8 opacity-0 motion-safe:animate-hero-rise motion-reduce:animate-none motion-reduce:opacity-100"
						style={{ animationDelay: "0.72s" }}
					>
						<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
							<Link
								href="https://drive.google.com/file/d/16v0V8EHss-uXTJhT1Z7p-OESpeJs1LQI/view"
								target="_blank"
								rel="noopener noreferrer"
								className={heroCtaOutlineClass}
							>
								<span className={heroCtaContent}>
									<span>Resume</span>
									<Download className="h-4 w-4 shrink-0" aria-hidden />
								</span>
							</Link>
							<Link
								href="mailto:mail.ervikassingh@gmail.com"
								className={heroCtaSolidClass}
							>
								<span className={heroCtaContent}>
									<span>Get in touch</span>
									<Mail className="h-4 w-4 shrink-0" aria-hidden />
								</span>
							</Link>
						</div>
					</div>
				</div>

				<ScrollIndicator />
			</section>

			<div id="stack" className={homeStackSectionClass}>
				<div
					className={`flex flex-col gap-16 border-t border-border/80 py-14 md:gap-20 md:py-16 dark:border-border/60 ${siteContentColumnClass}`}
				>
					<HomeStackSection items={skillStripItems} />
					<HomeBottomShowcase
						projects={featuredProjects}
						currentRole={experienceData[0]}
					/>
				</div>
			</div>

			<SiteFooter />
		</SitePageShell>
	);
}
