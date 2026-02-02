'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import ProductCard from '@/components/products/ProductCard';
import { Filter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const collectionKeys = ['all', 'arganOil', 'caviar', 'luxuryArganOil', 'hairTreatment'];
const categoryKeys = ['all', 'hairSerum', 'shampoo', 'conditioner', 'hairMask', 'hairTreatment', 'youthOil'];

const allProducts = [
  
  {
    name: 'Hair Serum Argan Oil',
    description: 'Type: Hair Serum - Pure Argan Oil formula for healthy, radiant hair.',
    price: 299,
    image: '/img/argan-hair-serum.jpg',
    category: 'Hair Serum',
    collection: 'Argan Oil',
    slug: 'argan-hair-serum',
  },
  {
    name: 'Conditioner Argan Oil',
    description: 'Type: Conditioner - Deep conditioning with pure Moroccan Argan Oil.',
    price: 299,
    image: '/img/argan-conditioner.jpg',
    category: 'Conditioner',
    collection: 'Argan Oil',
    slug: 'argan-conditioner',
  },
  {
    name: 'Shampoo Argan Oil',
    description: 'Type: Shampoo - Gentle cleansing enriched with Argan Oil.',
    price: 295,
    image: '/img/argan-shampoo.jpg',
    category: 'Shampoo',
    collection: 'Argan Oil',
    slug: 'argan-shampoo',
  },
  {
    name: 'Hair Mask Argan Oil',
    description: 'Type: Hair Mask - Intensive treatment with pure Argan Oil.',
    price: 275,
    image: '/img/argan-hair-mask.jpg',
    category: 'Hair Mask',
    collection: 'Argan Oil',
    slug: 'argan-hair-mask',
  },

  
  {
    name: 'Hair Treatment Nursing Care',
    description: 'Type: Hair Treatment - Premium nursing care with golden caviar extract.',
    price: 279,
    image: '/img/caviar-nursing-care.jpg',
    category: 'Hair Treatment',
    collection: 'Caviar',
    slug: 'caviar-nursing-care',
  },
  {
    name: 'Hair Treatment Youth Hair Oil',
    description: 'Type: Youth Hair Oil - Anti-aging formula with caviar extract.',
    price: 219,
    image: '/img/caviar-youth-oil.jpg',
    category: 'Youth Oil',
    collection: 'Caviar',
    slug: 'caviar-youth-oil',
  },
  {
    name: 'Hair Treatment Nursing Care Set',
    description: 'Type: Hair Treatment - Complete nursing care set with caviar.',
    price: 1600,
    image: '/img/caviar-nursing-set.jpg',
    category: 'Hair Treatment',
    collection: 'Caviar',
    slug: 'caviar-nursing-set',
  },
  {
    name: 'Hair Treatment Vita-Keratin',
    description: 'Type: Hair Treatment - Vitamin and keratin enriched treatment.',
    price: 299,
    image: '/img/caviar-vita-keratin.jpg',
    category: 'Hair Treatment',
    collection: 'Caviar',
    slug: 'caviar-vita-keratin',
  },

  
  {
    name: 'Conditioner Luxury Argan Oil',
    description: 'Type: Conditioner - Luxury formula with premium Argan Oil.',
    price: 239,
    image: '/img/luxury-conditioner.jpg',
    category: 'Conditioner',
    collection: 'Luxury Argan Oil',
  },
  {
    name: 'Shampoo Luxury Argan Oil',
    description: 'Type: Shampoo - Premium cleansing with luxury Argan Oil.',
    price: 239,
    image: '/img/luxury-shampoo.jpg',
    category: 'Shampoo',
    collection: 'Luxury Argan Oil',
  },
  {
    name: 'Hair Serum Luxury Argan Oil',
    description: 'Type: Hair Serum - Lightweight luxury serum for shine and repair.',
    price: 210,
    image: '/img/luxury-hair-serum.jpg',
    category: 'Hair Serum',
    collection: 'Luxury Argan Oil',
  },
  {
    name: 'Hair Mask Luxury Argan Oil',
    description: 'Type: Hair Mask - Intensive luxury treatment mask.',
    price: 219,
    image: '/img/luxury-hair-mask.jpg',
    category: 'Hair Mask',
    collection: 'Luxury Argan Oil',
  },

  
  {
    name: 'Hair Treatment Vita-Keratin',
    description: 'Type: Hair Treatment - Advanced vita-keratin complex treatment.',
    price: 299,
    image: '/img/treatment-vita-keratin.jpg',
    category: 'Hair Treatment',
    collection: 'Hair Treatment',
  },
  {
    name: 'Hair Treatment Nursing Care Set',
    description: 'Type: Hair Treatment - Professional nursing care treatment set.',
    price: 1600,
    image: '/img/treatment-nursing-set.jpg',
    category: 'Hair Treatment',
    collection: 'Hair Treatment',
  },
  {
    name: 'Hair Treatment Vita-Keratin Spray',
    description: 'Type: Hair Treatment - Easy-to-use vita-keratin spray treatment.',
    price: 220,
    image: '/img/treatment-vita-spray.jpg',
    category: 'Hair Treatment',
    collection: 'Hair Treatment',
  },
  {
    name: 'Hair Treatment Youth Hair Oil',
    description: 'Type: Youth Oil - Anti-aging hair oil treatment.',
    price: 219,
    image: '/img/treatment-youth-oil.jpg',
    category: 'Youth Oil',
    collection: 'Hair Treatment',
  },
];

export default function ProductsPage() {
  const t = useTranslations('products');
  const [selectedCollection, setSelectedCollection] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let filtered = allProducts;
    
    
    if (selectedCollection !== 'All') {
      filtered = filtered.filter(p => p.collection === selectedCollection);
    }
    
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    setFilteredProducts(filtered);
  }, [selectedCollection, selectedCategory]);

  
  const groupedProducts = filteredProducts.reduce((acc, product) => {
    const collection = product.collection;
    if (!acc[collection]) {
      acc[collection] = [];
    }
    acc[collection].push(product);
    return acc;
  }, {} as Record<string, typeof allProducts>);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.page-title', 
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all' }
      );

      gsap.fromTo('.filter-button', 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.08, 
          ease: 'power2.out', 
          delay: 0.2,
          clearProps: 'all'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('.product-item');
    if (items.length > 0) {
      gsap.fromTo('.product-item', 
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'all',
        }
      );
    }
  }, [filteredProducts]);

  return (
    <div ref={sectionRef} className="min-h-screen pt-32 pb-24 bg-luxury-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 page-title">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-luxury-brown-900 mb-3 sm:mb-4">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-luxury-brown-600 max-w-2xl mx-auto px-4">
            {t('description')}
          </p>
        </div>

        {}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Filter size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="font-semibold text-sm sm:text-base text-luxury-brown-800">{t('collections')}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {collectionKeys.map((key, index) => {
              const collection = ['All', 'Argan Oil', 'Caviar', 'Luxury Argan Oil', 'Hair Treatment'][index];
              return (
                <motion.button
                  key={collection}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedCollection(collection);
                    setSelectedCategory('All');
                  }}
                  className={`filter-button px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    selectedCollection === collection
                      ? 'bg-gradient-to-r from-luxury-amber-500 to-luxury-gold-500 text-white luxury-shadow'
                      : 'glass-effect text-luxury-brown-700 hover:bg-white/90'
                  }`}
                >
                  {key === 'all' ? t('all') : t(`collectionsNames.${key}`)}
                </motion.button>
              );
            })}
          </div>
        </div>

        {}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Filter size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="font-semibold text-sm sm:text-base text-luxury-brown-800">{t('productType')}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categoryKeys.map((key, index) => {
              const category = ['All', 'Hair Serum', 'Shampoo', 'Conditioner', 'Hair Mask', 'Hair Treatment', 'Youth Oil'][index];
              return (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`filter-button px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-luxury-amber-500 to-luxury-gold-500 text-white luxury-shadow'
                      : 'glass-effect text-luxury-brown-700 hover:bg-white/90'
                  }`}
                >
                  {key === 'all' ? t('all') : t(`categories.${key}`)}
                </motion.button>
              );
            })}
          </div>
        </div>

        {}
        {Object.entries(groupedProducts).map(([collection, products]) => (
          <div key={collection} className="mb-12 sm:mb-16">
            {}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-luxury-brown-900 mb-2">
                {collection}
              </h2>
              <div className="w-16 sm:w-24 h-1 mx-auto bg-gradient-to-r from-luxury-amber-400 to-luxury-gold-500 rounded-full"></div>
            </div>

            {}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {products.map((product, index) => (
                <div
                  key={`${product.name}-${index}`}
                  className="product-item"
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-luxury-brown-600 text-lg">
              {t('noProducts')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
