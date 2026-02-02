'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Droplets, Leaf, Sparkles, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Droplets,
    title: 'Deep Hydration',
    description: 'Our formulas lock in moisture to revive dry, damaged hair and enhance natural shine.',
  },
  {
    icon: Leaf,
    title: 'Natural Formula',
    description: 'Crafted with botanical oils and plant-based ingredients to nourish and protect your hair naturally.',
  },
  {
    icon: Sparkles,
    title: 'Sulfate-Free',
    description: 'Gentle cleansing without harsh chemicals. Safe for daily use and color-treated hair.',
  },
  {
    icon: Shield,
    title: 'Chemicals Free',
    description: 'No sulfates, parabens, or cruelty — just clean, conscious care for every hair type.',
  },
];

export default function Ingredients() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ingredients-title', {
        scrollTrigger: {
          trigger: '.ingredients-title',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.from('.benefit-card', {
        scrollTrigger: {
          trigger: '.benefits-grid',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });

      gsap.from('.argan-image', {
        scrollTrigger: {
          trigger: '.argan-image',
          start: 'top 75%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-luxury-beige-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="ingredients-title mb-12">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-luxury-brown-900 mb-4">
                The Power of
                <br />
                <span className="gradient-text">Moroccan Argan Oil</span>
              </h2>
              <p className="text-lg text-luxury-brown-600 leading-relaxed">
                Sourced from the ancient Argan forests of Morocco, our premium oil is cold-pressed
                to preserve its natural nutrients and deliver exceptional hair care benefits. Experience
                the transformative power of nature's most luxurious ingredient.
              </p>
            </div>

            <div className="benefits-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="benefit-card p-6 rounded-2xl glass-effect luxury-shadow hover:luxury-shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxury-amber-400 to-luxury-gold-500 flex items-center justify-center mb-4">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-luxury-brown-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-luxury-brown-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="argan-image relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden luxury-shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-amber-200 to-luxury-gold-200" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-luxury-amber-400 to-luxury-gold-500 flex items-center justify-center luxury-shadow-lg animate-float">
                    <Droplets className="text-white" size={64} />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-luxury-brown-900 mb-3">
                    Pure & Organic
                  </h3>
                  <p className="text-luxury-brown-700 text-lg">
                    Certified organic Argan oil
                    <br />
                    from sustainable sources
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-luxury-gold-400 to-luxury-amber-400 opacity-20 blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br from-luxury-amber-400 to-luxury-gold-400 opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
