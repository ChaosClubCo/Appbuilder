# Changelog

All notable changes to FlashFusion Landing Page will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.0] - 2026-04-08

### Fixed 🐛

#### Figma Inspector Prop Warnings
- **DialogTrigger & DialogClose** (`/src/app/components/ui/dialog.tsx`)
  - Filtered out Figma-specific props (`_fgT`, `_fgt`, `_fgS`, `_fgs`, `_fgB`, `_fgb`) that were being passed to DOM elements when using the `asChild` pattern
  - Clones child elements with cleaned props before passing them to Radix UI primitives
  - Eliminates "Unknown prop" React console warnings in development

#### Text Visibility / Contrast Fixes (App-Wide Audit)
- **CookieConsent** (`/src/app/components/layout/CookieConsent.tsx`)
  - Fixed "Decline" button having conflicting `text-white` and `text-[#000000]` classes causing invisible text on dark background
  - Updated to `border-white/20 bg-white/5 text-white hover:bg-white/15` for consistent glassmorphism styling
- **InteractivePlayground** (`/src/app/components/landing/InteractivePlayground.tsx`)
  - Improved quick-example button contrast: increased border opacity, added subtle background (`bg-white/5`), ensured white text on hover, added visible focus ring (`focus-visible:ring-white/30`)

#### Accessibility Improvements
- Added `hideDescription` prop to **PrivacyPolicy.tsx**, **Terms.tsx**, and **VideoModal.tsx** dialogs to suppress "Missing Description or aria-describedby" warnings while maintaining screen reader compliance via a visually hidden description element

### Changed 🔄
- Standardized outline button styling across dark glassmorphism surfaces to use `border-white/20 bg-white/5 text-white hover:bg-white/15` pattern for WCAG AA contrast compliance
- Updated documentation: CHANGELOG, DOCUMENTATION, and COMPONENT_GUIDE to reflect v2.2.0 changes

## [2.0.0] - 2026-01-12

### Added ✨

#### Major Features
- **Interactive Playground Component** (`/src/app/components/InteractivePlayground.tsx`)
  - Live code generation demonstration
  - Real-time preview and code tabs
  - Example prompts for quick testing
  - Copy-to-clipboard functionality
  - Simulated AI generation with loading states
  - Fully accessible with ARIA labels and keyboard navigation

- **Comprehensive Accessibility Enhancements**
  - Skip navigation link for keyboard users
  - ARIA labels on all interactive elements
  - Form validation with accessible error messages
  - Screen reader announcements for dynamic content
  - Keyboard shortcuts properly documented
  - Focus management in modals and menus
  - Semantic HTML improvements across all sections

#### Accessibility Improvements
- **Skip Navigation** (`/src/app/components/SkipNav.tsx`)
  - Keyboard-accessible skip to main content link
  - Visible on focus for screen reader users
  
- **Enhanced Navbar**
  - Proper aria-labels on menu toggle button
  - aria-expanded state for mobile menu
  - Escape key closes mobile menu
  - Improved focus indicators
  - Role="menu" for mobile navigation

- **Contact Form Validation**
  - Client-side validation with error messages
  - Required field indicators
  - aria-invalid and aria-describedby for form fields
  - Toast notifications for submission feedback
  - Accessible error announcements

- **Pricing Component**
  - Screen reader text for feature inclusion status
  - aria-hidden on decorative icons
  - Descriptive button labels
  - Improved color contrast

- **Search Component**
  - Keyboard activation (Enter/Space)
  - aria-label describing keyboard shortcut
  - Enhanced focus styles

#### UI/UX Improvements
- Changed all "Get Started" CTAs to "Start Free Trial" for clarity
- Added proper semantic HTML with section aria-labelledby attributes
- Improved button text for better user understanding
- Enhanced visual focus indicators across all components

### Fixed 🐛
- Removed duplicate CookieConsent component from `/src/app/components/ui-extras/`
- Removed duplicate ScrollToTop components
- Fixed Button component ref forwarding warning
- Consolidated utility functions (removed duplicate `classNames`, now uses unified `cn`)
- Fixed import paths in legal components (PrivacyPolicy, Terms)
- Corrected color contrast issues for WCAG AA compliance
- Fixed missing icons aria-hidden attributes

### Changed 🔄
- Updated all CTAs from "Get Started" to "Start Free Trial" for transparency
- Refactored Pricing component to use shared `cn` utility
- Improved main content landmark with id="main-content"
- Enhanced announcement bar with better dismissal UX
- Standardized focus ring colors to blue-500 across all components

### Developer Experience
- Removed code duplication (3 files deleted)
- Improved component modularity
- Consistent use of utility functions
- Better TypeScript types throughout
- Enhanced code comments and documentation

### Performance
- Removed redundant component imports
- Optimized re-renders in forms
- Improved bundle size by removing duplicates

## [1.0.0] - 2026-01-10

### Initial Release
- Dark Glassmorphism design system
- Mobile-first responsive layout
- 15+ production-ready sections
- Smooth animations with Motion (Framer Motion)
- Custom cursor component
- Video modal integration
- Cookie consent (GDPR compliant)
- Newsletter subscription
- Contact form with toast notifications
- Pricing table with billing toggle
- FAQ accordion
- Team showcase
- Blog preview grid
- Testimonials carousel
- Statistics counters
- Trusted by marquee
- Legal modals (Privacy Policy, Terms)
- Scroll progress indicator
- Back to top button
- Announcement bar

---

## Versioning Strategy

- **Major versions** (X.0.0): Breaking changes, major feature additions, design overhauls
- **Minor versions** (0.X.0): New features, non-breaking improvements
- **Patch versions** (0.0.X): Bug fixes, accessibility improvements, performance optimizations

## Links

- [Project Repository](#)
- [Issue Tracker](#)
- [Documentation](./README.md)
- [UX Audit Report](./UX_AUDIT_REPORT.md)