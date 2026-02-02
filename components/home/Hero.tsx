'use client';

import { useEffect, useRef, useMemo, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { Sparkles, Play } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import Button from '@/components/ui/Button';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const particles = useMemo(() => [
    { id: 0, left: 15, top: 20, delay: 0, duration: 8 },
    { id: 1, left: 85, top: 35, delay: 1, duration: 9 },
    { id: 2, left: 25, top: 70, delay: 2, duration: 7 },
    { id: 3, left: 70, top: 15, delay: 3, duration: 8.5 },
    { id: 4, left: 45, top: 85, delay: 4, duration: 7.5 },
    { id: 5, left: 60, top: 50, delay: 1.5, duration: 9.5 },
    { id: 6, left: 10, top: 60, delay: 2.5, duration: 8 },
    { id: 7, left: 90, top: 80, delay: 3.5, duration: 7 },
  ], []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.1,
      });

      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.3,
      });

      gsap.from('.hero-cta', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        delay: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-luxury">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,165,116,0.1),transparent_50%)]" />
        
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="floating-particle absolute w-2 h-2 rounded-full bg-gradient-to-br from-luxury-gold-400 to-luxury-amber-400 opacity-40 animate-float"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="hero-title font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-luxury-brown-900 mb-4 sm:mb-6 leading-tight">
              {t('title')}
              <br />
              <span className="gradient-text">{t('titleHighlight')}</span>
            </h1>

            <p className="hero-subtitle text-sm sm:text-base md:text-lg lg:text-xl text-luxury-brown-600 mb-8 sm:mb-12 leading-relaxed">
              {t('description')}
            </p>

            <div className="hero-cta flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-3 sm:gap-4">
              <Button href={`/${locale}/products`} variant="primary" animatedIcon="shop" iconPosition="left">
                {t('shopButton')}
              </Button>

              <Button href={`/${locale}/about`} variant="secondary" animatedIcon="arrow">
                {t('storyButton')}
              </Button>
            </div>
          </div>

          {}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden luxury-shadow-lg">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-110"
              >
                <source src="/img/VideoProduct_2.mp4" type="video/mp4" />
                <source src="/img/VideoProduct_3.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-luxury-amber-400 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-luxury-amber-500"
          />
        </motion.div>
      </div>
    </div>
  );
}
