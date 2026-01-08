import { useState, useEffect } from "react";
import Hero from "./components/sections/Hero.jsx";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
 <img src="aeroplanee.jpg"></img>
// Navbar Component


function App() {
  return (
   <div>
    <Navbar />
    <Hero/>
    <Footer/>
   </div>
  );
}

export default App;