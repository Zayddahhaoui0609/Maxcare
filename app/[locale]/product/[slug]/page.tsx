'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import Button from '@/components/ui/Button';


const allProducts = [
  
  { slug: 'argan-hair-serum', name: 'Hair Serum Argan Oil', description: 'Type: Hair Serum - Pure Argan Oil formula for healthy, radiant hair.', price: 299, image: '/img/argan-hair-serum.jpg', category: 'Hair Serum', collection: 'Argan Oil', longDescription: 'Revitalize your hair with MaxCare Moroccan Argan Oil Pure Nourishing Hair Serum. Formulated with Organic Moroccan Argan Oil, this luxurious serum deeply moisturizes and repairs dry, damaged, and frizzy hair. It penetrates the hair shaft to provide intense hydration, enhancing elasticity and shine. Perfect for all hair types, this serum smooths frizz and restores vitality, giving your hair a silky, manageable finish.', ingredients: ['Organic Moroccan Argan Oil', 'Vitamin E', 'Antioxidants'], features: ['Deeply nourishes and hydrates', 'Repairs damaged hair', 'Smooths frizz and restores vitality', 'Enhances shine and elasticity'] },
  { slug: 'argan-conditioner', name: 'Conditioner Argan Oil', description: 'Type: Conditioner - Deep conditioning with pure Moroccan Argan Oil.', price: 299, image: '/img/argan-conditioner.jpg', category: 'Conditioner', collection: 'Argan Oil', longDescription: 'Deep conditioning treatment enriched with pure Moroccan Argan Oil. Restores moisture, repairs damage, and leaves hair silky smooth.', ingredients: ['Moroccan Argan Oil', 'Keratin', 'Natural Oils'], features: ['Deep conditioning', 'Repairs split ends', 'Adds shine', 'Detangles hair'] },
  { slug: 'argan-shampoo', name: 'Shampoo Argan Oil', description: 'Type: Shampoo - Gentle cleansing enriched with Argan Oil.', price: 295, image: '/img/argan-shampoo.jpg', category: 'Shampoo', collection: 'Argan Oil', longDescription: 'Gentle sulfate-free shampoo infused with Moroccan Argan Oil. Cleanses without stripping natural oils while nourishing and strengthening hair.', ingredients: ['Argan Oil', 'Natural Cleansers', 'Vitamin Complex'], features: ['Sulfate-free formula', 'Gentle cleansing', 'Strengthens hair', 'Maintains natural moisture'] },
  { slug: 'argan-hair-mask', name: 'Hair Mask Argan Oil', description: 'Type: Hair Mask - Intensive treatment with pure Argan Oil.', price: 275, image: '/img/argan-hair-mask.jpg', category: 'Hair Mask', collection: 'Argan Oil', longDescription: 'Intensive hair mask treatment with pure Moroccan Argan Oil. Deeply penetrates to repair and restore damaged hair, leaving it soft and manageable.', ingredients: ['Pure Argan Oil', 'Proteins', 'Natural Extracts'], features: ['Intensive repair', 'Deep conditioning', 'Restores elasticity', 'Long-lasting results'] },
  
  
  { slug: 'caviar-nursing-care', name: 'Hair Treatment Nursing Care', description: 'Type: Hair Treatment - Premium nursing care with golden caviar extract.', price: 279, image: '/img/caviar-nursing-care.jpg', category: 'Hair Treatment', collection: 'Caviar', longDescription: 'Luxurious hair treatment powered by golden caviar extract and ocean minerals. Provides intensive nourishment and repair for damaged hair.', ingredients: ['Golden Caviar Extract', 'Marine Collagen', 'Omega-3'], features: ['Premium nourishment', 'Anti-aging properties', 'Repairs damage', 'Adds luxury shine'] },
  { slug: 'caviar-youth-oil', name: 'Hair Treatment Youth Hair Oil', description: 'Type: Youth Hair Oil - Anti-aging formula with caviar extract.', price: 219, image: '/img/caviar-youth-oil.jpg', category: 'Youth Oil', collection: 'Caviar', longDescription: 'Anti-aging hair oil enriched with caviar extract. Restores youthful vitality, shine, and strength to aging hair.', ingredients: ['Caviar Extract', 'Anti-aging Complex', 'Essential Oils'], features: ['Anti-aging formula', 'Restores vitality', 'Adds shine', 'Strengthens hair'] },
  { slug: 'caviar-nursing-set', name: 'Hair Treatment Nursing Care Set', description: 'Type: Hair Treatment - Complete nursing care set with caviar.', price: 1600, image: '/img/caviar-nursing-set.jpg', category: 'Hair Treatment', collection: 'Caviar', longDescription: 'Complete professional nursing care set with golden caviar. Includes everything needed for salon-quality hair treatment at home.', ingredients: ['Caviar Complex', 'Professional Formula', 'Premium Ingredients'], features: ['Complete set', 'Professional results', 'Intensive care', 'Luxury treatment'] },
  { slug: 'caviar-vita-keratin', name: 'Hair Treatment Vita-Keratin', description: 'Type: Hair Treatment - Vitamin and keratin enriched treatment.', price: 299, image: '/img/caviar-vita-keratin.jpg', category: 'Hair Treatment', collection: 'Caviar', longDescription: 'Advanced treatment combining vitamins and keratin with caviar extract. Rebuilds hair structure and restores strength.', ingredients: ['Keratin', 'Vitamin Complex', 'Caviar Extract'], features: ['Rebuilds hair', 'Adds strength', 'Vitamin enriched', 'Professional formula'] },
];

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const locale = params.locale as string;
  
  const product = allProducts.find(p => p.slug === slug);
  
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phone: '',
    product: '',
    paymentMethod: 'cash',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-luxury-brown-900 mb-4">Product Not Found</h1>
          <Button href={`/${locale}/products`} variant="primary">
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Order submitted:', { ...formData, product: product.name, price: product.price });
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        address: '',
        phone: '',
        product: '',
        paymentMethod: 'cash',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-luxury-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {}
        <Link href={`/${locale}/products`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl border-2 border-luxury-amber-400 text-luxury-brown-700 hover:text-white hover:bg-gradient-to-r hover:from-luxury-amber-500 hover:to-luxury-gold-500 transition-all duration-300 mb-8 cursor-pointer luxury-shadow hover:luxury-shadow-lg"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Products</span>
          </motion.div>
        </Link>

        {}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {}
          <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ rotateY: 5, scale: 1.02 }}
            style={{ transformStyle: "preserve-3d" }}
            className="space-y-4"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden luxury-shadow-lg bg-white" style={{ transformStyle: "preserve-3d" }}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-luxury-amber-700 bg-luxury-amber-50 rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-brown-900 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-4xl font-bold gradient-text">{product.price} Dh</span>
                <span className="text-sm text-luxury-brown-600">/ 500 ml</span>
              </div>
            </div>

            <div className="prose prose-lg">
              <p className="text-luxury-brown-700 leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {}
            <div className="bg-white rounded-2xl p-6 luxury-shadow">
              <h3 className="font-serif text-xl font-bold text-luxury-brown-900 mb-4">Key Ingredients:</h3>
              <ul className="space-y-2">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start space-x-2 text-luxury-brown-700">
                    <Check className="text-luxury-gold-500 mt-1 flex-shrink-0" size={18} />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {}
            <div className="bg-white rounded-2xl p-6 luxury-shadow">
              <h3 className="font-serif text-xl font-bold text-luxury-brown-900 mb-4">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2 text-luxury-brown-700">
                    <Check className="text-luxury-gold-500 mt-1 flex-shrink-0" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-brown-900 mb-2">
              Order with all <span className="gradient-text">simply</span>
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-luxury-amber-400 to-luxury-gold-500 rounded-full mb-4"></div>
            <p className="text-luxury-brown-600">Fill in your details and we'll process your order</p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-10 luxury-shadow-lg">
            <h3 className="font-serif text-2xl font-bold text-luxury-brown-900 mb-6">Order Product</h3>
            
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-luxury-amber-400 to-luxury-gold-500 flex items-center justify-center">
                  <Check className="text-white" size={40} />
                </div>
                <h4 className="text-2xl font-bold text-luxury-brown-900 mb-2">Order Submitted!</h4>
                <p className="text-luxury-brown-600">We'll contact you soon to confirm your order.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-luxury-beige-200 focus:border-luxury-amber-400 focus:outline-none transition-colors text-luxury-brown-900 placeholder-luxury-brown-400"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-luxury-beige-200 focus:border-luxury-amber-400 focus:outline-none transition-colors text-luxury-brown-900 placeholder-luxury-brown-400"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-luxury-beige-200 focus:border-luxury-amber-400 focus:outline-none transition-colors text-luxury-brown-900 placeholder-luxury-brown-400"
                  />
                </div>

                <div>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-luxury-beige-200 focus:border-luxury-amber-400 focus:outline-none transition-colors text-luxury-brown-900 bg-white"
                  >
                    <option value="">Select Product</option>
                    <option value={product.name}>{product.name} - {product.price} Dh</option>
                  </select>
                </div>

                <div>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-luxury-beige-200 focus:border-luxury-amber-400 focus:outline-none transition-colors text-luxury-brown-900 bg-white"
                  >
                    <option value="cash">Cash on Delivery</option>
                    <option value="bank">Bank Transfer</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message (Optional)"
                    rows={4}
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-luxury-beige-200 focus:border-luxury-amber-400 focus:outline-none transition-colors text-luxury-brown-900 placeholder-luxury-brown-400 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-luxury-amber-500 to-luxury-gold-500 text-white font-bold text-lg luxury-shadow hover:luxury-shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <ShoppingCart size={20} />
                      <span>Submit Order</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
