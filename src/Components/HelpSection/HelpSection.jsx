"use client"
import { useState } from "react"
import "./HelpSection.css"
import calendar from "../../assets/calendar.png"
import preparesim from "../../assets/preparesim.png"
import switchlyca from "../../assets/switchlyca.png"
import usericon from "../../assets/person.png"
import contacticon from "../../assets/Help.png"
import arrowleft from "../../assets/leftarrow.png"
import arrowright from "../../assets/rightarrow.png"
import indiaflag from "../../assets/india.png"
import polandflag from "../../assets/poland.png"
import romaniaflag from "../../assets/romania.png"
import pakistanflag from "../../assets/pakistan.png"
import nigeriaflag from "../../assets/nigeria.png"
import bulgariaflag from "../../assets/bulgeria.png"
import usaflag from "../../assets/usa.png"

const HelpSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isInternationalExpanded, setIsInternationalExpanded] = useState(false)

  const helpItems = [
    {
      id: 1,
      icon: calendar,
      title: "Pay monthly",
      subtitle: "SIM only deal",
    },
    {
      id: 2,
      icon: preparesim,
      title: "Pay as you go",
      subtitle: "SIM only deal",
    },
    {
      id: 3,
      icon: switchlyca,
      title: "Switch to",
      subtitle: "Lyca",
    },
    {
      id: 4,
      icon: usericon,
      title: "Manage your",
      subtitle: "account",
    },
    {
      id: 5,
      icon: contacticon,
      title: "Contact",
      subtitle: "us",
    },
    {
      id: 6,
      icon: contacticon,
      title: "Help & support",
      subtitle: "24 x 7",
    },
  ]

  const countries = [
    { id: 1, name: "India", flag: indiaflag, isHighlighted: true },
    { id: 2, name: "Poland", flag: polandflag, isHighlighted: false },
    { id: 3, name: "Romania", flag: romaniaflag, isHighlighted: false },
    { id: 4, name: "Pakistan", flag: pakistanflag, isHighlighted: false },
    { id: 5, name: "Nigeria", flag: nigeriaflag, isHighlighted: false },
    { id: 6, name: "Bulgaria", flag: bulgariaflag, isHighlighted: false },
    { id: 7, name: "USA", flag: usaflag, isHighlighted: false },
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? countries.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === countries.length - 1 ? 0 : prev + 1))
  }

  const getVisibleCountries = () => {
    const visible = []
    for (let i = 0; i < 5; i++) {
      visible.push(countries[(currentIndex + i) % countries.length])
    }
    return visible
  }

  return (
    <div className="help-section">
      {/* We are here to help you section */}
      <section className="help-intro">
        <div className="help-intro-container">
          <h2 className="help-title">We are here to help you</h2>
          <div className="help-grid">
            {helpItems.map((item) => (
              <div key={item.id} className="help-card">
                <div className="help-icon-circle">
                  <img src={item.icon || "/placeholder.svg"} alt={`${item.title} icon`} className="help-icon-img" />
                </div>
                <div className="help-card-content">
                  <h3 className="help-card-title">
                    {item.title}
                    <br />
                    <span className="help-card-subtitle">{item.subtitle}</span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="international-section">
        <div className="international-container">
          <h2 className="international-title">Cheap international calls for everyone</h2>

          <button
            className="international-mobile-toggle"
            onClick={() => setIsInternationalExpanded(!isInternationalExpanded)}
            aria-expanded={isInternationalExpanded}
          >
            <span className="toggle-text">Find your cheap international call to</span>
            <span className={`toggle-icon ${isInternationalExpanded ? "expanded" : ""}`}>↓</span>
          </button>

          <div className={`carousel-content ${isInternationalExpanded ? "show" : "hide"}`}>
            <div className="carousel-wrapper">
              <button className="carousel-btn carousel-btn-prev" onClick={handlePrev} aria-label="Previous countries">
                <img src={arrowleft || "/placeholder.svg"} alt="Previous" className="carousel-arrow-icon" />
              </button>
              <div className="carousel-container">
                <div className="countries-grid">
                  {getVisibleCountries().map((country, index) => (
                    <div
                      key={`${country.id}-${index}`}
                      className={`country-card ${index === 0 ? "country-card-active" : ""}`}
                    >
                      <div className="country-flag">
                        <img
                          src={country.flag || "/placeholder.svg"}
                          alt={`${country.name} flag`}
                          className="country-flag-img"
                        />
                      </div>
                      <p className="country-name">{country.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <button className="carousel-btn carousel-btn-next" onClick={handleNext} aria-label="Next countries">
                <img src={arrowright || "/placeholder.svg"} alt="Next" className="carousel-arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HelpSection
