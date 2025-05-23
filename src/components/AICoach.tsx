
import { Book, MessageSquare, SquareCheck, Calendar } from 'lucide-react';

const AICoach = () => {
  const coachingFeatures = [
    {
      icon: Book,
      title: 'Personalized Learning Paths',
      description: 'AI tracks your performance and creates custom training modules for areas where you need improvement',
      stats: '90% improvement in product knowledge retention'
    },
    {
      icon: MessageSquare,
      title: 'Real-time Coaching',
      description: 'Get instant guidance during customer interactions with smart suggestions and objection handling',
      stats: '45% increase in conversion rates'
    },
    {
      icon: SquareCheck,
      title: 'Performance Analytics',
      description: 'Detailed insights into your selling patterns, success rates, and areas for optimization',
      stats: '60% faster skill development'
    },
    {
      icon: Calendar,
      title: 'Skill Simulations',
      description: 'Practice scenarios for different financial products with AI-powered feedback and scoring',
      stats: '75% confidence boost in product pitching'
    }
  ];

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your AI-Powered{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sales Coach
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience personalized training that adapts to your performance, identifies struggles, and serves
            bite-sized content exactly when you need it.
          </p>
        </div>

        {/* AI Coach Demo Interface */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <MessageSquare className="text-white" size={24} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">AI Coach Assistant</h3>
                <p className="text-sm text-gray-600">Ready to help you improve</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/80 rounded-lg p-4">
                <p className="text-gray-800">
                  <strong>AI:</strong> I noticed you had difficulty explaining term insurance benefits to customers this week. 
                  Let's practice with a quick simulation!
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-gray-800">
                  <strong>Suggested Training:</strong> "Term Insurance Benefits - 5-minute module"
                </p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                  Start Training
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coachingFeatures.map((feature, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">{feature.description}</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                      <p className="text-sm text-green-700 font-medium">{feature.stats}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Experience AI Coaching
          </button>
        </div>
      </div>
    </section>
  );
};

export default AICoach;
