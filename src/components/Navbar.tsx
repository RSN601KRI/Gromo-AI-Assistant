
import { useState } from 'react';
import { Menu, X, Database, Star } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'ai-coach', label: 'AI Coach' },
    { id: 'products', label: 'Products' },
    { id: 'dashboard', label: 'Dashboard' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 p-2 mr-2 shadow-lg">
                <Star className="text-white" size={20} />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
                FinSage
              </div>
            </div>
            <span className="ml-2 text-sm text-gray-600 font-medium">AI Partner</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-white/20 text-emerald-600 shadow-lg'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-gradient-to-r from-emerald-500 to-teal-400 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/20 backdrop-blur-lg rounded-lg mt-2 p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-white/20 text-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 text-white px-6 py-2 rounded-lg font-medium mt-4">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
