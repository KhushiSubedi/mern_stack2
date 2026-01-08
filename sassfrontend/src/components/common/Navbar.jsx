import React  from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand" >FLYWITHUS</div>
     

      <div className="navbar-links">
        <a href="#home" className="navbar-link">Home</a>
        <a href="#services" className="navbar-link">Model</a>
        <a href="#services" className="navbar-link">Experience</a>
        <a href="#services" className="navbar-link">Where we Fly</a>
        <a href="#services" className="navbar-link">Loyalty</a>
        <a href="#services" className="navbar-link">Help</a>
        <button className="navbar-button">Book a Flight</button>
        <button className="navbar-button">Join</button>
      </div>
    </nav>
  );
}
export default Navbar;