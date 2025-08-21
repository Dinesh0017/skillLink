import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import ServicePage from "./pages/ServicePage";

function App() {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>

  );
}

export default App;
