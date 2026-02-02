'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Amina El Fassi',
    location: 'Casablanca',
    rating: 5,
    text: 'MaxCare transformed my hair completely. The Luxury Argan Oil Serum is absolutely magical. My hair has never looked more healthy and radiant.',
    image: '/img/testimonial-1.jpg',
  },
  {
    name: 'Sophia Benali',
    location: 'Marrakech',
    rating: 5,
    text: 'I\'ve tried countless luxury hair care brands, but MaxCare stands out. The quality is exceptional, and the results are visible within weeks. Truly premium.',
    image: '/img/testimonial-2.jpg',
  },
  {
    name: 'Leila Mansouri',
    location: 'Rabat',
    rating: 5,
    text: 'The Golden Caviar Nursing Care is my holy grail product. It\'s pure luxury in a bottle. My hair feels nourished and shines naturally. Highly recommend!',
    image: '/img/testimonial-3.jpg',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonials-title',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.testimonials-title',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'all',
        }
      );

      gsap.fromTo('.testimonial-card',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          clearProps: 'all',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-luxury-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 testimonials-title">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-luxury-brown-900 mb-4">
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-lg text-luxury-brown-600 max-w-2xl mx-auto">
            Join our community of satisfied customers who have discovered the secret to healthy,
            radiant hair with MaxCare Maroc.
          </p>
        </div>

        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="testimonial-card relative p-8 rounded-2xl bg-white luxury-shadow hover:luxury-shadow-lg transition-all duration-500"
            >
              <div className="absolute top-6 right-6 text-luxury-gold-400 opacity-20">
                <Quote size={48} fill="currentColor" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-luxury-gold-500 fill-luxury-gold-500" />
                  ))}
                </div>

                <p className="text-luxury-brown-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-luxury-amber-400 to-luxury-gold-500 flex items-center justify-center text-white font-serif font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-luxury-brown-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-luxury-brown-600">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 px-8 py-4 rounded-2xl glass-effect">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold gradient-text mb-1">4.9</div>
              <div className="text-sm text-luxury-brown-600">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-luxury-beige-300" />
            <div className="text-center">
              <div className="text-3xl font-serif font-bold gradient-text mb-1">5,000+</div>
              <div className="text-sm text-luxury-brown-600">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-luxury-beige-300" />
            <div className="text-center">
              <div className="text-3xl font-serif font-bold gradient-text mb-1">98%</div>
              <div className="text-sm text-luxury-brown-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
