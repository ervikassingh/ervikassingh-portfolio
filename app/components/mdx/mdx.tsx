// @ts-nocheck
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import { mdxElementClassNames } from "./mdx-element-classes";

function clsx(...args: (string | undefined | null | false)[]) {
	return args.filter(Boolean).join(" ");
}

const components = {
	h1: ({ className, ...props }) => (
		<h1 className={clsx(mdxElementClassNames.h1, className)} {...props} />
	),
	h2: ({ className, ...props }) => (
		<h2 className={clsx(mdxElementClassNames.h2, className)} {...props} />
	),
	h3: ({ className, ...props }) => (
		<h3 className={clsx(mdxElementClassNames.h3, className)} {...props} />
	),
	h4: ({ className, ...props }) => (
		<h4 className={clsx(mdxElementClassNames.h4, className)} {...props} />
	),
	h5: ({ className, ...props }) => (
		<h5 className={clsx(mdxElementClassNames.h5, className)} {...props} />
	),
	h6: ({ className, ...props }) => (
		<h6 className={clsx(mdxElementClassNames.h6, className)} {...props} />
	),
	a: ({ className, ...props }) => (
		<Link className={clsx(mdxElementClassNames.a, className)} {...props} />
	),
	p: ({ className, ...props }) => (
		<p className={clsx(mdxElementClassNames.p, className)} {...props} />
	),
	ul: ({ className, ...props }) => (
		<ul className={clsx(mdxElementClassNames.ul, className)} {...props} />
	),
	ol: ({ className, ...props }) => (
		<ol className={clsx(mdxElementClassNames.ol, className)} {...props} />
	),
	li: ({ className, ...props }) => (
		<li className={clsx(mdxElementClassNames.li, className)} {...props} />
	),
	blockquote: ({ className, ...props }) => (
		<blockquote
			className={clsx(mdxElementClassNames.blockquote, className)}
			{...props}
		/>
	),
	img: ({
		className,
		alt = "",
		...props
	}: React.ImgHTMLAttributes<HTMLImageElement>) => (
		// eslint-disable-next-line @next/next/no-img-element
		// rome-ignore lint/a11y/useAltText: MDX component - alt text should be provided by content authors
		<img
			className={clsx(mdxElementClassNames.img, className)}
			alt={alt}
			{...props}
		/>
	),
	hr: ({ className, ...props }) => (
		<hr className={clsx(mdxElementClassNames.hr, className)} {...props} />
	),
	table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
		<div className="w-full my-6 overflow-y-auto">
			<table className={clsx("w-full", className)} {...props} />
		</div>
	),
	tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr className={clsx(mdxElementClassNames.tr, className)} {...props} />
	),
	th: ({ className, ...props }) => (
		<th className={clsx(mdxElementClassNames.th, className)} {...props} />
	),
	td: ({ className, ...props }) => (
		<td className={clsx(mdxElementClassNames.td, className)} {...props} />
	),
	pre: ({ className, ...props }) => (
		<pre className={clsx(mdxElementClassNames.pre, className)} {...props} />
	),
	code: ({ className, ...props }) => (
		<code className={clsx(mdxElementClassNames.code, className)} {...props} />
	),
	Image,
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<div className="mdx">
			<Component components={components} />
		</div>
	);
}
