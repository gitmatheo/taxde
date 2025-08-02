import SectionHeader from "@/components/common/SectionHeader";
import AnimatedSection from "@/components/common/AnimatedSection";
import ServiceCard from "@/components/common/ServiceCard";

const ServicesSection = () => {
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

        <AnimatedSection
          staggerCount={3}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              features={service.features}
              titleAlignment="center"
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
