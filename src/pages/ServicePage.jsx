import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

import {
  cleaningServices,
  handymanServices,
  trainingServices,
  designServices,
  photographyServices,
  tutoringServices,
  eventPlanningServices,
  petCareServices,
} from "../data/skills";

// Map slugs to their service arrays
const slugMap = {
  "home-cleaning": cleaningServices,
  handyman: handymanServices,
  "personal-training": trainingServices,
  "graphic-design": designServices,
  photography: photographyServices,
  tutoring: tutoringServices,
  "event-planning": eventPlanningServices,
  "pet-care": petCareServices,
};

const capitalizeWords = (str) =>
  str
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

const ServicePage = () => {
  const { slug } = useParams();
  const title = capitalizeWords(slug);

  // Get the relevant services array from the slug map
  const relevantServices = slugMap[slug] || [];

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12 mt-12 -mb-6">
        <h2 className="text-2xl font-semibold -mb-4 lg:-ml-32">{title}</h2>
        <p className="mt-4 text-gray-600 lg:-ml-32">
          This is the details page for <strong>{title}</strong>.
        </p>
      </div>

      <div className="max-w-7xl  mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {relevantServices.length > 0 ? (
          relevantServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default ServicePage;
