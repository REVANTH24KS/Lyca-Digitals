"use client";

import { useState } from "react";
import "./SimSelectionSection.css";
import simselection1 from "../../assets/simselection1.png";
import simselection2 from "../../assets/simselection2.jpeg";

const SimSelectionSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const plans = [
    {
      id: 1,
      title: "Pay monthly SIM",
      subtitle: "Stay longer, save more",
      image: simselection1,
      features: [
        { label: "Fair", description: "No mid-term price rises" },
        { label: "Flexible", description: "Upgrade your plan anytime" },
        { label: "Value", description: "With our long term plans" },
      ],
    },
    {
      id: 2,
      title: "Pay as you go SIM",
      subtitle: "pause & pay anytime",
      image: simselection2,
      features: [
        { label: "Go international", description: "Check out our international plans" },
        { label: "Save more", description: "With our long term plans" },
        { label: "Go limitless", description: "With our unlimited data plans" },
      ],
    },
  ];

  return (
    <section className="sim-selection-section">
      <div className="sim-selection-container">
        <h2 className="sim-selection-title">Choose a SIM only plan today</h2>
        <p className="sim-selection-subtitle">Get a 5G ready, SIM only deal that suits you</p>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="plan-card"
              style={{ backgroundImage: `url(${plan.image})` }}
              onMouseEnter={() => setHoveredCard(plan.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-overlay"></div>

              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{plan.title}</h3>
                  <p className="card-subtitle">{plan.subtitle}</p>
                  <div className="arrow-icon">→</div>
                </div>

                <div className={`features-list ${hoveredCard === plan.id ? "visible" : ""}`}>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <div className="feature-label">{feature.label}</div>
                      <div className="feature-description" style={{ lineHeight: 1.2 ,color: "rgba(255, 255, 255, 0.85)"}}>{feature.description}</div>
                      <div className="feature-divider"></div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimSelectionSection;
