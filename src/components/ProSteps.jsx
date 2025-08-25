import React from "react";
import { UserPlus, FileText, Star } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-10 h-10 text-green-600" />,
    title: "Create Profile",
    desc: "Showcase your skills and expertise with a professional profile.",
  },
  {
    icon: <FileText className="w-10 h-10 text-green-600" />,
    title: "Apply for Projects",
    desc: "Browse and apply for jobs that match your expertise.",
  },
  {
    icon: <Star className="w-10 h-10 text-green-600" />,
    title: "Build Reputation",
    desc: "Deliver high-quality work and grow your ratings.",
  },
];

const ProSteps = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8">Become a Pro in 3 Steps</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-green-100 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProSteps;
