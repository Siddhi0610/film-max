import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import './App.css';

function App() {
  // Smooth scroll handler to Product / Benefits section
  const handleOpenProduct = () => {
    const benefitsEl = document.getElementById('benefits');
    if (benefitsEl) {
      benefitsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Floating Pill Navbar with Product button only (Contact removed) */}
      <Navbar onOpenProduct={handleOpenProduct} />

      {/* Main Landing Page: 3 Divisions */}
      <main>
        {/* Division 1: Hero Section */}
        <Hero />

        {/* Division 2: How It Works Section */}
        <HowItWorks />

        {/* Division 3: Benefits Section */}
        <Benefits />
      </main>
    </div>
  );
}

export default App;
