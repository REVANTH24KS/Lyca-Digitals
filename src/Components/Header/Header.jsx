import { useState, useEffect } from "react";
import "./Header.css";
import header1 from "../../assets/headerimage.png";
import header2 from "../../assets/header2.png";
import header3 from "../../assets/header3.jpg";
import header4 from "../../assets/header4.png";


const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showBanner, setShowBanner] = useState(true);

  const slides = [
    {
      id: 1,
      title: "",
      subtitle: "",
      image: header1,
      showContent: false,
    },
    {
      id: 2,
      title: "Pay monthly just got super exciting!",
      subtitle: "Now you get to choose your mobile number",
      image: header2,
      showContent: true,
    },
    {
      id: 3,
      title: "Pay Yearly just got super exciting!",
      subtitle: "Now you get to choose your mobile number",
      image: header3,
      showContent: true,
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const id = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length);
    }, 5000);

    return () => clearInterval(id);
  }, [autoPlay, slides.length]);

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);
    setTimeout(() => setAutoPlay(true), 7000);
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentSlide((s) => (s + 1) % slides.length);
    setTimeout(() => setAutoPlay(true), 7000);
  };

  const slidearrow = (i) => {
    setAutoPlay(false);
    setCurrentSlide(i);
    setTimeout(() => setAutoPlay(true), 7000);
  };

  const slide = slides[currentSlide];

  const renderSubtitle = (text) =>
    text ? text.split("\n").map((line, idx) => <div key={idx}>{line}</div>) : null;

  return (
    <>
      {/* Announcement Banner */}
      {showBanner && (
        <div className="announcement-banner" role="region" aria-label="Announcement">
          Already with us?{" "}
          <a href="#" className="banner-link">
            Click here
          </a>{" "}
          to view deals just for you.
          <button
            className="banner-close"
            aria-label="Close announcement"
            onClick={() => setShowBanner(false)}
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Header Carousel */}
      <header
        className="hero-header"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Content - show when slide.showContent is true */}
        {slide.showContent && (
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{renderSubtitle(slide.subtitle)}</p>
              <button className="know-more-btn">Know more</button>
            </div>
          </div>
        )}

        {/* Left Navigation Arrow */}
        <button
          onClick={handlePrev}
          className="carousel-arrow carousel-arrow-left"
          aria-label="Previous slide"
        >
          ‹
        </button>

        {/* Carousel Dots - Center Bottom */}
        <div className="carousel-dots-container">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => slidearrow(i)}
              className={`dot ${i === currentSlide ? "dot-active" : ""}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === currentSlide ? "true" : "false"}
            />
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <button
          onClick={handleNext}
          className="carousel-arrow carousel-arrow-right"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Slide Counter - Bottom Right */}
        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>
      </header>
    </>
  );
};

export default Header;