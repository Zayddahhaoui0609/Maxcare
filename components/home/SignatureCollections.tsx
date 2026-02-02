'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

const signatureCollections = [
  {
    titleKey: 'caviar',
    image: '/img/Signature_1.jpg',
  },
  {
    titleKey: 'luxury',
    image: '/img/Signature_2.jpg',
  },
  {
    titleKey: 'argan',
    image: '/img/Signature_3.jpg',
  },
];

export default function SignatureCollections() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('signature');
  const locale = useLocale();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.signature-title',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.signature-title',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      gsap.fromTo('.signature-card',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: '.signature-grid',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 signature-title">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect mb-6"
          >
            <Sparkles className="text-luxury-gold-500" size={18} />
            <span className="text-sm font-medium text-luxury-brown-700">
              {t('badge')}
            </span>
          </motion.div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-luxury-brown-900 mb-3 sm:mb-4">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-luxury-brown-600 max-w-3xl mx-auto px-4">
            {t('description')}
          </p>
        </div>

        {}
        <div className="signature-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {signatureCollections.map((collection, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="signature-card group relative overflow-hidden rounded-3xl luxury-shadow hover:luxury-shadow-lg transition-all duration-500"
            >
              {}
              <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] overflow-hidden">
                <Image
                  src={collection.image}
                  alt={t(`collections.${collection.titleKey}.title`)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-brown-900/80 via-luxury-brown-900/40 to-transparent" />
                
                {}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-2 group-hover:text-luxury-gold-400 transition-colors duration-300">
                    {t(`collections.${collection.titleKey}.title`)}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {t(`collections.${collection.titleKey}.description`)}
                  </p>
                </div>

                {}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-luxury-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-luxury-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href={`/${locale}/products`}
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-luxury-amber-500 to-luxury-gold-500 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>{t('exploreButton')}</span>
            <Sparkles size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
