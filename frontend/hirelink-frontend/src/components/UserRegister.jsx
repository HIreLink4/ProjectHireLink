import React, { useState } from 'react';
import '../style/UserRegister.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
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
    console.log("HireLink Registration Data:", formData);
  };

  return (
    <div className="page-wrapper">
      <div className="registration-card">
        {/* Left Side: Brand Section */}
        <div className="brand-section">
          <div className="brand-content">
            <h1>HireLink</h1>
            <div className="accent-line"></div>
            <p>Hire Trusted Services Near You. </p>
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div className="form-section">
          <div style={{ maxWidth: "500px", width: "100%", margin: "0 auto" }}>
          <h2>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username</label>
              <input 
                type="text" 
                name="username" 
                placeholder="Enter username" 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder="email@hirelink.com" 
                onChange={handleChange} 
                required 
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="+91 00000 00000" 
                onChange={handleChange} 
                required 
              />
            </div>

               <div className="input-group">
               <label>Password</label>
               <input 
                 type="password" 
                 name="password" 
                 onChange={handleChange} 
                 required 
               />
             </div>
              
             <div className="input-group">
               <label>Confirm</label>
               <input 
                 type="password" 
                 name="confirmPassword" 
                 onChange={handleChange} 
                 required 
               />
             </div>
            

            <button type="submit" className="register-btn">
              Register
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;