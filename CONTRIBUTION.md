# Contributing to Beacon

Welcome to the Beacon project! This document outlines the project structure, design system, and development guidelines to ensure consistency.

## 📁 Directory Structure

We follow a modular component structure to keep the codebase clean and scalable as the app grows.

- **`src/components/layout/`**: For global components that appear across many pages (e.g., `Navbar.tsx`, `Footer.tsx`).
- **`src/components/sections/`**: For feature-specific sections. These are organized by page.
  - *Example*: `src/components/sections/home/Hero.tsx` for the Home page hero.
  - When creating a new page (e.g., `/about`), create a corresponding `sections/about/` folder for its sections.
- **`src/components/ui/`**: For reusable, atomic UI components (e.g., `Button.tsx`, `Card.tsx`). **Always check here first before building a new button or card.**
- **`src/theme/`**: Contains our central design tokens (like `colors.ts`). Use these exported constants if you need to access brand colors in your logic or inline styles.
- **`src/hooks/`**: Custom React hooks (e.g., `use-scroll.ts`). Keep logic separated from UI components whenever possible.

## 🎨 Theme & Styling

Beacon is a **dark-theme only** application. 

### Colors
Our core color palette is defined in `src/theme/colors.ts` and mapped in `src/app/globals.css`.
- **Background**: `#0a0d0f`
- **Cards/Elevated Surfaces**: `#0d1117`
- **Teal Accent (Primary)**: `#00d4aa`
- **Teal Accent (Hover)**: `#00b894`

When applying colors via Tailwind classes, try to use semantic or direct hex values aligned with our palette. For example: `bg-[#0a0d0f]`, `text-[#00d4aa]`.

### UI Components
- **Buttons**: Always use the `<Button>` component from `src/components/ui/Button.tsx`. It supports `variant="primary" | "outline" | "ghost" | "link"` and sizes.
- **Cards**: Use the `<Card>` and `<CardContent>` components from `src/components/ui/Card.tsx` for standard, consistent hover effects and borders.
- **Interactivity**: Ensure all clickable elements (custom links, divs functioning as buttons) have the `cursor-pointer` class.

## 🚀 Adding New Features / Pages

1. **Routing**: Create your new route in `src/app/[route]/page.tsx`.
2. **Sections**: Break the page down into logical sections and build them in `src/components/sections/[route]/`.
3. **UI Elements**: If you build a generic UI element (like a custom input or a switch), place it in `src/components/ui/` so it can be reused.
4. **Icons**: We prefer inline SVG icons to reduce dependencies, keeping them clean and minimal.
5. **Assets**: Place all static assets in `public/`. For images, always use `next/image` (`<Image />`) for performance optimization.

## 🛑 Error Handling
We have custom `not-found.tsx` and `error.tsx` pages. When building new features, consider how they fail and ensure errors are gracefully caught so the user sees our branded error states.

---
