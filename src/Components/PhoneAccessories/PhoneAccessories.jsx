"use client";
import "./PhoneAccessories.css";
import iphone from "../../assets/iphone.png";
import samsung from "../../assets/samsung.png";
import iphone1 from "../../assets/iphone1.png";
import React from "react";
import sim from "../../assets/3d-SIM 2.png";
const PhoneAccessories = () => {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 13",
      price: "£38",
      period: "/month",
      image: iphone,
    },
    {
      id: 2,
      name: "Samsung Galaxy S21 FE",
      price: "£42",
      period: "/month",
      image: samsung,
    },
    {
      id: 3,
      name: "Apple iPhone 12",
      price: "£34",
      period: "/month",
      image: iphone1,
    },
  ];

  return (
    <section className="phone-accessories-section">
      <div className="promo-banner" style={{ background: "#006AE0" }}>
        <span className="promo-text">
          <img src={sim} alt="SIM icon" className="promo-icon" />
          Best SIM only deal for students →
        </span>{" "}
      </div>

      <div className="accessories-container">
        <div className="section-header ">
          <h2 className="section-title">Phone & accessories</h2>
          <p className="section-subtitle">
            Explore incredible offers on a wide range of devices
          </p>
        </div>

        <div className="products-wrapper">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    loading="lazy"
                  />
                </div>

                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">
                    <span className="price-value">{product.price}</span>
                    <span className="price-period">{product.period}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneAccessories;
