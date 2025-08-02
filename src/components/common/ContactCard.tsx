import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export interface ContactCardProps {
  /** Icon element to display in the card */
  icon: React.ReactNode;
  /** Title/label for the contact method */
  title: string;
  /** Contact information value (phone, email, address, etc.) */
  value: string;
  /** Link URL for the contact method */
  link: string;
  /** Optional CSS class name for additional styling */
  className?: string;
}

/**
 * Reusable contact card component for displaying contact information.
 * Features hover effects, icon styling, and consistent OKLCH theme integration.
 *
 * @example
 * ```tsx
 * <ContactCard
 *   icon={<Phone className="h-6 w-6" />}
 *   title="Telefon"
 *   value="+48 123 456 789"
 *   link="tel:+48123456789"
 * />
 * ```
 */
const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  value,
  link,
  className = "",
}) => {
  return (
    <Card
      className={`stagger-item hover-lift border transition-all duration-300 ${className}`}
    >
      <CardContent className="p-6">
        <a href={link} className="flex items-center space-x-4 group">
          {/* Icon Container */}
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            {icon}
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-medium text-foreground">{title}</h4>
            <p className="text-muted-foreground group-hover:text-primary transition-colors">
              {value}
            </p>
          </div>
        </a>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
