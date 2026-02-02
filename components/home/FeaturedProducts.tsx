'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations, useLocale } from 'next-intl';
import ProductCard from '@/components/products/ProductCard';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

const featuredProducts = [
  {
    name: 'Luxury Argan Oil Serum',
    description: 'Reveal thicker, healthier hair with this lightweight formula enriched with Moroccan Argan Oil.',
    price: 210,
    image: '/img/luxury-hair-serum.jpg',
    category: 'Hair Serum',
  },
  {
    name: 'Golden Caviar Nursing Care',
    description: 'Luxurious scalp and hair treatment powered by ocean activity and deep-repairing caviar extract.',
    price: 279,
    image: '/img/caviar-nursing-care.jpg',
    category: 'Hair Treatment',
  },
  {
    name: 'Argan Oil Shampoo & Conditioner',
    description: 'Clean, non-irritating hair care rooted in nature. Perfect for every hair type and concern.',
    price: 299,
    image: '/img/argan-shampoo.jpg',
    category: 'Shampoo',
  },
  {
    name: 'Organic Argan Oil Hair Serum',
    description: 'Tame frizz and restore shine. Repairs split ends, boosts elasticity, and strengthens fragile strands.',
    price: 210,
    image: '/img/argan-hair-serum.jpg',
    category: 'Hair Serum',
  },
];

export default function FeaturedProducts() {
  const t = useTranslations('featured');
  const locale = useLocale();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-title', {
        scrollTrigger: {
          trigger: '.section-title',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.from('.product-card', {
        scrollTrigger: {
          trigger: '.products-grid',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-luxury-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-title">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-luxury-brown-900 mb-4">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <p className="text-lg text-luxury-brown-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div key={index} className="product-card">
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href={`/${locale}/products`} variant="secondary" animatedIcon="arrow">
            {t('viewAll')}
          </Button>
        </div>
      </div>
    </section>
  );
}
