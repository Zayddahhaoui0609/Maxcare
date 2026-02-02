'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { AnimatedShopIcon, AnimatedCartIcon, AnimatedArrowIcon } from './AnimatedIcons';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  animatedIcon?: 'shop' | 'cart' | 'arrow' | 'none';
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  animatedIcon = 'none',
  className = '',
}: ButtonProps) {
  const baseClasses = "group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-500";
  
  const variants = {
    primary: "bg-gradient-to-r from-luxury-amber-500 to-luxury-gold-500 text-white shadow-lg shadow-luxury-amber-500/30 hover:shadow-2xl hover:shadow-luxury-gold-500/40",
    secondary: "glass-effect text-luxury-brown-700 hover:bg-white/90 shadow-md hover:shadow-xl",
    outline: "border-2 border-luxury-amber-500 text-luxury-amber-600 hover:bg-luxury-amber-50 shadow-sm hover:shadow-lg",
  };

  const buttonContent = (
    <>
      {}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />

      {}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: variant === 'primary' 
            ? 'radial-gradient(circle at center, rgba(212,175,55,0.3) 0%, transparent 70%)'
            : 'radial-gradient(circle at center, rgba(212,165,116,0.2) 0%, transparent 70%)',
        }}
      />

      {}
      <span className="relative z-10 flex items-center gap-3">
        {}
        {animatedIcon !== 'none' && iconPosition === 'left' && (
          <span className="relative">
            {animatedIcon === 'shop' && <AnimatedShopIcon size={20} />}
            {animatedIcon === 'cart' && <AnimatedCartIcon size={20} />}
            {animatedIcon === 'arrow' && <AnimatedArrowIcon size={20} />}
          </span>
        )}
        
        {}
        {Icon && animatedIcon === 'none' && iconPosition === 'left' && (
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: -4 }}
            transition={{ duration: 0.3 }}
          >
            <Icon size={20} />
          </motion.span>
        )}
        
        <span>{children}</span>
        
        {}
        {animatedIcon !== 'none' && iconPosition === 'right' && (
          <span className="relative">
            {animatedIcon === 'shop' && <AnimatedShopIcon size={20} />}
            {animatedIcon === 'cart' && <AnimatedCartIcon size={20} />}
            {animatedIcon === 'arrow' && <AnimatedArrowIcon size={20} />}
          </span>
        )}
        
        {}
        {Icon && animatedIcon === 'none' && iconPosition === 'right' && (
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            <Icon size={20} />
          </motion.span>
        )}
      </span>

      {}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ scale: 0, opacity: 0.5 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: variant === 'primary' ? 'rgba(255,255,255,0.3)' : 'rgba(212,165,116,0.3)',
        }}
      />
    </>
  );

  const motionProps = {
    whileHover: { 
      scale: 1.05,
      y: -2,
    },
    whileTap: { 
      scale: 0.98,
      y: 0,
    },
    transition: { 
      type: 'spring' as const,
      stiffness: 400,
      damping: 17,
    },
  };

  if (href) {
    return (
      <Link href={href}>
        <motion.button
          {...motionProps}
          className={`${baseClasses} ${variants[variant]} ${className}`}
        >
          {buttonContent}
        </motion.button>
      </Link>
    );
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {buttonContent}
    </motion.button>
  );
}
