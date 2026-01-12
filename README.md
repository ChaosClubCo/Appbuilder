# FlashFusion - High-Performance AI Landing Page

FlashFusion is a modern, high-performance landing page built with React, Tailwind CSS, and Motion (Framer Motion). It features a dark "Glassmorphism" aesthetic with neon blue and orange accents, designed to be mobile-first and **WCAG 2.1 AA accessible**.

## 🎯 Recent Updates (v2.0.0)

### ✨ New Features
- **Interactive Playground**: Live code generation demo with real-time preview
- **Enhanced Accessibility**: WCAG 2.1 AA compliant with skip navigation, ARIA labels, and keyboard navigation
- **Improved CTAs**: Clear, action-oriented button text throughout
- **Form Validation**: Client-side validation with accessible error messages

See [CHANGELOG.md](./CHANGELOG.md) for full details.

## Project Structure

- `/src/app/App.tsx`: Main entry point.
- `/src/app/components/`: Reusable UI components.
  - `Navbar.tsx`: Responsive navigation bar with mobile menu and enhanced accessibility.
  - `SkipNav.tsx`: Skip to main content link for keyboard users.
  - `Hero.tsx`: Immersive hero section with video modal trigger.
  - `VideoModal.tsx`: Accessible modal for demo video.
  - `TrustedBy.tsx`: Infinite scrolling marquee of trusted companies.
  - `Stats.tsx`: Animated statistics counter.
  - `Features.tsx`: Grid of key features.
  - `InteractivePlayground.tsx`: **NEW** - Live code generation sandbox.
  - `ComparisonTable.tsx`: Competitor comparison matrix.
  - `Architecture.tsx`: Visual representation of the RAG pipeline.
  - `WorkflowTabs.tsx`: Interactive step-by-step workflow guide.
  - `Integrations.tsx`: Grid of connected tool logos.
  - `Testimonials.tsx`: Carousel of user reviews using `react-slick`.
  - `Team.tsx`: Team member grid with hover effects.
  - `Pricing.tsx`: Pricing tiers with billing toggle and accessibility improvements.
  - `FAQ.tsx`: Accordion-based frequently asked questions.
  - `BlogPreview.tsx`: Latest articles and insights.
  - `Contact.tsx`: Contact form with validation and accessible error handling.
  - `Newsletter.tsx`: Email subscription section with toast feedback.
  - `AnnouncementBar.tsx`: Dismissible top banner.
  - `ScrollProgress.tsx`: Reading progress indicator.
  - `BackToTop.tsx`: Floating scroll-to-top button.
  - `CustomCursor.tsx`: Custom mouse follower (desktop only).
  - `CookieConsent.tsx`: GDPR-compliant cookie banner.
  - `Search.tsx`: Command palette with keyboard shortcuts (⌘K).
  - `legal/`: Terms and Privacy modals.
  - `ui/`: Shadcn UI components.
  - `figma/`: Figma asset utilities (ImageWithFallback).

## Key Features

1.  **Mobile-First Design**: Fully responsive layout optimized for touch targets and readability.
2.  **Glassmorphism Aesthetic**: Heavy use of backdrop-blur, semi-transparent backgrounds, and subtle borders.
3.  **WCAG 2.1 AA Accessible**: 
    - Skip navigation links
    - ARIA labels and semantic HTML
    - Keyboard navigation support
    - Screen reader optimized
    - Color contrast compliant
    - Focus indicators on all interactive elements
4.  **Performance Optimized**: Image optimization, lazy loading, and efficient animations.
5.  **Interactive Elements**: 
    - Custom cursor
    - Scroll progress bar
    - Smooth scrolling
    - Video modals
    - **Interactive playground**
    - Command palette (⌘K)
    - Hover effects
6.  **Comprehensive Sections**: From "Hero" to "Legal", every aspect of a SaaS landing page is covered.
7.  **Form Validation**: Client-side validation with accessible error messages and proper ARIA attributes.

## Technology Stack

- **Framework**: React 18
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **UI Library**: Shadcn UI (Radix Primitives)
- **Carousel**: React Slick
- **Notifications**: Sonner
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