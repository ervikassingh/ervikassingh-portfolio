import { SiteFooter } from "../components/layout/site-footer";
import { SiteHeader } from "../components/layout/site-header";
import { SitePageShell } from "../components/layout/site-page-shell";
import { ExperienceClient } from "./experience-client";

export default function ExperiencePage() {
	return (
		<SitePageShell>
			<SiteHeader />
			<ExperienceClient />
			<SiteFooter />
		</SitePageShell>
	);
}
