import React, { useState } from "react";
import FilterSection from "../components/FilterSection";
import ResultList from "../components/ResultList";
import {
  cleaningServices,
  plumbingServices,
  electricalServices,
  tutoringServices,
} from "../data/servicesData";

const SearchResults = () => {
  const [filters, setFilters] = useState({});
  const [results, setResults] = useState(cleaningServices);

  const handleApply = () => {
    const skill = filters.service?.toLowerCase() || "";

    if (skill.includes("clean")) setResults(cleaningServices);
    else if (skill.includes("plumb")) setResults(plumbingServices);
    else if (skill.includes("elect")) setResults(electricalServices);
    else if (skill.includes("tutor") || skill.includes("teach"))
      setResults(tutoringServices);
    else setResults([]);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <FilterSection
        filters={filters}
        setFilters={setFilters}
        handleApply={handleApply}
      />
      <ResultList services={results} />
    </div>
  );
};

export default SearchResults;
