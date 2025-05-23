
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PartnerJourney from '@/components/PartnerJourney';
import AICoach from '@/components/AICoach';
import ProductCatalog from '@/components/ProductCatalog';
import Dashboard from '@/components/Dashboard';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Mark page as loaded after a short delay for animations
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants for page transitions
  const pageVariants = {
    initial: { 
      opacity: 0,
      y: 20
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        {activeSection === 'home' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Hero />
            <Features setActiveSection={setActiveSection} />
            <PartnerJourney />
          </motion.div>
        )}
        
        {activeSection === 'ai-coach' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <AICoach />
          </motion.div>
        )}
        
        {activeSection === 'products' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <ProductCatalog />
          </motion.div>
        )}
        
        {activeSection === 'dashboard' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Dashboard />
          </motion.div>
        )}
      </motion.div>
      
      <Footer />

      {/* Animated background wave elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-2/3 h-2/3 bg-emerald-400/10 rounded-full blur-3xl"
          animate={{ 
            x: [50, -30, 50],
            y: [20, 50, 20],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal-400/10 rounded-full blur-3xl"
          animate={{ 
            x: [-50, 30, -50],
            y: [30, -30, 30],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Page load overlay animation */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`fixed inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 z-[100] flex items-center justify-center ${pageLoaded ? 'pointer-events-none' : ''}`}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-white text-3xl font-bold"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center"
          >
            GroMoCoach
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
