import React from 'react';
import { ArrowRight, Film, Sparkles, ShieldCheck } from 'lucide-react';
import './Hero.css';

export default function Hero({ onSubscribeClick }) {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        {/* Left Column: Headline, Description & CTA Buttons */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="serif-italic">Film-Max</span>
            
            <span className="title-line title-accent">
              <span className="geist mono">Cause Your Production deserves a smooth flow</span>
            </span>
          </h1>

          <p className="hero-description">
           A centralised Film Production Management System that connects People , Resources , Schedules and Tasks enabling seamless coordination from script to shoot.
          </p>

          <div className="hero-actions">
            {/* Primary Action Button */}
            <button 
              className="btn-primary-pill"
              onClick={onSubscribeClick}
              id="hero-subscribe-btn"
            >
              <span>SUBSCRIBE NOW</span>
              <ArrowRight size={18} className="btn-arrow" />
            </button>

            {/* Secondary Action Button */}
            <a href="#how-it-works" className="btn-secondary-pill">
              SEE HOW IT WORKS
            </a>
          </div>
        </div>

        {/* Right Column: Hero Visual Artwork */}
        <div className="hero-visual-wrapper">
          <div className="hero-circle-badge">
            {/* Ambient Background Glow */}
            <div className="circle-ambient-glow"></div>
            
            {/* The Main Sunset Coral Disk */}
            <div className="sunset-disk">
              {/* Cinematic Art SVG Overlay */}
              <svg 
                className="cinema-svg-artwork" 
                viewBox="0 0 400 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="beamGrad" x1="200" y1="180" x2="380" y2="400" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFF" stopOpacity="0.4" />
                    <stop offset="0.6" stopColor="#FFD285" stopOpacity="0.15" />
                    <stop offset="1" stopColor="#E95A35" stopOpacity="0" />
                  </linearGradient>
                  
                  <linearGradient id="reelGrad" x1="120" y1="120" x2="280" y2="280" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2A2424" />
                    <stop offset="1" stopColor="#120F0F" />
                  </linearGradient>

                  <linearGradient id="goldAccent" x1="0" y1="0" x2="1" y2="1">
                    <stop stopColor="#FFE17D" />
                    <stop offset="1" stopColor="#F5A623" />
                  </linearGradient>

                  <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Starry Sky / Projector Dust Particles */}
                <circle cx="90" cy="80" r="1.5" fill="#FFE5D9" opacity="0.6" />
                <circle cx="280" cy="70" r="2" fill="#FFE5D9" opacity="0.8" />
                <circle cx="320" cy="140" r="1.2" fill="#FFE5D9" opacity="0.5" />
                <circle cx="110" cy="160" r="1.8" fill="#FFE5D9" opacity="0.7" />
                <circle cx="70" cy="220" r="1.5" fill="#FFE5D9" opacity="0.4" />

                {/* Projector Light Cone Ray */}
                <path d="M 215 190 L 390 120 L 390 310 Z" fill="url(#beamGrad)" />

                {/* Skyline Silhouette at Bottom of the Circle */}
                <path 
                  d="M 50 350 L 50 320 L 70 320 L 70 295 L 90 295 L 90 320 L 110 320 L 110 275 L 125 275 L 125 260 L 135 260 L 135 320 L 155 320 L 155 285 L 175 285 L 175 320 L 225 320 L 225 270 L 245 270 L 245 320 L 270 320 L 270 290 L 290 290 L 290 320 L 310 320 L 310 280 L 330 280 L 330 320 L 350 320 L 350 350 Z" 
                  fill="#151111" 
                />
                
                {/* Lit Skyline Windows */}
                <rect x="75" y="302" width="3" height="4" fill="#FFC999" opacity="0.7" />
                <rect x="82" y="308" width="3" height="4" fill="#FFC999" opacity="0.5" />
                <rect x="115" y="285" width="3" height="4" fill="#FFC999" opacity="0.8" />
                <rect x="120" y="295" width="3" height="4" fill="#FFC999" opacity="0.6" />
                <rect x="160" y="292" width="3" height="4" fill="#FFC999" opacity="0.8" />
                <rect x="232" y="280" width="3" height="4" fill="#FFC999" opacity="0.7" />
                <rect x="275" y="300" width="3" height="4" fill="#FFC999" opacity="0.6" />
                <rect x="315" y="290" width="3" height="4" fill="#FFC999" opacity="0.8" />

                {/* The Majestic Cinema Projector & Reel Silhouette */}
                <g transform="translate(10, 10)">
                  {/* Tripod Stand */}
                  <line x1="190" y1="220" x2="135" y2="355" stroke="#161212" strokeWidth="6" strokeLinecap="round" />
                  <line x1="190" y1="220" x2="190" y2="355" stroke="#161212" strokeWidth="6" strokeLinecap="round" />
                  <line x1="190" y1="220" x2="245" y2="355" stroke="#161212" strokeWidth="6" strokeLinecap="round" />

                  {/* Tripod Connector Collar */}
                  <rect x="180" y="215" width="20" height="12" rx="3" fill="#FFE17D" />

                  {/* Projector Body */}
                  <rect x="145" y="160" width="90" height="60" rx="8" fill="url(#reelGrad)" stroke="#FFE17D" strokeWidth="2.5" />

                  {/* Projector Lens Barrel */}
                  <path d="M 235 175 L 265 168 L 265 212 L 235 205 Z" fill="#201A1A" stroke="#FFE17D" strokeWidth="2" />
                  {/* Glowing Lens Core */}
                  <ellipse cx="265" cy="190" rx="4" ry="18" fill="#FFF8E7" filter="url(#glowFilter)" />

                  {/* Left Film Spool (Large Top Reel) */}
                  <circle cx="145" cy="125" r="38" fill="url(#reelGrad)" stroke="#FFE17D" strokeWidth="3" />
                  <circle cx="145" cy="125" r="34" fill="none" stroke="#E95A35" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="145" cy="125" r="12" fill="#FFE17D" />
                  <circle cx="145" cy="125" r="6" fill="#141111" />
                  {/* Reel Cutout Slots */}
                  <circle cx="145" cy="104" r="5" fill="#E95A35" />
                  <circle cx="163" cy="116" r="5" fill="#E95A35" />
                  <circle cx="163" cy="136" r="5" fill="#E95A35" />
                  <circle cx="145" cy="146" r="5" fill="#E95A35" />
                  <circle cx="127" cy="136" r="5" fill="#E95A35" />
                  <circle cx="127" cy="116" r="5" fill="#E95A35" />

                  {/* Right Film Spool (Rear Take-up Reel) */}
                  <circle cx="215" cy="120" r="32" fill="url(#reelGrad)" stroke="#FFE17D" strokeWidth="3" />
                  <circle cx="215" cy="120" r="10" fill="#FFE17D" />
                  <circle cx="215" cy="120" r="5" fill="#141111" />
                  <circle cx="215" cy="102" r="4" fill="#E95A35" />
                  <circle cx="230" cy="112" r="4" fill="#E95A35" />
                  <circle cx="230" cy="128" r="4" fill="#E95A35" />
                  <circle cx="215" cy="138" r="4" fill="#E95A35" />
                  <circle cx="200" cy="128" r="4" fill="#E95A35" />
                  <circle cx="200" cy="112" r="4" fill="#E95A35" />

                  {/* Film Strip Threading Path */}
                  <path d="M 175 145 Q 190 155 195 145" stroke="#FFE17D" strokeWidth="2.5" fill="none" />
                </g>

                {/* Floating Director Clapperboard / Golden Emblem */}
                <g transform="translate(280, 240) rotate(-10)">
                  <rect x="0" y="0" width="56" height="42" rx="4" fill="#181313" stroke="#FFF" strokeWidth="1.5" />
                  <path d="M 0 0 L 10 12 L 18 12 L 8 0 Z" fill="#FFF" />
                  <path d="M 16 0 L 26 12 L 34 12 L 24 0 Z" fill="#FFF" />
                  <path d="M 32 0 L 42 12 L 50 12 L 40 0 Z" fill="#FFF" />
                  <line x1="0" y1="12" x2="56" y2="12" stroke="#FFF" strokeWidth="1" />
                  <text x="8" y="28" fill="#FFE17D" fontSize="7" fontWeight="bold" fontFamily="sans-serif">FILM-MAX</text>
                  <text x="8" y="36" fill="#FFF" fontSize="5" fontFamily="sans-serif">SCENE 01 • 4K</text>
                </g>
              </svg>

             

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
