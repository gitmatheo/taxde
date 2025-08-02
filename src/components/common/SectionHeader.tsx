import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export interface SectionHeaderProps {
  /** Badge text displayed above the title */
  badge: string;
  /** Main heading text */
  title: string;
  /** Optional description text below the title */
  description?: string;
  /** Optional CSS class name for additional styling */
  className?: string;
  /** Center alignment (default: true) */
  centered?: boolean;
  /** Enable scroll animation (default: true) */
  animated?: boolean;
}

/**
 * Reusable section header component with badge, title, and optional description.
 * Includes built-in scroll animations and consistent OKLCH theme styling.
 *
 * @example
 * ```tsx
 * <SectionHeader
 *   badge="Nasze usługi"
 *   title="Kompleksowa obsługa księgowa"
 *   description="Profesjonalne rozwiązania dostosowane do Twoich potrzeb"
 * />
 * ```
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  className = "",
  centered = true,
  animated = true,
}) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const containerClasses = [
    centered ? "text-center" : "text-left",
    "mb-16",
    animated ? "scroll-fade-up" : "",
    animated && isVisible ? "visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={animated ? elementRef : undefined} className={containerClasses}>
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
        {badge}
      </div>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>

      {/* Optional Description */}
      {description && (
        <p
          className={`text-xl text-muted-foreground ${
            centered ? "max-w-3xl mx-auto" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
