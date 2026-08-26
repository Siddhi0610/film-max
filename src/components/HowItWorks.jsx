import React from 'react';
import { Cpu, Sparkles, Cloud } from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      id: '01',
      num: '1',
      title: 'Smart Cinema Ingestion',
      desc: 'Master-grade encoders process raw 4K camera streams in real-time, matching dynamic color ranges before transmission.',
      icon: Cpu,
      align: 'right-text' // number on left, text on right as shown in screenshot
    },
    {
      id: '02',
      num: '2',
      title: 'AI Bitrate Processing',
      desc: 'On-device AI stream optimization balances bitrates dynamically up to 80 Mbps without a single frame drop.',
      icon: Sparkles,
      align: 'left-text' // text on left, number on right
    },
    {
      id: '03',
      num: '3',
      title: 'Secure Cloud Vault',
      desc: 'Advanced streaming pipelines bring private festival premieres and director cuts with lossless audio fidelity.',
      icon: Cloud,
      align: 'right-text' // number on left, text on right
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        {/* Beginning of Div 2: PROCESS Header matching reference */}
        <div className="how-header-wrapper">
          <div className="section-tag-label">PROCESS</div>
          <div className="how-header-grid">
            <h2 className="section-split-title">
              How <span className="serif-italic">Film-Max</span>
              <br />Works
            </h2>
            <div className="how-header-desc-box">
              <p className="section-intro-desc">
                From studio vault to pristine playback — a seamless ecosystem designed around uncompromised cinematic storytelling.
              </p>
            </div>
          </div>
        </div>

        {/* Alternating Steps List */}
        <div className="how-it-works-list">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className={`how-row ${step.align}`}>
                {step.align === 'left-text' ? (
                  <>
                    <div className="how-text-block">
                      <h3 className="how-title">{step.title}</h3>
                      <p className="how-desc">{step.desc}</p>
                    </div>
                    <div className="how-num-block">
                      <span className="giant-outline-num">{step.num}</span>
                      <div className="coral-icon-badge">
                        <Icon size={24} />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="how-num-block">
                      <span className="giant-outline-num">{step.num}</span>
                      <div className="coral-icon-badge">
                        <Icon size={24} />
                      </div>
                    </div>
                    <div className="how-text-block">
                      <h3 className="how-title">{step.title}</h3>
                      <p className="how-desc">{step.desc}</p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
