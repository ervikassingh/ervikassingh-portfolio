# Portfolio

A modern, customizable portfolio built with Next.js, Tailwind CSS, and MDX. Showcase your projects, skills, and contact information with a clean and responsive design.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
https://github.com/ervikassingh/ervikassingh-portfolio.git
cd ervikassingh-portfolio

# Install dependencies
pnpm install
# or
npm install
# or
yarn install
```

### Development

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Build for Production

```bash
pnpm build
pnpm start
```

## Adding Projects

Add new `.mdx` files to `content/projects/` to showcase new projects. Each file represents a project and supports Markdown + JSX.

## Customization

- **Branding:** Update colors, fonts, and images in `tailwind.config.js` and `public/`.
- **Components:** Edit or add components in `app/components/`.
- **Content:** Modify or add MDX files in `content/projects/`.
