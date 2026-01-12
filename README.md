# FlashFusion - High-Performance AI Landing Page

FlashFusion is a modern, high-performance landing page built with React, Tailwind CSS, and Framer Motion. It features a dark "Glassmorphism" aesthetic with neon blue and orange accents, designed to be mobile-first and fully accessible.

## Project Structure

- `/src/app/App.tsx`: Main entry point.
- `/src/app/components/`: Reusable UI components.
  - `Navbar.tsx`: Responsive navigation bar with mobile menu.
  - `Hero.tsx`: Immersive hero section with 3D elements and animations.
  - `Features.tsx`: Grid of key features.
  - `Architecture.tsx`: Visual representation of the RAG pipeline.
  - `TrustedBy.tsx`: Infinite scrolling marquee of trusted companies.
  - `Testimonials.tsx`: Carousel of user reviews using `react-slick`.
  - `Pricing.tsx`: Pricing tiers with billing toggle.
  - `FAQ.tsx`: Accordion-based frequently asked questions.
  - `Contact.tsx`: Contact form with validation styling.
  - `Newsletter.tsx`: Email subscription section.
  - `ui/`: Shadcn UI components.
  - `figma/`: Figma asset utilities (ImageWithFallback).

## Key Features

1.  **Mobile-First Design**: Fully responsive layout optimized for touch targets and readability on small screens.
2.  **Glassmorphism Aesthetic**: Heavy use of backdrop-blur, semi-transparent backgrounds, and subtle borders.
3.  **High Accessibility**: Contrast ratios meet WCAG standards, proper semantic HTML, and focus states.
4.  **Performance Optimized**: Image optimization, lazy loading, and efficient animations.
5.  **Interactive Elements**: Smooth scrolling, hover effects, and entrance animations powered by `framer-motion`.

## Technology Stack

- **Framework**: React 18
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **UI Library**: Shadcn UI (Radix Primitives)
- **Carousel**: React Slick
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run development server:
    ```bash
    npm run dev
    ```

3.  Build for production:
    ```bash
    npm run build
    ```

## Customization

- **Colors**: The theme uses standard Tailwind colors but leans heavily on `slate-950` for backgrounds and `cyan-500` / `orange-500` for accents.
- **Fonts**: Default sans-serif font stack.

## License

Private / Proprietary.
