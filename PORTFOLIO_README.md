# Priyanka Mittal - CA Finalist Portfolio

A premium, fully responsive personal portfolio website for Priyanka Mittal, showcasing professional achievements, education, and expertise in chartered accountancy.

## Design Philosophy

**Minimalist Elegance with Emerald Accents** — This portfolio emphasizes restraint, typography-driven hierarchy, and purposeful animation. Every element serves a purpose, creating a sophisticated and professional presentation suitable for a CA Finalist.

### Core Design Principles

1. **Restraint Over Excess**: Animations are subtle and purposeful, never distracting from content
2. **Typographic Hierarchy**: Bold Poppins headings paired with clean Inter body text create visual structure
3. **Functional Whitespace**: Generous padding and breathing room convey luxury and clarity
4. **Emerald Accent Strategy**: Emerald Green (#10B981) used sparingly for interactive elements and focal points

## Color Palette

- **Background**: Off-white (#F9FAFB) — clean, professional, reduces eye strain
- **Text**: Deep Charcoal (#111827) — readable, sophisticated
- **Accent**: Emerald Green (#10B981) — represents growth, finance, and stability
- **Supporting**: Soft grays for borders and secondary elements

## Technology Stack

- **Framework**: React 19 with Wouter for client-side routing
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Animations**: Framer Motion for smooth, purposeful transitions
- **Smooth Scrolling**: Lenis for buttery-smooth page navigation
- **Icons**: Lucide React for clean, professional iconography
- **Typography**: Poppins (headings) + Inter (body) from Google Fonts

## Key Features

### Navigation
- **Desktop**: Floating Glass Navigation with backdrop blur and smooth transitions
- **Mobile**: Hamburger menu with smooth slide animations
- **Smooth Scrolling**: Lenis integration for premium scroll experience

### Home Section
- Animated typing effect for "Priyanka Mittal"
- Fade-up content animation with staggered timing
- Magnetic button effect on CTAs (Download Resume, Get in Touch)
- Animated scroll indicator

### Education Section
- Vertical timeline with animated dots that light up on scroll
- Staggered card animations as user scrolls
- Responsive design: simplified list on mobile, full timeline on desktop
- Entries: 10th, 12th, B.Com, CA Foundation, CA Intermediate

### Bookshelf Section
- Interactive book cards with lift-on-hover effect
- Gradient backgrounds for visual interest
- "Read Summary" button with smooth interactions
- Featured books: "The Intelligent Investor" and "Psychology of Money"

### Work Experience Section
- Clean Articleship card with core competencies
- Competency badges with staggered animations
- Hover effects with subtle elevation

### Contact Section
- Contact information with icon-based layout
- Real-time form validation
- Magnetic button effect on submit
- Pulse animation when form is valid
- Social media links (LinkedIn, GitHub)

### Footer
- Minimalist design with brand information
- Copyright year auto-updates

## Animation Guidelines

- **Entrance Animations**: 0.6s fade-in with 20px upward translate, staggered by 0.1s
- **Scroll Triggers**: Elements animate in as they enter viewport
- **Hover States**: 0.3s ease-out transitions with subtle elevation
- **Page Transitions**: Soft fade-out (0.3s) on exit, fade-in (0.4s) on entry
- **No Bounce**: All animations use ease-out or ease-in-out curves

## Responsive Design

The portfolio is optimized for all screen sizes:
- **Mobile** (< 640px): Single-column layout, hamburger navigation, simplified timeline
- **Tablet** (640px - 1024px): Two-column layouts where appropriate, full navigation
- **Desktop** (> 1024px): Full-featured layouts with generous whitespace, floating navigation
- **4K Displays**: Proper scaling with max-width constraints

## Component Structure

```
client/src/
├── components/
│   ├── Navigation.tsx          # Floating glass nav + hamburger menu
│   ├── HomeSection.tsx         # Hero with typing effect
│   ├── EducationSection.tsx    # Vertical timeline
│   ├── BookshelfSection.tsx    # Interactive book cards
│   ├── ExperienceSection.tsx   # Work experience showcase
│   ├── ContactSection.tsx      # Contact form + info
│   ├── Footer.tsx              # Footer
│   ├── MagneticButton.tsx      # Premium magnetic button
│   ├── GradientDivider.tsx     # Animated gradient divider
│   └── Spacer.tsx              # Responsive spacing utility
├── hooks/
│   ├── useLenis.ts             # Smooth scroll initialization
│   ├── useMagneticButton.ts    # Magnetic button logic
│   └── useScrollAnimation.ts   # Scroll trigger animations
├── pages/
│   └── Home.tsx                # Main portfolio page
└── index.css                   # Global styles + design tokens
```

## Customization Guide

### Updating Colors
Edit the CSS variables in `client/src/index.css` under `:root`:
```css
--primary: oklch(0.524 0.148 142.495); /* Emerald Green */
--background: oklch(0.987 0.001 286.375); /* Off-white */
--foreground: oklch(0.067 0.004 285.823); /* Deep Charcoal */
```

### Updating Typography
Modify font sizes and weights in `client/src/index.css` under `@layer base`:
```css
h1 { font-size: clamp(2.5rem, 8vw, 3.5rem); }
h2 { font-size: clamp(1.75rem, 5vw, 2.5rem); }
```

### Adding Content
Update section data directly in component files (e.g., `educationData` in EducationSection.tsx)

## Performance Optimizations

- Lenis smooth scrolling with optimized easing
- Intersection Observer for scroll-triggered animations (no performance impact)
- CSS-based animations where possible for GPU acceleration
- Optimized Framer Motion transitions to prevent jank
- Responsive images with proper sizing

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- PDF resume download functionality
- Dark mode toggle
- Additional portfolio projects showcase
- Blog or insights section
- Analytics integration
- SEO optimization

## Development Notes

- All animations use Framer Motion for consistency
- Color system uses OKLCH for perceptually uniform colors
- Typography uses Google Fonts for optimal loading
- Tailwind CSS 4 with custom design tokens for maintainability
- Mobile-first responsive design approach

---

**Design Philosophy**: This portfolio embodies the principle that true luxury is found in restraint, clarity, and purposeful design. Every animation, color, and spacing decision reinforces Priyanka's professional excellence and attention to detail.
