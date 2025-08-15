import React from "react";
import { FaSearch, FaComments, FaBan, FaChartLine, FaGift } from "react-icons/fa";
import premiumImg from "../assets/premium logo.png";

const PremiumSection = () => {
  return (
    <section className="py-12 px-6">
        <h2 className="text-2xl font-semibold mb-8 ml-54">Go Premium. Unlock Your Full Potential.
</h2>
      <div className="bg-gradient-to-br from-[#B7F8E3] to-[#9CE6C7]  max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full">

        {/* 1st Div: Title & Subtitle */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-green-900 tracking-tight flex items-baseline gap-2">
            SkillLink <span className="font-light text-green-800">Pro</span>
          </h2>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed max-w-3xl">
            Unlock the full power of <strong>SkillLink Pro</strong> — boost your profile visibility,
            connect instantly with clients, and access exclusive features designed to help you grow faster.
          </p>
        </div>

        {/* 2nd Div: Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-grow">
          
          {/* Row 1 */}
          <div className="bg-green-50 p-5 rounded-xl shadow-sm border border-green-100 flex flex-col">
            <FaSearch className="text-green-700 text-2xl mb-3" />
            <h3 className="font-semibold text-green-900">Priority Search Placement</h3>
            <p className="text-sm text-gray-600 mt-2">
              Be at the top of searches to get noticed first by clients and learners.
            </p>
          </div>

          <div className="bg-green-50 p-5 rounded-xl shadow-sm border border-green-100 flex flex-col">
            <FaComments className="text-green-700 text-2xl mb-3" />
            <h3 className="font-semibold text-green-900">Direct Chat with Clients</h3>
            <p className="text-sm text-gray-600 mt-2">
              Start instant, secure conversations to close deals faster.
            </p>
          </div>

          <div className="bg-green-50 p-5 rounded-xl shadow-sm border border-green-100 flex flex-col">
            <FaBan className="text-green-700 text-2xl mb-3" />
            <h3 className="font-semibold text-green-900">No Ads Experience</h3>
            <p className="text-sm text-gray-600 mt-2">
              Work distraction-free with our premium ad-free interface.
            </p>
          </div>

          {/* Row 2 */}
          <div className="bg-green-50 p-5 rounded-xl shadow-sm border border-green-100 flex flex-col">
            <FaChartLine className="text-green-700 text-2xl mb-3" />
            <h3 className="font-semibold text-green-900">Advanced Analytics</h3>
            <p className="text-sm text-gray-600 mt-2">
              Get detailed insights to track your growth and performance.
            </p>
          </div>

          <div className="bg-green-50 p-5 rounded-xl shadow-sm border border-green-100 flex flex-col">
            <FaGift className="text-green-700 text-2xl mb-3" />
            <h3 className="font-semibold text-green-900">Exclusive Projects & Offers</h3>
            <p className="text-sm text-gray-600 mt-2">
              Access special jobs and offers before anyone else.
            </p>
          </div>

          {/* Empty last cell */}
          <div></div>
        </div>

        {/* 3rd Div: Button & Logo */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <button
            className="bg-green-800 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow hover:bg-green-900 transition">
            Try Now
          </button>
          <img
            src={premiumImg}
            alt="Premium Logo"
            className="h-22 drop-shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default PremiumSection;
