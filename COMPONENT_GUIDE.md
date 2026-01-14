# FlashFusion Component Guide

Complete reference guide for all components in the FlashFusion project.

## Table of Contents

- [Component Categories](#component-categories)
- [Usage Patterns](#usage-patterns)
- [Accessibility Guidelines](#accessibility-guidelines)
- [Component Reference](#component-reference)

---

## Component Categories

### Layout Components
Core structural components that define the page layout and navigation.

- **Navbar** - Main navigation
- **Footer** - Site footer
- **SkipNav** - Accessibility skip link
- **AnnouncementBar** - Top banner
- **ScrollProgress** - Scroll indicator
- **BackToTop** - Scroll to top button
- **CustomCursor** - Custom cursor effect
- **CookieConsent** - Cookie banner
- **Search** - Command palette
- **Status** - Status indicator

### Landing Page Components
Content sections for the landing page.

- **Hero** - Hero section with CTA
- **VideoModal** - Video player modal
- **TrustedBy** - Logo marquee
- **Stats** - Animated statistics
- **Features** - Feature grid
- **InteractivePlayground** - Code demo sandbox
- **TemplateGallery** - Template showcase
- **ComparisonTable** - Competitor comparison
- **Architecture** - Architecture diagram
- **WorkflowTabs** - Workflow guide
- **Integrations** - Integration logos
- **Testimonials** - Review carousel
- **Team** - Team member grid
- **Pricing** - Pricing tiers
- **FAQ** - Accordion FAQ
- **BlogPreview** - Blog cards
- **Contact** - Contact form
- **Newsletter** - Email signup

### Feature Components
Advanced feature demonstrations.

- **AICustomizer** - Style customization tool
- **PerformanceMetrics** - Performance dashboard
- **DeveloperExperience** - Developer tools showcase

### UI Components (shadcn/ui)
Reusable interface components based on Radix UI primitives.

- **Button** - Interactive button
- **Input** - Text input field
- **Dialog** - Modal dialog
- **Accordion** - Collapsible sections
- **Tabs** - Tabbed interface
- **Card** - Content card
- **Form** - Form components
- **... and 30+ more**

---

## Usage Patterns

### Basic Component Usage

```tsx
import { ComponentName } from '@/app/components/category/ComponentName';

function App() {
  return <ComponentName prop="value" />;
}
```

### Responsive Component Pattern

```tsx
export function ResponsiveComponent() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Responsive Heading
        </h2>
      </div>
    </section>
  );
}
```

### Accessible Component Pattern

```tsx
export function AccessibleComponent() {
  return (
    <section aria-labelledby="section-title">
      <h2 id="section-title">Section Title</h2>
      <button aria-label="Descriptive action">
        <IconOnly />
        <span className="sr-only">Button text for screen readers</span>
      </button>
    </section>
  );
}
```

### Animated Component Pattern

```tsx
import { motion } from 'motion/react';

export function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Content
    </motion.div>
  );
}
```

---

## Accessibility Guidelines

### Required Attributes

1. **Interactive Elements:**
   - All buttons must have accessible text or `aria-label`
   - Links must have descriptive text (avoid "click here")
   - Form inputs must have associated labels

2. **Structural Elements:**
   - Use semantic HTML (`nav`, `main`, `article`, `section`, `aside`, `footer`)
   - Headings must follow logical hierarchy (h1 → h2 → h3)
   - Lists should use `ul`, `ol`, or `dl` elements

3. **Dynamic Content:**
   - Use ARIA live regions for dynamic updates
   - Modals must trap focus and be dismissible
   - Error messages must be associated with form fields

### ARIA Patterns

```tsx
// Button with icon only
<button aria-label="Close dialog">
  <X aria-hidden="true" />
</button>

// Expandable section
<button
  aria-expanded={isOpen}
  aria-controls="content-id"
>
  Toggle
</button>
<div id="content-id">Content</div>

// Form field with error
<input
  aria-invalid={hasError}
  aria-describedby={hasError ? "error-id" : undefined}
  aria-required="true"
/>
{hasError && <p id="error-id">Error message</p>}

// Live region for updates
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

---

## Component Reference

### Layout Components

#### Navbar

**Location:** `/src/app/components/layout/Navbar.tsx`

**Purpose:** Main navigation bar with mobile menu support.

**Features:**
- Responsive mobile hamburger menu
- Keyboard navigation (Tab, Enter, Escape)
- ARIA labels for accessibility
- Sticky positioning with glassmorphism
- Active link highlighting

**State:**
```tsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

**Key Interactions:**
- Click hamburger to open/close mobile menu
- Press Escape to close mobile menu
- Tab through navigation links
- Scroll to anchor sections on click

**Accessibility:**
- `aria-expanded` on menu button
- `aria-controls` linking to menu ID
- `aria-current="page"` on active links
- Focus management when menu opens/closes

**Customization:**
```tsx
// Add new navigation link
const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'New Section', href: '#new' }, // Add here
];
```

---

#### SkipNav

**Location:** `/src/app/components/layout/SkipNav.tsx`

**Purpose:** Skip navigation link for keyboard users to bypass navigation.

**Features:**
- Hidden until focused
- Jumps to main content
- WCAG 2.1 AA requirement

**Usage:**
```tsx
// In App.tsx
<SkipNav />
<Navbar />
<main id="main-content">
  {/* Content */}
</main>
```

**Styling:**
```css
/* Visible only when focused */
.sr-only:focus {
  position: absolute;
  width: auto;
  height: auto;
  clip: auto;
}
```

---

#### Footer

**Location:** `/src/app/components/layout/Footer.tsx`

**Purpose:** Site footer with links and legal information.

**Features:**
- Multi-column responsive layout
- Social media links
- Legal policy links
- Newsletter integration
- Copyright notice

**Customization:**
```tsx
// Add new footer column
const footerLinks = {
  product: [...],
  company: [...],
  resources: [...],
  newColumn: [
    { name: 'Link 1', href: '#' },
    { name: 'Link 2', href: '#' },
  ],
};
```

---

### Landing Page Components

#### Hero

**Location:** `/src/app/components/landing/Hero.tsx`

**Purpose:** Hero section with headline, CTA, and video modal trigger.

**Features:**
- Large heading with gradient effect
- Descriptive subheading
- Primary and secondary CTAs
- Video modal integration
- Animated entrance

**Content Guidelines:**
- Headline: Clear value proposition in <60 characters
- Subheading: Elaboration in <150 characters
- CTA: Action-oriented text ("Start Free Trial" not "Get Started")

**Customization:**
```tsx
const heading = "Build Lightning-Fast Landing Pages";
const subheading = "AI-powered platform for developers";
const ctaPrimary = "Start Free Trial";
const ctaSecondary = "Watch Demo";
```

**Animation:**
```tsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {heading}
</motion.h1>
```

---

#### InteractivePlayground

**Location:** `/src/app/components/landing/InteractivePlayground.tsx`

**Purpose:** Live code generation demonstration sandbox.

**Features:**
- Real-time code preview
- Example prompts
- Simulated AI generation
- Code/Preview tabs
- Copy to clipboard
- Fully keyboard accessible

**State Management:**
```tsx
const [selectedPrompt, setSelectedPrompt] = useState('');
const [generatedCode, setGeneratedCode] = useState('');
const [isGenerating, setIsGenerating] = useState(false);
const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');
```

**Example Prompts:**
```tsx
const prompts = [
  {
    id: 'landing',
    label: 'SaaS Landing Page',
    code: '<!-- Generated HTML/JSX -->'
  },
  {
    id: 'dashboard',
    label: 'Analytics Dashboard',
    code: '<!-- Dashboard code -->'
  },
];
```

**Accessibility:**
- Tab navigation through prompts
- ARIA live region for generation status
- Keyboard shortcuts for tabs
- Screen reader announcements

**Customization:**
```tsx
// Add new example prompt
const newPrompt = {
  id: 'unique-id',
  label: 'Prompt Name',
  code: `/* Your code here */`,
};
```

---

#### TemplateGallery

**Location:** `/src/app/components/landing/TemplateGallery.tsx`

**Purpose:** Filterable showcase of templates.

**Features:**
- Category filtering
- Template cards with previews
- Hover effects
- Responsive Masonry grid
- "Use Template" CTA

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

**Filtering Logic:**
```tsx
const filteredTemplates = selectedCategory === 'all'
  ? templates
  : templates.filter(t => t.category === selectedCategory);
```

**Customization:**
```tsx
// Add new template
const newTemplate: Template = {
  id: 'template-5',
  name: 'Medical Practice',
  category: 'SaaS',
  imageUrl: '/templates/medical.jpg',
};
```

---

#### Pricing

**Location:** `/src/app/components/landing/Pricing.tsx`

**Purpose:** Pricing tiers with billing toggle.

**Features:**
- Monthly/Annual billing toggle
- Feature comparison
- Highlighted popular tier
- CTA per tier
- Mobile-optimized cards

**Data Structure:**
```tsx
interface PricingTier {
  name: string;
  price: {
    monthly: number;
    annual: number;
  };
  features: string[];
  cta: string;
  popular?: boolean;
}
```

**Billing Toggle:**
```tsx
const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');
const price = tier.price[billing];
```

**Customization:**
```tsx
// Add new pricing tier
const enterpriseTier: PricingTier = {
  name: 'Enterprise',
  price: { monthly: 199, annual: 1990 },
  features: ['Unlimited projects', 'Priority support', ...],
  cta: 'Contact Sales',
};
```

---

#### Contact

**Location:** `/src/app/components/landing/Contact.tsx`

**Purpose:** Contact form with validation.

**Features:**
- Name, email, message fields
- Client-side validation
- Accessible error messages
- Required field indicators
- Loading states
- Toast notifications

**Form State:**
```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});
const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
```

**Validation:**
```tsx
const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validate = () => {
  const newErrors = {};
  if (!formData.name.trim()) {
    newErrors.name = 'Name is required';
  }
  if (!validateEmail(formData.email)) {
    newErrors.email = 'Valid email is required';
  }
  if (!formData.message.trim()) {
    newErrors.message = 'Message is required';
  }
  return newErrors;
};
```

**Accessibility:**
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

### UI Components

#### Dialog (Updated v2.1.0)

**Location:** `/src/app/components/ui/dialog.tsx`

**Purpose:** Accessible modal dialog component.

**Components:**
- `Dialog` - Root wrapper
- `DialogTrigger` - Opens dialog
- `DialogContent` - Main content
- `DialogHeader` - Header section
- `DialogTitle` - Required title
- `DialogDescription` - Description (or use `hideDescription`)
- `DialogFooter` - Footer with actions
- `DialogClose` - Close button

**Basic Usage:**
```tsx
<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a description of the dialog content.
      </DialogDescription>
    </DialogHeader>
    
    <div className="py-4">
      {/* Your content */}
    </div>
    
    <DialogFooter>
      <DialogClose>Cancel</DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

**Without Visible Description:**
```tsx
<DialogContent hideDescription={true}>
  <DialogHeader>
    <DialogTitle>Confirm Action</DialogTitle>
  </DialogHeader>
  
  <p>Are you sure you want to proceed?</p>
  
  <DialogFooter>
    <DialogClose>Cancel</DialogClose>
    <Button>Confirm</Button>
  </DialogFooter>
</DialogContent>
```

**Accessibility Features:**
- Focus trap when open
- Escape key to close
- Click outside to close
- ARIA labels and roles
- Keyboard navigation
- Screen reader support

**Props:**
```tsx
interface DialogContentProps {
  hideDescription?: boolean; // Adds hidden description for accessibility
  className?: string;
  children: React.ReactNode;
}
```

---

#### Button

**Location:** `/src/app/components/ui/button.tsx`

**Purpose:** Versatile button component with variants.

**Variants:**
- `default` - Primary button
- `destructive` - Danger/delete action
- `outline` - Outlined button
- `secondary` - Secondary action
- `ghost` - Minimal button
- `link` - Link-styled button

**Sizes:**
- `default` - Standard size
- `sm` - Small
- `lg` - Large
- `icon` - Square icon button

**Usage:**
```tsx
// Primary button
<Button>Click Me</Button>

// Secondary with icon
<Button variant="secondary" size="lg">
  <Icon className="mr-2" />
  With Icon
</Button>

// Icon only
<Button variant="ghost" size="icon" aria-label="Close">
  <X />
</Button>
```

**Accessibility:**
- All buttons have proper roles
- Icon-only buttons require `aria-label`
- Focus indicators visible
- Keyboard accessible

---

#### Form

**Location:** `/src/app/components/ui/form.tsx`

**Purpose:** Form components with React Hook Form integration.

**Components:**
- `Form` - Form wrapper
- `FormField` - Field wrapper
- `FormItem` - Item container
- `FormLabel` - Field label
- `FormControl` - Control wrapper
- `FormDescription` - Helper text
- `FormMessage` - Error message

**Usage with React Hook Form:**
```tsx
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/app/components/ui/form';
import { Input } from '@/app/components/ui/input';

function MyForm() {
  const form = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
```

---

## Advanced Patterns

### Custom Hooks

#### useIsMobile

```tsx
import { useState, useEffect } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}
```

#### useReducedMotion

```tsx
import { useState, useEffect } from 'react';

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  return prefersReducedMotion;
}
```

### Context Providers

#### Theme Context

```tsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

---

## Testing Components

### Accessibility Testing

```tsx
import { render, screen } from '@testing-library/react';
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
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('should be keyboard navigable', async () => {
  const user = userEvent.setup();
  render(<MyComponent />);
  
  // Tab to button
  await user.tab();
  expect(screen.getByRole('button')).toHaveFocus();
  
  // Press Enter
  await user.keyboard('{Enter}');
  expect(/* action occurred */).toBeTruthy();
  
  // Press Escape
  await user.keyboard('{Escape}');
  expect(/* modal closed */).toBeTruthy();
});
```

---

## Best Practices

### Do's ✅

- Use semantic HTML elements
- Add ARIA labels to all interactive elements
- Ensure 44x44px minimum touch targets
- Test with keyboard navigation
- Verify color contrast ratios
- Use descriptive alt text for images
- Implement loading states
- Handle errors gracefully
- Follow mobile-first approach
- Use the `cn()` utility for className merging

### Don'ts ❌

- Don't use divs for buttons (use `<button>`)
- Don't rely on color alone for meaning
- Don't use vague link text ("click here")
- Don't forget to trap focus in modals
- Don't animate layout properties (use transform/opacity)
- Don't create duplicate utility functions
- Don't use inline styles (use Tailwind classes)
- Don't forget to update documentation
- Don't skip accessibility testing
- Don't hardcode values (use props/configuration)

---

## Component Checklist

When creating a new component:

- [ ] Created in appropriate directory (`layout/`, `landing/`, `features/`, `ui/`)
- [ ] Uses TypeScript/JSDoc for type safety
- [ ] Follows naming conventions (PascalCase)
- [ ] Exports as named export
- [ ] Includes prop interface with JSDoc comments
- [ ] Uses semantic HTML
- [ ] Has proper ARIA labels
- [ ] Keyboard accessible
- [ ] Mobile responsive
- [ ] Uses `cn()` utility for className merging
- [ ] Imports using `@` alias
- [ ] Documented in README.md
- [ ] Documented in this guide (if complex)
- [ ] Tested with keyboard navigation
- [ ] Tested with screen reader
- [ ] No console errors or warnings
- [ ] Follows established patterns

---

## Resources

### Official Documentation
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Motion (Framer Motion)](https://motion.dev/)

### Accessibility Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)
- [The A11Y Project](https://www.a11yproject.com/)

### Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE](https://wave.webaim.org/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

**Last Updated:** January 14, 2026  
**Version:** 2.1.0
