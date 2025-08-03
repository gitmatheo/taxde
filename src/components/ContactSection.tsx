import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MessageCircle, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import AnimatedSection from "@/components/common/AnimatedSection";
import ContactCard from "@/components/common/ContactCard";
import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "@/config/constants";

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with public key
      emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

      // Prepare email template parameters
      const templateParams = {
        to_email: EMAIL_CONFIG.TARGET_EMAIL,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        reply_to: formData.email,
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        toast({
          title: "Wiadomość wysłana!",
          description: "Skontaktujemy się z Tobą w ciągu 24 godzin.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Email send failed");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast({
        title: "Błąd wysyłania",
        description:
          "Wystąpił problem z wysłaniem wiadomości. Spróbuj ponownie lub skontaktuj się bezpośrednio.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      value: "+48 123 456 789",
      link: "tel:+48123456789",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "kontakt@taxde.pl",
      link: "mailto:kontakt@taxde.pl",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Biuro",
      value: "Wilmersdorfer Str. 122-123, 10627 Berlin",
      link: "https://maps.google.com",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Siedziba",
      value: "Ostendstraße 25, 12459 Berlin",
      link: "https://maps.google.com",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Napisz na WhatsApp",
      value: "+48 123 456 789",
      link: "https://wa.me/48123456789",
    },
  ];

  return (
    <section
      id="kontakt"
      className="py-24 bg-gradient-to-br from-background to-muted/30 dark:from-background dark:to-muted/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="Kontakt"
          title="Rozpocznij współpracę z nami"
          description="Umów bezpłatną konsultację i dowiedz się, jak możemy pomóc Twojemu biznesowi"
        />

        <AnimatedSection
          staggerCount={2}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Form */}
          <Card className="stagger-item hover-lift border-0 shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Umów bezpłatną konsultację
              </CardTitle>
              <p className="text-muted-foreground">
                Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Imię i nazwisko *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="jan@firma.pl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nazwa firmy
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Moja Firma Sp. z o.o."
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Wiadomość
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full"
                    placeholder="Opisz swoje potrzeby lub zadaj pytanie..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 py-6 text-lg button-hover-scale"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                      <span>Wysyłanie...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5" />
                      <span>Wyślij zapytanie</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="stagger-item">
            <AnimatedSection staggerCount={5} className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <ContactCard
                  key={index}
                  icon={info.icon}
                  title={info.title}
                  value={info.value}
                  link={info.link}
                />
              ))}
            </AnimatedSection>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
