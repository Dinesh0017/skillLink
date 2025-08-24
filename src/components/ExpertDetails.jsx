import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
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
const ExpertDetails = ({ expert }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex-1">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold">{expert.name}</h2>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Top Rated</span>
            <span className="flex">{renderStars(expert.stars)}</span>
          </div>
          <p className="text-sm text-gray-500">{expert.title}</p>

          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            <span className=" text-gray-500">
              {expert.stars}.0 ({expert.reviews}) reviews ·{" "}
              {expert.experience.length} years experiences
            </span>
          </div>
        </div>
        <img
          src={expert.img}
          alt="profile"
          className="w-16 h-16 rounded-full border"
        />
      </div>

      <div className="mt-4 text-gray-700 text-sm leading-relaxed">
        {expert.bio}
      </div>

      <h3 className="mt-6 font-semibold">Skills</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {expert.skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>

      <h3 className="mt-6 font-semibold">Experience</h3>
      <div className="mt-2 space-y-4">
        {expert.experience.map((exp, i) => (
          <div key={i}>
            <p className="font-medium">{exp.role}</p>
            <p className="text-sm text-gray-500">{exp.year}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-6 font-semibold">Education</h3>
      <p className="mt-2 font-medium">{expert.education}</p>

      <h3 className="mt-6 font-semibold">Contact</h3>
      <div className="grid grid-cols-2 gap-4 text-sm mt-2 text-gray-600">
        <div>
          <p className="font-medium">Email</p>
          <p>{expert.contact.email}</p>
        </div>
        <div>
          <p className="font-medium">Phone</p>
          <p>{expert.contact.phone}</p>
        </div>
        <div>
          <p className="font-medium">Location</p>
          <p>{expert.contact.location}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertDetails;
