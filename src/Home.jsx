import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import IDOSection from "./IDOSection";
import HowItWorksSection from "./HowItWorksSection";
import Footer from "./Footer";

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
