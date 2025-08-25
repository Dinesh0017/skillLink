import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import ServicePage from "./pages/ServicePage";
import ProfilePage from "./pages/ProfilePage";
import BusinessesPage from "./pages/BusinessesPage";
import ExplorePage from "./pages/ExplorePage";
import BecomeProPage from "./pages/BecomeProPage";

function App() {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/businesses" element={<BusinessesPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/become-a-pro" element={<BecomeProPage />} />
      </Routes>

  );
}

export default App;
