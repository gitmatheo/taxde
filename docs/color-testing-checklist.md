# 🎨 Color Consistency Testing Checklist

## Testing Environment

- **Dev Server:** http://localhost:5174/
- **Theme System:** OKLCH colors with automatic light/dark adaptation
- **Browser DevTools:** Use to toggle `dark` class on `<html>` element

## Testing Procedure

### 1. Theme Toggle Setup

```javascript
// Run in browser console to toggle themes:
document.documentElement.classList.toggle("dark");
```

### 2. Component Testing Checklist

#### ✅ **Footer Component**

- [ ] **Light Theme:** Background uses light card color, text properly contrasted
- [ ] **Dark Theme:** Background uses dark card color, text properly contrasted
- [ ] **Links:** Hover states work in both themes
- [ ] **Social Icons:** Proper foreground/hover colors in both themes
- [ ] **Border:** Footer border adapts properly to theme

#### ✅ **HeroSection Component**

- [ ] **Floating Stats Cards:** `bg-card` + `text-card-foreground` work in both themes
- [ ] **CTA Button:** `text-primary-foreground` contrasts well with gradient in both themes
- [ ] **Background Gradient:** `from-primary/5 via-background to-chart-2/5` looks good in both themes
- [ ] **Text Gradient:** "w Niemczech" gradient visible and attractive in both themes
- [ ] **Floating Elements:** Background blob colors work in both themes

#### ✅ **ContactSection Component**

- [ ] **Loading Spinner:** `border-primary-foreground` visible in both themes
- [ ] **Form Elements:** All inputs, labels, buttons readable in both themes
- [ ] **Section Headers:** Proper contrast in both themes

#### ✅ **Toast Component**

- [ ] **Default Toast:** `bg-background text-foreground` works in both themes
- [ ] **Destructive Toast:** `bg-destructive text-destructive-foreground` proper contrast
- [ ] **Close Button:** Destructive hover states (`text-destructive-foreground`) work properly
- [ ] **Focus States:** Ring colors (`focus:ring-destructive`) visible in both themes

#### ✅ **UI Overlays**

- [ ] **Dialog Overlay:** `bg-foreground/80` provides proper dimming in both themes
- [ ] **Sheet Overlay:** Consistent dimming appearance
- [ ] **Drawer Overlay:** Consistent dimming appearance
- [ ] **Alert Dialog Overlay:** Consistent dimming appearance

#### ✅ **Navigation & General**

- [ ] **Header:** All navigation elements properly themed
- [ ] **Services Section:** Card backgrounds and text contrast
- [ ] **Blog Section:** Card styling consistency
- [ ] **All Buttons:** Proper contrast and hover states
- [ ] **All Text:** Proper foreground/muted-foreground contrast

### 3. OKLCH Color Quality Check

- [ ] **Color Vibrancy:** OKLCH colors appear vibrant and saturated
- [ ] **Perceptual Uniformity:** Similar lightness values appear consistently bright/dark
- [ ] **Smooth Gradients:** No color banding in gradient elements
- [ ] **Wide Gamut:** Colors appear richer than standard sRGB (on supported displays)

### 4. Accessibility Verification

- [ ] **Contrast Ratios:** All text meets WCAG AA standards (4.5:1 for normal text)
- [ ] **Focus Indicators:** All interactive elements have visible focus states
- [ ] **Color Information:** No information conveyed by color alone

### 5. Cross-Browser Testing

- [ ] **Chrome:** All colors render correctly
- [ ] **Firefox:** OKLCH support and fallbacks work
- [ ] **Safari:** Color consistency maintained
- [ ] **Edge:** All theme features working

## Common Issues to Look For

❌ **Potential Problems:**

- Text that disappears in dark mode
- Insufficient contrast ratios
- Broken gradients or color transitions
- Focus states that are invisible
- Overlays that don't dim properly
- Color information that's lost in theme switching

✅ **Expected Results:**

- Seamless theme switching with no visual breaks
- All text clearly readable in both themes
- Consistent visual hierarchy maintained
- Beautiful OKLCH color rendering
- Professional appearance in both light and dark modes

## Testing Commands

```bash
# Ensure dev server is running
npm run dev

# Check for any console errors related to CSS
# Open browser DevTools → Console tab

# Toggle theme multiple times rapidly
document.documentElement.classList.toggle('dark')
```

## Sign-off

- [ ] **Light Theme Testing Complete** ✅
- [ ] **Dark Theme Testing Complete** ✅
- [ ] **Theme Switching Testing Complete** ✅
- [ ] **OKLCH Color Quality Verified** ✅
- [ ] **Accessibility Standards Met** ✅
- [ ] **Cross-Browser Compatibility Confirmed** ✅

**Tested by:** ******\_******  
**Date:** ******\_******  
**Issues Found:** ******\_******
