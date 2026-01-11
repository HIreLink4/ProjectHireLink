import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home_temp"; // Double check this filename
import Login from "./components/UserLogin";
import Register from "./components/UserRegister";
import ServiceProviderLogin from "./components/ServiceProviderLogin";
import UserForgetPassword from "./components/UserForgetPassword";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ServiceProviderLogin" element={<ServiceProviderLogin />} />
        <Route path="/UserForgetPassword" element={<UserForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;