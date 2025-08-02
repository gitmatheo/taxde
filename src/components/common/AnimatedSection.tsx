import React from "react";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "@/hooks/useScrollAnimation";

// Animation options interface (moved here since it's not exported from useScrollAnimation)
interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export interface AnimatedSectionProps {
  /** Number of items to stagger (if provided, uses staggered animation) */
  staggerCount?: number;
  /** Animation options for intersection observer */
  animationOptions?: AnimationOptions;
  /** CSS class name for the container */
  className?: string;
  /** Child elements to animate */
  children: React.ReactNode;
  /** Render prop that receives isVisible state for conditional styling */
  render?: (props: {
    isVisible: boolean;
    ref: React.RefObject<HTMLElement>;
  }) => React.ReactNode;
}

/**
 * Reusable animated section component that wraps content with scroll animations.
 * Supports both single scroll animations and staggered animations for multiple items.
 *
 * @example
 * ```tsx
 * // Staggered animation for grid
 * <AnimatedSection
 *   staggerCount={3}
 *   className="grid md:grid-cols-3 gap-6"
 * >
 *   <div className="stagger-item">Item 1</div>
 *   <div className="stagger-item">Item 2</div>
 *   <div className="stagger-item">Item 3</div>
 * </AnimatedSection>
 *
 * // Single scroll animation
 * <AnimatedSection className="content-block">
 *   <p>Content that fades in on scroll</p>
 * </AnimatedSection>
 *
 * // Using render prop for conditional styling
 * <AnimatedSection render={({ isVisible, ref }) => (
 *   <div ref={ref} className={`transition ${isVisible ? 'visible' : ''}`}>
 *     Custom content
 *   </div>
 * )} />
 * ```
 */
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  staggerCount,
  animationOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  },
  className = "",
  children,
  render,
}) => {
  // Always call both hooks to maintain hook order consistency
  const staggerResult = useStaggeredAnimation(staggerCount || 1, animationOptions);
  const scrollResult = useScrollAnimation(animationOptions);

  // Use staggered animation if staggerCount is provided, otherwise use scroll animation
  const elementRef = staggerCount ? staggerResult.elementRef : scrollResult.elementRef;
  const isVisible = staggerCount ? staggerResult.isVisible : scrollResult.isVisible;

  // If render prop is provided, use it
  if (render) {
    return <>{render({ isVisible, ref: elementRef! })}</>;
  }

  // Default container rendering
  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={className}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
