import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Features from "./Components/Features/Features";
import SimSelectionSection from "./Components/SimSelectionSection/SimSelectionSection";
import PhoneAccessories from "./Components/PhoneAccessories/PhoneAccessories";
import WhyLyca from "./Components/WhyLyca/WhyLyca";
import DownloadApp from "./Components/DownloadApp/DownloadApp";
import HelpSection from "./Components/HelpSection/HelpSection";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <Features />
      <SimSelectionSection />
      <PhoneAccessories />
      <WhyLyca />
      <DownloadApp/>
      <HelpSection/>
      <Footer />
    </div>
  );
};

export default App;
