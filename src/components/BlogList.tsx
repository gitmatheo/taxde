import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import AnimatedSection from "@/components/common/AnimatedSection";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

interface BlogListProps {
  onPostClick: (postId: string) => void;
}

const BlogList = ({ onPostClick }: BlogListProps) => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Nowe przepisy podatkowe 2024 - co musisz wiedzieć",
      excerpt:
        "Przegląd najważniejszych zmian w prawie podatkowym, które wchodzą w życie w 2024 roku i ich wpływ na prowadzenie działalności gospodarczej.",
      category: "Prawo podatkowe",
      date: "15 grudnia 2024",
      readTime: "5 min",
      image:
        "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg",
      author: "Anna Kowalska",
    },
    {
      id: "2",
      title: "Cyfryzacja księgowości - przewodnik dla przedsiębiorców",
      excerpt:
        "Jak przejść na cyfrową księgowość krok po kroku. Praktyczne wskazówki i najlepsze praktyki dla małych i średnich firm.",
      category: "Cyfryzacja",
      date: "12 grudnia 2024",
      readTime: "7 min",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      author: "Marcin Nowak",
    },
    {
      id: "3",
      title: "Optymalizacja podatkowa dla firm - legalne sposoby",
      excerpt:
        "Poznaj legalne metody optymalizacji podatkowej, które mogą znacząco obniżyć obciążenia podatkowe Twojej firmy.",
      category: "Optymalizacja",
      date: "10 grudnia 2024",
      readTime: "6 min",
      image:
        "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
      author: "Katarzyna Wiśniewska",
    },
    {
      id: "4",
      title: "JPK_VAT - wszystko co musisz wiedzieć o nowych obowiązkach",
      excerpt:
        "Kompletny przewodnik po jednolitym pliku kontrolnym VAT. Terminy, wymagania i praktyczne wskazówki.",
      category: "VAT",
      date: "8 grudnia 2024",
      readTime: "4 min",
      image:
        "https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg",
      author: "Anna Kowalska",
    },
    {
      id: "5",
      title: "Kadry i płace w 2024 - zmiany w przepisach",
      excerpt:
        "Przegląd najważniejszych zmian w obszarze kadr i płac, które obowiązują od 2024 roku.",
      category: "Kadry i płace",
      date: "5 grudnia 2024",
      readTime: "5 min",
      image:
        "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
      author: "Marcin Nowak",
    },
    {
      id: "6",
      title: "Automatyzacja procesów księgowych - ROI i korzyści",
      excerpt:
        "Analiza zwrotu z inwestycji w automatyzację księgowości i konkretne korzyści dla biznesu.",
      category: "Automatyzacja",
      date: "3 grudnia 2024",
      readTime: "8 min",
      image:
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg",
      author: "Katarzyna Wiśniewska",
    },
  ];

  const categories = [
    "Wszystkie",
    "Prawo podatkowe",
    "Cyfryzacja",
    "Optymalizacja",
    "VAT",
    "Kadry i płace",
    "Automatyzacja",
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="Blog TaxDe"
          title="Najnowsze informacje z świata księgowości"
          description="Praktyczne porady, analizy przepisów i trendy w księgowości cyfrowej"
        />

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={index === 0 ? "default" : "secondary"}
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <AnimatedSection
          staggerCount={6}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="stagger-item hover-lift group cursor-pointer transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm overflow-hidden"
              onClick={() => onPostClick(post.id)}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-background/90 text-foreground"
                  >
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    {post.author}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BlogList;
