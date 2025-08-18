import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ResultCard = ({ service }) => {
  return (
    <div className=" rounded-lg p-4 flex flex-col md:flex-row items-center gap-4 shadow-lg hover:shadow-lg transition lg:mr-22 lg:-ml-16">
      {/* Service details */}
      <div className="flex-1 ml-3 leading-7">
        <h3 className="text-lg font-semibold">{service.name}</h3>
        <p className="text-gray-600">{service.desc}</p>
        <p className="text-green-800">Location: {service.location}</p>
        <p className="text-sm text-gray-500">
          {service.rating} ({service.reviews} reviews)
        </p>
        <button className="mt-2 px-4 py-1 font-semibold border border-[#196C64] text-[#196C64] rounded-md">
          View Profile
        </button>
      </div>
            {/* Carousel for images */}
      <div className="w-full md:w-1/3">
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
      </div>
    </div>
  );
};

export default ResultCard;
