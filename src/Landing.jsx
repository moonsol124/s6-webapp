import React from 'react';

import heroImage from '../public/assets/images/hero.jpg'; // Example path
import chalet1 from '../public/assets/images/chalet1.jpg';
import chalet2 from '../public/assets/images/chalet2.jpg';
import chalet3 from '../public/assets/images/chalet3.jpg';
import regionChamonix from '../public/assets/images/chamonix.jpg';
import regionCourchevel from '../public/assets/images/Courchevel.jpg';
import regionMeribel from '../public/assets/images/Meribel.jpg';

function LandingPage() {
  return (
    <div className="landing-page">
      {/* --- Hero Section --- */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Your Dream Alpine Retreat Awaits</h1>
          <p className="hero-subtitle">Exclusive Chalets and Apartments in the Heart of the French Alps Ski Resorts</p>
          <a href="#featured" className="cta-button hero-cta">Explore Properties</a>
        </div>
      </section>

      {/* --- Introduction / Value Proposition --- */}
      <section id="about" className="section intro-section">
        <div className="container intro-container">
          <div className="intro-text">
            <h2 className="section-title">Experience Alpine Living at Its Finest</h2>
            <p>
              Welcome to AlpesImmo Prestige, your trusted partner for premium real estate in the most sought-after ski destinations of the French Alps. With years of local expertise and a passion for the mountains, we specialize in connecting discerning buyers and renters with exceptional properties, from luxurious ski-in/ski-out chalets to modern, convenient apartments.
            </p>
            <p>
              Whether you seek a vibrant resort atmosphere or a tranquil mountain escape, we leverage our deep knowledge of the Rhône-Alpes region to find the perfect match for your lifestyle and investment goals.
            </p>
          </div>
           <div className="intro-image-placeholder">
               {/* You could place an image of the team or a beautiful interior shot here */}
               <img src={chalet1} alt="Luxury Alpine Interior" style={{width: '100%', height: 'auto', borderRadius: '8px'}}/>
           </div>
        </div>
      </section>

      {/* --- Featured Properties Section --- */}
      <section id="featured" className="section featured-properties-section">
        <div className="container">
          <h2 className="section-title text-center">Featured Properties</h2>
          <div className="property-grid">
            {/* Property Card 1 */}
            <div className="property-card">
              <img src={chalet1} alt="Luxury Chalet Courchevel" className="property-image" />
              <div className="property-info">
                <h3 className="property-title">Magnificent Ski-In/Ski-Out Chalet</h3>
                <p className="property-location">Courchevel 1850</p>
                <ul className="property-features">
                  <li><i className="icon-bed"></i> 6 Bedrooms</li>
                  <li><i className="icon-bath"></i> 6 Bathrooms</li>
                  <li><i className="icon-ski"></i> Direct Piste Access</li>
                  <li><i className="icon-area"></i> 450 m²</li>
                </ul>
                <a href="#" className="cta-button-secondary property-cta">View Details</a>
              </div>
            </div>
            {/* Property Card 2 */}
            <div className="property-card">
              <img src={chalet2} alt="Modern Apartment Chamonix" className="property-image" />
              <div className="property-info">
                <h3 className="property-title">Contemporary Apartment with Mont Blanc Views</h3>
                <p className="property-location">Chamonix Centre</p>
                <ul className="property-features">
                  <li><i className="icon-bed"></i> 3 Bedrooms</li>
                  <li><i className="icon-bath"></i> 2 Bathrooms</li>
                  <li><i className="icon-view"></i> Panoramic Views</li>
                  <li><i className="icon-area"></i> 120 m²</li>
                </ul>
                <a href="#" className="cta-button-secondary property-cta">View Details</a>
              </div>
            </div>
            {/* Property Card 3 */}
            <div className="property-card">
              <img src={chalet3} alt="Traditional Chalet Meribel" className="property-image" />
              <div className="property-info">
                <h3 className="property-title">Charming Traditional Chalet</h3>
                <p className="property-location">Méribel Village</p>
                 <ul className="property-features">
                  <li><i className="icon-bed"></i> 5 Bedrooms</li>
                  <li><i className="icon-bath"></i> 4 Bathrooms</li>
                  <li><i className="icon-fireplace"></i> Cozy Fireplace</li>
                  <li><i className="icon-area"></i> 280 m²</li>
                </ul>
                <a href="#" className="cta-button-secondary property-cta">View Details</a>
              </div>
            </div>
          </div>
           <div className="text-center" style={{ marginTop: '2rem' }}>
                <a href="#" className="cta-button">View All Properties</a>
            </div>
        </div>
      </section>

       {/* --- Regions Section --- */}
      <section id="regions" className="section regions-section">
        <div className="container">
          <h2 className="section-title text-center">Explore Our Premier Destinations</h2>
           <div className="region-grid">
               <div className="region-card">
                    <img src={regionChamonix} alt="Chamonix Mont Blanc" className="region-image"/>
                    <div className="region-info">
                        <h3>Chamonix</h3>
                        <p>Iconic mountaineering town with challenging slopes and breathtaking Mont Blanc views.</p>
                    </div>
               </div>
                <div className="region-card">
                    <img src={regionCourchevel} alt="Courchevel luxury resort" className="region-image"/>
                     <div className="region-info">
                        <h3>Courchevel</h3>
                        <p>World-renowned luxury resort, part of the vast Three Valleys ski area.</p>
                    </div>
               </div>
                <div className="region-card">
                    <img src={regionMeribel} alt="Meribel charming village" className="region-image"/>
                     <div className="region-info">
                        <h3>Méribel</h3>
                        <p>Charming village atmosphere at the heart of the Three Valleys, perfect for families.</p>
                    </div>
               </div>
           </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="section services-section">
        <div className="container">
          <h2 className="section-title text-center">Our Services</h2>
          <div className="service-grid">
            <div className="service-item">
              <i className="service-icon icon-buy"></i> {/* Placeholder icon */}
              <h3>Buying</h3>
              <p>Guidance through every step of purchasing your dream Alpine property.</p>
            </div>
            <div className="service-item">
              <i className="service-icon icon-sell"></i> {/* Placeholder icon */}
              <h3>Selling</h3>
              <p>Expert valuation, marketing, and negotiation to achieve the best price.</p>
            </div>
            <div className="service-item">
              <i className="service-icon icon-rent"></i> {/* Placeholder icon */}
              <h3>Seasonal Rentals</h3>
              <p>Curated selection of premium chalets and apartments for unforgettable holidays.</p>
            </div>
             <div className="service-item">
              <i className="service-icon icon-manage"></i> {/* Placeholder icon */}
              <h3>Property Management</h3>
              <p>Comprehensive management services for owners seeking peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Testimonials Section --- */}
       <section className="section testimonials-section">
           <div className="container">
                <h2 className="section-title text-center">What Our Clients Say</h2>
                <div className="testimonial-slider"> {/* Basic structure, not a functional slider */}
                     <blockquote className="testimonial">
                        <p>AlpesImmo Prestige found us the perfect ski-in/ski-out chalet in Val d Isère. Their local knowledge was invaluable. Highly recommended!</p>
                        <footer>- Sophie L., Paris</footer>
                    </blockquote>
                     <blockquote className="testimonial">
                        <p>Selling our apartment through them was seamless. Professional, efficient, and they secured a great offer quickly.</p>
                        <footer>- David R., London</footer>
                    </blockquote>
                </div>
           </div>
       </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="section contact-section">
        <div className="container text-center">
          <h2 className="section-title">Ready to Find Your Alpine Escape?</h2>
          <p className="contact-text">
            Contact our expert team today to discuss your requirements or schedule a viewing. <br/> Let us help you unlock the door to your perfect property in the French Alps.
          </p>
          <a href="mailto:contact@alpesimmo-prestige.fr" className="cta-button contact-cta">Get In Touch</a>
           <div className="contact-details">
               <p>Email: contact@alpesimmo-prestige.fr | Phone: +33 4 79 XX XX XX</p>
               {/* Add address if needed */}
           </div>
        </div>
      </section>

      {/* --- Footer --- */}

    </div>
  );
}

export default LandingPage;