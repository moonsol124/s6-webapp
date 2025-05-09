import React, { useState, useEffect } from 'react'; // Import hooks
import { Link } from 'react-router-dom'; // Import Link for navigation

// --- Import Supabase client ---
import { supabase } from './supabaseClient'; // Adjust path if needed

// --- Import the reusable PropertyCard component ---
import PropertyCard from './PropertyCard'; // Adjust path if needed

// Import static assets (keep these)
import heroImage from '../public/assets/images/hero.jpg';
// We might not need these specific chalet images if using fetched data
// import chalet1 from '../public/assets/images/chalet1.jpg';
// import chalet2 from '../public/assets/images/chalet2.jpg';
// import chalet3 from '../public/assets/images/chalet3.jpg';
import introPlaceholder from '../public/assets/images/chalet1.jpg'; // Reuse one for intro
import regionChamonix from '../public/assets/images/chamonix.jpg';
import regionCourchevel from '../public/assets/images/Courchevel.jpg';
import regionMeribel from '../public/assets/images/Meribel.jpg';

function LandingPage() {
  // --- State for featured properties, loading, and errors ---
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Fetch featured properties on component mount ---
  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      setLoading(true);
      setError(null);

      // Fetch only 3 properties from the 'properties' table
      // You might want to add .order() if you want specific ones (e.g., newest)
      const { data, error: dbError } = await supabase
        .from('properties')
        .select('*') // Select all columns
        .limit(3);    // Limit to 3 results

      if (dbError) {
        console.error('Error fetching featured properties:', dbError);
        setError('Could not load featured properties.');
        setFeaturedProperties([]);
      } else if (data) {
        setFeaturedProperties(data);
      } else {
        setFeaturedProperties([]); // Handle case where data is null
      }

      setLoading(false);
    };

    fetchFeaturedProperties();
  }, []); // Empty dependency array runs once on mount

  return (
    <div className="landing-page">
      {/* --- Hero Section (remains the same) --- */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Your Dream Alpine Retreat Awaits</h1>
          <p className="hero-subtitle">Exclusive Chalets and Apartments in the Heart of the French Alps Ski Resorts</p>
          {/* Use Link instead of anchor if navigating within SPA */}
          <Link to="/s6-webapp/Property" className="cta-button hero-cta">Explore Properties</Link>
        </div>
      </section>

      {/* --- Introduction / Value Proposition (remains mostly the same) --- */}
      <section id="about" className="section intro-section">
        <div className="container intro-container">
          <div className="intro-text">
            <h2 className="section-title">Experience Alpine Living at Its Finest</h2>
            <p>
              Welcome to MiCasaEsTuCasa, your trusted partner for premium real estate in the most sought-after ski destinations of the French Alps... {/* Rest of text */}
            </p>
            <p>
              Whether you seek a vibrant resort atmosphere or a tranquil mountain escape... {/* Rest of text */}
            </p>
          </div>
           <div className="intro-image-placeholder">
               <img src={introPlaceholder} alt="Luxury Alpine Interior" style={{width: '100%', height: 'auto', borderRadius: '8px'}}/>
           </div>
        </div>
      </section>

      {/* --- Featured Properties Section (Updated) --- */}
      <section id="featured" className="section featured-properties-section">
        <div className="container">
          <h2 className="section-title text-center">Featured Properties</h2>

          {/* --- Handle Loading State --- */}
          {loading && <p className="loading-message text-center">Loading featured properties...</p>}

          {/* --- Handle Error State --- */}
          {error && !loading && <p className="error-message text-center">{error}</p>}

          {/* --- Display Properties --- */}
          {!loading && !error && (
            <>
              {featuredProperties.length > 0 ? (
                <div className="property-grid">
                  {/* Map over the fetched featuredProperties state */}
                  {featuredProperties.map(property => (
                    // Use the reusable PropertyCard component
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <p className="no-results-message text-center">No featured properties available at the moment.</p>
              )}

              {/* Link to All Properties Page */}
              <div className="text-center" style={{ marginTop: '2rem' }}>
                  <Link to="/s6-webapp/Property" className="cta-button">View All Properties</Link>
              </div>
            </>
          )}
        </div>
      </section>

       {/* --- Regions Section (remains the same) --- */}
      <section id="regions" className="section regions-section">
         <div className="container">
            {/* ... content ... */}
            <h2 className="section-title text-center">Explore Our Premier Destinations</h2>
             <div className="region-grid">
                 {/* Region cards */}
                 <div className="region-card">
                      <img src={regionChamonix} alt="Chamonix Mont Blanc" className="region-image"/>
                      <div className="region-info"><h3>Chamonix</h3><p>...</p></div>
                 </div>
                  <div className="region-card">
                      <img src={regionCourchevel} alt="Courchevel luxury resort" className="region-image"/>
                      <div className="region-info"><h3>Courchevel</h3><p>...</p></div>
                 </div>
                  <div className="region-card">
                      <img src={regionMeribel} alt="Meribel charming village" className="region-image"/>
                      <div className="region-info"><h3>Méribel</h3><p>...</p></div>
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
                        <p>MiCasaEsTuCasa found us the perfect ski-in/ski-out chalet in Val d Isère. Their local knowledge was invaluable. Highly recommended!</p>
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
    </div>
  );
}

export default LandingPage;