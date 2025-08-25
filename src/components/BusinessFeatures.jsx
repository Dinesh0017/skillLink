import React from "react";
import { Briefcase, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Briefcase className="w-10 h-10 text-indigo-600" />,
    title: "Hire Experts",
    desc: "Find skilled professionals for your company needs instantly.",
  },
  {
    icon: <Users className="w-10 h-10 text-indigo-600" />,
    title: "Team Collaboration",
    desc: "Manage projects with real-time collaboration tools.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-indigo-600" />,
    title: "Grow Faster",
    desc: "Scale your business with trusted talent on demand.",
  },
];

const BusinessFeatures = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8">Business Features</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-green-200 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFeatures;
