import "./DownloadApp.css";
import phoneMockup from "../../assets/phone.png";
import playLogo from "../../assets/playstore.png";
import appleLogo from "../../assets/appstore.png";

export default function DownloadApp() {
  return (
    <section className="download-app-section">
      <div className="download-app-container">
        <div className="phone-container">
          <img src={phoneMockup} alt="Phone Mockup" className="phone-mockup" />
        </div>

        <div className="content-section">
          <h1 className="app-title">
            Download iOS/Android <br />
            My Lyca Mobile app
          </h1>

          <div className="feature-line">
            <span className="tick-icon">✔</span>
            <p>
              Check your credit balance, data availability <br />
              and more
            </p>
          </div>

          <div className="feature-line">
            <span className="tick-icon">✔</span>
            <p>Get reminders to top-up and renew</p>
          </div>

          <div className="feature-line">
            <span className="tick-icon">✔</span>
            <p>
              Be the first to know about our latest offers <br />
              and discounts
            </p>
          </div>

          <div className="store-buttons">
            <img src={appleLogo} alt="App Store" className="store-btn-img" />
            <img src={playLogo} alt="Google Play" className="store-btn-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
