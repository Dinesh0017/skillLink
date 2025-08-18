import React from "react";


const FilterSection = ({ filters, setFilters, handleApply }) => {
  return (
    <div className=" w-full md:w-1/4 p-4 lg:mx-8 lg:ml-18">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      {/* Service */}
      <div className="mb-4">
        <label className="block text-sm font-medium lg:mb-2">Service</label>
        <select
          value={filters.service || ""}
          onChange={(e) =>
            setFilters({ ...filters, service: e.target.value })
          }
          className="w-60 border rounded-md px-2 py-1 "
        >
          <option value="">Select Service</option>
          <option value="cleaning">Cleaning</option>
          <option value="plumbing">Plumbing</option>
          <option value="electrical">Electrical</option>
          <option value="tutoring">Tutoring</option>
        </select>
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-sm font-medium lg:mb-2">Location</label>
        <select
          value={filters.location || ""}
          onChange={(e) =>
            setFilters({ ...filters, location: e.target.value })
          }
          className="w-60 border rounded-md px-2 py-1"
        >
          <option value="">Select Location</option>
          <option value="colombo">Colombo</option>
          <option value="kandy">Kandy</option>
          <option value="galle">Galle</option>
          <option value="jaffna">Jaffna</option>
        </select>
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="block text-sm font-medium lg:mb-2">Price</label>
        <select
          value={filters.price || ""}
          onChange={(e) =>
            setFilters({ ...filters, price: e.target.value })
          }
          className="w-60 border rounded-md px-2 py-1"
        >
          <option value="">Select Price Range</option>
          <option value="low">Below $50</option>
          <option value="medium">$50 - $100</option>
          <option value="high">Above $100</option>
        </select>
      </div>

      {/* Rating */}
      <div className="mb-4">
        <label className="block text-sm font-medium lg:mb-2">Rating</label>
        <select
          value={filters.rating || ""}
          onChange={(e) =>
            setFilters({ ...filters, rating: e.target.value })
          }
          className="w-60 border rounded-md px-2 py-1"
        >
          <option value="">Select Rating</option>
          <option value="1">1 ⭐</option>
          <option value="2">2 ⭐</option>
          <option value="3">3 ⭐</option>
          <option value="4">4 ⭐</option>
          <option value="5">5 ⭐</option>
        </select>
      </div>

      {/* Availability */}
      <div className="mb-8">
        <label className="block text-sm font-medium lg:mb-2">Availability</label>
        <select
          value={filters.availability || ""}
          onChange={(e) =>
            setFilters({ ...filters, availability: e.target.value })
          }
          className="w-60 border rounded-md px-2 py-1"
        >
          <option value="">Select Availability</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
          <option value="weekend">Weekend</option>
        </select>
      </div>

      {/* Apply Button */}
      <button
        onClick={handleApply}
        className="w-60 bg-green-700 text-white py-2 rounded-md hover:bg-green-800"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSection;
