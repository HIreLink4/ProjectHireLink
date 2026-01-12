import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/ProviderRegister.css';

function ProviderRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    aadhaar: '',
    category: 'Electrician',
    location: '',      // New Field
    serviceTime: '',   // New Field
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const existingProviders = JSON.parse(localStorage.getItem('hirelink_providers')) || [];

    const newProvider = {
      id: Date.now(),
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      category: formData.category,
      location: formData.location,       // Storing New Field
      serviceTime: formData.serviceTime, // Storing New Field
    };

    existingProviders.push(newProvider);
    localStorage.setItem('hirelink_providers', JSON.stringify(existingProviders));

    alert('Registration successful!');
    navigate('/'); // Navigate to the list page
  };

  return (
    <div className="fullscreen-wrapper">
      <div className="form-container">
        <header className="brand-header">
          <h1>Hire<span>Link</span></h1>
          <p>Join as a service provider</p>
        </header>

        <form className="service-form" onSubmit={handleSubmit}>
          {/* New Fields: Location and Service Time */}
          <div className="grid-row">
            <div className="input-field">
              <label>Work Location (City/Area)</label>
              <input type="text" name="location" placeholder="e.g. Downtown, NY" required onChange={handleChange} />
            </div>
            <div className="input-field">
              <label>Preferred Service Time</label>
              <input type="text" name="serviceTime" placeholder="e.g. 9 AM - 5 PM" required onChange={handleChange} />
            </div>
          </div>

          {/* ... existing Username and Email fields ... */}
          <div className="grid-row">
            <div className="input-field">
              <label>Username</label>
              <input type="text" name="username" placeholder="Enter username" required onChange={handleChange} />
            </div>
            <div className="input-field">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="email@hirelink.com" required onChange={handleChange} />
            </div>
          </div>

          {/* ... existing Phone and Category fields ... */}
          <div className="grid-row">
            <div className="input-field">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="+91 00000 00000" required onChange={handleChange} />
            </div>
            <div className="input-field">
              <label>Service Category</label>
              <select name="category" onChange={handleChange} className="category-select">
                <option value="Electrician">Electrician</option>
                <option value="Plumber">Plumber</option>
                <option value="Carpenter">Carpenter</option>
              </select>
            </div>
          </div>

          {/* ... existing Password fields ... */}
          <div className="grid-row">
            <div className="input-field">
              <label>Password</label>
              <input type="password" name="password" required onChange={handleChange} />
            </div>
            <div className="input-field">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" required onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="primary-btn">Create Provider Account</button>
        </form>
      </div>
    </div>
  );
}

export default ProviderRegister;