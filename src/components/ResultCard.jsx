import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Heart, Share2 } from "lucide-react";

const ResultCard = ({ service }) => {
  return (
    <div className="rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 shadow-lg hover:shadow-lg transition lg:mr-22 lg:-ml-16">
      {/* Carousel*/}
      <div className="w-full md:w-1/3 relative order-1 md:order-2">
        <Carousel showThumbs={false} infiniteLoop autoPlay>
          {service.images.map((img, idx) => (
            <div key={idx}>
              <img
                src={img}
                alt={service.name}
                className="rounded-md object-cover h-40 w-full"
              />
            </div>
          ))}
        </Carousel>

        {/* ✅ Share & Favorite */}
        <div className="absolute -bottom-1 lg:-left-25 flex space-x-2 ">
          <button className="p-2 hover:bg-red-100 hover:text-red-600 transition cursor-pointer ">
            <Heart size={20} />
          </button>
          <button className="p-2 hover:bg-blue-100 hover:text-blue-600 transition cursor-pointer">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      {/* Service details (Below carousel on mobile, Left on desktop) */}
      <div className="flex-1 ml-3 leading-7 order-2 md:order-1">
        <h3 className="text-lg font-semibold">
          {service.name}
          <span className="text-sm text-gray-500"> - {service.category}</span>
        </h3>
        <p className="text-gray-600">{service.desc}</p>
        <p className="text-[#196C64]">Location: {service.location}</p>
        <p className="text-sm text-gray-500">
          {service.rating} ({service.reviews} reviews)
        </p>
        <button className="mt-2 px-4 py-1 font-semibold border border-[#196C64] text-[#196C64] rounded-md cursor-pointer">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
