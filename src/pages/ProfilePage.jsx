import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookingCard from "../components/BookingCard";
import ExpertDetails from "../components/ExpertDetails";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProfilePage = () => {
  const { state: expert } = useLocation();
  const navigate = useNavigate();

  if (!expert) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">Profile not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Go Back
        </button>
      </div>
    );
  }


  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ExpertDetails expert={expert} />
          </div>
          <div className="md:col-span-1 lg:max-w-xs">
            <BookingCard expert={expert} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
