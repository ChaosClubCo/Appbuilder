# Changelog

All notable changes to FlashFusion Landing Page will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.0] - 2026-04-08

### Added ✨

#### Video Modal Complete Rebuild (`/src/app/components/landing/VideoModal.tsx`)
- **3-Tab Architecture:** Demo Player | YouTube | Gemini AI — switchable via accessible tab interface
- **YouTube Facade Pattern:** Shows static thumbnail first, loads iframe only on click for optimal performance (Lighthouse best practice). Uses `youtube-nocookie.com` for GDPR privacy-enhanced embedding
- **Interactive Placeholder Player:** Full simulated video controls (play/pause, progress bar, volume, skip, restart, settings, fullscreen), animated code-line overlay during playback, chapter markers for quick navigation
- **Gemini AI Video Generator Panel:** Prompt input with style presets (Cinematic, Animated, Minimal, Documentary), duration selector (15s/30s/60s), audio track options (None, Ambient, Narration, Music), real-time generation log with step-by-step progress, preview with regenerate/use actions
- **Accessibility:** ARIA tablist/tabpanel pattern, `aria-label` on all controls, `focus-visible` rings, keyboard navigable chapter markers, screen reader announcements
- **Performance:** Lazy-loaded images and iframes, no video preloading until user interaction, privacy-enhanced YouTube embedding

### Fixed 🐛

#### Figma Inspector Prop Warnings