import React from 'react';
import { Cpu, Sparkles, Cloud } from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      id: '01',
      num: '1',
      title: 'Dedicated Departments',
      desc: 'Currently Focusing on 6 Departments: Scripting, Direction, Casting, Inventory, Clothing, Production; Each department gets their own dedicated workspace, dashboards with role-based access control for seamless collaboration.',
      icon: Cpu,
      align: 'right-text' // number on left, text on right as shown in screenshot
    },
    {
      id: '02',
      num: '2',
      title: 'Smart Sync',
      desc: 'Ensuring that all departments are synced with the latest updates, changes, and schedules, reducing miscommunication, delays and dependency on multiple platforms resulting in scattered information delivery.',
      icon: Sparkles,
      align: 'left-text' // text on left, number on right
    },
    {
      id: '03',
      num: '3',
      title: 'Role-Based Access Control',
      desc: 'Controls dashboard visibility based on production hierarchy and responsibilities. Directors and producers can view relevant departmental dashboards and monitor progress, while department heads manage their own data. Users only access information necessary for their role, ensuring privacy and organized workflow..',
      icon: Cloud,
      align: 'right-text' // number on left, text on right
    },
       
    {
      id: '04',
      num: '4',
      title: 'Scene Funnelling',
      desc: 'Aggregates synchronized data from multiple departments into a single, detailed scene view, combining actors, costumes, equipment, location, schedule, and production requirements to provide a, real-time overview of each scene..',
      icon: Cloud,
      align: 'left-text' // number on left, text on right
    },
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
               From Smart Sync to Role-Based Access Control - We ensure a smooth ecosystem for your production flow
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
