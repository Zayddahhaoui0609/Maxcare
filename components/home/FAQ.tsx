'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'What makes MaxCare products different?',
    answer: 'MaxCare products are crafted with 100% pure, organic Moroccan Argan oil, Golden Caviar extract, and natural botanical ingredients. We use cold-press extraction to preserve nutrients. Each product is sulfate-free, paraben-free, and free from harmful chemicals.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Most customers notice visible improvements within 2-3 weeks of consistent use. For optimal results, we recommend using our products as part of your daily hair care routine for at least 8 weeks.',
  },
  {
    question: 'Are MaxCare products suitable for all hair types?',
    answer: 'Yes! Our products are formulated to be gentle and effective for all hair types, including color-treated, curly, straight, dry, and oily hair. The natural ingredients work in harmony with your hair to deliver exceptional results.',
  },
  {
    question: 'Is Argan oil good for oily hair?',
    answer: 'Absolutely! Argan oil is lightweight and non-greasy. It helps balance scalp oil production while providing essential nutrients. It hydrates without weighing hair down, making it perfect for all hair types including oily hair.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Currently, we ship within Morocco with free delivery on orders over 500 MAD. We\'re working on expanding our international shipping options. Stay tuned for updates!',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day satisfaction guarantee. If you\'re not completely satisfied with your purchase, you can return it for a full refund. Your satisfaction is our priority.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-title', {
        scrollTrigger: {
          trigger: '.faq-title',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      });

      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 faq-title">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-luxury-brown-900 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-luxury-brown-600">
            Everything you need to know about MaxCare skincare products.
          </p>
        </div>

        <div className="faq-list space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item rounded-2xl overflow-hidden glass-effect luxury-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors duration-300"
              >
                <span className="font-serif text-lg font-semibold text-luxury-brown-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-luxury-amber-400 to-luxury-gold-500 flex items-center justify-center text-white">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-luxury-brown-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
