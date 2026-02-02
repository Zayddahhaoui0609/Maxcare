'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { Gift, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

gsap.registerPlugin(ScrollTrigger);

export default function ExclusiveOffer() {
  const locale = useLocale();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.offer-content', {
        scrollTrigger: {
          trigger: '.offer-content',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-luxury-amber-100 via-luxury-beige-100 to-luxury-gold-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="offer-content relative rounded-3xl overflow-hidden luxury-shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-amber-500 to-luxury-gold-500" />
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-white blur-3xl" />
          </div>

          <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8"
              >
                <Gift className="text-white" size={40} />
              </motion.div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Exclusive Launch Offer
              </h2>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Get <span className="font-bold text-2xl">20% OFF</span> your first order plus a 
                complimentary luxury hair care sample set. Transform your hair care ritual today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button 
                  href={`/${locale}/products`} 
                  variant="secondary" 
                  animatedIcon="shop"
                  iconPosition="left"
                  className="bg-white text-luxury-brown-900 hover:bg-luxury-beige-50"
                >
                  Claim Your Offer
                </Button>
              </div>

              <p className="text-sm text-white/80">
                Limited time offer. Use code <span className="font-bold bg-white/20 px-3 py-1 rounded-full">MAXCARE20</span> at checkout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
