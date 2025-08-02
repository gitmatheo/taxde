import React from "react";

type FloatingElementType = "card" | "blob";
type Position = "top" | "bottom" | "left" | "right";
type AnimationDelay = "none" | "1000" | "2000" | "4000";

export interface FloatingElementProps {
  /** Type of floating element */
  type: FloatingElementType;
  /** Positioning classes */
  position: {
    [key in Position]?: string;
  };
  /** Animation delay */
  animationDelay?: AnimationDelay;
  /** Optional CSS class name for additional styling */
  className?: string;

  // Card-specific props
  /** Main value/metric for card type */
  value?: string;
  /** Label/description for card type */
  label?: string;
  /** Value text color for card type */
  valueColor?: "primary" | "chart-1" | "chart-2" | "chart-3";

  // Blob-specific props
  /** Background color for blob type */
  blobColor?: "primary" | "chart-1" | "chart-2" | "chart-3";
  /** Size class for blob type */
  size?: "sm" | "md" | "lg";
}

/**
 * Flexible floating element component for decorative cards and background blobs.
 * Supports absolute positioning, animation delays, and theme-aware colors.
 *
 * @example Floating Card
 * ```tsx
 * <FloatingElement
 *   type="card"
 *   position={{ top: "-4", left: "-4" }}
 *   value="99.9%"
 *   label="Precyzja"
 *   valueColor="primary"
 * />
 * ```
 *
 * @example Background Blob
 * ```tsx
 * <FloatingElement
 *   type="blob"
 *   position={{ top: "20", left: "10" }}
 *   blobColor="primary"
 *   size="lg"
 *   animationDelay="2000"
 * />
 * ```
 */
const FloatingElement: React.FC<FloatingElementProps> = ({
  type,
  position,
  animationDelay = "none",
  className = "",
  value,
  label,
  valueColor = "primary",
  blobColor = "primary",
  size = "lg",
}) => {
  // Generate position classes
  const positionClasses = Object.entries(position)
    .map(([key, value]) => `${key}-${value}`)
    .join(" ");

  // Generate animation delay class
  const delayClass =
    animationDelay !== "none" ? `animation-delay-${animationDelay}` : "";

  // Card type rendering
  if (type === "card") {
    const valueColorClass = `text-${valueColor}`;

    return (
      <div
        className={`absolute ${positionClasses} bg-card text-card-foreground p-4 rounded-xl shadow-lg animate-float ${delayClass} ${className}`}
      >
        {value && (
          <div className={`text-2xl font-bold ${valueColorClass}`}>{value}</div>
        )}
        {label && <div className="text-sm text-muted-foreground">{label}</div>}
      </div>
    );
  }

  // Blob type rendering
  if (type === "blob") {
    const sizeClasses = {
      sm: "w-48 h-48",
      md: "w-60 h-60",
      lg: "w-72 h-72",
    };

    const blobBgClass = `bg-${blobColor}/30 dark:bg-${blobColor}/40`;

    return (
      <div
        className={`absolute ${positionClasses} ${sizeClasses[size]} ${blobBgClass} rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-10 animate-blob ${delayClass} ${className}`}
      />
    );
  }

  return null;
};

export default FloatingElement;
