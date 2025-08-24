import React from "react";
import addFriend from "../assets/addFriend.png";
import list from "../assets/list.png";
import portfolio from "../assets/portfolioAlert.png";
import negotiation from "../assets/negotiation.png";
import listen from "../assets/listen.png";


const steps = [
  {
    icon: addFriend,
    title: "Sign Up & Create Your Profile",
  },
  {
    icon: list,
    title: "List Your Skills or Services",
  },
  {
    icon: portfolio,
    title: "Showcase Your Work",
  },
  {
    icon: negotiation,
    title: "Connect with Learners",
  },
  {
    icon: listen,
    title: "Get Rated & Grow",
  },
];

const BecomeSkillGiver = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-2xl font-semibold ml-6 mb-8">Become a skill Giver
</h2>
      {/* Steps Grid */}
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-cyan-100 p-8 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-16 h-16 mb-4 drop-shadow-md"
              />
              <p className="text-gray-800 font-medium">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BecomeSkillGiver;
