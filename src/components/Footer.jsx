import React from 'react';
import { Clapperboard } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenContact, onOpenProduct }) {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="brand-icon-badge">
                <Clapperboard size={18} />
              </div>
              <span className="brand-title">FILM-MAX</span>
            </div>
            <p className="footer-bio">
              Redefining visual storytelling through pristine master bitrates, uncompressed spatial audio, and curated indie cinema.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h5>Navigation</h5>
              <a href="#home">Home</a>
              <button onClick={onOpenProduct} className="footer-link-btn">Subscriptions</button>
              <a href="#how-it-works">How It Works</a>
              <a href="#benefits">Benefits</a>
            </div>

            <div className="footer-col">
              <h5>Cinema</h5>
              <a href="#product">4K Premieres</a>
              <a href="#product">Festival Vault</a>
              <a href="#product">Director Q&As</a>
              <a href="#product">Dolby Atmos Catalog</a>
            </div>

            <div className="footer-col">
              <h5>Support</h5>
              <button onClick={onOpenContact} className="footer-link-btn">Contact Concierge</button>
              <a href="#home">Device Compatibility</a>
              <a href="#home">Privacy Policy</a>
              <a href="#home">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Film-Max Inc. All rights reserved.</p>
          <p className="footer-heart">
            Crafted for pure cinema lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
