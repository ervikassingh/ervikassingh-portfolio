import { Card } from "../components/ui/card";
import { Navigation } from "../components/layout/nav";
import { PageHero } from "../components/layout/page-hero";
import { SiteFooter } from "../components/layout/site-footer";
import { SitePageShell } from "../components/layout/site-page-shell";
import { siteContentColumnClass } from "@/app/styles/classes/layout";
import { ExternalLink } from "lucide-react";
import certifications from "../../content/certifications";

const credentialCtaClass =
	"inline-flex items-center gap-2 rounded-lg border border-border-strong/90 bg-surface-elevated/90 px-4 py-2 text-xs font-medium text-fg-secondary backdrop-blur-sm transition-all duration-300 group-hover:border-border-inverse group-hover:bg-surface-elevated group-hover:text-fg dark:border-border-inverse/50 dark:bg-surface-elevated/35 dark:text-fg-muted dark:group-hover:border-border-strong/50 dark:group-hover:bg-surface-elevated/40 dark:group-hover:text-fg";

export default function CertificationsPage() {
	return (
		<SitePageShell>
			<Navigation />
			<PageHero
				title="Licenses & certifications"
				description="Formal validation of the skills behind the work - cloud, security, and Web3-adjacent platforms I rely on in production."
			/>

			<div
				className={`relative z-10 pb-16 pt-10 md:pt-14 ${siteContentColumnClass}`}
			>
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
					{certifications.map((cert) => (
						<Card key={cert.credentialId}>
							<a
								href={cert.credentialUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex h-full cursor-pointer flex-col p-6 no-underline outline-none ring-offset-2 ring-offset-surface focus-visible:ring-2 focus-visible:ring-ring-focus md:p-8"
							>
								<div>
									<h3 className="mb-2 font-display text-xl font-bold text-fg sm:text-2xl">
										{cert.title}
									</h3>
									<p className="mb-1 text-sm text-fg-muted">
										{cert.issuingOrganization}
									</p>
									<p className="mb-1 text-sm text-fg-muted">
										Issued {cert.issueDate}
									</p>
									<p className="mb-4 text-xs text-fg-subtle">
										Credential ID: {cert.credentialId}
									</p>

									<ul className="mb-4 list-inside list-disc space-y-1">
										{cert.skills.map((skill) => (
											<li key={skill} className="text-xs text-fg-muted">
												{skill}
											</li>
										))}
									</ul>
								</div>

								<div className="mt-auto flex justify-end">
									<span className={credentialCtaClass}>
										Show credential
										<ExternalLink className="h-3.5 w-3.5" aria-hidden />
									</span>
								</div>
							</a>
						</Card>
					))}
				</div>
			</div>
			<SiteFooter />
		</SitePageShell>
	);
}
