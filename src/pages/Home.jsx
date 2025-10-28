import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesGrid from '../components/home/FeaturesGrid';
import MedicationInfo from '../components/home/MedicationInfo';
import Testimonials from '../components/home/Testimonials';
import BenefitsCTA from '../components/home/BenefitsCTA';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <MedicationInfo />
      <Testimonials />
      <BenefitsCTA />
    </>
  );
};

export default HomePage;