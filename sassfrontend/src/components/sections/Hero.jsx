import "./Hero.css";
const Hero = () => {
    return(
         <div className="app-container">
      

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
    )
}
export default Hero;