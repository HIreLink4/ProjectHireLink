import React, { useState } from 'react';
import '../style/ServiceProvideLogin.css';

const ServiceProviderLogin = () => {
  const [formData, setFormData] = useState({
    providerName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    verificationCode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration Data:", formData);
    // Add your API call logic here
  };

  return (
    <div className="hl-full-screen-wrapper">
      <div className="hl-login-card">
        <header className="hl-header">
          <h1 style={{ color: '#fb923c' }}>Hire<span style={{ color: '#2563eb' }}>Link</span></h1>
          <p>Service Provider Portal</p>
        </header>

        <form className="hl-form" onSubmit={handleSubmit}>
          <div className="hl-input-group">
            <label>Provider/Business Name</label>
            <input 
              type="text" 
              name="providerName" 
              placeholder="Name" 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="hl-input-row">
            <div className="hl-input-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email" 
                placeholder="email@example.com" 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="hl-input-group">
              <label>Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="+91 00000 00000" 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          <div className="hl-verification-section">
            <label>Email Verification</label>
            <div className="hl-verify-inline">
              <input 
                type="text" 
                name="verificationCode" 
                placeholder="Enter 6-digit code" 
                onChange={handleChange} 
                required 
              />
              <button type="button" className="hl-btn-ghost">Send Code</button>
            </div>
          </div>

          <div className="hl-input-row">
            <div className="hl-input-group">
              <label>Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder="••••••••" 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="hl-input-group">
              <label>Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword" 
                placeholder="••••••••" 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
          <button type="submit" className="hl-btn-primary">Login as Provider</button>
          
          <footer className="hl-footer">
            <p>Doesn't have an account? <a href="/ProviderRegister">Register</a></p>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default ServiceProviderLogin;