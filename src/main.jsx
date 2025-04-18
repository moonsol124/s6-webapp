import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom"; // Add Outlet and Link here
import Landing from './Landing.jsx'
import PropertyPage from './PropertiesPage'
import Service from './Service.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <header className="main-header">
        <div className="container header-container">
          <div className="logo"><Link to="/">MiCasaEsTuCasa</Link></div>
          <nav className="main-nav">
            <ul>
            <li><Link to="/Explore">Explore</Link></li>
            <li><Link to="/Property">Properties</Link></li>
            <li><Link to="/Service">Service</Link></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact" className="nav-contact-button">Contact</a></li>
            </ul>
          </nav>
          {/* Add a simple burger menu button for mobile later if needed */}
        </div>
      </header>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/Explore" element={<App />} />
                <Route path="/Property" element={<PropertyPage />} />
                <Route path="/Service" element={<Service />} />
            </Routes>
            <footer className="enhanced-footer"> {/* Changed class name for clarity */}
        <div className="container">
          <div className="footer-grid"> {/* Use Grid for layout */}

            {/* Column 1: Brand & About */}
            <div className="footer-column footer-brand-about">
              {/* Use Link for logo */}
              <Link to="/" className="footer-logo">AlpesImmo Prestige</Link>
              <p className="footer-about-text">
                Your trusted partner for premium real estate in the heart of the French Alps. We connect discerning clients with exceptional chalets and apartments.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/properties">Properties</Link></li>
                <li><Link to="/regions">Explore Regions</Link></li> {/* Example Link */}
                <li><Link to="/about">About Us</Link></li> {/* Example Link */}
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="footer-column">
              <h4 className="footer-heading">Our Services</h4>
              <ul className="footer-links">
                <li><Link to="/services#buying-service">Buying Assistance</Link></li> {/* Link to service section */}
                <li><Link to="/services#selling-service">Selling Properties</Link></li>
                <li><Link to="/services#rental-service">Seasonal Rentals</Link></li>
                <li><Link to="/services#management-service">Property Management</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact & Social */}
            <div className="footer-column">
              <h4 className="footer-heading">Get In Touch</h4>
              <address className="footer-contact">
                <p><i className="icon-location"></i> 123 Rue Principale, 74400 Chamonix, France</p> {/* Placeholder Icon */}
                <p><i className="icon-phone"></i> <a href="tel:+33479000000">+33 4 79 XX XX XX</a></p> {/* Placeholder Icon */}
                <p><i className="icon-email"></i> <a href="mailto:contact@alpesimmo-prestige.fr">contact@alpesimmo-prestige.fr</a></p> {/* Placeholder Icon */}
              </address>
              <div className="footer-social">
                <h5 className="footer-subheading">Follow Us</h5>
                 {/* Replace # with actual social media links */}
                <a href="#" aria-label="Facebook" className="social-icon icon-facebook"></a> {/* Placeholder Icon */}
                <a href="#" aria-label="Instagram" className="social-icon icon-instagram"></a> {/* Placeholder Icon */}
                <a href="#" aria-label="LinkedIn" className="social-icon icon-linkedin"></a> {/* Placeholder Icon */}
              </div>
            </div>

          </div> {/* End footer-grid */}

          {/* Bottom Bar: Copyright & Legal */}
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} AlpesImmo Prestige. All rights reserved.</p>
            <nav className="footer-legal-nav">
               <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link>
            </nav>
          </div>

        </div> {/* End container */}
      </footer>
        </BrowserRouter>
    </React.StrictMode>,
)
