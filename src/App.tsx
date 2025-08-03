import { useState, useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Get the base path from Vite's configuration
  const basePath = import.meta.env.BASE_URL;

  useEffect(() => {
    // Simple routing based on URL path, accounting for base path
    const path = window.location.pathname;
    const relativePath = path.replace(basePath.replace(/\/$/, ""), "") || "/";

    if (relativePath === "/blog") {
      setCurrentPage("blog");
    } else {
      setCurrentPage("home");
    }

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname;
      const relativePath = path.replace(basePath.replace(/\/$/, ""), "") || "/";

      if (relativePath === "/blog") {
        setCurrentPage("blog");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [basePath]);

  // Function to navigate between pages
  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    const fullPath = basePath.replace(/\/$/, "");

    if (page === "blog") {
      window.history.pushState({}, "", `${fullPath}/blog`);
    } else {
      window.history.pushState({}, "", fullPath || "/");
    }
  };

  if (currentPage === "blog") {
    return (
      <ThemeProvider defaultTheme="system" storageKey="taxde-theme">
        <div className="min-h-screen bg-background text-foreground">
          <Header navigateToPage={navigateToPage} />
          <main>
            <Blog />
          </main>
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
