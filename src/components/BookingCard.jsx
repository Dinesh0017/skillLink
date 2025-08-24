import React from "react";
import bookingImg from "../assets/booking.png";

const BookingCard = () => {
  return (
    <div className="bg-green-100 shadow-md rounded-xl p-6 flex-1">
      <img src={bookingImg} alt="Booking" className="rounded-lg mb-4 w-full object-cover" />
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Service</label>
          <select className="w-full mt-1 border rounded-lg p-2 text-sm">
            <option>Select Service</option>
            <option>Session 1</option>
            <option>Session 2</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Date</label>
          <input type="date" className="w-full mt-1 border rounded-lg p-2 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium">Time</label>
          <input type="time" className="w-full mt-1 border rounded-lg p-2 text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium">Note</label>
          <textarea placeholder="Add a Note" className="w-full mt-1 border rounded-lg p-2 text-sm"></textarea>
        </div>
        <button type="submit" className="w-full bg-[#196C64] text-white py-2 rounded-lg hover:bg-green-800 transition cursor-pointer">
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingCard;
