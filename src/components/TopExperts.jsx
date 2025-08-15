import React, { useState } from "react";
import { FaStar, FaRegStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";
import avatar5 from "../assets/avatar5.png";

// Expert data
const experts = [
  { name: "John Smith", skills: "Guitar Lessons, Piano Lessons, Photography", stars: 5, img: avatar1 },
  { name: "Ava Grace", skills: "Cooking, Baking", stars: 4, img: avatar2 },
  { name: "Emma Brown", skills: "Yoga, Meditation, Wellness Coaching", stars: 3, img: avatar3 },
  { name: "Liam Johnson", skills: "Digital Marketing, SEO", stars: 4, img: avatar4 },
  { name: "Sophia Wilson", skills: "Painting, Drawing, Art Therapy", stars: 5, img: avatar5 },
  { name: "Noah Carter", skills: "Fitness Training, Nutrition", stars: 4, img: avatar1 },
  { name: "Olivia Adams", skills: "Public Speaking, Coaching", stars: 5, img: avatar2 },
  { name: "James Lee", skills: "Web Development, App Design", stars: 3, img: avatar3 },
  { name: "Mia Scott", skills: "Interior Design, Home Styling", stars: 5, img: avatar4 },
  { name: "Ethan Walker", skills: "Video Editing, Cinematography", stars: 4, img: avatar5 },
];

// Render stars based on rating
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
  const cardsPerPage = 5;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? experts.length - cardsPerPage : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 > experts.length - cardsPerPage ? 0 : prev + 1));
  };
  
  return (
    <section className="bg-gray-50 py-12 px-6 relative ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold ml-6 mb-8">Top Experts</h2>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-12 z-10 bg-white border rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Cards container */}
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
                width: `${(experts.length / cardsPerPage) * 100}%`,
              }}
            >
              {experts.map((expert, index) => (
                <div
                  key={index}
                  className="bg-green-800 text-white rounded-sm p-6 shadow-lg flex flex-col w-[220px] flex-shrink-0"
                >
                  <div className="flex-grow flex flex-col items-center">
                    <img src={expert.img} alt={expert.name} className="w-20 h-20 mb-4 rounded-full" />
                    <h3 className="font-semibold text-center">{expert.name}</h3>
                    <p className="text-xs mt-1 text-center">{expert.skills}</p>
                  </div>

                  <div className="flex justify-center mt-3">{renderStars(expert.stars)}</div>

                  <div className="mt-auto flex justify-center pt-4">
                    <button className="px-4 py-1 bg-white font-semibold text-green-800 rounded-sm text-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-12 z-10 bg-white border rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopExperts;
