import React, { useState } from 'react';
import { Clapperboard, Sparkles, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenProduct, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sparkleActive, setSparkleActive] = useState(false);

  const handleSparkleClick = () => {
    setSparkleActive(true);
    setTimeout(() => setSparkleActive(false), 2000);
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar-pill">
        {/* Brand Logo & Name */}
        <a href="#home" className="navbar-brand">
          <div className="brand-icon-badge">
            <Clapperboard className="brand-icon" size={18} />
          </div>
          <span className="brand-title">FILM-MAX</span>
        </a>

        {/* Desktop Navigation Links (Home, Product, Contact Us) */}
        <nav className="navbar-links">
          <a href="#home" className="nav-item active">Home</a>
          <button onClick={onOpenProduct} className="nav-item btn-link">Product</button>
          <button onClick={onOpenContact} className="nav-item btn-link">Contact us</button>
        </nav>

        {/* Action / Sparkle Theme Indicator */}
        <div className="navbar-actions">
          <button 
            className={`sparkle-btn ${sparkleActive ? 'sparkling' : ''}`}
            onClick={handleSparkleClick}
            title="Toggle Cinema Mode Effect"
            aria-label="Toggle Cinema Effect"
          >
            <Sparkles size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a 
            href="#home" 
            className="mobile-nav-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <button 
            className="mobile-nav-item"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenProduct) onOpenProduct();
            }}
          >
            Product
          </button>
          <button 
            className="mobile-nav-item"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenContact) onOpenContact();
            }}
          >
            Contact us
          </button>
        </div>
      )}
    </header>
  );
}
