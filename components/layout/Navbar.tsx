'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

const navLinks = [
  { name: 'home', href: '/' },
  { name: 'products', href: '/products' },
  { name: 'about', href: '/about' },
  { name: 'contact', href: '/contact' },
];

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect luxury-shadow py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center group">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/Logo.webp"
                alt="MaxCare Logo"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={`/${locale}${link.href}`}
                className="relative text-luxury-brown-700 hover:text-luxury-amber-600 transition-colors duration-300 font-medium group"
              >
                {t(link.name)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-luxury-amber-500 to-luxury-gold-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-luxury-amber-500 to-luxury-gold-500 text-white rounded-full font-medium luxury-shadow hover:shadow-lg transition-all duration-300"
            >
              <ShoppingBag size={18} />
              <span>{t('shop')}</span>
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-luxury-brown-700 hover:text-luxury-amber-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-effect mt-4 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/${locale}${link.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-medium text-luxury-brown-700 hover:text-luxury-amber-600 transition-colors py-2"
                  >
                    {t(link.name)}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-luxury-amber-500 to-luxury-gold-500 text-white rounded-full font-medium luxury-shadow"
              >
                <ShoppingBag size={18} />
                <span>{t('shop')}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
