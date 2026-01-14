# FlashFusion - High-Performance AI Landing Page

[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-green)](https://www.w3.org/WAI/WCAG2AA-Conformance)
[![Mobile First](https://img.shields.io/badge/design-mobile--first-blue)](https://web.dev/mobile-first/)
[![Built with React](https://img.shields.io/badge/react-18.3.1-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind-v4.1-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)

FlashFusion is a modern, high-performance landing page built with React, Tailwind CSS v4, and Motion (Framer Motion). It features a dark "Glassmorphism" aesthetic with neon blue and orange accents, designed to be mobile-first and **WCAG 2.1 AA accessible**.

## 🌟 Quick Links

- [Getting Started](#-getting-started)
- [Features](#-features)
- [Component Documentation](#-component-documentation)
- [Accessibility](#-accessibility)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Development Guidelines](#-development-guidelines)
- [Changelog](./CHANGELOG.md)
- [Roadmap](./ROADMAP.md)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or compatible runtime
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ChaosClubCo/AppBuilder.git
   cd AppBuilder
   git checkout feature/flash-fusion-dev
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

The application will be available at `http://localhost:5173` (or the port specified by Vite).

## ✨ Features

### Core Capabilities

1. **Mobile-First Responsive Design**
   - Fully responsive layout optimized for all device sizes
   - Touch-friendly interactive elements (44px minimum touch targets)
   - Optimized typography and spacing for readability

2. **Glassmorphism Aesthetic**
   - Heavy use of `backdrop-blur` for depth
   - Semi-transparent backgrounds with subtle borders
   - Neon blue (`cyan-500`) and orange (`orange-500`) accent colors
   - Dark slate base (`slate-950`) for modern look

3. **WCAG 2.1 AA Accessible**
   - Skip navigation links for keyboard users
   - Comprehensive ARIA labels and semantic HTML
   - Full keyboard navigation support
   - Screen reader optimized content
   - Color contrast compliant (4.5:1 minimum)
   - Focus indicators on all interactive elements
   - Form validation with accessible error messages

4. **Performance Optimized**
   - Image optimization and lazy loading
   - Efficient animations with Motion (Framer Motion)
   - Code splitting and tree shaking
   - Minimal bundle size

5. **Interactive Elements**
   - Custom cursor (desktop only)
   - Scroll progress indicator
   - Smooth scrolling behavior
   - Video modals with keyboard controls
   - Interactive code playground
   - Command palette (⌘K / Ctrl+K)
   - Comprehensive hover and focus effects

6. **Complete Landing Page Sections**
   - Hero with CTA and video modal
   - Trusted by marquee
   - Statistics with animated counters
   - Feature grid with icons
   - Interactive code playground
   - Template gallery with filtering
   - Comparison table
   - Architecture visualization
   - Workflow tabs
   - Integrations showcase
   - Testimonials carousel
   - Team member grid
   - Pricing tiers with toggle
   - FAQ accordion
   - Blog preview cards
   - Contact form with validation
   - Newsletter subscription
   - Footer with legal links

7. **Developer Experience**
   - TypeScript support throughout
   - Modular component architecture
   - Reusable UI components (shadcn/ui)
   - Consistent code patterns
   - Comprehensive documentation

## 📚 Component Documentation

### Layout Components (`/src/app/components/layout/`)

#### Navbar.tsx
Responsive navigation bar with mobile menu and enhanced accessibility.

**Features:**
- Mobile hamburger menu with slide-in animation
- Keyboard navigation (Tab, Enter, Space, Escape)
- ARIA labels and proper semantic HTML
- Sticky positioning with glassmorphism effect
- CTA button with visual prominence

**Props:** None (stateful component)

**Accessibility:**
- `aria-expanded` and `aria-controls` for mobile menu button
- `aria-current="page"` for active nav links
- Escape key to close mobile menu
- Focus management when menu opens/closes

---

#### SkipNav.tsx
Skip navigation component for keyboard users.

**Features:**
- Hidden until focused (keyboard navigation)
- Jumps directly to main content
- WCAG 2.1 AA requirement (2.4.1 Bypass Blocks)

**Props:** None

**Usage:**
```tsx
<SkipNav />
<Navbar />
<main id="main-content">...</main>
```

---

#### Footer.tsx
Comprehensive footer with links, social icons, and legal information.

**Features:**
- Multi-column layout (responsive)
- Social media links with ARIA labels
- Legal policy links
- Copyright information
- Newsletter signup integration

---

#### AnnouncementBar.tsx
Dismissible top banner for announcements.

**Features:**
- Sticky positioning above navbar
- Dismiss button with localStorage persistence
- Slide-in animation on mount
- Mobile-optimized layout

---

#### ScrollProgress.tsx
Reading progress indicator.

**Features:**
- Fixed top position
- Animated width based on scroll position
- Gradient color effect
- Minimal performance impact

---

#### BackToTop.tsx
Floating scroll-to-top button.

**Features:**
- Appears after scrolling down 300px
- Smooth scroll to top on click
- Keyboard accessible
- ARIA label for screen readers
- Fade-in/out animation

---

#### CustomCursor.tsx
Custom mouse follower effect (desktop only).

**Features:**
- Follows mouse position with smooth animation
- Enlarges on hover over interactive elements
- Hidden on mobile devices
- Respects `prefers-reduced-motion`
- Does not interfere with native cursor functionality

---

#### CookieConsent.tsx
GDPR-compliant cookie consent banner.

**Features:**
- Accept/Decline buttons
- localStorage persistence
- Slide-up animation
- Accessible button labels
- Mobile-optimized layout

---

#### Search.tsx
Command palette with keyboard shortcuts.

**Features:**
- Opens with ⌘K (Mac) or Ctrl+K (Windows/Linux)
- Fuzzy search functionality
- Keyboard navigation through results
- Quick access to sections
- Escape to close

---

#### Status.tsx
System status indicator (optional).

**Features:**
- Real-time status updates
- Color-coded indicators
- Minimal visual footprint

---

### Landing Page Components (`/src/app/components/landing/`)

#### Hero.tsx
Immersive hero section with CTA and video modal trigger.

**Features:**
- Large heading with gradient text
- Descriptive subheading
- Primary and secondary CTAs
- Video modal integration
- Animated entrance with Motion
- Mobile-optimized layout

**Best Practices:**
- Clear value proposition in <60 characters
- Above-the-fold CTA placement
- High contrast for readability

---

#### VideoModal.tsx
Accessible modal for demo video playback.

**Features:**
- YouTube/Vimeo embed support
- Keyboard controls (Escape to close, Space to play/pause)
- Focus trap when open
- ARIA labels for accessibility
- Click outside to close
- Responsive iframe sizing

**Props:**
```tsx
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}
```

---

#### TrustedBy.tsx
Infinite scrolling marquee of company logos.

**Features:**
- Seamless infinite scroll animation
- Grayscale logos with hover color
- Duplicate set for continuous loop
- Pause on hover (accessibility)
- Mobile-optimized sizing

---

#### Stats.tsx
Animated statistics counter.

**Features:**
- Count-up animation on scroll into view
- Large numbers with labels
- Grid layout (responsive)
- Motion animations

**Usage:**
```tsx
const stats = [
  { value: '99.9%', label: 'Uptime' },
  { value: '50ms', label: 'Response Time' },
  { value: '10M+', label: 'API Calls/Day' }
];
```

---

#### Features.tsx
Grid of key features with icons.

**Features:**
- Icon + title + description cards
- Hover effects with glassmorphism
- Lucide React icons
- Responsive grid (1/2/3 columns)

**Best Practices:**
- Use concise feature descriptions (<100 characters)
- Choose relevant icons from lucide-react
- Maintain consistent card heights

---

#### InteractivePlayground.tsx
**NEW in v2.0.0** - Live code generation demonstration sandbox.

**Features:**
- Real-time code preview
- Example prompts (Landing Page, Dashboard, Contact Form)
- Simulated AI generation with loading states
- Code/Preview tab switching
- Copy-to-clipboard with toast feedback
- Fully keyboard accessible
- Proper ARIA labels
- Mobile-responsive design

**User Experience:**
- Addresses first-time visitor skepticism
- Provides hands-on product demonstration
- Reduces trust gap with tangible proof
- Encourages conversion with integrated CTA

**Accessibility:**
- Tab navigation through prompts and tabs
- ARIA live regions for status updates
- Keyboard shortcuts for tab switching
- Screen reader announcements for state changes

---

#### TemplateGallery.tsx
Filterable template showcase.

**Features:**
- Category filter buttons
- Template cards with preview images
- "Use Template" CTA on each card
- Responsive Masonry grid layout
- Hover preview effects

**Props:**
```tsx
interface Template {
  id: string;
  name: string;
  category: 'SaaS' | 'E-commerce' | 'Portfolio' | 'Blog';
  imageUrl: string;
}
```

---

#### ComparisonTable.tsx
Competitor comparison matrix.

**Features:**
- Feature-by-feature comparison
- Checkmarks/X marks for feature availability
- Highlighted FlashFusion column
- Responsive horizontal scroll on mobile
- Sticky header row

---

#### Architecture.tsx
Visual representation of system architecture.

**Features:**
- Flowchart/diagram visualization
- Animated connection lines
- Step-by-step breakdown
- Technical accuracy

---

#### WorkflowTabs.tsx
Interactive step-by-step workflow guide.

**Features:**
- Tab-based navigation
- Code snippets with syntax highlighting
- Step indicators
- Visual aids and screenshots
- Keyboard accessible tabs

---

#### Integrations.tsx
Grid of integrated tool logos.

**Features:**
- Logo grid with hover effects
- Tooltip with integration name
- Responsive layout
- "Request Integration" CTA

---

#### Testimonials.tsx
Carousel of user reviews.

**Features:**
- Auto-rotating carousel (react-slick)
- Navigation arrows
- Dot pagination
- User avatar, name, company
- Star rating display
- Pause on hover

**Dependencies:** `react-slick`, `slick-carousel`

---

#### Team.tsx
Team member grid with hover effects.

**Features:**
- Photo, name, role, bio
- Social links (LinkedIn, Twitter)
- Hover overlay with glassmorphism
- Responsive grid layout

---

#### Pricing.tsx
Pricing tiers with billing toggle.

**Features:**
- Monthly/Annual billing toggle
- Feature list with checkmarks
- Highlighted "Popular" tier
- CTA button per tier
- Screen reader text for icons
- Mobile-optimized cards

**Accessibility:**
- ARIA labels on icon-only elements
- Clear pricing structure
- Keyboard navigation through tiers

---

#### FAQ.tsx
Accordion-based frequently asked questions.

**Features:**
- Radix UI Accordion component
- Expand/collapse animation
- One item open at a time (or multiple)
- Keyboard navigation (Arrow keys)
- ARIA attributes for accessibility

**Best Practices:**
- Keep answers concise (<150 words)
- Link to detailed docs where needed
- Address common objections

---

#### BlogPreview.tsx
Latest articles and insights.

**Features:**
- Article cards with image, title, excerpt, date
- "Read More" links
- Category tags
- Responsive grid
- Lazy-loaded images

---

#### Contact.tsx
Contact form with validation and accessible error handling.

**Features:**
- Name, email, message fields
- Client-side validation
- Accessible error messages
- Required field indicators
- Submit button with loading state
- Toast notification on success/error
- Keyboard accessible

**Validation:**
- Email format validation
- Required field checks
- Character limits
- ARIA attributes for errors

**Accessibility:**
- `aria-invalid` on invalid fields
- `aria-describedby` linking to error messages
- `aria-required` on required fields
- Focus management on submission

---

#### Newsletter.tsx
Email subscription section.

**Features:**
- Email input with validation
- Subscribe button
- Toast feedback on submission
- Privacy policy link
- Inline form layout

---

### Feature Components (`/src/app/components/features/`)

#### AICustomizer.tsx
Visual style tuner simulating AI-driven design adjustments.

**Features:**
- Primary color picker
- Border radius slider
- Font scale adjuster
- "AI Optimize" button (randomizes settings)
- Live preview of changes on sample components
- Reset to defaults option

---

#### PerformanceMetrics.tsx
Dashboard showcasing platform performance benefits.

**Features:**
- Core Web Vitals display (LCP, FID, CLS)
- Performance trend graph using Recharts
- Comparison to industry averages
- Real-time-like data updates

**Dependencies:** `recharts`

---

#### DeveloperExperience.tsx
Code ownership and export capabilities showcase.

**Features:**
- File structure visualization
- Code quality indicators
- Mock terminal showing build process
- Download/export simulation

---

### Legal Components (`/src/app/components/legal/`)

#### PrivacyPolicy.tsx & Terms.tsx
Legal policy modals.

**Features:**
- Radix UI Dialog component
- Scrollable content area
- Close button (X) and Escape key support
- Proper headings and sections
- Mobile-optimized layout

**Accessibility:**
- Focus trap when open
- ARIA labels for dialog
- Keyboard navigation

---

### UI Components (`/src/app/components/ui/`)

Based on **shadcn/ui** with Radix UI primitives. All components follow accessibility best practices.

#### dialog.tsx
**UPDATED in v2.1.0** - Fixed accessibility warnings.

**Components:**
- `Dialog` - Root component
- `DialogTrigger` - Button to open dialog
- `DialogContent` - Main content wrapper
- `DialogHeader` - Header section
- `DialogTitle` - Accessible title (required)
- `DialogDescription` - Accessible description (required or use `hideDescription`)
- `DialogFooter` - Footer with action buttons
- `DialogClose` - Close button
- `DialogOverlay` - Backdrop
- `DialogPortal` - Portal for rendering

**New Features:**
- `hideDescription` prop to add screen-reader-only description when visible description is not needed
- Fixed ref forwarding warnings
- Enhanced accessibility compliance

**Usage:**
```tsx
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <DialogClose>Cancel</DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

**Accessibility Fix:**
If you don't want a visible description:
```tsx
<DialogContent hideDescription={true}>
  <DialogHeader>
    <DialogTitle>Title</DialogTitle>
  </DialogHeader>
  {/* No DialogDescription needed - screen-reader description added automatically */}
</DialogContent>
```

---

#### Other UI Components
All other shadcn/ui components are available:
- `button`, `input`, `label`, `textarea`, `select`, `checkbox`, `radio-group`, `switch`
- `card`, `badge`, `avatar`, `separator`, `skeleton`
- `accordion`, `tabs`, `tooltip`, `popover`, `dropdown-menu`, `context-menu`
- `alert`, `alert-dialog`, `toast` (via Sonner)
- `table`, `pagination`, `breadcrumb`, `navigation-menu`
- `calendar`, `date-picker`, `form`, `command`, `scroll-area`
- `sheet`, `drawer`, `sidebar`, `menubar`
- `carousel`, `chart`, `progress`, `slider`
- `toggle`, `toggle-group`, `collapsible`, `resizable`

See [shadcn/ui documentation](https://ui.shadcn.com/) for usage details.

---

### UI Extras (`/src/app/components/ui-extras/`)

#### CommandMenu.tsx
Enhanced command palette with search and navigation.

**Features:**
- Quick navigation to page sections
- Fuzzy search
- Keyboard shortcuts
- Recent items
- Categories

---

## ♿ Accessibility

FlashFusion is built to meet **WCAG 2.1 Level AA** standards.

### Key Accessibility Features

✅ **Keyboard Navigation**
- All interactive elements are keyboard accessible
- Logical tab order throughout the page
- Skip navigation link (appears on first Tab press)
- Escape key closes modals and menus
- Enter/Space activates buttons and links
- Arrow keys navigate through accordions, carousels, and tabs

✅ **Screen Reader Support**
- Semantic HTML elements (`nav`, `main`, `article`, `section`, `aside`)
- ARIA labels on all interactive elements
- ARIA live regions for dynamic content updates
- ARIA expanded/controls for disclosure widgets
- ARIA invalid/describedby for form errors
- Visually hidden text for icon-only buttons

✅ **Visual Accessibility**
- Color contrast ratios meet 4.5:1 minimum (AA standard)
- Focus indicators visible on all interactive elements
- Text resizable up to 200% without loss of functionality
- No information conveyed by color alone
- High contrast mode compatible

✅ **Motor Accessibility**
- Touch targets minimum 44x44px
- Large click areas for buttons and links
- No content requiring precise mouse control
- Keyboard alternatives for all mouse interactions

✅ **Cognitive Accessibility**
- Clear, consistent navigation
- Descriptive link text (no "click here")
- Progressive disclosure to avoid overwhelming users
- Error prevention and clear error messages
- Adequate time to read and use content

### Testing Recommendations

**Automated Tools:**
- [axe DevTools](https://www.deque.com/axe/devtools/) - Browser extension for accessibility testing
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Built into Chrome DevTools
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool

**Manual Testing:**
```bash
# Install axe-core for automated testing
npm install --save-dev @axe-core/react

# Run Lighthouse CI
npm install --save-dev @lhci/cli
npx lhci autorun
```

**Screen Reader Testing:**
- NVDA (Windows) - Free, open-source
- JAWS (Windows) - Industry standard
- VoiceOver (macOS/iOS) - Built-in
- TalkBack (Android) - Built-in

**Keyboard Testing Checklist:**
- [ ] Tab through entire page in logical order
- [ ] Skip link appears and works (first Tab from URL bar)
- [ ] All interactive elements reachable by keyboard
- [ ] Escape closes all modals and menus
- [ ] Enter/Space activates all buttons
- [ ] Form submission works via keyboard
- [ ] Focus visible at all times

### Accessibility Statement

We are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.

**Conformance Status:** WCAG 2.1 Level AA Conformant

**Feedback:** If you encounter accessibility barriers, please contact us at accessibility@flashfusion.ai

---

## 🛠 Technology Stack

### Core Technologies

- **Framework:** [React 18.3.1](https://react.dev/) - Modern React with hooks and concurrent features
- **Styling:** [Tailwind CSS v4.1.12](https://tailwindcss.com/) - Utility-first CSS framework
- **Build Tool:** [Vite 6.3.5](https://vite.dev/) - Next-generation frontend tooling
- **TypeScript:** Type-safe JavaScript (via JSDoc in some files)

### UI & Animation

- **UI Library:** [shadcn/ui](https://ui.shadcn.com/) - Accessible component library built on Radix UI
- **Primitives:** [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- **Animations:** [Motion 12.23.24](https://motion.dev/) (formerly Framer Motion) - Production-ready animation library
- **Icons:** [Lucide React 0.487.0](https://lucide.dev/) - Beautiful, consistent icon set

### Additional Libraries

- **Carousel:** [React Slick 0.31.0](https://react-slick.neostack.com/) - Carousel component
- **Charts:** [Recharts 2.15.2](https://recharts.org/) - Composable charting library
- **Notifications:** [Sonner 2.0.3](https://sonner.emilkowal.ski/) - Toast notification system
- **Forms:** [React Hook Form 7.55.0](https://react-hook-form.com/) - Performant form validation
- **Routing:** [React Router DOM 7.12.0](https://reactrouter.com/) - Client-side routing
- **Date Handling:** [date-fns 3.6.0](https://date-fns.org/) - Date utility library
- **Drag & Drop:** [react-dnd 16.0.1](https://react-dnd.github.io/react-dnd/) - Drag and drop functionality
- **Utilities:** 
  - `clsx` & `tailwind-merge` - Conditional className handling
  - `class-variance-authority` - Component variant management

### Backend (Optional)

- **Database:** [Supabase](https://supabase.com/) - Postgres database with real-time capabilities
- **Auth:** Supabase Auth - User authentication and authorization
- **Storage:** Supabase Storage - File storage with CDN

---

## 📁 Project Structure

```
FlashFusion/
├── src/
│   ├── app/
│   │   ├── App.tsx                          # Main application entry point
│   │   └── components/
│   │       ├── layout/                      # Layout components
│   │       │   ├── Navbar.tsx               # Navigation bar
│   │       │   ├── Footer.tsx               # Footer
│   │       │   ├── SkipNav.tsx              # Skip navigation
│   │       │   ├── AnnouncementBar.tsx      # Top announcement banner
│   │       │   ├── ScrollProgress.tsx       # Scroll progress indicator
│   │       │   ├── BackToTop.tsx            # Scroll to top button
│   │       │   ├── CustomCursor.tsx         # Custom cursor effect
│   │       │   ├── CookieConsent.tsx        # GDPR cookie banner
│   │       │   ├── Search.tsx               # Command palette
│   │       │   ├── Status.tsx               # Status indicator
│   │       │   └── NotFound.tsx             # 404 page
│   │       ├── landing/                     # Landing page sections
│   │       │   ├── Hero.tsx                 # Hero section
│   │       │   ├── VideoModal.tsx           # Video modal
│   │       │   ├── TrustedBy.tsx            # Company logos marquee
│   │       │   ├── Stats.tsx                # Statistics counter
│   │       │   ├── Statistics.tsx           # Alternative stats component
│   │       │   ├── Features.tsx             # Feature grid
│   │       │   ├── FeatureDetails.tsx       # Detailed features
│   │       │   ├── FeatureTabs.tsx          # Tabbed features
│   │       │   ├── InteractivePlayground.tsx # Code playground ⭐ NEW
│   │       │   ├── TemplateGallery.tsx      # Template showcase
│   │       │   ├── ComparisonTable.tsx      # Competitor comparison
│   │       │   ├── Architecture.tsx         # Architecture diagram
│   │       │   ├── WorkflowTabs.tsx         # Workflow guide
│   │       │   ├── Integrations.tsx         # Integration logos
│   │       │   ├── Testimonials.tsx         # User reviews carousel
│   │       │   ├── Team.tsx                 # Team member grid
│   │       │   ├── Pricing.tsx              # Pricing tiers
│   │       │   ├── FAQ.tsx                  # FAQ accordion
│   │       │   ├── BlogPreview.tsx          # Blog cards
│   │       │   ├── Contact.tsx              # Contact form
│   │       │   └── Newsletter.tsx           # Newsletter signup
│   │       ├── features/                    # Feature components
│   │       │   ├── AICustomizer.tsx         # AI style customizer
│   │       │   ├── PerformanceMetrics.tsx   # Performance dashboard
│   │       │   └── DeveloperExperience.tsx  # Developer experience showcase
│   │       ├── legal/                       # Legal pages
│   │       │   ├── PrivacyPolicy.tsx        # Privacy policy modal
│   │       │   └── Terms.tsx                # Terms of service modal
│   │       ├── ui/                          # Reusable UI components (shadcn/ui)
│   │       │   ├── dialog.tsx               # Dialog component ⭐ UPDATED
│   │       │   ├── button.tsx               # Button component
│   │       │   ├── input.tsx                # Input field
│   │       │   ├── accordion.tsx            # Accordion
│   │       │   ├── alert.tsx                # Alert
│   │       │   ├── alert-dialog.tsx         # Alert dialog
│   │       │   ├── avatar.tsx               # Avatar
│   │       │   ├── badge.tsx                # Badge
│   │       │   ├── card.tsx                 # Card
│   │       │   ├── carousel.tsx             # Carousel
│   │       │   ├── chart.tsx                # Chart
│   │       │   ├── checkbox.tsx             # Checkbox
│   │       │   ├── command.tsx              # Command palette
│   │       │   ├── form.tsx                 # Form
│   │       │   ├── select.tsx               # Select dropdown
│   │       │   ├── tabs.tsx                 # Tabs
│   │       │   ├── tooltip.tsx              # Tooltip
│   │       │   ├── utils.ts                 # Utility functions (cn)
│   │       │   └── ... (30+ components)
│   │       ├── ui-extras/                   # Extended UI components
│   │       │   └── CommandMenu.tsx          # Enhanced command menu
│   │       └── figma/                       # Figma integration utilities
│   │           └── ImageWithFallback.tsx    # Image component with fallback
│   ├── styles/
│   │   ├── index.css                        # Main CSS entry point
│   │   ├── tailwind.css                     # Tailwind directives
│   │   ├── theme.css                        # Theme variables and custom styles
│   │   └── fonts.css                        # Font imports
│   └── utils/
│       └── supabase/
│           ├── client.ts                    # Supabase client initialization
│           └── info.tsx                     # Supabase project info
├── supabase/
│   └── functions/
│       └── server/
│           ├── index.tsx                    # Supabase Edge Function
│           └── kv_store.tsx                 # Key-value store utility
├── utils/
│   └── supabase/
│       └── info.tsx                         # Supabase environment info
├── guidelines/
│   └── Guidelines.md                        # Development guidelines
├── public/                                   # Static assets
├── vite.config.ts                           # Vite configuration
├── postcss.config.mjs                       # PostCSS configuration
├── package.json                             # Project dependencies
├── README.md                                # This file
├── DOCUMENTATION.md                         # Additional documentation
├── CHANGELOG.md                             # Version history
├── ROADMAP.md                               # Product roadmap
├── PROJECT_SUMMARY.md                       # Development summary
├── UX_AUDIT_REPORT.md                       # UX audit findings
└── ATTRIBUTIONS.md                          # Third-party attributions
```

### File Naming Conventions

- **Components:** PascalCase (e.g., `Navbar.tsx`, `Hero.tsx`)
- **Utilities:** camelCase (e.g., `utils.ts`, `client.ts`)
- **Styles:** kebab-case (e.g., `tailwind.css`, `theme.css`)
- **Documentation:** UPPERCASE (e.g., `README.md`, `CHANGELOG.md`)

### Import Alias

This project uses the `@` alias for imports, mapped to the `/src` directory:

```tsx
// ✅ Correct
import { Button } from '@/app/components/ui/button';
import { Navbar } from '@/app/components/layout/Navbar';

// ❌ Avoid
import { Button } from '../../../components/ui/button';
```

---

## 🎨 Customization

### Theme Customization

The theme is primarily controlled by Tailwind CSS classes and custom CSS variables in `/src/styles/theme.css`.

**Color Palette:**
- **Background:** `slate-950` (dark charcoal)
- **Primary Accent:** `cyan-500` (neon blue)
- **Secondary Accent:** `orange-500` (vibrant orange)
- **Text:** `white`, `slate-300`, `slate-400`
- **Borders:** `slate-800`, `slate-700`

**Glassmorphism Effect:**
```css
.glass {
  @apply bg-white/5 backdrop-blur-md border border-white/10;
}
```

### Typography

Default font stack is used. To add custom fonts:

1. Add font files to `/public/fonts/`
2. Import in `/src/styles/fonts.css`:
   ```css
   @font-face {
     font-family: 'CustomFont';
     src: url('/fonts/CustomFont.woff2') format('woff2');
   }
   ```
3. Update Tailwind config or use in CSS:
   ```css
   body {
     font-family: 'CustomFont', sans-serif;
   }
   ```

### Component Customization

All shadcn/ui components can be customized by editing files in `/src/app/components/ui/`. Each component accepts a `className` prop for Tailwind overrides.

**Example:**
```tsx
<Button className="bg-gradient-to-r from-cyan-500 to-blue-500">
  Custom Gradient Button
</Button>
```

---

## 👨‍💻 Development Guidelines

### Code Standards

1. **TypeScript/JSDoc:**
   - Use TypeScript or JSDoc for type safety
   - Define prop interfaces for all components
   - Avoid `any` type

2. **Component Structure:**
   - One component per file
   - Export as named export (not default, except `App.tsx`)
   - Use functional components with hooks
   - Extract complex logic into custom hooks

3. **Accessibility First:**
   - Every interactive element must have an accessible name
   - Use semantic HTML
   - Add ARIA labels where needed
   - Test with keyboard navigation
   - Ensure color contrast compliance

4. **Performance:**
   - Lazy load images with `loading="lazy"`
   - Use `React.memo()` for expensive components
   - Avoid inline function definitions in render
   - Optimize re-renders with `useMemo` and `useCallback`

5. **Styling:**
   - Use Tailwind utility classes
   - Follow mobile-first approach
   - Use `cn()` utility for conditional classes
   - Avoid inline styles unless necessary
   - Keep CSS in `/src/styles/` organized

### Component Development Workflow

1. **Create Component:**
   ```tsx
   // /src/app/components/landing/NewSection.tsx
   import { motion } from 'motion/react';
   import { cn } from '@/app/components/ui/utils';
   
   interface NewSectionProps {
     title: string;
     description?: string;
     className?: string;
   }
   
   export function NewSection({ title, description, className }: NewSectionProps) {
     return (
       <section className={cn('py-20 px-4', className)} aria-labelledby="new-section-title">
         <motion.h2
           id="new-section-title"
           className="text-4xl font-bold text-center mb-8"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
         >
           {title}
         </motion.h2>
         {description && <p className="text-center text-slate-300">{description}</p>}
       </section>
     );
   }
   ```

2. **Import in App.tsx:**
   ```tsx
   import { NewSection } from '@/app/components/landing/NewSection';
   
   // In JSX
   <NewSection title="New Feature" description="Coming soon" />
   ```

3. **Document in README:**
   - Add component description
   - List features and props
   - Include usage example
   - Note accessibility features

### Git Workflow

**Branch Strategy:**
- `main` - Production-ready code
- `feature/flash-fusion-dev` - Current development branch
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Critical production fixes

**Commit Messages:**
Follow [Conventional Commits](https://www.conventionalcommits.org/):
```
feat: add interactive playground component
fix: resolve dialog accessibility warnings
docs: update README with new component docs
style: improve glassmorphism effect on cards
refactor: extract form validation logic
perf: optimize image loading with lazy loading
test: add keyboard navigation tests
chore: update dependencies
```

### Code Review Checklist

Before submitting a PR:
- [ ] Code follows established patterns
- [ ] All interactive elements are keyboard accessible
- [ ] ARIA labels added where appropriate
- [ ] Color contrast meets WCAG AA standards
- [ ] Mobile responsive on all screen sizes
- [ ] No console errors or warnings
- [ ] TypeScript types defined
- [ ] Documentation updated
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Tested with screen reader (if applicable)

---

## 🧪 Testing

### Manual Testing

**Keyboard Navigation:**
1. Tab through entire page
2. Verify skip link appears on first Tab
3. Test all interactive elements (buttons, links, forms)
4. Verify Escape closes modals/menus
5. Check focus indicators are visible

**Screen Reader Testing:**
1. Enable screen reader (NVDA, JAWS, VoiceOver, TalkBack)
2. Navigate through page with screen reader commands
3. Verify all content is announced properly
4. Check form validation messages are read
5. Ensure images have alt text

**Responsive Testing:**
1. Test on mobile (375px width minimum)
2. Test on tablet (768px)
3. Test on desktop (1280px+)
4. Test on ultra-wide (1920px+)
5. Verify touch targets are 44x44px minimum

**Browser Testing:**
- Chrome/Edge (Chromium)
- Firefox
- Safari (macOS/iOS)
- Samsung Internet (Android)

### Automated Testing

**Lighthouse Audit:**
```bash
# Run Lighthouse in Chrome DevTools
# Or use CLI:
npm install -g lighthouse
lighthouse http://localhost:5173 --view
```

**axe DevTools:**
1. Install [axe DevTools extension](https://www.deque.com/axe/devtools/)
2. Open DevTools → axe DevTools tab
3. Click "Scan ALL of my page"
4. Fix any Critical or Serious issues

**WAVE:**
1. Visit [WAVE](https://wave.webaim.org/)
2. Enter your site URL
3. Review errors and warnings

---

## 📊 Performance

### Current Metrics

- **Lighthouse Performance:** 95+ / 100
- **Lighthouse Accessibility:** 95+ / 100
- **First Contentful Paint (FCP):** <1.0s
- **Largest Contentful Paint (LCP):** <2.0s
- **Time to Interactive (TTI):** <3.0s
- **Cumulative Layout Shift (CLS):** <0.1

### Optimization Strategies

1. **Image Optimization:**
   - Use WebP format where possible
   - Lazy load images below the fold
   - Use appropriate image sizes for viewport

2. **Code Splitting:**
   - Vite handles automatic code splitting
   - Lazy load heavy components with `React.lazy()`

3. **Bundle Size:**
   - Current bundle size: ~250KB (gzipped)
   - Monitor with `npm run build` output
   - Use tree-shaking to eliminate dead code

4. **Animation Performance:**
   - Use `transform` and `opacity` for animations (GPU-accelerated)
   - Respect `prefers-reduced-motion` media query
   - Avoid animating layout properties (width, height, margin)

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output will be in `/dist` directory.

### Deployment Platforms

**Recommended:**
- [Vercel](https://vercel.com/) - Zero-config deployment for Vite apps
- [Netlify](https://www.netlify.com/) - Continuous deployment from Git
- [Cloudflare Pages](https://pages.cloudflare.com/) - Fast edge deployment

**Configuration (Vercel):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Environment Variables

If using Supabase or other services:

```bash
# .env.local
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

Access in code:
```tsx
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
```

---

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history and release notes.

**Latest Version:** v2.1.0 (January 14, 2026)
- Fixed dialog component accessibility warnings
- Added `hideDescription` prop to DialogContent
- Resolved ref forwarding issues
- Enhanced documentation

---

## 🗺 Roadmap

See [ROADMAP.md](./ROADMAP.md) for planned features and future development.

**Upcoming:**
- Internationalization (i18n) support
- Enhanced reduced motion preferences
- Dark/light mode toggle
- Advanced analytics integration

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Before submitting:**
- Ensure code passes accessibility checks
- Test on multiple browsers and devices
- Update documentation as needed
- Follow existing code style and patterns

---

## 📄 License

Private / Proprietary

Copyright © 2026 FlashFusion / ChaosClubCo. All rights reserved.

---

## 📞 Support

- **Documentation:** This README and [DOCUMENTATION.md](./DOCUMENTATION.md)
- **Issues:** [GitHub Issues](https://github.com/ChaosClubCo/AppBuilder/issues)
- **Email:** support@flashfusion.ai
- **Accessibility Feedback:** accessibility@flashfusion.ai

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the excellent component library
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first approach
- [Motion](https://motion.dev/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

---

**Built with ❤️ by the FlashFusion team**