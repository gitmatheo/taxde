import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/common/SectionHeader";
import AnimatedSection from "@/components/common/AnimatedSection";
import ServiceCard from "@/components/common/ServiceCard";

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
          {blogPosts.map((post) => (
            <ServiceCard
              key={post.id}
              image={post.image}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              readTime={post.readTime}
              author={post.author}
              onClick={() => onPostClick(post.id)}
              titleAlignment="left"
              showArrow={true}
            />
          ))}
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BlogList;
