import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">📱 PhoneCo</div>
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/DoctorDashboard">DoctorDashboard</Link></li>
        <li><Link to="/plans">Plans</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
