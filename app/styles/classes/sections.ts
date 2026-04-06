export const sectionHeadingClass =
	"text-[10px] font-medium uppercase tracking-[0.28em] text-fg-muted";

export const sectionActionLinkClass =
	"group flex w-fit shrink-0 cursor-pointer items-center text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg";

/** Frosted strip under the fixed header so canvas particles read through. */
export const subpageHeroBackdropClass =
	"bg-surface/65 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-surface/50 dark:bg-surface/50 dark:supports-[backdrop-filter]:bg-surface/38";

export const pageHeroSectionClass = `relative z-10 border-b border-border/90 dark:border-border/60 ${subpageHeroBackdropClass}`;

export const pageHeroTitleClass =
	"font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl md:tracking-tight";

export const pageHeroDescriptionClass =
	"mt-4 max-w-2xl text-base leading-relaxed text-fg-muted md:text-lg";
