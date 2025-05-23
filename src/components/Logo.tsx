
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  withText?: boolean;
}

const Logo = ({ className = '', size = 'medium', withText = true }: LogoProps) => {
  // Size mappings
  const sizes = {
    small: { icon: 24, text: 'text-lg' },
    medium: { icon: 32, text: 'text-xl' },
    large: { icon: 48, text: 'text-3xl' }
  };

  // Animation variants for the logo
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.9, 1, 0.9],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover="pulse"
        variants={{
          ...svgVariants,
          ...pulseVariants
        }}
        className="relative"
      >
        <motion.svg 
          width={sizes[size].icon} 
          height={sizes[size].icon} 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Brain icon base */}
          <motion.path
            variants={pathVariants}
            d="M32 8C18.7 8 8 18.7 8 32C8 45.3 18.7 56 32 56C45.3 56 56 45.3 56 32C56 18.7 45.3 8 32 8Z"
            stroke="url(#paint0_linear)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Brain connections */}
          <motion.path
            variants={pathVariants}
            d="M32 18C28 22 26 26 26 32C26 38 28 42 32 46C36 42 38 38 38 32C38 26 36 22 32 18Z"
            stroke="url(#paint1_linear)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Horizontal connection */}
          <motion.path
            variants={pathVariants}
            d="M18 32H46"
            stroke="url(#paint2_linear)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Wave pattern inside */}
          <motion.path 
            variants={pathVariants}
            d="M24 28C26 26 28 28 30 26C32 24 34 26 36 24C38 22 40 24 40 24"
            stroke="url(#paint3_linear)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          
          <motion.path 
            variants={pathVariants}
            d="M24 36C26 34 28 36 30 34C32 32 34 34 36 32C38 30 40 32 40 32"
            stroke="url(#paint4_linear)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="paint0_linear" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" />
              <stop offset="1" stopColor="#0d9488" />
            </linearGradient>
            
            <linearGradient id="paint1_linear" x1="26" y1="18" x2="38" y2="46" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0ea5e9" />
              <stop offset="1" stopColor="#10b981" />
            </linearGradient>
            
            <linearGradient id="paint2_linear" x1="18" y1="32" x2="46" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" />
              <stop offset="1" stopColor="#0ea5e9" />
            </linearGradient>
            
            <linearGradient id="paint3_linear" x1="24" y1="24" x2="40" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" />
              <stop offset="1" stopColor="#0ea5e9" />
            </linearGradient>
            
            <linearGradient id="paint4_linear" x1="24" y1="32" x2="40" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0ea5e9" />
              <stop offset="1" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Circle pulse effects */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-emerald-400 opacity-20"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.2, 0.1, 0.2] 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      {withText && (
        <motion.div 
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`font-bold ${sizes[size].text}`}
        >
          <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
            GroMo
          </span>
          <span className="text-gray-800">Coach</span>
        </motion.div>
      )}
    </div>
  );
};

export default Logo;
