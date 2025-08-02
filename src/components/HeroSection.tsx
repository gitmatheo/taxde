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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-chart-2/5 dark:from-primary/10 dark:via-background dark:to-chart-2/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%236366f1%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%236366f1%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 dark:bg-primary/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-chart-2/30 dark:bg-chart-2/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-chart-3/30 dark:bg-chart-3/40 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6 animate-fade-in">
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
                Umów bezpłatną konsultację
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg group hover:bg-muted"
                onClick={() => scrollToSection("uslugi")}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Zobacz nasze usługi
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

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-card text-card-foreground p-4 rounded-xl shadow-lg animate-float">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Precyzja</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card text-card-foreground p-4 rounded-xl shadow-lg animate-float animation-delay-1000">
                <div className="text-2xl font-bold text-chart-2">48h</div>
                <div className="text-sm text-muted-foreground">
                  Czas reakcji
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
