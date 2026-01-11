import React, { useState } from 'react';
import '../style/UserForgetPassword.css';

function UserForgetPassword() {
  const [identifier, setIdentifier] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    // Logic for password reset goes here
    alert(`Reset link sent to: ${identifier}`);
  };

  return (
    <div className="page-container">
      <div className="forgot-password-card">
        <h1 className="brand-name">Hire<span>Link</span></h1>
        <h2>Forgot Password?</h2>
        <p>Enter your details below to receive a password reset link.</p>
        
        <form onSubmit={handleReset}>
          <div className="input-group">
            <label htmlFor="identifier">Username or Email</label>
            <input 
              type="text" 
              id="identifier"
              placeholder="e.g. alex@example.com"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required 
            />
          </div>
          
          <button type="submit" className="reset-button">
            Reset Password
          </button>
        </form>
        
        <div className="footer-links">
          <a href="/login">Back to Login</a>
        </div>
      </div>
    </div>
  );
}

export default UserForgetPassword;