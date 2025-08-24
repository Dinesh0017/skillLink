import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { experts } from "../data/experts";

// Render stars
const renderStars = (rating) =>
  Array(5)
    .fill(0)
    .map((_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-yellow-400 mr-1" />
      ) : (
        <FaRegStar key={i} className="text-yellow-400 mr-1" />
      )
    );

const TopExperts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);

  // Update cardsPerPage based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // mobile
        setCardsPerPage(1);
      } else {
        setCardsPerPage(4); // desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? experts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === experts.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-50 py-12 px-6 ml-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 ml-4">Top Experts</h2>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute z-10 bg-white border rounded-full p-2 shadow-md hover:bg-gray-100 left-0 sm:-left-12"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  currentIndex * (cardsPerPage === 1 ? 100 : 220 + 24)
                }px)`,
                width: `${
                  experts.length * (cardsPerPage === 1 ? 100 : 220 + 24)
                }px`,
              }}
            >
              {experts.map((expert) => (
                <div
                  key={expert.id}
                  className="bg-[#196C64] text-white rounded-md p-6 shadow-lg flex flex-col w-[220px] flex-shrink-0 sm:w-[220px]"
                >
                  <div className="flex-grow flex flex-col items-center">
                    <img
                      src={expert.img}
                      alt={expert.name}
                      className="w-20 h-20 mb-4 rounded-full"
                    />
                    <h3 className="font-semibold text-center">{expert.name}</h3>
                    <p className="text-xs mt-1 text-center">
                      {expert.skills.join(", ")}
                    </p>
                  </div>

                  <div className="flex justify-center mt-3">
                    {renderStars(expert.stars)}
                  </div>

                  <div className="mt-auto flex justify-center pt-4">
                    <Link to={`/profile/${expert.id}`} state={expert}>
                      <button className="px-4 py-1 bg-white font-semibold text-[#196C64] rounded-sm text-sm cursor-pointer">
                        View Profile
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute z-10 bg-white border rounded-full p-2 shadow-md hover:bg-gray-100 right-0 sm:-right-12"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopExperts;
