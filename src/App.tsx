import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TextLoopBanner } from './components/TextLoopBanner';
import { InteractiveAppPreview } from './components/InteractiveAppPreview';
import { BranchedFeatures } from './components/BranchedFeatures';
import { AuralSensorySection } from './components/AuralSensorySection';
import { BentoGrid } from './components/BentoGrid';
import { ComparisonSection } from './components/ComparisonSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Floating Island Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <TextLoopBanner />
        <InteractiveAppPreview />
        <BranchedFeatures />
        <AuralSensorySection />
        <BentoGrid />
        <ComparisonSection />
        <PricingSection />
        <FaqSection />
      </main>

      {/* Footer & Final Call to Action */}
      <Footer />
    </div>
  );
};

export default App;
