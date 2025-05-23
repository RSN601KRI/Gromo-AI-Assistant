
import { ChartBar, Bot, Award, Brain } from 'lucide-react';

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Features for Continuous Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform from traditional agent-led learning to AI-powered, personalized micro-learning that adapts to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={feature.onClick}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
