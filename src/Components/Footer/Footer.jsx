"use client";
import { useState } from "react";
import "./Footer.css";
import playLogo from "../../assets/playstore.png";
import appleLogo from "../../assets/appstore.png";
import logo from "../../assets/logo.png";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import youtubeIcon from "../../assets/youtube.svg";
import downarrow from "../../assets/downarrow.png";
const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const footerLinks = {
    joinLyca: [
      { label: "Pay as you go SIM", href: "#" },
      { label: "Pay monthly SIM", href: "#" },
      { label: "Phone & accessories", href: "#" },
      { label: "eSIM", href: "#" },
      { label: "Free SIM", href: "#" },
      { label: "Offers", href: "#" },
    ],
    quickLinks: [
      { label: "Rates", href: "#" },
      { label: "Quick top-up", href: "#" },
      { label: "Switch to Lyca", href: "#" },
      { label: "Login to My Lyca Mobile", href: "#" },
      { label: "Coverage checker", href: "#" },
      { label: "Store locator", href: "#" },
    ],
    helpSupport: [
      { label: "FAQs", href: "#" },
      { label: "Contact us", href: "#" },
      { label: "Security", href: "#" },
      { label: "Privacy notice", href: "#" },
      { label: "Code of practice", href: "#" },
      { label: "Cookie policy", href: "#" },
    ],
    lycaGroup: [
      { label: "About us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Terms & conditions", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: facebookIcon, label: "Facebook", href: "#" },
    { icon: instagramIcon, label: "Instagram", href: "#" },
    { icon: twitterIcon, label: "Twitter", href: "#" },
    { icon: youtubeIcon, label: "YouTube", href: "#" },
  ];

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const renderSocialIcon = (iconSrc) => {
    return (
      <img
        src={iconSrc || "/placeholder.svg"}
        alt="social icon"
        style={{ width: "20px", height: "20px" }}
      />
    );
  };

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Links Section */}
          <div className="footer-links-grid">
            {/* Join Lyca Mobile Column - Collapsible on Mobile */}
            <div className="footer-column">
              <div
                className="footer-column-header"
                onClick={() => toggleSection("joinLyca")}
              >
                <h3 className="footer-column-title">Join Lyca Mobile</h3>
                <img
                  src={downarrow || "downarrow"}
                  alt="Arrow"
                  style={{ width: "10px", height: "10px", color: "#ffffff" }}
                />
              </div>
              <ul
                className={`footer-link-list ${
                  expandedSection === "joinLyca" ? "expanded" : ""
                }`}
              >
                {footerLinks.joinLyca.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Column - Collapsible on Mobile */}
            <div className="footer-column">
              <div
                className="footer-column-header"
                onClick={() => toggleSection("quickLinks")}
              >
                <h3 className="footer-column-title">Quick links</h3>
                <img
                  src={downarrow || "downarrow"}
                  alt="Arrow"
                  style={{ width: "10px", height: "10px", color: "#ffffff" }}
                />
              </div>
              <ul
                className={`footer-link-list ${
                  expandedSection === "quickLinks" ? "expanded" : ""
                }`}
              >
                {footerLinks.quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help & Support Column - Collapsible on Mobile */}
            <div className="footer-column">
              <div
                className="footer-column-header"
                onClick={() => toggleSection("helpSupport")}
              >
                <h3 className="footer-column-title">Help & support</h3>
                <img
                  src={downarrow || "downarrow"}
                  alt="Arrow"
                  style={{ width: "10px", height: "10px", color: "#ffffff" }}
                />
              </div>
              <ul
                className={`footer-link-list ${
                  expandedSection === "helpSupport" ? "expanded" : ""
                }`}
              >
                {footerLinks.helpSupport.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lyca Group Column - Collapsible on Mobile */}
            <div className="footer-column">
              <div
                className="footer-column-header"
                onClick={() => toggleSection("lycaGroup")}
              >
                <h3 className="footer-column-title">Lyca Group</h3>
                <img
                  src={downarrow || "downarrow"}
                  alt="Arrow"
                  style={{ width: "10px", height: "10px", color: "#ffffff" }}
                />
              </div>
              <ul
                className={`footer-link-list ${
                  expandedSection === "lycaGroup" ? "expanded" : ""
                }`}
              >
                {footerLinks.lycaGroup.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lyca on the Go Column */}
            <div className="footer-column footer-column-actions">
              <div className="app-badges desktop-only">
                <a href="#" className="app-badge google-play">
                  <img
                    src={playLogo || "playstore"}
                    alt="Get it on Google Play"
                  />
                </a>
                <a href="#" className="app-badge app-store">
                  <img
                    src={appleLogo || "appstore"}
                    alt="Download on the App Store"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Mobile Specific */}
      <div className="footer-cta">
        <div className="footer-container">
          <h3 className="footer-cta-title">
            We are a step or tap away from you
          </h3>
          <div className="footer-cta-badges">
            <a href="#" className="cta-badge">
              <img src={playLogo || "/placeholder.svg"} alt="Google Play" />
            </a>
            <a href="#" className="cta-badge">
              <img src={appleLogo || "/placeholder.svg"} alt="App Store" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            {/* Logo and Copyright */}
            <div className="footer-logo-section">
              <div className="footer-logo">
                <img
                  src={logo || "/placeholder.svg"}
                  alt="Lyca Mobile Logo"
                  className="footer-logo-img"
                />
                <span className="footer-logo-text">Mobile</span>
              </div>
              <p className="footer-copyright">
                © 2025 Lyca Mobile. All Rights Reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="footer-social">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="social-icon"
                  aria-label={social.label}
                >
                  {renderSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
