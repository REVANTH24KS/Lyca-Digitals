"use client"

import { useState, useEffect } from "react"
import "./WhyLyca.css"
import whylyca1 from "../../Assets/whylyca1.png"
import whylyca2 from "../../Assets/whylyca2.png"
import whylyca3 from "../../Assets/whylyca3.png"
import arrowleft from "../../assets/leftarrow.png"
import arrowright from "../../assets/rightarrow.png"

export default function WhyLyca() {
  const features = [
    {
      id: 1,
      title: "Best UK Network",
      description: "Experience superfast speeds and 99% country coverage with UK's most awarded and reliable network",
      icon: whylyca1,
    },
    {
      id: 2,
      title: "Superfast 5G and eSIM",
      description: "Enjoy the convenience of an eSIM with seamless 5G enabled video calling, downloads or streaming",
      icon: whylyca2,
    },
    {
      id: 3,
      title: "International Roaming",
      description: "With our global network, Roam within EU or call your world at no additional cost",
      icon: whylyca3,
    },
  ]

  const [isCarouselMode, setIsCarouselMode] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleResize = () => {
    setIsCarouselMode(window.innerWidth < 768)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="why-lyca-section">
      <div className="why-lyca-container">
        <h2 className="why-lyca-title">Why Lyca?</h2>

        {isCarouselMode ? (
          /* Carousel mode for mobile */
          <div className="carousel-wrapper-why">
            <button className="carousel-btn-why carousel-btn-prev-why" onClick={handlePrev} aria-label="Previous feature">
              <img src={arrowleft} alt="Previous" className="carousel-arrow-icon-why" />
            </button>

            <div className="features-carousel">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`feature-card ${index === currentIndex ? "active" : ""}`}
                  style={{
                    display: index === currentIndex ? "flex" : "none",
                  }}
                >
                  <div className="icon-wrapper">
                    <img src={feature.icon} alt={feature.title} className="feature-icon-img" />
                  </div>

                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>

            <button className="carousel-btn-why carousel-btn-next-why" onClick={handleNext} aria-label="Next feature">
              <img src={arrowright} alt="Next" className="carousel-arrow-icon-why" />
            </button>
          </div>
        ) : (
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="icon-wrapper">
                  <img src={feature.icon} alt={feature.title} className="feature-icon-img" />
                </div>

                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}