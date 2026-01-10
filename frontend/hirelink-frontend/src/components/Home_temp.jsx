import React, { useState } from "react";
import { FaComments, FaUser, FaTools, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.css";

const categories = [
  "Electrician",
  "Plumber",
  "Carpenter",
  "Painter",
  "Construction Labour",
  "Cleaner",
  "Mechanic",
  "AC Technician",
  "Welder",
  "Gardener",
  "Mason",
  "House Helper",
  "Security Guard",
  "Appliance Repair",
  "General Labour"
];

function Home() {
  const [location, setLocation] = useState("");
  const navigate = useNavigate(); 
  return (
    <div className="page">

      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="HireLink Logo" className="logo-img" />
          <h2 className="logo-text">
            <span className="hire">Hire</span>
            <span className="link">Link</span>
          </h2>
        </div>

        <div className="login-actions">
          <button className="btn outline" onClick={() => navigate("/login")}>
            <FaUser /> User Login
          </button>
          <button className="btn provider">
            <FaTools /> Join as Provider
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-card">
          <h1>Hire Trusted Services Near You</h1>
          <p>Verified workers • Quick booking • Location based</p>

          <div className="location-box">
            <FaMapMarkerAlt className="location-icon" />
            <input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="hero-buttons">
            <button className="btn primary">Find Services</button>
          </div>

          <div className="features">
            <span>✔ Verified Professionals</span>
            <span>✔ Fast Service Requests</span>
            <span>✔ Secure & Reliable</span>
            <span>✔ Local Hiring</span>
          </div>
        </div>
      </section>

      {/* Advertisement */}
      <section className="advertisement">
        <div className="ad-card">
          <h3>Sponsored</h3>
          <p>Promote tools, materials, or services with HireLink</p>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Services Available on HireLink</h2>
        <div className="category-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Chatbot Icon */}
      <div className="chatbot-icon" title="Chat with HireLink Assistant">
        <FaComments />
      </div>

      {/* Footer */}
      <footer className="footer">
        © HireLink – A platform to connect service providers with users seeking reliable services.
      </footer>

    </div>
  );
}

export default Home;