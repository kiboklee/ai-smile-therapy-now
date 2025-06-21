
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import ScenarioSection from '../components/ScenarioSection';
import FeaturesSection from '../components/FeaturesSection';
import ValueSection from '../components/ValueSection';
import PricingSection from '../components/PricingSection';
import CTASection from '../components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ScenarioSection />
      <FeaturesSection />
      <ValueSection />
      <PricingSection />
      <CTASection />
    </div>
  );
};

export default Index;
