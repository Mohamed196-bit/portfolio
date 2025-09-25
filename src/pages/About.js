// Import React core library
import React from "react";

// Import assets for the About page (photo + resume)
import myPhoto from "../assets/images/me.jpg";
import myResume from "../assets/pdf/resume.pdf";

// Define the About component
function About() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>About Me</h1>

      {/* Display legal name as required by the assignment */}
      <p><strong>Name:</strong> Mohamed Abdulkadir</p>
      
      {/* Display profile photo */}
      <img
        src={myPhoto}
        alt="Mohamed"
        style={{ width: "200px", borderRadius: "10px", margin: "20px 0" }}
      />

      {/* Short professional biography */}
      <p>
        I am a student and aspiring web developer with a focus on modern front-end 
        technologies and practical projects. My goal is to create solutions that 
        are not only functional but also intuitive and visually engaging.
      </p>

      {/* Link to open resume PDF in a new browser tab */}
      <a href={myResume} target="_blank" rel="noopener noreferrer">
        📄 View My Resume
      </a>
    </div>
  );
}

// Export the About component so it can be used in App.js
export default About;
