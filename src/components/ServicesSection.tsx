import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/common/SectionHeader";

const ServicesSection = () => {
  const { elementRef } = useStaggeredAnimation(3, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  const services = [
    {
      image:
        "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg",
      title: "Księgowość zgodna z § 6 Nr. 4 StBerG",
      description:
        "Kompleksowa obsługa księgowa Twojej firmy w współpracy z doradcą podatkowym lub prawnikiem",
      features: [
        "Księgi rachunkowe",
        "Rozliczenia VAT",
        "Raporty finansowe",
        "Bilanse roczne",
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
      title: "Adres dla Twojej spółki",
      description: "Wirtualna siedziba dla Twojego biznesu.",
      features: [
        "Siedziba firmy",
        "Adres korespondencyjny",
        "Skanowanie korespondencji",
        "Indywidualna skrzynka na listy",
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg",
      title: "Zakładanie spółek w Niemczech",
      description:
        "Przeprowadzimy Cię przez cały proces zakładania spółki od A do Z",
      features: [
        "Wyjaśnimy proces zakładania spółki",
        "Załatwimy wszystkie formalności",
        "Umówimy termin u notariusza",
        "W razie potrzeby pójdziemy z Tobą na spotkanie",
      ],
    },
  ];

  return (
    <section id="uslugi" className="py-24 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Nasze usługi"
          title="Spółka w Niemczech bez stresu"
          description="Załatwimy wszystkie formalności, poprowadzimy księgowość i zajmiemy się kontaktem z urzędami. Ty skupiasz się na biznesie — my zajmujemy się resztą."
        />

        <div
          ref={elementRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className="stagger-item hover-lift group transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl mb-2 text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
