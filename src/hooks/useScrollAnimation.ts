import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1, // Zmniejszony próg dla wcześniejszego uruchomienia
    rootMargin = '0px 0px -50px 0px', // Mniejszy margines dla wcześniejszego uruchomienia
    triggerOnce = true // Domyślnie animacja tylko raz
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

export const useStaggeredAnimation = (
  itemCount: number,
  options: UseScrollAnimationOptions = {}
) => {
  const { elementRef, isVisible } = useScrollAnimation({
    ...options,
    triggerOnce: true // Zawsze tylko raz dla staggered animacji
  });
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (isVisible && elementRef.current) {
      const items = elementRef.current.querySelectorAll('.stagger-item');
      
      // Tylko animacja w dół - od pierwszego do ostatniego
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('animate-in');
          setAnimatedItems(prev => new Set([...prev, index]));
        }, index * 150); // Zwiększony delay dla lepszego efektu
      });
    }
  }, [isVisible, itemCount]);

  return { elementRef, isVisible, animatedItems };
};