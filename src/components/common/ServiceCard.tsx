import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { ArrowRight, Calendar, Clock } from "lucide-react";

export interface ServiceCardProps {
  /** Image source URL */
  image: string;
  /** Card title */
  title: string;
  /** Card description (optional for blog cards) */
  description?: string;
  /** Optional CSS class name for additional styling */
  className?: string;
  /** Click handler for navigation (blog cards) */
  onClick?: () => void;

  // Service-specific props
  /** List of features for service cards */
  features?: string[];

  // Blog-specific props
  /** Brief excerpt for blog cards */
  excerpt?: string;

  /** Publication date for blog cards */
  date?: string;
  /** Reading time for blog cards */
  readTime?: string;
  /** Author name for blog cards */
  author?: string;

  // Layout customization
  /** Title alignment - center for services, left for blogs */
  titleAlignment?: "left" | "center";
  /** Show arrow icon in footer */
  showArrow?: boolean;
}

/**
 * Flexible card component for displaying both service and blog content.
 * Adapts layout and content based on provided props.
 *
 * @example Service Card
 * ```tsx
 * <ServiceCard
 *   image="/service.jpg"
 *   title="Service Title"
 *   description="Service description"
 *   features={["Feature 1", "Feature 2"]}
 *   titleAlignment="center"
 * />
 * ```
 *
 * @example Blog Card
 * ```tsx
 * <ServiceCard
 *   image="/blog.jpg"
 *   title="Blog Title"
 *   excerpt="Blog excerpt..."

 *   date="Dec 15, 2024"
 *   readTime="5 min"
 *   author="John Doe"
 *   onClick={() => navigate('/blog/1')}
 *   showArrow={true}
 * />
 * ```
 */
const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  className = "",
  onClick,
  features,
  excerpt,

  date,
  readTime,
  author,
  titleAlignment = "center",
  showArrow = false,
}) => {
  const isClickable = !!onClick;
  const isBlogCard = !!(excerpt || date || readTime || author);
  const isServiceCard = !!features;

  return (
    <Card
      className={`stagger-item hover-lift group transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm overflow-hidden ${
        isClickable ? "cursor-pointer" : ""
      } ${className}`}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

      </div>

      {/* Card Header */}
      <CardHeader className={`${isBlogCard ? "pb-3" : "text-center pb-4"}`}>
        <CardTitle
          className={`${
            isBlogCard
              ? "text-lg leading-tight group-hover:text-primary transition-colors"
              : "text-xl mb-2 text-foreground"
          } ${titleAlignment === "left" ? "text-left" : "text-center"}`}
        >
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      {/* Card Content */}
      <CardContent className="pt-0">
        {/* Service Features */}
        {isServiceCard && features && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-muted-foreground"
              >
                <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Blog Content */}
        {isBlogCard && (
          <>
            {/* Excerpt */}
            {excerpt && (
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {excerpt}
              </p>
            )}

            {/* Meta Information */}
            {(date || readTime) && (
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <div className="flex items-center space-x-4">
                  {date && (
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{date}</span>
                    </div>
                  )}
                  {readTime && (
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{readTime}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Author and Arrow */}
            {(author || showArrow) && (
              <div className="flex items-center justify-between">
                {author && (
                  <span className="text-sm font-medium text-foreground">
                    {author}
                  </span>
                )}
                {showArrow && (
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                )}
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
