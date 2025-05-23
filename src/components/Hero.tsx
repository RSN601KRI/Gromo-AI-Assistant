
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              GroMoCoach
            </span>{' '}
            - Your AI Learning Companion
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform from passive learner to high-performing financial advisor with an AI tutor 
            that delivers personalized, bite-sized learning exactly when you need it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Become a GroMoCoach Partner
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-50 transition-all duration-200">
              Experience AI Learning
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-emerald-600 mb-2">Smart</div>
              <p className="text-gray-700">Analyzes your performance data to identify specific areas for improvement</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-teal-600 mb-2">Timely</div>
              <p className="text-gray-700">Delivers micro-learning content exactly when you need it, right after interactions</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-emerald-600 mb-2">Personalized</div>
              <p className="text-gray-700">Adapts to your learning style, performance patterns and product knowledge gaps</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <ArrowDown className="text-emerald-600 animate-bounce" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
