import React, { useState } from 'react';
import Navigation from '../components/layout/Navigation';
import HeroSection from '../components/home/HeroSection';
import FeaturesGrid from '../components/home/FeaturesGrid';
import MedicationInfo from '../components/home/MedicationInfo';
import Testimonials from '../components/home/Testimonials';
import BenefitsCTA from '../components/home/BenefitsCTA';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <HeroSection />
      <FeaturesGrid />
      <MedicationInfo />
      <Testimonials />
      <BenefitsCTA />
      
      <Footer />
    </div>
  );
};

export default HomePage;