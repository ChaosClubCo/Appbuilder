# FlashFusion Documentation

Comprehensive documentation for the FlashFusion landing page project.

## 📚 Documentation Index

- **[README.md](./README.md)** - Main project overview, getting started, features
- **[COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md)** - Complete component reference and patterns
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history and release notes
- **[ROADMAP.md](./ROADMAP.md)** - Future features and development plan
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Development summary and accomplishments
- **[UX_AUDIT_REPORT.md](./UX_AUDIT_REPORT.md)** - UX audit findings and recommendations
- **[Guidelines.md](./guidelines/Guidelines.md)** - Custom development guidelines

---

## 🎯 Project Overview

FlashFusion is a high-performance, mobile-first landing page built with React, Tailwind CSS v4, and Motion (Framer Motion). The project emphasizes:

1. **Accessibility First** - WCAG 2.1 AA compliant
2. **Mobile-First Design** - Optimized for all screen sizes
3. **Performance** - Fast load times and smooth animations
4. **Developer Experience** - Clean, maintainable code
5. **Modern Stack** - Latest technologies and best practices

---

## 🏗 Architecture

### Technology Stack

**Frontend:**
- React 18.3.1 - UI framework
- Tailwind CSS v4.1.12 - Styling
- Motion 12.23.24 - Animations
- Vite 6.3.5 - Build tool

**UI Components:**
- shadcn/ui - Component library
- Radix UI - Accessible primitives
- Lucide React - Icons

**Additional Libraries:**
- React Slick - Carousels
- Recharts - Charts
- Sonner - Toast notifications
- React Hook Form - Form validation
- React Router DOM - Routing

### Project Structure

```
/src/app/
├── App.tsx                 # Main entry point
├── components/
│   ├── layout/            # Layout components (Navbar, Footer, etc.)
│   ├── landing/           # Landing page sections
│   ├── features/          # Feature demonstrations
│   ├── legal/             # Legal pages
│   ├── ui/                # Reusable UI components (shadcn/ui)
│   ├── ui-extras/         # Extended UI components
│   └── figma/             # Figma integration utilities
├── styles/
│   ├── index.css          # Main CSS
│   ├── tailwind.css       # Tailwind directives
│   ├── theme.css          # Theme variables
│   └── fonts.css          # Font imports
└── utils/
    └── supabase/          # Supabase utilities (optional)
```

### Component Architecture

**Layout Components** provide the structural framework:
- Navbar with mobile menu
- Footer with links
- Skip navigation for accessibility
- Scroll progress indicator
- Cookie consent banner

**Landing Page Components** make up the content sections:
- Hero with CTA and video modal
- Feature showcase
- Interactive playground (NEW in v2.0.0)
- Template gallery
- Pricing tiers
- Testimonials carousel
- Contact form
- FAQ accordion

**UI Components** are reusable building blocks:
- Buttons, inputs, forms
- Dialogs, modals, sheets
- Accordions, tabs, tooltips
- Cards, badges, avatars
- All based on shadcn/ui

---

## ✨ Features

### 1. Interactive Playground (v2.0.0)

Live code generation demonstration sandbox.

**Location:** `/src/app/components/landing/InteractivePlayground.tsx`

**Functionality:**
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

**Technical Implementation:**
```tsx
const [selectedPrompt, setSelectedPrompt] = useState('');
const [generatedCode, setGeneratedCode] = useState('');
const [isGenerating, setIsGenerating] = useState(false);
const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');

// Simulates AI code generation
const handleGenerate = async (prompt: string) => {
  setIsGenerating(true);
  // Simulate delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  setGeneratedCode(prompts.find(p => p.id === prompt).code);
  setIsGenerating(false);
};
```

---

### 2. Template Gallery

Filterable collection of AI-generated templates.

**Location:** `/src/app/components/landing/TemplateGallery.tsx`

**Functionality:**
- Filter templates by category (SaaS, E-commerce, Portfolio, Blog)
- Display templates in responsive grid
- Hover effects with glassmorphism
- "Use Template" CTA on each card
- Lazy-loaded images

**Data Structure:**
```tsx
interface Template {
  id: string;
  name: string;
  category: 'SaaS' | 'E-commerce' | 'Portfolio' | 'Blog';
  imageUrl: string;
  description?: string;
}
```

---

### 3. AI Customizer

Visual style tuner simulating AI-driven design adjustments.

**Location:** `/src/app/components/features/AICustomizer.tsx`

**Functionality:**
- Adjust primary color, border radius, and font scale
- "AI Optimize" button randomizes settings to simulate AI suggestions
- Live preview of changes on sample components
- Reset to defaults option

**State Management:**
```tsx
const [settings, setSettings] = useState({
  primaryColor: '#06b6d4', // cyan-500
  borderRadius: 8,
  fontScale: 1,
});

const handleAIOptimize = () => {
  setSettings({
    primaryColor: getRandomColor(),
    borderRadius: Math.floor(Math.random() * 20),
    fontScale: 0.8 + Math.random() * 0.4,
  });
};
```

---

### 4. Performance Metrics

Dashboard showcasing platform performance benefits.

**Location:** `/src/app/components/features/PerformanceMetrics.tsx`

**Functionality:**
- Display Core Web Vitals (LCP, FID, CLS)
- Performance trend graph using Recharts
- Comparison to industry averages
- Real-time-like data updates

**Chart Implementation:**
```tsx
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', flashfusion: 95, average: 75 },
  { month: 'Feb', flashfusion: 96, average: 76 },
  // ...
];

<LineChart data={data}>
  <Line type="monotone" dataKey="flashfusion" stroke="#06b6d4" />
  <Line type="monotone" dataKey="average" stroke="#94a3b8" />
</LineChart>
```

**Dependencies:** `recharts`

---

### 5. Developer Experience Showcase

Highlighting code ownership and export capabilities.

**Location:** `/src/app/components/features/DeveloperExperience.tsx`

**Functionality:**
- Visualize file structure
- Display code quality indicators
- Mock terminal showing build process
- Download/export simulation

---

### 6. Comprehensive Accessibility (v2.0.0)

Full WCAG 2.1 AA compliance implementation.

**Key Features:**
- Skip navigation link for keyboard users
- ARIA labels on all interactive elements
- Keyboard navigation support (Tab, Enter, Space, Escape)
- Screen reader optimized content
- Color contrast compliance (4.5:1 minimum)
- Focus indicators on all interactive elements
- Form validation with accessible error messages

**WCAG 2.1 Compliance:**
- ✅ 1.3.1 Info and Relationships - Semantic HTML
- ✅ 2.1.1 Keyboard - Full keyboard navigation
- ✅ 2.4.1 Bypass Blocks - Skip navigation
- ✅ 2.4.7 Focus Visible - Enhanced focus indicators
- ✅ 3.3.1 Error Identification - Form validation
- ✅ 3.3.2 Labels or Instructions - Required fields marked
- ✅ 4.1.2 Name, Role, Value - ARIA labels on all interactive elements

**Implementation Examples:**

Skip Navigation:
```tsx
// SkipNav.tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-blue-500 focus:text-white"
>
  Skip to main content
</a>
```

Form Validation:
```tsx
<input
  id="email"
  type="email"
  aria-invalid={!!errors.email}
  aria-describedby={errors.email ? "email-error" : undefined}
  aria-required="true"
/>
{errors.email && (
  <p id="email-error" className="text-red-500 text-sm">
    {errors.email}
  </p>
)}
```

---

## ♿ Accessibility

### Core Principles

1. **Semantic HTML First**
   - Use `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`
   - Proper heading hierarchy (h1 → h2 → h3)
   - Lists use `<ul>`, `<ol>`, `<dl>`

2. **ARIA When Needed**
   - Add `aria-label` for icon-only buttons
   - Use `aria-expanded` for expandable sections
   - Include `aria-invalid` and `aria-describedby` for form errors
   - Implement ARIA live regions for dynamic updates

3. **Keyboard Navigation**
   - All interactive elements keyboard accessible
   - Logical tab order
   - Escape closes modals/menus
   - Enter/Space activates buttons

4. **Visual Accessibility**
   - 4.5:1 color contrast minimum
   - Visible focus indicators
   - Text resizable to 200%
   - No color-only information

### Testing Workflow

1. **Automated Testing:**
   ```bash
   # Install axe-core
   npm install --save-dev @axe-core/react
   
   # Run Lighthouse
   npx lighthouse http://localhost:5173 --view
   ```

2. **Manual Keyboard Testing:**
   - Tab through entire page
   - Verify skip link appears on first Tab
   - Test all interactive elements
   - Verify Escape closes modals
   - Check focus indicators visible

3. **Screen Reader Testing:**
   - NVDA (Windows)
   - JAWS (Windows)
   - VoiceOver (macOS/iOS)
   - TalkBack (Android)

4. **Browser Testing:**
   - Chrome/Edge
   - Firefox
   - Safari
   - Mobile browsers

---

## 🎨 Theming & Styling

### Color System

**Base Colors:**
- Background: `slate-950` (#020617)
- Primary Accent: `cyan-500` (#06b6d4)
- Secondary Accent: `orange-500` (#f97316)
- Text: `white`, `slate-300`, `slate-400`
- Borders: `slate-800`, `slate-700`

**Glassmorphism Effect:**
```css
/* In theme.css */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Typography

**Default Font Stack:**
```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

**Custom Font Integration:**
```css
/* In fonts.css */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/CustomFont.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

### Responsive Breakpoints

Tailwind CSS default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Mobile-First Approach:**
```tsx
// Base styles for mobile, then override for larger screens
<div className="px-4 sm:px-6 md:px-8 lg:px-12">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
    Responsive Heading
  </h1>
</div>
```

---

## 🚀 Performance Optimization

### Current Metrics

- **Lighthouse Performance:** 95+ / 100
- **First Contentful Paint (FCP):** <1.0s
- **Largest Contentful Paint (LCP):** <2.0s
- **Time to Interactive (TTI):** <3.0s
- **Cumulative Layout Shift (CLS):** <0.1

### Optimization Strategies

1. **Image Optimization:**
   ```tsx
   // Use lazy loading
   <img src="..." loading="lazy" alt="..." />
   
   // Use appropriate formats (WebP)
   // Use responsive images with srcset
   ```

2. **Code Splitting:**
   ```tsx
   // Lazy load heavy components
   const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
   
   <Suspense fallback={<Loading />}>
     <HeavyComponent />
   </Suspense>
   ```

3. **Animation Performance:**
   ```tsx
   // Use transform and opacity (GPU-accelerated)
   <motion.div
     animate={{ opacity: 1, transform: 'translateY(0)' }}
   />
   
   // Avoid animating: width, height, margin, padding
   ```

4. **Bundle Size:**
   ```bash
   # Analyze bundle
   npm run build
   
   # Use tree-shaking
   # Import only what you need
   import { Button } from '@/app/components/ui/button';
   // Not: import * as UI from '@/app/components/ui';
   ```

---

## 🧪 Testing Guidelines

### Component Testing

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from '@/app/components/ui/button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  screen.getByText('Click me').click();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Accessibility Testing

```tsx
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('should have no accessibility violations', async () => {
  const { container } = render(<MyComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Keyboard Navigation Testing

```tsx
import userEvent from '@testing-library/user-event';

test('should be keyboard navigable', async () => {
  const user = userEvent.setup();
  render(<Dialog />);
  
  // Tab to trigger
  await user.tab();
  expect(screen.getByRole('button')).toHaveFocus();
  
  // Press Enter to open
  await user.keyboard('{Enter}');
  expect(screen.getByRole('dialog')).toBeInTheDocument();
  
  // Press Escape to close
  await user.keyboard('{Escape}');
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});
```

---

## 📝 Development Workflow

### Branch Strategy

- `main` - Production-ready code
- `feature/flash-fusion-dev` - Current development branch
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Critical production fixes

### Commit Message Format

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(playground): add interactive code generation demo
fix(dialog): resolve accessibility warnings for missing description
docs(readme): update component documentation
refactor(navbar): extract mobile menu into separate component
```

### Code Review Checklist

Before submitting a PR:
- [ ] Code follows established patterns
- [ ] All interactive elements keyboard accessible
- [ ] ARIA labels added where appropriate
- [ ] Color contrast meets WCAG AA
- [ ] Mobile responsive on all screen sizes
- [ ] No console errors or warnings
- [ ] TypeScript types defined
- [ ] Documentation updated
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Tested with screen reader (if applicable)
- [ ] Performance impact considered
- [ ] Accessibility audit passed

---

## 🔧 Troubleshooting

### Common Issues

#### Dialog Accessibility Warning

**Problem:** "Missing Description or aria-describedby" warning

**Solution:** Use the `hideDescription` prop if you don't want a visible description:
```tsx
<DialogContent hideDescription={true}>
  <DialogHeader>
    <DialogTitle>Title</DialogTitle>
  </DialogHeader>
  {/* Content without visible description */}
</DialogContent>
```

#### Ref Forwarding Warning

**Problem:** "Function components cannot be given refs"

**Solution:** Use `React.forwardRef`:
```tsx
const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  (props, ref) => {
    return <div ref={ref} {...props} />;
  }
);
MyComponent.displayName = 'MyComponent';
```

#### Clipboard API Error

**Problem:** "Failed to execute 'writeText' on 'Clipboard'"

**Solution:** Handle gracefully with try-catch:
```tsx
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  } catch (error) {
    // Fallback: select text for manual copy
    console.error('Clipboard API not available', error);
    toast.error('Please copy manually');
  }
};
```

#### Hydration Mismatch

**Problem:** Text content does not match server-rendered HTML

**Solution:** Use `useEffect` for client-only rendering:
```tsx
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;

return <ClientOnlyComponent />;
```

---

## 📚 Additional Resources

### Official Documentation
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Motion (Framer Motion)](https://motion.dev/)
- [Vite Guide](https://vite.dev/guide/)

### Accessibility Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)
- [The A11Y Project](https://www.a11yproject.com/)
- [Inclusive Components](https://inclusive-components.design/)

### Tools & Extensions
- [axe DevTools](https://www.deque.com/axe/devtools/) - Accessibility testing
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

---

## 🤝 Contributing

See [README.md](./README.md#-contributing) for contribution guidelines.

---

## 📄 License

Private / Proprietary

Copyright © 2026 FlashFusion / ChaosClubCo. All rights reserved.

---

**Last Updated:** January 14, 2026  
**Version:** 2.1.0