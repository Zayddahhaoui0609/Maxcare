'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/maxcare', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/maxcare', label: 'Facebook' },
  { icon: MessageCircle, href: 'https://wa.me/212600000000', label: 'WhatsApp' },
];

export default function Footer() {
  const locale = useLocale();
  
  const footerLinks = {
    company: [
      { name: 'About Us', href: `/${locale}/about` },
      { name: 'Our Story', href: `/${locale}/about#story` },
      { name: 'Contact', href: `/${locale}/contact` },
    ],
    products: [
      { name: 'All Products', href: `/${locale}/products` },
      { name: 'Serums', href: `/${locale}/products?category=serums` },
      { name: 'Creams', href: `/${locale}/products?category=creams` },
      { name: 'Oils', href: `/${locale}/products?category=oils` },
    ],
    support: [
      { name: 'FAQ', href: `/${locale}/#faq` },
      { name: 'Shipping', href: `/${locale}/shipping` },
      { name: 'Returns', href: `/${locale}/returns` },
    ],
  };
  return (
    <footer className="bg-gradient-to-b from-luxury-beige-100 to-luxury-beige-200 border-t border-luxury-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/Logo.webp"
                  alt="MaxCare Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-3xl font-bold gradient-text">
                MaxCare
              </span>
            </Link>
            <p className="text-luxury-brown-600 mb-6 max-w-sm leading-relaxed">
              Premium Moroccan skincare crafted with pure Argan oil and natural ingredients. 
              Discover the secret to radiant, youthful skin.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-luxury-amber-400 to-luxury-gold-500 flex items-center justify-center text-white luxury-shadow hover:shadow-lg transition-shadow"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-luxury-brown-800 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-luxury-brown-600 hover:text-luxury-amber-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-luxury-brown-800 mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-luxury-brown-600 hover:text-luxury-amber-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-luxury-brown-800 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-luxury-brown-600">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Fes, Morocco</span>
              </li>
              <li className="flex items-center space-x-3 text-luxury-brown-600">
                <Phone size={18} className="flex-shrink-0" />
                <span>+212 600 000 000</span>
              </li>
              <li className="flex items-center space-x-3 text-luxury-brown-600">
                <Mail size={18} className="flex-shrink-0" />
                <span>contact@maxcare.ma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-luxury-beige-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-luxury-brown-600 text-sm">
              © {new Date().getFullYear()} MaxCare. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href={`/${locale}/privacy`} className="text-luxury-brown-600 hover:text-luxury-amber-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href={`/${locale}/terms`} className="text-luxury-brown-600 hover:text-luxury-amber-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
