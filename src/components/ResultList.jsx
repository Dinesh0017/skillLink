import React from "react";
import ResultCard from "./ResultCard";

const ResultList = ({ services }) => {
  return (
    <div className="flex-1 p-4">
      <h2 className="text-xl font-semibold mb-1 lg:-ml-16">Search Results</h2>
      <h4 className="text-gray-400 mb-4 text-sm md:text-base lg:text-lg font-medium lg:-ml-16">
        Showing results for
        <span className="text-[#196C64] font-semibold">
          {" "}
          "{services.service || "All Services"}"
        </span>
        {services.location && (
          <>
            {" "}
            in
            <span className="text-[#196C64] font-semibold">
              {" "}
              "{services.location || "All Locations"}"
            </span>
          </>
        )}
      </h4>

      <div className="space-y-4">
        {services.length > 0 ? (
          services.map((s) => <ResultCard key={s.id} service={s} />)
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default ResultList;
