// Import React core library
import React from "react";

// Import Link from React Router for navigation
import { Link } from "react-router-dom";

// Define the Home component
function Home() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      {/* Main welcome message */}
      <h1>Welcome to My Portfolio</h1>

      {/* Short introduction */}
      <p>
        Hello, I’m Mohamed — a passionate web developer dedicated to building
        clean, modern, and user-friendly applications.
      </p>

      {/* Inspirational mission statement */}
      <p>
        <em>“Code is not just instructions to a machine; it’s a language of possibility.”</em>
      </p>

      {/* Button linking to the About page */}
      <Link to="/about">
        <button
          style={{
            backgroundColor: "#00796B",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Learn More About Me
        </button>
      </Link>
    </div>
  );
}

// Export the Home component so it can be used in App.js
export default Home;
