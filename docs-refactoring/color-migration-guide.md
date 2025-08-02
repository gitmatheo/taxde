# 🎨 Color Migration Guide

## Overview

This guide provides systematic mapping rules for replacing hardcoded colors with TaxDE's OKLCH theme system. The goal is to achieve 100% theme consistency across light and dark modes while leveraging the superior color quality of OKLCH color space.

---

## 🎯 **Core Migration Principles**

1. **Semantic over Literal**: Choose colors based on meaning, not appearance
2. **Theme Consistency**: Ensure colors work in both light and dark modes  
3. **OKLCH Advantage**: Leverage perceptual uniformity and wider gamut
4. **Accessibility**: Maintain proper contrast ratios

---

## 📋 **Color Mapping Rules**

### **Background Colors**

| ❌ Hardcoded | ✅ Theme Color | Usage Context |
|-------------|---------------|---------------|
| `bg-white` | `bg-background` | Main page backgrounds |
| `bg-gray-50` | `bg-muted/30` | Subtle section backgrounds |
| `bg-gray-100` | `bg-muted` | Card/section backgrounds |
| `bg-gray-900` | `bg-card` | Dark container backgrounds |
| `bg-gray-950` | `bg-muted` | Very dark backgrounds |
| `bg-black` | `bg-foreground` | High contrast backgrounds |

### **Text Colors**

| ❌ Hardcoded | ✅ Theme Color | Usage Context |
|-------------|---------------|---------------|
| `text-white` | `text-background` or `text-card-foreground` | Light text on dark backgrounds |
| `text-black` | `text-foreground` | Primary text |
| `text-gray-300` | `text-muted-foreground` | Secondary/subtle text |
| `text-gray-400` | `text-muted-foreground` | Placeholder/inactive text |
| `text-gray-500` | `text-muted-foreground` | Secondary text |
| `text-gray-600` | `text-muted-foreground` | Secondary text |
| `text-gray-700` | `text-foreground` | Primary text |
| `text-gray-800` | `text-foreground` | High emphasis text |

### **Border Colors**

| ❌ Hardcoded | ✅ Theme Color | Usage Context |
|-------------|---------------|---------------|
| `border-gray-200` | `border-border` | Subtle borders |
| `border-gray-300` | `border-border` | Standard borders |
| `border-gray-800` | `border-border` | Dark mode borders |
| `border-white` | `border-background` | Light borders on dark backgrounds |

### **Interactive States**

| ❌ Hardcoded | ✅ Theme Color | Usage Context |
|-------------|---------------|---------------|
| `hover:text-white` | `hover:text-background` | Light text hover states |
| `hover:bg-gray-100` | `hover:bg-muted` | Subtle hover backgrounds |
| `focus:ring-blue-500` | `focus:ring-ring` | Focus indicators |

### **Status Colors**

| ❌ Hardcoded | ✅ Theme Color | Usage Context |
|-------------|---------------|---------------|
| `bg-red-500` | `bg-destructive` | Error states |
| `text-red-300` | `text-destructive-foreground` | Error text on dark backgrounds |
| `text-red-600` | `text-destructive` | Error text on light backgrounds |
| `bg-green-500` | `bg-primary` | Success states (use primary) |
| `bg-blue-500` | `bg-primary` | Primary actions |
| `bg-emerald-600` | `bg-chart-2` | Secondary success states |

---

## 🌈 **OKLCH Theme Colors Reference**

### **Semantic Color Roles**

```css
/* Core Colors */
--background        /* Main page background */
--foreground        /* Primary text */
--card             /* Container backgrounds */
--card-foreground  /* Text on card backgrounds */
--muted            /* Subtle backgrounds */
--muted-foreground /* Secondary text */

/* Interactive Colors */
--primary           /* Primary actions/accents */
--primary-foreground /* Text on primary backgrounds */
--secondary         /* Secondary actions */
--secondary-foreground /* Text on secondary backgrounds */
--accent           /* Accent elements */
--accent-foreground /* Text on accent backgrounds */

/* System Colors */
--destructive      /* Error states */
--destructive-foreground /* Error text */
--border           /* Standard borders */
--input            /* Form input borders */
--ring             /* Focus rings */

/* Chart Colors (Progressive Palette) */
--chart-1          /* Primary chart color */
--chart-2          /* Secondary chart color */
--chart-3          /* Tertiary chart color */
--chart-4          /* Quaternary chart color */
--chart-5          /* Quinary chart color */
```

### **Light Mode Values**
```css
:root {
  --background: oklch(1 0 0);                    /* Pure white */
  --foreground: oklch(0.1747 0.0052 67.4738);    /* Near black */
  --primary: oklch(0.6521 0.1322 81.5716);       /* Vibrant primary */
  --muted: oklch(0.9621 0.0074 80.7210);         /* Light gray */
  --destructive: oklch(0.5888 0.1965 28.6241);   /* Error red */
}
```

### **Dark Mode Values**
```css
.dark {
  --background: oklch(0.1747 0.0052 67.4738);    /* Near black */
  --foreground: oklch(0.9275 0.0287 84.5927);    /* Light text */
  --primary: oklch(0.7665 0.1387 91.0594);       /* Bright primary */
  --muted: oklch(0.2504 0.0178 82.1571);         /* Dark gray */
  --destructive: oklch(0.4394 0.1323 26.9473);   /* Dark mode error */
}
```

---

## 🔧 **Migration Examples**

### **Example 1: Footer Component**
```tsx
// ❌ Before - Hardcoded colors
<footer className="bg-gray-900 dark:bg-gray-950 text-white">
  <p className="text-gray-300 mb-6">Company description</p>
  <a href="#" className="text-gray-400 hover:text-white">Link</a>
  <div className="border-t border-gray-800 mt-12">
    <p className="text-gray-400">Copyright text</p>
  </div>
</footer>

// ✅ After - Theme colors
<footer className="bg-card text-card-foreground">
  <p className="text-muted-foreground mb-6">Company description</p>
  <a href="#" className="text-muted-foreground hover:text-foreground">Link</a>
  <div className="border-t border-border mt-12">
    <p className="text-muted-foreground">Copyright text</p>
  </div>
</footer>
```

### **Example 2: Floating Cards**
```tsx
// ❌ Before - Hardcoded colors
<div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
  <div className="text-2xl font-bold text-primary">99.9%</div>
  <div className="text-sm text-muted-foreground">Precision</div>
</div>

// ✅ After - Theme colors
<div className="bg-card text-card-foreground p-4 rounded-xl">
  <div className="text-2xl font-bold text-primary">99.9%</div>
  <div className="text-sm text-muted-foreground">Precision</div>
</div>
```

### **Example 3: Error States**
```tsx
// ❌ Before - Hardcoded red colors
<div className="text-red-600 bg-red-50 border border-red-200">
  <span className="text-red-700">Error message</span>
</div>

// ✅ After - Theme destructive colors
<div className="text-destructive bg-destructive/10 border border-destructive/20">
  <span className="text-destructive">Error message</span>
</div>
```

---

## ✅ **Migration Checklist**

### **Before Starting**
- [ ] Review current color usage in component
- [ ] Identify the semantic purpose of each color
- [ ] Check if component works in both light/dark modes

### **During Migration**
- [ ] Replace hardcoded colors with semantic theme colors
- [ ] Remove redundant dark: variants (theme handles this automatically)
- [ ] Test in both light and dark modes
- [ ] Verify accessibility/contrast

### **After Migration**
- [ ] Component uses only theme colors
- [ ] No hardcoded color values remain
- [ ] Visual appearance maintained in both themes
- [ ] Accessibility standards met

---

## 🚨 **Common Mistakes to Avoid**

1. **Literal Color Matching**: Don't match colors visually; match semantically
   ```tsx
   // ❌ Wrong - literal matching
   bg-gray-900 → bg-gray-900 (still hardcoded!)
   
   // ✅ Correct - semantic matching  
   bg-gray-900 → bg-card (dark container background)
   ```

2. **Redundant Dark Variants**: Theme handles dark mode automatically
   ```tsx
   // ❌ Wrong - redundant dark variants
   className="bg-card dark:bg-card"
   
   // ✅ Correct - theme handles it
   className="bg-card"
   ```

3. **Missing Semantic Context**: Choose based on purpose, not appearance
   ```tsx
   // ❌ Wrong - no semantic meaning
   text-gray-400 → text-muted-foreground (always)
   
   // ✅ Correct - context-aware
   text-gray-400 → text-muted-foreground (for secondary text)
   text-gray-400 → text-foreground/80 (for slightly dimmed primary text)
   ```

---

## 🎨 **Advanced Techniques**

### **Opacity Modifiers**
Use opacity for subtle variations instead of hardcoded colors:
```tsx
// Subtle backgrounds
bg-primary/10        /* 10% opacity primary */
bg-destructive/20    /* 20% opacity destructive */
border-border/50     /* 50% opacity border */
```

### **Gradient Migration**
```tsx
// ❌ Before
from-blue-500 to-emerald-600

// ✅ After - using progressive chart colors
from-primary via-chart-1 to-chart-2
```

### **Complex Color Combinations**
```tsx
// ❌ Before - multiple hardcoded colors
bg-gradient-to-br from-blue-50 via-white to-emerald-50

// ✅ After - theme-based gradients
bg-gradient-to-br from-primary/5 via-background to-chart-2/5
```

---

## 📊 **Validation Tools**

### **Manual Testing**
1. Switch between light/dark themes rapidly
2. Check color consistency across similar elements
3. Verify proper contrast ratios
4. Test with various screen conditions

### **Automated Checks**
```bash
# Search for remaining hardcoded colors
grep -r "bg-gray\|text-gray\|border-gray" src/components/
grep -r "bg-blue\|text-blue\|bg-red\|text-red" src/components/
```

---

**Last Updated:** December 2024  
**Next Review:** After each component migration