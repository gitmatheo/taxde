# 🔧 TaxDE Refactoring Implementation Tasks

Based on the Comprehensive Refactoring Plan for TaxDE

## Relevant Files

- `src/components/Footer.tsx` - Migrated all hardcoded gray colors to OKLCH theme colors
- `src/components/HeroSection.tsx` - Updated floating cards to use theme colors (bg-card, text-card-foreground)
- `src/components/ui/toast.tsx` - Migrated all hardcoded red-\* colors to theme destructive colors
- `src/components/ContactSection.tsx` - Large 256-line component that needs to be split and refactored
- `src/components/ServicesSection.tsx` - Contains repeated card patterns to be extracted
- `src/components/BlogList.tsx` - Has repeated patterns and animation logic
- `src/components/BlogPost.tsx` - Uses scroll animation patterns to be standardized
- `src/components/Header.tsx` - Contains navigation logic to be extracted
- `src/hooks/useScrollAnimation.ts` - Current animation hook that needs improvement
- `src/config/constants.ts` - New file for centralized configuration
- `src/types/index.ts` - New file for TypeScript type definitions
- `src/components/common/AnimatedSection.tsx` - New reusable animated section component
- `src/components/common/SectionHeader.tsx` - New reusable section header component
- `src/components/common/ContactCard.tsx` - New reusable contact card component
- `src/components/common/ServiceCard.tsx` - New reusable service card component
- `src/components/common/FloatingElement.tsx` - New reusable floating element component
- `src/hooks/useIntersectionObserver.ts` - New improved intersection observer hook
- `src/hooks/useFormState.ts` - New form state management hook
- `src/hooks/useNavigation.ts` - New navigation logic hook
- `src/hooks/useAnimation.ts` - New unified animation hook
- `docs/color-migration-guide.md` - Comprehensive color mapping guide for OKLCH theme migration

### Notes

- Focus on incremental changes to maintain functionality during refactoring
- Prioritize color system standardization first for immediate visual consistency
- Test each component extraction thoroughly before proceeding to next
- Use the existing OKLCH theme system consistently throughout

## Tasks

- [ ] 1.0 Color System Standardization

  - [x] 1.1 Create color migration guide document with mapping rules (bg-gray-900 → bg-card, text-gray-400 → text-muted-foreground, etc.)
  - [x] 1.2 Replace all hardcoded gray colors in Footer.tsx (18+ instances) with appropriate theme colors
  - [x] 1.3 Update floating card colors in HeroSection.tsx to use bg-card and text-card-foreground instead of bg-white/bg-gray-800
  - [x] 1.4 Replace hardcoded red-\* colors in ui/toast.tsx with theme destructive colors
  - [ ] 1.5 Audit all remaining components for hardcoded colors and replace with theme equivalents
  - [ ] 1.6 Test color consistency across light and dark themes
  - [ ] 1.7 Verify all colors work properly with OKLCH color space

- [ ] 2.0 Component Extraction & Reusability

  - [ ] 2.1 Create src/components/common/ directory for reusable components
  - [ ] 2.2 Extract SectionHeader component with props for badge, title, and description
  - [ ] 2.3 Replace section headers in ContactSection, ServicesSection, BlogList with SectionHeader component
  - [ ] 2.4 Extract AnimatedSection component that wraps content with scroll animations
  - [ ] 2.5 Replace scroll animation patterns in ContactSection, ServicesSection, BlogList, BlogPost with AnimatedSection
  - [ ] 2.6 Extract ContactCard component for contact information display
  - [ ] 2.7 Replace 4 contact info instances in ContactSection with ContactCard component
  - [ ] 2.8 Extract ServiceCard component for service/blog card display with image, title, description, features
  - [ ] 2.9 Replace card patterns in ServicesSection and BlogList with ServiceCard component
  - [ ] 2.10 Extract FloatingElement component for floating UI elements with position and delay props
  - [ ] 2.11 Replace floating cards in HeroSection with FloatingElement component
  - [ ] 2.12 Test all extracted components work correctly in their original contexts

- [ ] 3.0 Architecture & Organization

  - [ ] 3.1 Create src/config/constants.ts file with animation configuration and contact information
  - [ ] 3.2 Create src/types/index.ts file with BlogPost, Service, ContactInfo, and AnimationConfig interfaces
  - [ ] 3.3 Extract useIntersectionObserver hook to replace repetitive scroll animation setup
  - [ ] 3.4 Extract useFormState hook from ContactSection for form state management
  - [ ] 3.5 Extract useNavigation hook from Header and App components for routing logic
  - [ ] 3.6 Update all components to use the new constants instead of hardcoded values
  - [ ] 3.7 Update all components to use proper TypeScript interfaces
  - [ ] 3.8 Replace direct scroll animation usage with new hooks
  - [ ] 3.9 Test that all extracted logic works correctly

- [ ] 4.0 Performance Optimizations

  - [ ] 4.1 Wrap expensive components (ServicesSection, ContactSection, BlogList) with React.memo()
  - [ ] 4.2 Split ContactSection into smaller components (ContactForm, ContactInfo, ContactCTA)
  - [ ] 4.3 Implement lazy loading for Blog components using React.lazy()
  - [ ] 4.4 Add CSS custom properties for animation delays instead of JavaScript setTimeout
  - [ ] 4.5 Add will-change CSS property to animated elements for better performance
  - [ ] 4.6 Audit package.json dependencies and remove unused @radix packages
  - [ ] 4.7 Implement code splitting between home and blog routes
  - [ ] 4.8 Add proper image sizing and lazy loading attributes
  - [ ] 4.9 Run performance tests and measure improvements

- [ ] 5.0 Animation System Improvements

  - [ ] 5.1 Create src/hooks/useAnimation.ts with unified animation logic
  - [ ] 5.2 Add CSS custom properties for stagger delays (--stagger-delay variable)
  - [ ] 5.3 Create .animate-stagger-1, .animate-stagger-2 etc. CSS classes using calc()
  - [ ] 5.4 Replace JavaScript-based stagger animations with CSS-only approach
  - [ ] 5.5 Centralize all animation timing values in constants file
  - [ ] 5.6 Update all components to use new animation system
  - [ ] 5.7 Remove hardcoded setTimeout calls for animations
  - [ ] 5.8 Test animation performance on different devices

- [ ] 6.0 Code Quality & Standards

  - [ ] 6.1 Add strict TypeScript interfaces for all component props
  - [ ] 6.2 Remove any implicit 'any' types throughout the codebase
  - [ ] 6.3 Add React Error Boundary components for error handling
  - [ ] 6.4 Improve form validation in ContactSection with proper error states
  - [ ] 6.5 Add loading states for async operations (form submission)
  - [ ] 6.6 Add proper ARIA labels to all interactive elements
  - [ ] 6.7 Improve keyboard navigation in mobile menu
  - [ ] 6.8 Ensure color contrast meets WCAG standards with new theme colors
  - [ ] 6.9 Add focus management for animations and modals
  - [ ] 6.10 Run accessibility audit and fix identified issues

- [ ] 7.0 Routing & Navigation

  - [ ] 7.1 Create RouteContext with currentRoute, navigate, and scrollToSection methods
  - [ ] 7.2 Extract navigation logic from App.tsx into useNavigation hook
  - [ ] 7.3 Update Header component to use RouteContext instead of direct props
  - [ ] 7.4 Centralize all scroll-to-section logic in one place
  - [ ] 7.5 Add proper browser history management
  - [ ] 7.6 Test navigation works correctly between pages and sections
  - [ ] 7.7 Ensure mobile menu navigation works properly

- [ ] 8.0 Mobile & Responsive Improvements

  - [ ] 8.1 Review and test all components on mobile devices
  - [ ] 8.2 Optimize animation performance for mobile (reduced motion preferences)
  - [ ] 8.3 Improve touch interactions for all interactive elements
  - [ ] 8.4 Optimize bundle size specifically for mobile users
  - [ ] 8.5 Add responsive image sizing for different screen sizes
  - [ ] 8.6 Test and fix any mobile-specific layout issues
  - [ ] 8.7 Ensure proper viewport handling on all devices

- [ ] 9.0 Testing & Documentation
  - [ ] 9.1 Set up Jest testing framework and configuration
  - [ ] 9.2 Write unit tests for all utility functions and hooks
  - [ ] 9.3 Write component tests for all new reusable components
  - [ ] 9.4 Write integration tests for main user flows (navigation, form submission)
  - [ ] 9.5 Create component documentation with usage examples
  - [ ] 9.6 Document theme color usage guide for developers
  - [ ] 9.7 Document animation system and how to use new hooks
  - [ ] 9.8 Update README.md with new project structure and conventions
  - [ ] 9.9 Update tech-stack.md with refactoring details and new patterns
