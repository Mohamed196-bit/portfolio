// Import React core library
import React from "react";

// Import icons from react-icons (FontAwesome set)
import { FaLaptopCode, FaMobileAlt, FaCode } from "react-icons/fa";

// Define the Services component
function Services() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Services</h1>

      {/* Service 1: Web Development */}
      <div style={styles.service}>
        <FaLaptopCode style={styles.icon} />
        <div>
          <h3>Web Development</h3>
          <p>Responsive websites using React, HTML, CSS, and JavaScript.</p>
        </div>
      </div>

      {/* Service 2: Mobile Apps */}
      <div style={styles.service}>
        <FaMobileAlt style={styles.icon} />
        <div>
          <h3>Mobile Apps</h3>
          <p>Cross-platform mobile solutions using modern frameworks.</p>
        </div>
      </div>

      {/* Service 3: Programming Support */}
      <div style={styles.service}>
        <FaCode style={styles.icon} />
        <div>
          <h3>Programming Support</h3>
          <p>General coding help and tutoring in Java, Python, and JavaScript.</p>
        </div>
      </div>
    </div>
  );
}

// Inline styles object for consistent styling
const styles = {
  service: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  icon: {
    fontSize: "2rem",
    marginRight: "15px",
    color: "#00796B",
  },
};

// Export the Services component so it can be used in App.js
export default Services;
