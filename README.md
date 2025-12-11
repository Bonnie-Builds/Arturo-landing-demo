# Bonnie frontend builder demo
This is a demo of (Bonnie)[https://bonniebuilds.com] creating a website from a single prompt.



# Design System Starter

Vite + React + Tailwind starter template for design system generation.

## Stack

- **React 19** - UI framework
- **Tailwind CSS v4** - CSS-first configuration via `@theme` in index.css
- **TanStack Router** - Type-safe routing (code-based)
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Project Structure

```
src/
├── index.css          # Design tokens (@theme block)
├── main.tsx           # App entry point
├── routes/
│   └── index.tsx      # Route definitions
├── components/
│   └── ui/            # Reusable UI components (Button, Card, etc.)
└── sections/          # Landing page sections (Hero, Features, etc.)
```

## Design Tokens

The design agent will update `src/index.css` with extracted tokens:

```css
@theme {
  --color-background: #ffffff;
  --color-primary: #3b82f6;
  --font-sans: "Inter", system-ui, sans-serif;
  --radius-md: 0.5rem;
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
```

## Commands

```bash
pnpm install   # Install dependencies
pnpm dev       # Start dev server on port 3000
pnpm build     # Production build
```
