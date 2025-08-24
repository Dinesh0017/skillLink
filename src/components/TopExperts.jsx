import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { experts } from "../data/experts";

// Render stars
const renderStars = (rating) =>
  Array(5)
    .fill(0)
    .map((_, i) =>
      i < rating ? <FaStar key={i} className="text-yellow-400 mr-1" /> : <FaRegStar key={i} className="text-yellow-400 mr-1" />
    );

const TopExperts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 4;

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 < 0 ? experts.length - cardsPerPage : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev + 1 > experts.length - cardsPerPage ? 0 : prev + 1));

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Top Experts</h2>

        <div className="relative flex items-center">
          <button onClick={handlePrev} className="absolute -left-12 z-10 bg-white border rounded-full p-2 shadow-md hover:bg-gray-100">
            <FaChevronLeft size={20} />
          </button>

          <div className="overflow-hidden w-full">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`, width: `${(experts.length / cardsPerPage) * 100}%` }}
            >
              {experts.map((expert) => (
                <div key={expert.id} className="bg-green-800 text-white rounded-md p-6 shadow-lg flex flex-col w-[220px] flex-shrink-0">
                  <div className="flex-grow flex flex-col items-center">
                    <img src={expert.img} alt={expert.name} className="w-20 h-20 mb-4 rounded-full" />
                    <h3 className="font-semibold text-center">{expert.name}</h3>
                    <p className="text-xs mt-1 text-center">{expert.skills.join(", ")}</p>
                  </div>

                  <div className="flex justify-center mt-3">{renderStars(expert.stars)}</div>

                  <div className="mt-auto flex justify-center pt-4">
                    <Link to={`/profile/${expert.id}`} state={expert}>
                      <button className="px-4 py-1 bg-white font-semibold text-green-800 rounded-sm text-sm">View Profile</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={handleNext} className="absolute -right-12 z-10 bg-white border rounded-full p-2 shadow-md hover:bg-gray-100">
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopExperts;
