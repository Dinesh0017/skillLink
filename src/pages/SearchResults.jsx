import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterSection from "../components/FilterSection";
import ResultList from "../components/ResultList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
cleaningServices,
handymanServices,
trainingServices,
designServices,
photographyServices,
tutoringServices,
eventPlanningServices,
petCareServices
} from "../data/skills.js"


const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialService = queryParams.get("service") || "";

  const [filters, setFilters] = useState({ service: initialService });
  const [results, setResults] = useState([]);

  const handleApply = () => {
    const skill = filters.service?.toLowerCase() || "";
    let selected = [];

    if (skill.includes("clean")) selected = cleaningServices;
    else if (skill.includes("handy")) selected = handymanServices;
    else if (skill.includes("train")) selected = trainingServices;
    else if (skill.includes("design")) selected = designServices;
    else if (skill.includes("photo")) selected = photographyServices;
    else if (skill.includes("event")) selected = eventPlanningServices;
    else if (skill.includes("pet")) selected = petCareServices;
    else if (skill.includes("tutor") || skill.includes("tutoring"))
      selected = tutoringServices;
    else
      selected = [
        ...cleaningServices,
        ...tutoringServices,
        ...handymanServices,
        ...trainingServices,
        ...designServices,
        ...photographyServices,
        ...eventPlanningServices,
        ...petCareServices
      ];

    if (filters.location) {
      selected = selected.filter((s) =>
        s.location?.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    setResults(selected);
  };

  // run search when component first loads (from hero section)
  useEffect(() => {
    handleApply();
  }, [filters.service]);

  return (
    <>
    <Navbar />
    <div className="flex flex-col md:flex-row min-h-screen mt-20">
      <FilterSection
        filters={filters}
        setFilters={setFilters}
        handleApply={handleApply}
      />
      <ResultList services={results} filters={filters} />
    </div>
    <Footer />
    </>
  );
};

export default SearchResults;
