'use client';

import { motion } from 'framer-motion';

interface ZelijPatternProps {
  className?: string;
  variant?: 'star' | 'geometric' | 'border';
  animate?: boolean;
}

export function ZelijPattern({ className = '', variant = 'star', animate = true }: ZelijPatternProps) {
  if (variant === 'star') {
    return (
      <motion.svg
        viewBox="0 0 200 200"
        className={className}
        initial={animate ? { opacity: 0, scale: 0.8 } : {}}
        animate={animate ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <defs>
          <linearGradient id="zelij-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F4D03F" />
            <stop offset="100%" stopColor="#C9A961" />
          </linearGradient>
          <linearGradient id="zelij-amber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4A574" />
            <stop offset="100%" stopColor="#B8956A" />
          </linearGradient>
        </defs>
        
        {}
        <motion.path
          d="M100 20 L110 90 L180 100 L110 110 L100 180 L90 110 L20 100 L90 90 Z"
          fill="url(#zelij-gold)"
          stroke="#8B6914"
          strokeWidth="1.5"
          initial={animate ? { rotate: 0 } : {}}
          animate={animate ? { rotate: 360 } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {}
        <motion.circle
          cx="100"
          cy="100"
          r="25"
          fill="url(#zelij-amber)"
          stroke="#8B6914"
          strokeWidth="1.5"
          initial={animate ? { scale: 0 } : {}}
          animate={animate ? { scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
        
        {}
        {[0, 90, 180, 270].map((rotation, i) => (
          <motion.g
            key={i}
            transform={`rotate(${rotation} 100 100)`}
            initial={animate ? { opacity: 0 } : {}}
            animate={animate ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
          >
            <path
              d="M100 35 L105 45 L100 50 L95 45 Z"
              fill="url(#zelij-gold)"
              stroke="#8B6914"
              strokeWidth="1"
            />
          </motion.g>
        ))}
      </motion.svg>
    );
  }

  if (variant === 'geometric') {
    return (
      <motion.svg
        viewBox="0 0 200 200"
        className={className}
        initial={animate ? { opacity: 0 } : {}}
        animate={animate ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <defs>
          <pattern id="zelij-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="#F5E6D3" />
            <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="#D4A574" opacity="0.6" />
            <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="#C9A961" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#zelij-pattern)" />
      </motion.svg>
    );
  }

  
  return (
    <motion.svg
      viewBox="0 0 400 40"
      className={className}
      preserveAspectRatio="none"
      initial={animate ? { scaleX: 0 } : {}}
      animate={animate ? { scaleX: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <defs>
        <linearGradient id="border-gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F4D03F" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      
      {}
      {Array.from({ length: 10 }).map((_, i) => (
        <g key={i} transform={`translate(${i * 40}, 0)`}>
          <rect x="5" y="10" width="30" height="20" fill="url(#border-gold)" opacity="0.3" />
          <path d="M10 15 L20 10 L30 15 L20 20 Z" fill="#D4A574" stroke="#8B6914" strokeWidth="0.5" />
          <path d="M20 20 L30 25 L20 30 L10 25 Z" fill="#C9A961" stroke="#8B6914" strokeWidth="0.5" />
        </g>
      ))}
    </motion.svg>
  );
}


export function ZelijCorner({ className = '', position = 'top-left' }: { className?: string; position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const rotations = {
    'top-left': 0,
    'top-right': 90,
    'bottom-right': 180,
    'bottom-left': 270,
  };

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      style={{ transform: `rotate(${rotations[position]}deg)` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <defs>
        <linearGradient id="corner-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#C9A961" />
        </linearGradient>
      </defs>
      
      {}
      <path
        d="M0 0 L30 0 L30 5 L25 5 L25 10 L20 10 L20 15 L15 15 L15 20 L10 20 L10 25 L5 25 L5 30 L0 30 Z"
        fill="url(#corner-gold)"
        stroke="#8B6914"
        strokeWidth="1"
      />
      <circle cx="15" cy="15" r="3" fill="#F4D03F" />
      <circle cx="10" cy="20" r="2" fill="#F4D03F" />
      <circle cx="20" cy="10" r="2" fill="#F4D03F" />
    </motion.svg>
  );
}


export function ZelijDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-16 flex items-center justify-center ${className}`}>
      <motion.div
        className="absolute inset-0 flex items-center justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {}
        <motion.div
          className="w-12 h-12"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ZelijPattern variant="star" animate={false} />
        </motion.div>

        {}
        <motion.div
          className="flex-1 max-w-md h-1 relative overflow-hidden rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-luxury-gold-400 to-transparent opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-amber-400 to-luxury-gold-500" 
               style={{ 
                 backgroundImage: 'repeating-linear-gradient(90deg, #D4A574 0px, #F4D03F 10px, #D4A574 20px)',
               }} 
          />
        </motion.div>

        {}
        <motion.div
          className="w-12 h-12"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ZelijPattern variant="star" animate={false} />
        </motion.div>
      </motion.div>
    </div>
  );
}
