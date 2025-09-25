// Import React core library
import React from "react";

// Import Link from React Router for navigation
import { Link } from "react-router-dom";

// Import custom Logo component (hexagon with MN)
import Logo from "./Logo";

// Define the Navbar component
function Navbar() {
  return (
    <nav style={styles.nav}>
      {/* Display custom hexagon logo */}
      <Logo />

      {/* Navigation links for each page */}
      <ul style={styles.navList}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About Me</Link></li>
        <li><Link to="/projects" style={styles.link}>Projects</Link></li>
        <li><Link to="/services" style={styles.link}>Services</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}

// Inline styles for Navbar layout and design
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#007acc",
    padding: "10px 20px",
  },
  navList: {
    display: "flex",
    listStyle: "none",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

// Export the Navbar component so it can be used in App.js
export default Navbar;
