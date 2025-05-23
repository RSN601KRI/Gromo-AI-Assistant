
import { ChartBar, Bot, Award, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturesProps {
  setActiveSection: (section: string) => void;
}

const Features = ({ setActiveSection }: FeaturesProps) => {
  const features = [
    {
      icon: ChartBar,
      title: 'Performance Tracking Engine',
      description: 'Analyzes your sales data, quiz scores, and training engagement to identify areas for improvement',
      gradient: 'from-emerald-500 to-emerald-600',
      onClick: () => setActiveSection('dashboard')
    },
    {
      icon: Bot,
      title: 'AI Learning Coach',
      description: 'Delivers personalized micro-content, simulations, and interactive exercises right when you need them',
      gradient: 'from-teal-500 to-teal-600',
      onClick: () => setActiveSection('ai-coach')
    },
    {
      icon: Brain,
      title: 'Scenario Simulations',
      description: 'Practice dealing with common objections and sales scenarios through interactive AI role-playing',
      gradient: 'from-green-500 to-green-600',
      onClick: () => setActiveSection('ai-coach')
    },
    {
      icon: Award,
      title: 'Gamified Achievements',
      description: 'Earn badges, unlock levels, and track your progress as you master different financial products',
      gradient: 'from-cyan-500 to-cyan-600',
      onClick: () => setActiveSection('dashboard')
    }
  ];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle wave background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#10b981" fillOpacity="0.8" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,176C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute top-0 left-0 w-full opacity-10 transform rotate-180" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#0d9488" fillOpacity="0.6" d="M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,240C672,256,768,256,864,229.3C960,203,1056,149,1152,128C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Features for Continuous Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform from traditional agent-led learning to AI-powered, personalized micro-learning that adapts to your needs
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={feature.onClick}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
