
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Reimagining the future of{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              financial product distribution
            </span>{' '}
            with AI
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            GroMo's mission is to empower Agents through technology to drive financial inclusion and
            achieve entrepreneurial success. Become Bharat's largest and most trusted financial products distribution platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Become a GroMo Partner
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
              <p className="text-gray-700">of Bharat prefers buying financial products from trusted Agents</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-purple-600 mb-2">1-Stop</div>
              <p className="text-gray-700">shop for everything GPs need to run their business from their phone</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="text-3xl font-bold text-green-600 mb-2">AI-Powered</div>
              <p className="text-gray-700">intelligent systems that guide, coach, and assist at every step</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <ArrowDown className="text-blue-600 animate-bounce" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
