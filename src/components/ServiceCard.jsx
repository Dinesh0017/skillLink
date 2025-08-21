import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
      {service.images && service.images.length > 0 && (
        <img
          src={service.images[0]}
          alt={service.name}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
      )}
      <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
      <p className="text-gray-600 mb-4">{service.desc}</p>
      <p className="text-gray-500 text-sm mb-2">
        <strong>Location:</strong> {service.location} | <strong>Price:</strong> {service.priceRange}
      </p>
      <p className="text-yellow-500 font-medium">
        ⭐ {service.rating} ({service.reviews} reviews)
      </p>
    </div>
  );
};

export default ServiceCard;
