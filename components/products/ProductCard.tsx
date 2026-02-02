'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ShoppingCart } from 'lucide-react';
import { AnimatedHeartIcon, AnimatedCartIcon } from '@/components/ui/AnimatedIcons';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  slug?: string;
}

export default function ProductCard({ name, description, price, image, category, slug }: ProductCardProps) {
  const t = useTranslations('products');
  const locale = useLocale();
  
  const productSlug = slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleAddToCart = () => {
    
  };

  
  const getCategoryKey = (cat: string) => {
    const map: Record<string, string> = {
      'Hair Serum': 'hairSerum',
      'Shampoo': 'shampoo',
      'Conditioner': 'conditioner',
      'Hair Mask': 'hairMask',
      'Hair Treatment': 'hairTreatment',
      'Youth Oil': 'youthOil'
    };
    return map[cat] || cat;
  };

  return (
    <Link href={`/${locale}/product/${productSlug}`}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.05 }}
        className="group relative bg-white rounded-2xl overflow-hidden luxury-shadow hover:luxury-shadow-lg transition-all duration-500 cursor-pointer"
      >
        <div className="absolute top-4 right-4 z-10 flex flex-col space-y-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className={`p-3 rounded-full transition-all duration-300 ${
              isLiked
                ? 'bg-red-50 text-red-500'
                : 'glass-effect text-luxury-brown-600 hover:bg-white'
            }`}
          >
            <AnimatedHeartIcon
              size={20}
              filled={isLiked}
            />
          </motion.button>
        </div>

        <div className="relative h-80 overflow-hidden bg-gradient-to-br from-luxury-beige-100 to-luxury-beige-200">
          {!imageError ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-luxury-amber-400 to-luxury-gold-500 flex items-center justify-center">
                  <ShoppingCart className="text-white" size={40} />
                </div>
                <p className="text-luxury-brown-600 text-sm">Product Image</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="p-6">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-xs font-medium text-luxury-amber-700 bg-luxury-amber-50 rounded-full">
              {t(`categories.${getCategoryKey(category)}`)}
            </span>
          </div>

          <h3 className="font-serif text-2xl font-semibold text-luxury-brown-900 mb-2 group-hover:gradient-text transition-all duration-300">
            {name}
          </h3>

          <p className="text-luxury-brown-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-3xl font-serif font-bold gradient-text">
                {price}
              </span>
              <span className="text-luxury-brown-600 ml-1">MAD</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="group w-full px-4 py-2.5 bg-gradient-to-r from-luxury-amber-500 to-luxury-gold-500 text-white rounded-full font-semibold text-sm flex items-center justify-center gap-2 luxury-shadow hover:luxury-shadow-lg transition-all duration-300 overflow-hidden relative"
          >
            <AnimatedCartIcon size={16} />
            <span>{t('addToCart')}</span>
          </motion.button>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold-400/0 via-luxury-gold-400/10 to-luxury-gold-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>
      </motion.div>
    </Link>
  );
}
