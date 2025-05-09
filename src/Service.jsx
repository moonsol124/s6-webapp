import React from 'react';
import { Link } from 'react-router-dom'; // For internal links if needed

// Placeholder images (replace with relevant, high-quality images)
import buyingServiceImg from '../public/assets/images/chalet1.jpg';
import sellingServiceImg from '../public/assets/images/chalet2.jpg';
import rentalServiceImg from '../public/assets/images/chalet3.jpg';
import managementServiceImg from '../public/assets/images/chamonix.jpg';
import expertiseIcon from '../public/assets/images/expertise.png'; // Example SVG icon paths
import networkIcon from '../public/assets/images/networking.png';
import personalizedIcon from '../public/assets/images/personal.png';

function ServicesPage() {
  // Placeholder function for potential icon rendering
  const renderIcon = (type, customClass = '') => <i className={`icon-${type} ${customClass}`}></i>;

  return (
    <div className="services-page">

      {/* --- Page Header/Title Section --- */}
      <section className="page-title-section service-title-bg"> {/* Optional distinct bg */}
        <div className="container">
          <h1 className="page-title">Our Comprehensive Real Estate Services</h1>
          <p className="page-subtitle">Tailored solutions for buying, selling, renting, and managing properties in the French Alps</p>
        </div>
      </section>

      {/* --- Introduction --- */}
      <section className="section service-intro">
        <div className="container text-center">
          <p>
            At MiCasaEsTuCasa, we offer more than just property listings. We provide a full spectrum of expert real estate services designed to make your Alpine property journey seamless and successful. Our dedicated team combines deep local knowledge with international standards to deliver exceptional results, whether you're a first-time buyer, seasoned investor, or property owner.
          </p>
        </div>
      </section>

      {/* --- Detailed Service: Buying --- */}
      <section id="buying-service" className="section service-detail-section">
        <div className="container service-content-grid">
          <div className="service-text-column">
            <h2 className="service-detail-title">Property Acquisition & Buying Assistance</h2>
            <p>Finding your dream chalet or apartment in the Alps requires insight and expertise. We guide you through every step, from defining your search criteria to handing over the keys.</p>
            <ul className="service-feature-list">
              <li>{renderIcon('search', 'service-icon')} Personalized property search based on your lifestyle and investment goals.</li>
              <li>{renderIcon('network', 'service-icon')} Access to exclusive off-market listings through our extensive network.</li>
              <li>{renderIcon('visits', 'service-icon')} Organisation and accompaniment on property viewings.</li>
              <li>{renderIcon('negotiation', 'service-icon')} Expert negotiation to secure the best possible terms.</li>
              <li>{renderIcon('legal', 'service-icon')} Coordination with notaries, banks, and legal advisors.</li>
              <li>{renderIcon('handover', 'service-icon')} Seamless assistance through the entire purchase process to final handover.</li>
            </ul>
             <Link to="/contact?subject=Buying+Inquiry" className="cta-button-secondary service-cta">Enquire About Buying</Link>
          </div>
          <div className="service-image-column">
            <img src={buyingServiceImg} alt="Couple viewing an alpine property" />
          </div>
        </div>
      </section>

      {/* --- Detailed Service: Selling --- */}
      <section id="selling-service" className="section service-detail-section alt-bg"> {/* Alternating background */}
        <div className="container service-content-grid reverse-grid"> {/* Reverse column order */}
           <div className="service-image-column">
            <img src={sellingServiceImg} alt="Luxury chalet exterior prepared for sale" />
          </div>
          <div className="service-text-column">
            <h2 className="service-detail-title">Selling Your Alpine Property</h2>
            <p>Maximise your property's potential with our strategic sales approach. We combine targeted marketing with professional presentation to attract qualified buyers and achieve optimal results.</p>
             <ul className="service-feature-list">
              <li>{renderIcon('valuation', 'service-icon')} Accurate market valuation based on current data and local trends.</li>
              <li>{renderIcon('marketing', 'service-icon')} Professional photography, virtual tours, and high-impact marketing materials.</li>
              <li>{renderIcon('exposure', 'service-icon')} Targeted exposure across premium portals and our international client base.</li>
              <li>{renderIcon('showings', 'service-icon')} Professional handling of viewings and buyer inquiries.</li>
              <li>{renderIcon('reporting', 'service-icon')} Regular progress updates and transparent communication.</li>
              <li>{renderIcon('closing', 'service-icon')} Skilled negotiation and management of the sales process through to completion.</li>
            </ul>
             <Link to="/contact?subject=Selling+Inquiry" className="cta-button-secondary service-cta">Discuss Selling Your Property</Link>
          </div>
        </div>
      </section>

      {/* --- Detailed Service: Seasonal Rentals --- */}
      <section id="rental-service" className="section service-detail-section">
        <div className="container service-content-grid">
          <div className="service-text-column">
            <h2 className="service-detail-title">Exclusive Seasonal Rentals</h2>
            <p>Experience the magic of the Alps with our curated selection of high-end chalets and apartments available for seasonal rental. We ensure an exceptional holiday experience for discerning guests.</p>
            <ul className="service-feature-list">
              <li>{renderIcon('portfolio', 'service-icon')} Premium portfolio of inspected and approved rental properties.</li>
              <li>{renderIcon('booking', 'service-icon')} Secure and straightforward booking process.</li>
              <li>{renderIcon('concierge', 'service-icon')} Optional concierge services (ski passes, transfers, chefs, etc.).</li>
              <li>{renderIcon('welcome', 'service-icon')} Personalised meet & greet and property familiarisation.</li>
              <li>{renderIcon('support', 'service-icon')} Local support available throughout your stay.</li>
              <li>{renderIcon('owner-relations', 'service-icon')} Dedicated service for owners wishing to rent their property.</li>
            </ul>
            <Link to="/properties?type=rental" className="cta-button-secondary service-cta">View Rental Properties</Link> {/* Example Link */}
          </div>
          <div className="service-image-column">
            <img src={rentalServiceImg} alt="Cozy living room of a rental chalet with mountain view" />
          </div>
        </div>
      </section>

      {/* --- Detailed Service: Property Management --- */}
       <section id="management-service" className="section service-detail-section alt-bg">
        <div className="container service-content-grid reverse-grid">
           <div className="service-image-column">
            <img src={managementServiceImg} alt="Well-maintained alpine property exterior" />
          </div>
          <div className="service-text-column">
            <h2 className="service-detail-title">Comprehensive Property Management</h2>
            <p>Enjoy peace of mind knowing your valuable Alpine asset is expertly cared for. Our bespoke property management services cover everything from maintenance to administration.</p>
            <ul className="service-feature-list">
               <li>{renderIcon('inspections', 'service-icon')} Regular property inspections and security checks.</li>
               <li>{renderIcon('maintenance', 'service-icon')} Coordination of routine maintenance and emergency repairs.</li>
               <li>{renderIcon('housekeeping', 'service-icon')} Arrangement of cleaning, linen services, and pre-arrival preparations.</li>
               <li>{renderIcon('admin', 'service-icon')} Bill payments, administrative tasks, and keyholding.</li>
               <li>{renderIcon('rental-management', 'service-icon')} Full management solutions for rental properties, maximizing occupancy and returns.</li>
               <li>{renderIcon('reporting', 'service-icon')} Transparent financial reporting for owners.</li>
            </ul>
             <Link to="/contact?subject=Management+Inquiry" className="cta-button-secondary service-cta">Learn More About Management</Link>
          </div>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="section why-choose-us-section">
        <div className="container">
          <h2 className="section-title text-center">Why Partner with MiCasaEsTuCasa?</h2>
          <div className="why-choose-us-grid">
            <div className="why-choose-item">
              {/* Replace with actual SVG or icon font */}
              <img src={expertiseIcon} alt="Expertise Icon" className="why-choose-icon" />
              <h4>Unrivalled Local Expertise</h4>
              <p>Deep understanding of the Alpine market dynamics, regions, and hidden gems.</p>
            </div>
            <div className="why-choose-item">
              <img src={networkIcon} alt="Network Icon" className="why-choose-icon" />
              <h4>Extensive Network</h4>
              <p>Access to exclusive opportunities and connections with key local partners.</p>
            </div>
            <div className="why-choose-item">
              <img src={personalizedIcon} alt="Personalized Icon" className="why-choose-icon" />
              <h4>Personalised Approach</h4>
              <p>Bespoke service tailored to your unique needs and aspirations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final Call to Action --- */}
      <section className="section contact-section"> {/* Reuse contact section style */}
        <div className="container text-center">
          <h2 className="section-title">Let's Start Your Alpine Journey</h2>
          <p className="contact-text">
            Whether buying, selling, renting, or managing, our team is ready to assist. <br/> Contact us today for a confidential discussion about your property goals.
          </p>
          <Link to="/contact" className="cta-button contact-cta">Contact Our Experts</Link>
        </div>
      </section>

    </div>
  );
}

export default ServicesPage;