import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

interface HeaderProps {
  navigateToPage?: (page: string) => void;
}

const Header = ({ navigateToPage }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        setIsMobileMenuOpen(false);
      }
    }
  };

  const handleBlogClick = () => {
    navigateToPage?.('blog');
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigateToPage?.('home');
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
            <img 
              src="https://i.postimg.cc/rww0zy3B/logo-taxde.png" 
              alt="TaxDe Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('uslugi')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Usługi
            </button>
            <button 
              onClick={handleBlogClick}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Kontakt
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="mr-4"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button 
              onClick={() => scrollToSection('kontakt')}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
            >
              Umów konsultację
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="mr-2"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <nav className="py-4 space-y-2">
              <button 
                onClick={() => scrollToSection('uslugi')}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Usługi
              </button>
              <button 
                onClick={handleBlogClick}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                Kontakt
              </button>
              <div className="px-4 pt-2">
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-primary/80"
                  onClick={() => scrollToSection('kontakt')}
                >
                  Umów konsultację
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;