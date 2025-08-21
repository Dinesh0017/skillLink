import React from "react";
import { FaStar } from "react-icons/fa6";
import { Heart, Share2 } from "lucide-react";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-green-100 shadow-xl rounded-2xl p-1 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center">
        {service.images && service.images.length > 0 && (
          <img
            src={service.images[0]}
            alt={service.name}
            className="w-full h-48 object-cover rounded-xl mb-4"
          />
        )}
      </div>

      <div className="mx-4 mb-2">
        <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
        <p className="text-gray-600 ">{service.desc}</p>
        <p className="text-gray-500 text-sm mb-2">
          <strong>Location:</strong> {service.location} |{" "}
          <strong>Price:</strong> {service.priceRange}
        </p>
        <div className="flex items-center">
          <FaStar className="text-yellow-400 mr-1" />
          <p className="text-yellow-500 font-medium">
            {service.rating} ({service.reviews} reviews)
          </p>
        </div>
        <div className="flex items-center">
          <div>
            <button className="mt-2 px-4 py-1 font-semibold border border-[#196C64] text-[#196C64] rounded-md cursor-pointer">
              View Profile
            </button>
          </div>
          <div className="ml-40">
            <button className="p-2  transition cursor-pointer">
              <Heart size={20} />
            </button>
            <button className="p-2  transition cursor-pointer">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
