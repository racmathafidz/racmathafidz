import React from 'react';

import Hero from '../components/Hero';
import HighlightedProject from '../components/HighlightedProject';
import NonHighlightedProject from '../components/NonHighlightedProject';
import ToolsAndSkills from '../components/ToolsAndSkills';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <>
      <Hero />
      <HighlightedProject />
      <NonHighlightedProject />
      <ToolsAndSkills />
      <Footer />
    </>
  );
}

export default LandingPage;
