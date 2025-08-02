# 🧩 Common Components Directory

This directory contains **reusable UI components** that can be used across the TaxDE application. These components follow consistent patterns and use the OKLCH theme system.

## 📁 Directory Structure

```
src/components/common/
├── README.md                 # This documentation file
├── SectionHeader.tsx         # Reusable section header with badge, title, description
├── AnimatedSection.tsx       # Wrapper for scroll-triggered animations
├── ContactCard.tsx           # Reusable contact information display
├── ServiceCard.tsx           # Unified card for services and blog posts
└── FloatingElement.tsx       # Floating UI elements with position/delay props
```

## 🎯 Component Design Principles

### ✅ **Consistency**

- All components use the OKLCH theme system
- Consistent prop interfaces and naming conventions
- Standardized animation patterns

### ✅ **Reusability**

- Components accept props for customization
- No hardcoded content or styling
- Flexible enough for different use cases

### ✅ **Performance**

- Optimized for re-rendering with React.memo()
- Efficient animation implementations
- Minimal bundle size impact

### ✅ **Accessibility**

- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility

## 🔧 Component Usage Examples

### SectionHeader

```tsx
<SectionHeader
  badge="Nasze usługi"
  title="Kompleksowa obsługa księgowa"
  description="Profesjonalne rozwiązania dostosowane do Twoich potrzeb"
/>
```

### AnimatedSection

```tsx
<AnimatedSection>
  <div className="grid grid-cols-3 gap-6">{/* Your content here */}</div>
</AnimatedSection>
```

### ServiceCard

```tsx
<ServiceCard
  image="/path/to/image.jpg"
  title="Księgowość zgodna z § 6 Nr. 4 StBerG"
  description="Kompleksowa obsługa księgowa dla firm w Niemczech"
  features={["Feature 1", "Feature 2", "Feature 3"]}
  link="/services/accounting"
/>
```

## 📋 Implementation Status

- [ ] `SectionHeader.tsx` - Extract from repeated section headers
- [ ] `AnimatedSection.tsx` - Standardize scroll animation patterns
- [ ] `ContactCard.tsx` - Reusable contact information display
- [ ] `ServiceCard.tsx` - Unified card component for services/blog
- [ ] `FloatingElement.tsx` - Floating UI elements with animations

## 🚀 Future Enhancements

- **Component Library**: Document components with Storybook
- **Unit Testing**: Add comprehensive test coverage
- **Accessibility**: Full WCAG compliance audit
- **Performance**: Bundle size optimization
- **TypeScript**: Strict type checking for all props

---

**Last Updated**: {Current Date}  
**Maintained by**: TaxDE Development Team
