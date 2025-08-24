import React from "react";
import { Link } from "react-router-dom";
import homeCleaning from "../../public/assets/homeCleaning.jpg";
import handyman from "../../public/assets/handyman.jpg";
import personalTraining from "../../public/assets/personalTraining.jpg";
import graphicDesign from "../../public/assets/graphicDesign.jpg";
import photography from "../../public/assets/photography.jpg";
import tutoring from "../../public/assets/tutoring.jpg";
import eventPlanning from "../../public/assets/eventPlanning.jpg";
import petCare from "../../public/assets/petCare.jpg";

const services = [
  { name: "Home Cleaning", img: homeCleaning, slug: "home-cleaning" },
  { name: "Handyman", img: handyman, slug: "handyman" },
  { name: "Personal Training", img: personalTraining, slug: "personal-training" },
  { name: "Graphic Design", img: graphicDesign, slug: "graphic-design" },
  { name: "Photography", img: photography, slug: "photography" },
  { name: "Tutoring", img: tutoring, slug: "tutoring" },
  { name: "Event Planning", img: eventPlanning, slug: "event-planning" },
  { name: "Pet Care", img: petCare, slug: "pet-care" },
];

const PopularServices = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold mb-8">Popular Services</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Link key={index} to={`/services/${service.slug}`} className="text-center">
            <img
              src={service.img}
              alt={service.name}
              className="rounded-lg shadow-lg w-full h-40 object-cover hover:scale-105 transition-transform cursor-pointer"
            />
            <p className="mt-2 text-sm font-medium">{service.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularServices;
