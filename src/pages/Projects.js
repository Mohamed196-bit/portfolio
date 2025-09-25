// Import React core library
import React from "react";

// Import images for each project
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

// Define the Projects component
function Projects() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Projects</h1>

      {/* Project 1: Portfolio Website */}
      <div>
        <h3>Portfolio Website</h3>
        <img 
          src={project1} 
          alt="Project 1" 
          style={{ width: "300px", borderRadius: "8px" }} 
        />
        <p>A React-based portfolio website showcasing my skills and work.</p>
      </div>

      {/* Project 2: Task Manager */}
      <div>
        <h3>Task Manager</h3>
        <img 
          src={project2} 
          alt="Project 2" 
          style={{ width: "300px", borderRadius: "8px" }} 
        />
        <p>A task CRUD app with a simple user interface.</p>
      </div>

      {/* Project 3: Weather App */}
      <div>
        <h3>Weather App</h3>
        <img 
          src={project3} 
          alt="Project 3" 
          style={{ width: "300px", borderRadius: "8px" }} 
        />
        <p>An app that fetches weather data from an API.</p>
      </div>
    </div>
  );
}

// Export the Projects component so it can be used in App.js
export default Projects;
