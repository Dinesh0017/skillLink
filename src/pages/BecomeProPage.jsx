import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SharedHero from "../components/SharedHero";
import ProSteps from "../components/ProSteps";
import premiumImg from "../assets/BecomeAPro.png"

const BecomeProPage = () => {
  return (
    <>
      <Navbar />
      <SharedHero
        title="Become a Pro"
        subtitle="Turn your skills into opportunities. Join our community of top experts. Showcase your expertise, connect with clients, and grow your career with SkillLink Pro."
        image={premiumImg}
        
      />
      <ProSteps />
      <Footer />
    </>
  );
};

export default BecomeProPage;
