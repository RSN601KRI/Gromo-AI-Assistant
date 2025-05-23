
const Footer = () => {
  const footerSections = [
    {
      title: 'Platform',
      links: ['Features', 'AI Coach', 'Product Catalog', 'Dashboard', 'Training']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Blog', 'Contact']
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                FinSage
              </div>
              <span className="ml-2 text-sm text-gray-400 font-medium">AI Partner</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Empowering financial agents through AI-driven technology to achieve entrepreneurial success and drive financial inclusion across Bharat.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Mission:</strong> Transform financial product distribution with AI
              </p>
              <p className="text-sm text-gray-400">
                <strong className="text-white">Vision:</strong> Financial inclusion for every corner of Bharat
              </p>
            </div>
          </div>

          {/* Links Sections - Removed Partners and Products sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 FinSage. All rights reserved. Empowering financial inclusion across Bharat.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
