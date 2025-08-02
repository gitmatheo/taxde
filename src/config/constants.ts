// =============================================================================
// TaxDE Application Constants
// =============================================================================

/**
 * Animation configuration constants for consistent timing and behavior
 * across all components using scroll animations and staggered effects.
 */
export const ANIMATION_CONFIG = {
  // Intersection Observer settings
  INTERSECTION_OBSERVER: {
    THRESHOLD: 0.1,
    ROOT_MARGIN: "0px 0px -50px 0px",
    TRIGGER_ONCE: true,
  },

  // Animation delays (in milliseconds)
  DELAYS: {
    NONE: 0,
    SHORT: 200,
    MEDIUM: 400,
    LONG: 1000,
    EXTRA_LONG: 2000,
    MAXIMUM: 4000,
  },

  // CSS animation delay classes
  DELAY_CLASSES: {
    NONE: "",
    SHORT: "animation-delay-200",
    MEDIUM: "animation-delay-400",
    LONG: "animation-delay-1000",
    EXTRA_LONG: "animation-delay-2000",
    MAXIMUM: "animation-delay-4000",
  },

  // Floating element animation delays
  FLOATING_DELAYS: {
    NONE: "none" as const,
    LONG: "1000" as const,
    EXTRA_LONG: "2000" as const,
    MAXIMUM: "4000" as const,
  },

  // Common stagger counts for different sections
  STAGGER_COUNTS: {
    SERVICES: 3,
    CONTACT_INFO: 5,
    BLOG_POSTS: 6,
    MAIN_GRID: 2,
  },
} as const;

/**
 * Contact information used throughout the application.
 * Centralized to ensure consistency across ContactSection, Footer, and other components.
 */
export const CONTACT_INFO = {
  PHONE: {
    DISPLAY: "+48 123 456 789",
    LINK: "tel:+48123456789",
    TITLE: "Telefon",
  },

  EMAIL: {
    DISPLAY: "kontakt@taxde.pl",
    LINK: "mailto:kontakt@taxde.pl",
    TITLE: "Email",
  },

  OFFICE: {
    DISPLAY: "Wilmersdorfer Str. 122-123, 10627 Berlin",
    LINK: "https://maps.google.com",
    TITLE: "Biuro",
    ADDRESS_LINE_1: "Wilmersdorfer Str. 122-123",
    ADDRESS_LINE_2: "10627 Berlin",
  },

  HEADQUARTERS: {
    DISPLAY: "Ostendstraße 25, 12459 Berlin",
    LINK: "https://maps.google.com",
    TITLE: "Siedziba",
    ADDRESS_LINE_1: "Ostendstraße 25",
    ADDRESS_LINE_2: "12459 Berlin",
  },

  WHATSAPP: {
    DISPLAY: "+48 123 456 789",
    LINK: "https://wa.me/48123456789",
    TITLE: "Napisz na WhatsApp",
  },
} as const;

/**
 * Company information and branding constants.
 */
export const COMPANY_INFO = {
  NAME: "TaxDe",
  FULL_NAME: "TaxDe - Księgowość w Niemczech",
  COPYRIGHT_YEAR: "2024",
  TAGLINE: "Twój partner w Niemczech",

  // Navigation section IDs
  SECTIONS: {
    SERVICES: "uslugi",
    CONTACT: "kontakt",
    ABOUT: "o-nas",
    BLOG: "blog",
  },
} as const;

/**
 * Form configuration constants for consistent form behavior.
 */
export const FORM_CONFIG = {
  PLACEHOLDERS: {
    NAME: "Jan Kowalski",
    EMAIL: "jan@example.com",
    PHONE: "+48 123 456 789",
    COMPANY: "Moja Firma Sp. z o.o.",
    MESSAGE: "Opisz swoje potrzeby lub zadaj pytanie...",
  },

  VALIDATION: {
    REQUIRED_FIELDS: ["name", "email", "message"],
    EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PHONE_PATTERN: /^\+?[\d\s\-\(\)]+$/,
  },

  SUBMISSION: {
    TIMEOUT: 1000, // ms
    SUCCESS_MESSAGE: "Wiadomość wysłana!",
    SUCCESS_DESCRIPTION: "Skontaktujemy się z Tobą w ciągu 24 godzin.",
  },
} as const;

/**
 * Hero section metrics and statistics.
 */
export const HERO_METRICS = {
  PRECISION: {
    VALUE: "99.9%",
    LABEL: "Precyzja",
    POSITION: { top: "-4", left: "-4" },
    COLOR: "primary" as const,
    DELAY: ANIMATION_CONFIG.FLOATING_DELAYS.NONE,
  },

  RESPONSE_TIME: {
    VALUE: "48h",
    LABEL: "Czas reakcji",
    POSITION: { bottom: "-4", right: "-4" },
    COLOR: "chart-2" as const,
    DELAY: ANIMATION_CONFIG.FLOATING_DELAYS.LONG,
  },
} as const;

/**
 * Background blob configuration for decorative elements.
 */
export const BACKGROUND_BLOBS = {
  PRIMARY: {
    POSITION: { top: "20", left: "10" },
    COLOR: "primary" as const,
    SIZE: "lg" as const,
    DELAY: ANIMATION_CONFIG.FLOATING_DELAYS.NONE,
  },

  SECONDARY: {
    POSITION: { top: "40", right: "10" },
    COLOR: "chart-2" as const,
    SIZE: "lg" as const,
    DELAY: ANIMATION_CONFIG.FLOATING_DELAYS.EXTRA_LONG,
  },

  TERTIARY: {
    POSITION: { bottom: "8", left: "20" },
    COLOR: "chart-3" as const,
    SIZE: "lg" as const,
    DELAY: ANIMATION_CONFIG.FLOATING_DELAYS.MAXIMUM,
  },
} as const;

/**
 * Theme color mappings for consistent usage across components.
 */
export const THEME_COLORS = {
  VALUE_COLORS: ["primary", "chart-1", "chart-2", "chart-3"] as const,
  BLOB_COLORS: ["primary", "chart-1", "chart-2", "chart-3"] as const,
  SIZES: ["sm", "md", "lg"] as const,
} as const;

/**
 * API endpoints and external links configuration.
 */
export const LINKS = {
  MAPS: {
    GOOGLE_MAPS: "https://maps.google.com",
  },

  LEGAL: {
    PRIVACY_POLICY: "#",
    TERMS_OF_SERVICE: "#",
    GDPR: "#",
  },
} as const;
