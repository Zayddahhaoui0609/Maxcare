'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.page-title',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'all' }
      );

      gsap.fromTo('.contact-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.2,
          clearProps: 'all',
        }
      );

      gsap.fromTo('.form-container',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.3,
          clearProps: 'all',
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div ref={sectionRef} className="min-h-screen pt-32 pb-24 bg-luxury-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 page-title">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-luxury-brown-900 mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-luxury-brown-600 max-w-2xl mx-auto">
            Have questions about our products? We\'d love to hear from you.
            Send us a message and we\'ll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{ y: -5 }}
            className="contact-card p-8 rounded-2xl bg-white luxury-shadow hover:luxury-shadow-lg transition-all duration-500 text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-luxury-amber-400 to-luxury-gold-500 flex items-center justify-center mb-6">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-luxury-brown-900 mb-3">
              Email Us
            </h3>
            <p className="text-luxury-brown-600 mb-2">
              contact@maxcare.ma
            </p>
            <p className="text-sm text-luxury-brown-500">
              We\'ll respond within 24 hours
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="contact-card p-8 rounded-2xl bg-white luxury-shadow hover:luxury-shadow-lg transition-all duration-500 text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-luxury-amber-400 to-luxury-gold-500 flex items-center justify-center mb-6">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-luxury-brown-900 mb-3">
              Call Us
            </h3>
            <p className="text-luxury-brown-600 mb-2">
              +212 600 000 000
            </p>
            <p className="text-sm text-luxury-brown-500">
              Mon-Fri, 9am-6pm GMT+1
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="contact-card p-8 rounded-2xl bg-white luxury-shadow hover:luxury-shadow-lg transition-all duration-500 text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-luxury-amber-400 to-luxury-gold-500 flex items-center justify-center mb-6">
              <MessageCircle className="text-white" size={28} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-luxury-brown-900 mb-3">
              WhatsApp
            </h3>
            <p className="text-luxury-brown-600 mb-2">
              +212 600 000 000
            </p>
            <p className="text-sm text-luxury-brown-500">
              Quick responses via chat
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="form-container p-8 sm:p-12 rounded-3xl bg-white luxury-shadow-lg">
            <h2 className="font-serif text-3xl font-bold text-luxury-brown-900 mb-8 text-center">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-luxury-brown-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass-effect border border-luxury-beige-300 focus:border-luxury-amber-500 focus:outline-none focus:ring-2 focus:ring-luxury-amber-200 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-luxury-brown-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass-effect border border-luxury-beige-300 focus:border-luxury-amber-500 focus:outline-none focus:ring-2 focus:ring-luxury-amber-200 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-luxury-brown-700 font-medium mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl glass-effect border border-luxury-beige-300 focus:border-luxury-amber-500 focus:outline-none focus:ring-2 focus:ring-luxury-amber-200 transition-all duration-300"
                  placeholder="+212 600 000 000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-luxury-brown-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl glass-effect border border-luxury-beige-300 focus:border-luxury-amber-500 focus:outline-none focus:ring-2 focus:ring-luxury-amber-200 transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-luxury-amber-500 to-luxury-gold-500 text-white rounded-full font-semibold text-lg luxury-shadow hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>

          <div className="mt-12 p-6 rounded-2xl glass-effect text-center">
            <MapPin className="inline-block text-luxury-amber-600 mb-2" size={24} />
            <h3 className="font-serif text-xl font-semibold text-luxury-brown-900 mb-2">
              Visit Our Showroom
            </h3>
            <p className="text-luxury-brown-600">
              Boulevard Mohammed V, Fes, Morocco
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
