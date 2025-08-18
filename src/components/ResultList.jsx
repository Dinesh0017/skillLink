import React from "react";
import ResultCard from "./ResultCard";

const ResultList = ({ services }) => {
  return (
    <div className="flex-1 p-4">
      <h2 className="text-xl font-semibold mb-4">Search Results</h2>
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
