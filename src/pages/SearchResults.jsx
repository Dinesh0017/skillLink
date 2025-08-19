import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterSection from "../components/FilterSection";
import ResultList from "../components/ResultList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  cleaningServices,
  plumbingServices,
  electricalServices,
  tutoringServices,
} from "../data/servicesData";

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
    else if (skill.includes("plumb")) selected = plumbingServices;
    else if (skill.includes("elect")) selected = electricalServices;
    else if (skill.includes("tutor") || skill.includes("teach"))
      selected = tutoringServices;
    else
      selected = [
        ...cleaningServices,
        ...plumbingServices,
        ...electricalServices,
        ...tutoringServices,
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
