import { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Blog from '@/components/Blog';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Simple routing based on URL path
    const path = window.location.pathname;
    if (path === '/blog') {
      setCurrentPage('blog');
    } else {
      setCurrentPage('home');
    }

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/blog') {
        setCurrentPage('blog');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Function to navigate between pages
  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    if (page === 'blog') {
      window.history.pushState({}, '', '/blog');
    } else {
      window.history.pushState({}, '', '/');
    }
  };

  if (currentPage === 'blog') {
    return (
      <ThemeProvider defaultTheme="system" storageKey="taxde-theme">
        <div className="min-h-screen bg-background text-foreground">
          <Header navigateToPage={navigateToPage} />
          <Blog />
          <Footer navigateToPage={navigateToPage} />
          <Toaster />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="taxde-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Header navigateToPage={navigateToPage} />
        <main>
          <HeroSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer navigateToPage={navigateToPage} />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;