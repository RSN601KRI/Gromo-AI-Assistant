
const ProductCatalog = () => {
  const productCategories = [
    {
      name: 'Life Insurance',
      brands: ['LIC', 'HDFC Life', 'ICICI Prudential', 'SBI Life'],
      commission: '15-25%',
      color: 'bg-blue-500'
    },
    {
      name: 'Health Insurance',
      brands: ['Star Health', 'Care Health', 'Bajaj Allianz', 'HDFC ERGO'],
      commission: '10-20%',
      color: 'bg-green-500'
    },
    {
      name: 'Mutual Funds',
      brands: ['SBI MF', 'HDFC MF', 'ICICI Prudential MF', 'Axis MF'],
      commission: '0.5-2%',
      color: 'bg-purple-500'
    },
    {
      name: 'Personal Loans',
      brands: ['HDFC Bank', 'ICICI Bank', 'Bajaj Finserv', 'Tata Capital'],
      commission: '1-3%',
      color: 'bg-orange-500'
    },
    {
      name: 'Credit Cards',
      brands: ['HDFC', 'SBI Card', 'ICICI', 'Axis Bank'],
      commission: '₹500-2000',
      color: 'bg-red-500'
    },
    {
      name: 'Investment Plans',
      brands: ['LIC', 'HDFC Life', 'Max Life', 'Bajaj Allianz'],
      commission: '5-15%',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Product{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Catalog
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Access dozens of top financial brands with seamless onboarding, competitive commissions, 
            and comprehensive support for all your selling needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                <span className="text-white font-bold text-xl">{category.name.charAt(0)}</span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.name}</h3>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Available Brands:</p>
                <div className="flex flex-wrap gap-1">
                  {category.brands.map((brand, brandIndex) => (
                    <span key={brandIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-700">
                  <strong>Commission: </strong>{category.commission}
                </p>
              </div>
              
              <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
                View Products
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why GroMo Partners Choose Our Platform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">Minutes</div>
                <p className="text-gray-700">Onboarding time for new products</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <p className="text-gray-700">Application processing support</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">Real-time</div>
                <p className="text-gray-700">Commission tracking & payments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
