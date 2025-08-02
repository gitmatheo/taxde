import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  navigateToPage?: (page: string) => void;
}

const Footer = ({ navigateToPage }: FooterProps) => {
  const scrollToSection = (sectionId: string) => {
    // If we're not on home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigateToPage?.('home');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBlogClick = () => {
    navigateToPage?.('blog');
  };

  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://i.postimg.cc/Y07j7tQy/logo-darkmode.png" 
                alt="TaxDe Logo" 
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nowoczesne biuro księgowe oferujące kompleksowe usługi 
              w modelu 100% cyfrowym dla firm w całej Polsce.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Usługi</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('uslugi')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Księgowość zgodna 
                  z § 6 Nr. 4 StBerG
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('uslugi')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Adres dla spółki
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('uslugi')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Zakładanie spółek
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Firma</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={handleBlogClick}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kariera
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+48 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>kontakt@taxde.pl</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <div>
                  <div className="font-medium">Biuro:</div>
                  <div>Wilmersdorfer Str. 122-123<br />10627 Berlin</div>
                  <div className="font-medium mt-2">Siedziba:</div>
                  <div>Ostendstraße 25<br />12459 Berlin</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 TaxDe. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Polityka prywatności
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Regulamin
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                RODO
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;