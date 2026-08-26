import React from 'react';
import { Film, Volume2, Download } from 'lucide-react';
import './Benefits.css';

export default function Benefits() {
  const benefitsData = [
    {
      id: '01',
      num: '01',
      icon: Film,
      context: 'You and your family stream across 85" OLED displays, home projectors, and mobile devices regularly.',
      keyBenefit: 'Lossless 4K HDR10+ with native 24fps cinema cadence and studio master bitrates for unmatched visual depth.',
      layout: 'left-num' // Number on left, Context in center, Key benefit on right
    },
    {
      id: '02',
      num: '02',
      icon: Volume2,
      context: 'Your home theater requires studio-grade acoustic depth and pinpoint directional soundstage.',
      keyBenefit: 'Dolby Atmos 3D audio placement with real-time acoustic calibration and binaural headphone rendering.',
      layout: 'right-num' // Context on left, Key benefit in center, Number on right
    },
    {
      id: '03',
      num: '03',
      icon: Download,
      context: 'Take your curated film library across long flights, overseas travel, and remote off-grid journeys.',
      keyBenefit: 'Full offline vault downloads in uncompressed 4K master quality with a 100% ad-free guarantee.',
      layout: 'left-num' // Number on left, Context in center, Key benefit on right
    }
  ];

  return (
    <section className="benefits-section" id="benefits">
      <div className="container">
        {/* Beginning of Div 3: FOR YOU Header matching reference */}
        <div className="benefits-header-wrapper">
          <div className="section-tag-label">FOR YOU</div>
          <h2 className="benefits-hero-title">
            Built for
            <br />
            <span className="serif-italic">every</span> film lover.
          </h2>
          <p className="benefits-hero-desc">
            FilmMax adapts to your unique theater setup, providing master audio and visual fidelity for your specific environment.
          </p>
          <div className="benefits-header-divider"></div>
        </div>

        {/* 3-Column Alternating Benefits List */}
        <div className="benefits-list">
          {benefitsData.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className={`benefit-row layout-${item.layout}`}>
                {item.layout === 'left-num' ? (
                  <>
                    {/* 1. Giant Number + Icon */}
                    <div className="benefit-col-num">
                      <span className="giant-outline-num">{item.num}</span>
                      <div className="benefit-coral-icon">
                        <Icon size={22} />
                      </div>
                    </div>

                    {/* 2. Context Paragraph */}
                    <div className="benefit-col-context">
                      <p>{item.context}</p>
                    </div>

                    {/* 3. Key Benefit */}
                    <div className="benefit-col-key">
                      <div className="key-benefit-tag">
                        <span className="tag-dash">—</span>
                        <span>KEY BENEFIT</span>
                      </div>
                      <p className="key-benefit-text">{item.keyBenefit}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* 1. Context Paragraph */}
                    <div className="benefit-col-context">
                      <p>{item.context}</p>
                    </div>

                    {/* 2. Key Benefit */}
                    <div className="benefit-col-key">
                      <div className="key-benefit-tag">
                        <span className="tag-dash">—</span>
                        <span>KEY BENEFIT</span>
                      </div>
                      <p className="key-benefit-text">{item.keyBenefit}</p>
                    </div>

                    {/* 3. Giant Number + Icon */}
                    <div className="benefit-col-num align-right">
                      <span className="giant-outline-num">{item.num}</span>
                      <div className="benefit-coral-icon">
                        <Icon size={22} />
                      </div>
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
