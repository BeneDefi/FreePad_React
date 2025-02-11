import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import IDOSection from "./components/IDOSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <IDOSection />
      <HowItWorksSection />
      <Footer />
    </>
  );
}

export default Home;
