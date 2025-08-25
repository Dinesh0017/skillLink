import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SharedHero from "../components/SharedHero";
import BusinessFeatures from "../components/BusinessFeatures";
import ForBusinessImg from "../assets/ForBusinessImg.jpeg"

const BusinessesPage = () => {
  return (
    <>
      <Navbar />
      <SharedHero
        title="Solutions for Businesses"
        subtitle="Hire skilled professionals, manage teams, and scale your business effortlessly. Discover tailored solutions designed to meet your company's unique needs. "
        image={ForBusinessImg}
      />
      <BusinessFeatures />
      <Footer />
    </>
  );
};

export default BusinessesPage;
