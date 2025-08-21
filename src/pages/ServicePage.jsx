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
  "handyman": handymanServices,
  "personal-training": trainingServices,
  "graphic-design": designServices,
  "photography": photographyServices,
  "tutoring": tutoringServices,
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
      <div className="max-w-4xl mx-auto px-6 py-12 mt-10">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-4 text-gray-600">
          This is the details page for <strong>{title}</strong>.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
