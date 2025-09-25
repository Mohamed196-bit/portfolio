// Import React and useState hook
import React, { useState } from "react";

// Define the Contact component
function Contact() {
  // State to hold form input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Update state whenever input fields change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert("Thank you! Your message has been recorded."); // Confirmation popup
    window.location.href = "/"; // Redirect to Home page
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Contact Me</h1>

      {/* Static contact information */}
      <p>Email: yourname@email.com</p>
      <p>Phone: (123)-456-7890</p>

      {/* Contact form to collect user input */}
      <form 
        onSubmit={handleSubmit} 
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        {/* Input fields */}
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          onChange={handleChange} 
          required 
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Contact Number" 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email Address" 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Message" 
          onChange={handleChange} 
          required 
        />

        {/* Submit button */}
        <button 
          type="submit" 
          style={{ marginTop: "10px", background: "#00796B", color: "white", padding: "10px", border: "none" }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

// Export the Contact component so it can be used in App.js
export default Contact;
