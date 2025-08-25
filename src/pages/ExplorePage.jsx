import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SharedHero from "../components/SharedHero";
import ExploreCategories from "../components/ExploreCategories";
import ExploreOppImg from "../assets/ExploreOpportunities.png"

const ExplorePage = () => {
  return (
    <>
      <Navbar />
      <SharedHero
        title="Explore Opportunities"
        subtitle="Discover services, skills, and professionals across multiple categories. Connect with experts, compare offerings, read reviews, and find the perfect match for your needs—all in one place."

        image={ExploreOppImg}
      />
      <ExploreCategories />
      <Footer />
    </>
  );
};

export default ExplorePage;
