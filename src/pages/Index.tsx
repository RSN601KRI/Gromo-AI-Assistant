
import { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {activeSection === 'home' && (
        <>
          <Hero />
          <Features setActiveSection={setActiveSection} />
          <PartnerJourney />
        </>
      )}
      
      {activeSection === 'ai-coach' && <AICoach />}
      {activeSection === 'products' && <ProductCatalog />}
      {activeSection === 'dashboard' && <Dashboard />}
      
      <Footer />
    </div>
  );
};

export default Index;
