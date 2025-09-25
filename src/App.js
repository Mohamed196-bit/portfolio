// Import React core library
import React from "react";

// Import routing components from React Router
import { Routes, Route } from "react-router-dom";

// Import shared Navbar component
import Navbar from "./components/Navbar";

// Import all the individual page components
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// Define the main App component
function App() {
  return (
    <>
      {/* Navigation bar shown on all pages */}
      <Navbar />

      {/* Page container holding the dynamic routes */}
      <div className="page-container">
        <Routes>
          {/* Route for Home page */}
          <Route path="/" element={<Home />} />

          {/* Route for About page */}
          <Route path="/about" element={<About />} />

          {/* Route for Projects page */}
          <Route path="/projects" element={<Projects />} />

          {/* Route for Services page */}
          <Route path="/services" element={<Services />} />

          {/* Route for Contact page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

// Export the App component so it can be rendered in index.js
export default App;
