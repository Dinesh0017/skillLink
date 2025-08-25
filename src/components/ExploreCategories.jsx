import React from "react";

import graphicDesign from "../assets/graphicDesign.jpg";
import personalTraining from "../assets/personalTraining.jpg";
import tutoring from "../assets/tutoring.jpg";
import electricalService from "../assets/ElectricalService.jpg";
import eventPlanning from "../assets/eventPlanning.jpg";
import petCare from "../assets/petCare.jpg";

const categories = [
  { name: "Design", img: graphicDesign },
  { name: "Fitness", img: personalTraining },
  { name: "Education", img: tutoring },
  { name: "Technology", img: electricalService },
  { name: "Events", img: eventPlanning },
  { name: "Pets", img: petCare },
];

const ExploreCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8">Explore Categories</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-green-100 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img src={cat.img} alt={cat.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
