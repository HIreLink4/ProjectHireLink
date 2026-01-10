import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Necessary for the router to work
import '../style/UserLogin.css'; // 2. Use double dots to go up to the src folder

const Login = () => {
  const navigate = useNavigate(); // 3. Hook must be inside the component
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Attempting login with:", credentials);
    // Logic for backend will go here later
  };

  return (
    <div className="full-screen-container">
      <div className="bg-accent-shape"></div>
      
      <div className="login-card">
        <div className="brand-header">
          {/* Use navigate("/") to go back home */}
          <h1 className="logo" onClick={() => navigate("/")} style={{cursor: 'pointer'}}>
            <span color="#fb923c">Hire</span><span style={{color: '#2563eb'}}>Link</span>
          </h1>
          <p className="tagline">The bridge to your next career move</p>
        </div>

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="input-control">
            <label>Username</label>
            <input 
              type="text" 
              name="username" 
              placeholder="e.g. recruit_pro" 
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-control">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="••••••••" 
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="btn-primary">Sign In</button>
        </form>

        <div className="hr-text"><span>or join with</span></div>

        <div className="social-container">
          <button className="btn-social google">Google</button>
          <button className="btn-social facebook">Facebook</button>
        </div>

        <footer className="card-footer">
          <span>Don't have an account?</span>
          <button className="btn-secondary" onClick={() => navigate("/Register")}>Register Now</button>
        </footer>
      </div>
    </div>
  );
};

export default Login;