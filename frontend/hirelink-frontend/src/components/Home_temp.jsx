import React, { useState } from "react";
import { FaComments, FaUser, FaTools, FaMapMarkerAlt, FaTimes, FaPaperPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../App.css";

const categories = [
  "Electrician", "Plumber", "Carpenter", "Painter", "Construction Labour",
  "Cleaner", "Mechanic", "AC Technician", "Welder", "Gardener",
  "Mason", "House Helper", "Security Guard", "Appliance Repair", "General Labour"
];

function Home() {
  const [location, setLocation] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chat
  const navigate = useNavigate(); 

  return (
    <div className="page">

      {/* 1. Header */}
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
          <button className="btn provider" onClick={() => navigate("/ServiceProviderLogin")}>
            <FaTools /> Join as Provider
          </button>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="hero">
        <div className="hero-card">
          <h1>Hire Trusted Services Near You</h1>
          <p> • Verified workers • Quick booking • Location based</p>

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
            <button className="btn primary" onClick={() => navigate("/ProvidersList")}>Find Services</button>
          </div>

          <div className="features">
            <span>✔ Verified Professionals</span>
            <span>✔ Fast Service Requests</span>
            <span>✔ Secure & Reliable</span>
            <span>✔ Local Hiring</span>
          </div>
        </div>
      </section>

      {/* 3. Advertisement Section */}
      <section className="advertisement">
        <div className="ad-card">
          <h3>Sponsored</h3>
          <p>Promote tools, materials, or services with HireLink</p>
        </div>
      </section>

      {/* 4. Categories Section */}
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

      {/* 5. Chatbot Icon Toggle */}
      <div 
        className={`chatbot-icon ${isChatOpen ? 'active' : ''}`} 
        onClick={() => setIsChatOpen(!isChatOpen)}
        title="Chat with HireLink Assistant"
      >
        {isChatOpen ? <FaTimes /> : <FaComments />}
      </div>

      {/* 6. Chat Window Popup */}
      {isChatOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <div>
              <h4>HireLink Assistant</h4>
              <span className="online-status">● Online</span>
            </div>
            <FaTimes className="close-icon" onClick={() => setIsChatOpen(false)} />
          </div>
          <div className="chat-body">
            <div className="message bot">
              Hello! How can I help you find a service today?
            </div>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Ask something..." autoFocus />
            <button className="send-btn">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}

      {/* 7. Footer */}
      <footer className="footer">
        © HireLink – A platform to connect service providers with users seeking reliable services.
      </footer>

    </div>
  );
}

export default Home;