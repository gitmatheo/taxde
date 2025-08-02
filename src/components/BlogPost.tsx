import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';

interface BlogPostProps {
  postId: string;
  onBackClick: () => void;
}

const BlogPost = ({ postId, onBackClick }: BlogPostProps) => {

  // Mock data - in real app this would come from API/CMS
  const post = {
    id: postId,
    title: 'Nowe przepisy podatkowe 2024 - co musisz wiedzieć',
    content: `
      <p>Rok 2024 przynosi szereg istotnych zmian w polskim prawie podatkowym, które bezpośrednio wpłyną na prowadzenie działalności gospodarczej. W tym artykule omówimy najważniejsze zmiany i ich praktyczne konsekwencje dla przedsiębiorców.</p>

      <h2>Najważniejsze zmiany w VAT</h2>
      <p>Jedną z kluczowych zmian jest wprowadzenie nowych zasad rozliczania VAT dla e-commerce. Przedsiębiorcy prowadzący sprzedaż online będą musieli dostosować swoje systemy do nowych wymagań raportowania.</p>

      <h3>Kluczowe punkty:</h3>
      <ul>
        <li>Nowe obowiązki raportowe dla platform e-commerce</li>
        <li>Zmiany w zasadach odliczania VAT od samochodów</li>
        <li>Uproszczenia dla małych podatników</li>
      </ul>

      <h2>Zmiany w podatku dochodowym</h2>
      <p>W obszarze podatku dochodowego wprowadzono kilka istotnych ułatwień dla małych i średnich przedsiębiorców. Najważniejszą zmianą jest podniesienie progów dla niektórych ulg podatkowych.</p>

      <blockquote>
        "Nowe przepisy mają na celu uproszczenie systemu podatkowego i zmniejszenie obciążeń administracyjnych dla przedsiębiorców" - komentuje Anna Kowalska, główna księgowa TaxDe.
      </blockquote>

      <h2>Praktyczne wskazówki</h2>
      <p>Aby przygotować się do zmian, zalecamy:</p>
      <ol>
        <li>Przegląd obecnych procesów księgowych</li>
        <li>Aktualizację systemów IT</li>
        <li>Szkolenie zespołu z nowych przepisów</li>
        <li>Konsultację z doradcą podatkowym</li>
      </ol>

      <h2>Podsumowanie</h2>
      <p>Zmiany w przepisach podatkowych na 2024 rok są znaczące, ale przy odpowiednim przygotowaniu można je wdrożyć bez większych problemów. Kluczowe jest wczesne rozpoczęcie przygotowań i skorzystanie z pomocy profesjonalistów.</p>
    `,
    category: 'Prawo podatkowe',
    date: '15 grudnia 2024',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg',
    author: 'Anna Kowalska',
    authorImage: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg'
  };

  return (
    <div className="min-h-screen bg-background dark:bg-background pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBackClick}
          className="mb-8 hover:bg-muted dark:hover:bg-muted"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Powrót do bloga
        </Button>

        {/* Hero Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden">
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6">
            <Badge variant="secondary" className="bg-background/90 dark:bg-background/90 text-foreground mb-4">
              {post.category}
            </Badge>
          </div>
        </div>

        <AnimatedSection className="scroll-fade-up">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={post.authorImage}
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-foreground">{post.author}</div>
                  <div className="text-sm text-muted-foreground">Główna Księgowa</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-1" />
                  Udostępnij
                </Button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              '--tw-prose-body': 'hsl(var(--muted-foreground))',
              '--tw-prose-headings': 'hsl(var(--foreground))',
              '--tw-prose-links': 'hsl(var(--primary))',
              '--tw-prose-bold': 'hsl(var(--foreground))',
              '--tw-prose-quotes': 'hsl(var(--foreground))',
              '--tw-prose-quote-borders': 'hsl(var(--primary))',
              '--tw-prose-code': 'hsl(var(--foreground))',
            } as React.CSSProperties}
          />

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl border border-primary/20 dark:border-primary/30">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Potrzebujesz pomocy z nowymi przepisami?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nasz zespół ekspertów pomoże Ci przygotować się do zmian i wdrożyć nowe rozwiązania w Twojej firmie.
            </p>
            <Button className="bg-gradient-to-r from-primary to-primary/80">
              Umów bezpłatną konsultację
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default BlogPost;