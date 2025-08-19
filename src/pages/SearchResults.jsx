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
  const [results, setResults] = useState([]);

  const handleApply = () => {
    const skill = filters.service?.toLowerCase() || "";
    let selected = [];

    if (skill.includes("clean")) selected = cleaningServices;
    else if (skill.includes("plumb")) selected = plumbingServices;
    else if (skill.includes("elect")) selected = electricalServices;
    else if (skill.includes("tutor") || skill.includes("teach"))
      selected = tutoringServices;
    else selected = [
      ...cleaningServices,
      ...plumbingServices,
      ...electricalServices,
      ...tutoringServices,
    ]; // show all if no service

    // 🔹 Apply location filter if user entered one
    if (filters.location) {
      selected = selected.filter((s) =>
        s.location?.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    setResults(selected);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <FilterSection
        filters={filters}
        setFilters={setFilters}
        handleApply={handleApply}
      />
      <ResultList services={results} filters={filters} />
    </div>
  );
};

export default SearchResults;
