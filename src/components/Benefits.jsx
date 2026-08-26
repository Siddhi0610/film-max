import React from 'react';
import { Film, Volume2, Download } from 'lucide-react';
import './Benefits.css';

export default function Benefits() {
  const benefitsData = [
    {
      id: '01',
      num: '01',
      icon: Film,
      context: 'Multiple departments reserve the same cameras, locations, costumes, and crew, creating last-minute conflicts that disrupt the shooting schedule.',
      keyBenefit: 'The System focuses on Micro-Management & hence is Designed for synchronized departmental bookings for seamless production coordination hence avoiding conflicts and delays.',
      layout: 'left-num' // Number on left, Context in center, Key benefit on right
    },
    {
      id: '02',
      num: '02',
      icon: Volume2,
      context: 'Scripts, actor details, costumes, equipment, locations, and schedules live across separate departments, making complete scene information difficult to access.',
      keyBenefit: 'Scene funneling consolidates synchronized departmental data into one detailed scene view, delivering every actor, costume, location, schedule, and equipment requirement in context.',
      layout: 'right-num' // Context on left, Key benefit in center, Number on right
    },
    {
      id: '03',
      num: '03',
      icon: Download,
      context: 'Directors and producers depend on constant calls and messages to understand departmental progress, turning simple production updates into unnecessary communication overhead..',
      keyBenefit: 'Role-based dashboards provide hierarchical visibility across departments, allowing authorized leadership to monitor progress without modifying departmental data or disrupting workflows.',
      layout: 'left-num' // Number on left, Context in center, Key benefit on right
    }
  ];

  return (
    <section className="benefits-section" id="benefits">
      <div className="container">
        {/* Beginning of Div 3: FOR YOU Header matching reference */}
        <div className="benefits-header-wrapper">
          <div className="section-tag-label">FOR WHO</div>
          <h2 className="benefits-hero-title">
            Built for
            <br />
            <span className="serif-italic">every</span> Production Team.
          </h2>
          <p className="benefits-hero-desc">
            FilmMax brings every department behind your production together, turning scattered plans, resources, and schedules into one seamless filmmaking workflow.
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
