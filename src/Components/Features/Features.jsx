"use client";
import "./Features.css";
import calendar from "../../assets/calendar.png";
import preparesim from "../../assets/preparesim.png";
import switchlyca from "../../assets/switchlyca.png";

const Features = () => {
  const options = [
    {
      id: 1,
      title: "Buy Pay as you go",
      subtitle: "SIM",
      icon: <img src={calendar} alt="Pay as you go" className="logo" />,
    },
    {
      id: 2,
      title: "Buy Pay monthly",
      subtitle: "SIM",
      icon: <img src={preparesim} alt="Pay monthly" className="logo" />,
    },
    {
      id: 3,
      title: "Switch to",
      subtitle: "Lyca",
      icon: <img src={switchlyca} alt="Switch to Lyca" className="logo" />,
    },
  ];

  return (
    <section className="sim-options-section">
      <div className="sim-options-container">
        <header className="sim-options-header">
          <h2 className="sim-options-title">Join Lyca today</h2>
          <p className="sim-options-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry{" "}
          </p>
        </header>

        <div className="sim-options-grid" role="list">
          {options.map((option) => (
            <div key={option.id} className="sim-option-card" role="listitem">
              <div className="icon-circle">{option.icon}</div>
              <div className="option-text">
                <p className="option-title">{option.title}</p>
                <p className="option-subtitle">{option.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
