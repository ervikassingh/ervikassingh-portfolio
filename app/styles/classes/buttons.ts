export const heroCtaContent = "inline-flex items-center gap-2";

export const heroCtaShell =
	"origin-center transform-gpu transition-[transform,border-color,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:hover:scale-105 motion-safe:active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100";

/** Outlined pill (e.g. resume). */
export const heroCtaOutlineClass = `group inline-flex cursor-pointer items-center justify-center rounded-full border border-border-strong/90 bg-surface-elevated/90 px-6 py-2.5 text-sm font-medium text-fg-secondary shadow-sm backdrop-blur-sm hover:border-border-inverse hover:bg-surface-elevated hover:shadow-[0_0_28px_-10px_rgb(var(--color-fg-subtle)/0.2)] dark:border-border-inverse/50 dark:bg-surface-elevated/40 dark:text-fg-secondary dark:shadow-none dark:hover:border-border-strong/60 dark:hover:bg-surface-elevated/55 dark:hover:text-fg dark:hover:shadow-[0_0_32px_-8px_rgb(var(--color-fg-muted)/0.12)] ${heroCtaShell}`;

/** Solid pill (e.g. email). */
export const heroCtaSolidClass = `group inline-flex cursor-pointer items-center justify-center rounded-full bg-surface-inverse px-6 py-2.5 text-sm font-medium text-fg-on-inverse shadow-md hover:bg-surface-inverse-hover hover:shadow-[0_0_28px_-10px_rgb(var(--color-surface-inverse)/0.35)] dark:bg-surface-inverse dark:text-fg-on-inverse dark:hover:bg-surface-inverse-hover dark:hover:shadow-[0_0_28px_-10px_rgb(var(--color-fg-on-inverse-muted)/0.25)] ${heroCtaShell}`;
