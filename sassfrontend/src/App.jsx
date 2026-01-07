import { useState, useEffect } from "react";
import "./App.css";
 <img src="aeroplanee.jpg"></img>
// Navbar Component
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

function App() {
  return (
    <div className="app-container">
      <Navbar />

     <h2 className="floating-heading">Our Packages</h2>
     <h3 className="image-text">   </h3>
      <div className="plans-container">
        {/* Basic Plan */}
        <div className="plan-card">
          <h3>Ticket to USA</h3>
          <p>7 days plan (Rs 1,40,000)</p>
          <p>Hotel Booking (Budget to Luxury) Airport pickup & drop, Internal transport (car rental, coach, train guidance), Domestic flights within the USA</p>
        </div>

        {/* Pro Plan */}
        <div className="plan-card">
          <h3>Ticket to Thailand</h3>
          <p>5 days plan(Rs 70,000)</p>
          <p>Thai cuisine tours & cooking classes, Night market visits , Thai massage & spa packages, Sunset cruises</p>
        </div>
      </div>
    </div>
  );
}

export default App;