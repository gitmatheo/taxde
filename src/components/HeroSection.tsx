import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-16">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-lg mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Twój partner w Niemczech
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
              Twój sprawdzony partner
              <span className="bg-gradient-to-r from-primary via-chart-1 to-chart-2 bg-clip-text text-transparent block">
                w Niemczech
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up animation-delay-200">
              Rejestrujemy spółki, prowadzimy księgowość i reprezentujemy przed
              urzędami. Zaufało nam już wielu polskich przedsiębiorców
              działających za Odrą.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-chart-1 hover:from-primary/90 hover:to-chart-1/90 text-primary-foreground px-8 py-6 text-lg group"
                onClick={() => scrollToSection("kontakt")}
              >
                Umów konsultację
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg group hover:bg-muted"
                onClick={() => scrollToSection("uslugi")}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Zobacz usługi
              </Button>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative animate-fade-in-right">
            <div className="relative bg-gradient-to-br from-primary via-chart-2 to-chart-3 p-8 rounded-3xl shadow-2xl">
              <img
                src="https://i.postimg.cc/Jzpnv5MG/pexels-photo-2570063.jpg"
                alt="Brama Brandenburska w Berlinie"
                className="w-full h-80 object-cover rounded-2xl"
              />

              {/* Floating Metric Cards */}
              <div className="absolute -top-4 -left-4 bg-card text-card-foreground border border-border/20 p-4 rounded-xl shadow-lg animate-float">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Zadowolenie klientów
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card text-card-foreground border border-border/20 p-4 rounded-xl shadow-lg animate-float animation-delay-1000">
                <div className="text-2xl font-bold text-primary">7 dni</div>
                <div className="text-sm text-muted-foreground">
                  Rejestracja spółki
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
