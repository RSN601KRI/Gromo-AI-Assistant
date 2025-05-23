
const PartnerJourney = () => {
  const journeySteps = [
    {
      step: '1',
      title: 'Easy Onboarding',
      description: 'Quick registration and verification process that takes just minutes',
      color: 'bg-blue-500'
    },
    {
      step: '2',
      title: 'Start with Friends & Family',
      description: 'Begin your journey with easy wins selling to people you know and trust',
      color: 'bg-purple-500'
    },
    {
      step: '3',
      title: 'AI-Powered Training',
      description: 'Personalized learning content and simulations based on your performance',
      color: 'bg-green-500'
    },
    {
      step: '4',
      title: 'Expand Product Range',
      description: 'Gain confidence and expand into new product categories with AI guidance',
      color: 'bg-orange-500'
    },
    {
      step: '5',
      title: 'Scale Your Business',
      description: 'Grow customer base, unlock repeat sales, and become a multi-product specialist',
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Journey as a GroMo Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From first-time entrepreneurs to seasoned agents, GroMo empowers everyone to succeed in financial product distribution
          </p>
        </div>

        <div className="relative">
          {/* Journey Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Circle */}
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg relative z-10`}>
                  {step.step}
                </div>

                {/* Content Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnerJourney;
