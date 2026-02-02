'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Heart, Leaf, Award, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Heart,
    title: 'Passion for Beauty',
    description: 'We believe in enhancing natural beauty through the power of premium, organic ingredients.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices and supporting Moroccan Argan cooperatives.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Uncompromising quality standards in every product we create.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building a community of confident individuals who embrace their natural radiance.',
  },
];

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all' }
      );

      gsap.fromTo('.story-section',
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.story-section',
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
        }
      );

      gsap.fromTo('.value-card',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: '.values-grid',
            start: 'top 75%',
          },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'all',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen">
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-luxury overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,165,116,0.15),transparent_70%)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center hero-content">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-2 rounded-full glass-effect mb-8"
          >
            <span className="text-sm font-medium text-luxury-brown-700">
              Our Story
            </span>
          </motion.div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-luxury-brown-900 mb-6">
            Crafting Luxury from
            <br />
            <span className="gradient-text">Moroccan Heritage</span>
          </h1>

          <p className="text-xl text-luxury-brown-600 leading-relaxed">
            MaxCare was born from a passion for authentic Moroccan beauty secrets
            and a commitment to bringing luxury skincare to discerning customers.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white story-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-luxury-brown-900 mb-6">
                The Journey of <span className="gradient-text">MaxCare</span>
              </h2>
              <div className="space-y-4 text-luxury-brown-600 leading-relaxed">
                <p>
                  Our story begins in the heart of Morocco, where ancient beauty traditions
                  meet modern skincare science. Inspired by the timeless beauty rituals
                  of Moroccan women, we set out to create a luxury brand that honors
                  this rich heritage.
                </p>
                <p>
                  Every MaxCare product is a testament to the transformative power of
                  pure Argan oil, sourced directly from women-led cooperatives in Morocco.
                  We believe in creating products that not only deliver exceptional results
                  but also support sustainable practices and empower local communities.
                </p>
                <p>
                  Our commitment to excellence drives us to use only the finest natural
                  ingredients, rigorously tested and carefully formulated to ensure
                  maximum efficacy. Each product is a perfect blend of tradition and
                  innovation, designed to reveal your skin\'s natural radiance.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden luxury-shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-amber-200 to-luxury-gold-200" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-luxury-amber-400 to-luxury-gold-500 flex items-center justify-center luxury-shadow-lg">
                      <Heart className="text-white" size={64} />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-luxury-brown-900 mb-3">
                      Made with Love
                    </h3>
                    <p className="text-luxury-brown-700 text-lg">
                      From Morocco to You
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-luxury-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-luxury-brown-900 mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-luxury-brown-600 max-w-2xl mx-auto">
              The principles that guide everything we do at MaxCare.
            </p>
          </div>

          <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="value-card p-8 rounded-2xl bg-white luxury-shadow hover:luxury-shadow-lg transition-all duration-500 text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-luxury-amber-400 to-luxury-gold-500 flex items-center justify-center mb-6">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-luxury-brown-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-luxury-brown-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-luxury-amber-500 to-luxury-gold-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Become part of the MaxCare family and discover the secret to radiant,
            youthful skin with our premium Moroccan skincare collection.
          </p>
          <motion.a
            href="/products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-white text-luxury-brown-900 rounded-full font-semibold text-lg luxury-shadow-lg hover:bg-luxury-beige-50 transition-all duration-300"
          >
            Explore Our Products
          </motion.a>
        </div>
      </section>
    </div>
  );
}
