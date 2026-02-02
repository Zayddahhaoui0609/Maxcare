'use client';

import { motion } from 'framer-motion';


export function AnimatedShopIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      whileHover={{
        rotate: [0, -10, 10, -10, 10, 0],
        scale: [1, 1.1, 1.1, 1.1, 1.1, 1],
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <motion.path
        d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
        initial={{ pathLength: 1 }}
        whileHover={{ pathLength: [1, 0.8, 1] }}
        transition={{ duration: 0.6 }}
      />
      <line x1="3" y1="6" x2="21" y2="6" />
      <motion.path
        d="M16 10a4 4 0 0 1-8 0"
        initial={{ pathLength: 1 }}
        whileHover={{ 
          pathLength: [1, 0, 1],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 0.6, delay: 0.1 }}
      />
    </motion.svg>
  );
}


export function AnimatedCartIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <div className="relative inline-flex items-center">
      {}
      <motion.div
        className="absolute -left-8 flex gap-1"
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-3 h-0.5 bg-current rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ 
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 0.1,
          }}
        />
        <motion.div
          className="w-2 h-0.5 bg-current rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ 
            duration: 0.5,
            delay: 0.1,
            repeat: Infinity,
            repeatDelay: 0.1,
          }}
        />
        <motion.div
          className="w-1.5 h-0.5 bg-current rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          whileHover={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ 
            duration: 0.5,
            delay: 0.2,
            repeat: Infinity,
            repeatDelay: 0.1,
          }}
        />
      </motion.div>

      {}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        whileHover={{
          x: [0, 8, 8, 0],
          rotate: [0, 0, -5, 0],
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <motion.circle
          cx="9"
          cy="21"
          r="1"
          whileHover={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 0.6,
            ease: "linear",
          }}
        />
        <motion.circle
          cx="20"
          cy="21"
          r="1"
          whileHover={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 0.6,
            ease: "linear",
          }}
        />
        <motion.path
          d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
          whileHover={{
            pathLength: [1, 0.9, 1],
          }}
          transition={{
            duration: 0.6,
          }}
        />
      </motion.svg>
    </div>
  );
}


export function AnimatedPlusIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      whileHover={{
        rotate: [0, 90, 180],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.line
        x1="12"
        y1="5"
        x2="12"
        y2="19"
        initial={{ pathLength: 1 }}
        whileHover={{ 
          pathLength: [1, 0.5, 1],
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        initial={{ pathLength: 1 }}
        whileHover={{ 
          pathLength: [1, 0.5, 1],
        }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
    </motion.svg>
  );
}


export function AnimatedArrowIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <div className="relative inline-flex items-center">
      {}
      <motion.div
        className="absolute left-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-30"
          initial={{ x: 0 }}
          whileHover={{ x: [0, 4, 8] }}
          transition={{ duration: 0.4 }}
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </motion.svg>
      </motion.div>

      {}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        whileHover={{
          x: [0, 4, 0],
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <motion.line
          x1="5"
          y1="12"
          x2="19"
          y2="12"
          initial={{ pathLength: 1 }}
          whileHover={{ pathLength: [1, 0.7, 1] }}
          transition={{ duration: 0.4 }}
        />
        <motion.polyline
          points="12 5 19 12 12 19"
          whileHover={{
            x: [0, 2, 0],
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.svg>
    </div>
  );
}


export function AnimatedHeartIcon({ size = 20, className = '', filled = false }: { size?: number; className?: string; filled?: boolean }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      whileHover={{
        scale: [1, 1.2, 1, 1.1, 1],
      }}
      whileTap={{
        scale: [1, 0.8, 1.2, 1],
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <motion.path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        initial={{ pathLength: 1 }}
        whileHover={{
          fill: filled ? "currentColor" : ["none", "currentColor", "currentColor"],
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.svg>
  );
}
