import React from 'react';
// import { useParams } from 'react-router-dom'; // If using React Router to get ID
import './PropertyDetailPage.css'; // Create this CSS file
import './LandingPage.css'; // Reuse some styles

// --- Reusable Header & Footer ---
// import Header from './Header';
// import Footer from './Footer';

// --- Placeholder Data (Find the specific property based on ID) ---
// In a real app, fetch this data based on ID from URL params
const getPropertyById = (id) => {
  // Find property in the same dummy data used in PropertiesPage
  // Replace this with actual data fetching logic
  const allPropertiesData = [ /* Copy/paste the same data array here or import it */
      { id: 'prop1', title: 'Magnificent Ski-In/Ski-Out Chalet', location: 'Courchevel 1850', price: '€ 8,500,000', bedrooms: 6, bathrooms: 6, area: 450, image: '/images/chalet1.jpg', images: ['/images/chalet1.jpg', '/images/chalet1_int1.jpg', '/images/chalet1_int2.jpg', '/images/chalet1_view.jpg'], description: 'An exceptional chalet offering unparalleled luxury and direct access to the slopes of Courchevel 1850. Features include a private swimming pool, spa, cinema room, and stunning mountain views. Perfect for large families or corporate retreats.', features: ['Ski-in/Ski-out Access', 'Private Indoor Pool', 'Spa & Wellness Area', 'Home Cinema', 'Multiple Living Areas', 'Large Terraces', 'Garage Parking', 'Wine Cellar'] },
      { id: 'prop2', title: 'Contemporary Apartment with Mont Blanc Views', location: 'Chamonix Centre', price: '€ 1,200,000', bedrooms: 3, bathrooms: 2, area: 120, image: '/images/chalet2.jpg', images: ['/images/chalet2.jpg', '/images/chalet2_int1.jpg', '/images/chalet2_view.jpg'], description: 'Stunning modern apartment located in the vibrant heart of Chamonix. Floor-to-ceiling windows offer breathtaking panoramic views of Mont Blanc. High-end finishes and convenient access to shops, restaurants, and lifts.', features: ['Panoramic Mont Blanc Views', 'Central Location', 'Modern Design', 'High-Quality Finishes', 'Balcony', 'Underground Parking', 'Ski Locker'] },
      // ... include data for other properties, especially images array and description/features
       { id: 'prop3', title: 'Charming Traditional Chalet', location: 'Méribel Village', price: '€ 3,800,000', bedrooms: 5, bathrooms: 4, area: 280, image: '/images/chalet3.jpg', images: ['/images/chalet3.jpg', '/images/chalet3_int1.jpg', '/images/chalet3_living.jpg'], description: 'A beautiful, traditionally built chalet nestled in the charming Méribel Village. Offers a warm and inviting atmosphere with exposed beams, a large stone fireplace, and easy access to the Three Valleys ski area.', features: ['Traditional Alpine Charm', 'Large Stone Fireplace', 'Exposed Wooden Beams', 'Close to Village Centre', 'Easy Ski Area Access', 'Garden', 'Sauna'] },
  ];
  return allPropertiesData.find(prop => prop.id === id);
}

function PropertyDetailPage() {
  // --- Get Property ID (Example using a fixed ID for demo) ---
  // const { propertyId } = useParams(); // Use this with React Router
  const propertyId = 'prop1'; // Hardcoded ID for this example
  const property = getPropertyById(propertyId);

  if (!property) {
    return (
      <div className="property-detail-page">
        {/* <Header /> */}
         <header className="main-header"> {/* Or reuse header directly */}
             <div className="container header-container">
                 <div className="logo">AlpesImmo Prestige</div>
                   {/* ... (rest of header nav) ... */}
             </div>
         </header>
        <div className="container section text-center">
          <h2>Property Not Found</h2>
          <p>Sorry, the property you are looking for does not exist or is no longer available.</p>
          <a href="/properties" className="cta-button">Back to Properties</a>
        </div>
        {/* <Footer /> */}
        <footer className="main-footer"> {/* Or reuse footer directly */}
             <div className="container footer-content">
               <p>© {new Date().getFullYear()} AlpesImmo Prestige. All rights reserved.</p>
                {/* ... (rest of footer nav) ... */}
             </div>
        </footer>
      </div>
    );
  }

  // Assume property.images exists and has multiple image URLs
  const mainImage = property.images ? property.images[0] : property.image;
  const galleryImages = property.images ? property.images.slice(1) : [];

  return (
    <div className="property-detail-page">
       {/* <Header /> */}
       <header className="main-header"> {/* Or reuse header directly */}
           <div className="container header-container">
               <div className="logo">AlpesImmo Prestige</div>
               {/* ... (rest of header nav) ... */}
           </div>
       </header>

      {/* --- Property Title & Location Header --- */}
      <section className="detail-header-section">
        <div className="container">
          <h1 className="detail-title">{property.title}</h1>
          <p className="detail-location">{property.location}</p>
          <span className="detail-price">{property.price}</span>
        </div>
      </section>

      {/* --- Image Gallery --- */}
      <section className="detail-gallery-section section">
          <div className="container">
              <div className="gallery-main-image">
                  <img src={mainImage} alt={`${property.title} - Main View`} />
              </div>
              {galleryImages.length > 0 && (
                  <div className="gallery-thumbnails">
                      {galleryImages.map((imgUrl, index) => (
                          <div key={index} className="thumbnail-item">
                              <img src={imgUrl} alt={`${property.title} - View ${index + 1}`} />
                          </div>
                      ))}
                  </div>
              )}
          </div>
      </section>

      {/* --- Main Content Area (Details, Description, Map, Contact) --- */}
      <section className="detail-main-content section">
        <div className="container detail-grid">

          {/* Left Column: Description & Features */}
          <div className="detail-info-column">
            <div className="detail-description">
              <h2 className="detail-section-title">Description</h2>
              {/* Render description potentially with paragraphs */}
              {property.description.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
              ))}
            </div>

            {property.features && property.features.length > 0 && (
              <div className="detail-features">
                <h2 className="detail-section-title">Key Features</h2>
                <ul className="features-list">
                  {property.features.map((feature, index) => (
                    <li key={index}><i className="icon-checkmark"></i> {feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Key Stats, Map & Contact */}
          <div className="detail-sidebar-column">
            <div className="detail-key-stats card-style">
               <h3 className="sidebar-title">Property Overview</h3>
               <ul>
                   <li><i className="icon-bed"></i> <strong>Bedrooms:</strong> {property.bedrooms || 'N/A'}</li>
                   <li><i className="icon-bath"></i> <strong>Bathrooms:</strong> {property.bathrooms || 'N/A'}</li>
                   <li><i className="icon-area"></i> <strong>Living Area:</strong> {property.area ? `${property.area} m²` : 'N/A'}</li>
                   <li><i className="icon-location"></i> <strong>Location:</strong> {property.location}</li>
                   <li><i className="icon-price"></i> <strong>Price:</strong> {property.price}</li>
                   {/* Add other key stats */}
               </ul>
            </div>

            <div className="detail-map card-style">
               <h3 className="sidebar-title">Location Map</h3>
               {/* Placeholder for map integration (e.g., Google Maps iframe or Leaflet) */}
               <div className="map-placeholder">
                   <p>Map of {property.location} would be displayed here.</p>
                   {/* Example: <iframe src="google-maps-embed-url" width="100%" height="300" style={{ border:0 }} allowfullscreen="" loading="lazy"></iframe> */}
               </div>
            </div>

            <div className="detail-contact card-style">
              <h3 className="sidebar-title">Interested in this property?</h3>
              <p>Contact us for more information or to arrange a viewing.</p>
              {/* Simple contact button or a mini form */}
              <a href="mailto:contact@alpesimmo-prestige.fr?subject=Inquiry about Property ID: {property.id}" className="cta-button contact-property-button">
                Enquire Now
              </a>
               <p className="contact-phone">Or call us: +33 4 79 XX XX XX</p>
            </div>
          </div>

        </div>
      </section>

      {/* <Footer /> */}
       <footer className="main-footer"> {/* Or reuse footer directly */}
           <div className="container footer-content">
             <p>© {new Date().getFullYear()} AlpesImmo Prestige. All rights reserved.</p>
              {/* ... (rest of footer nav) ... */}
           </div>
       </footer>
    </div>
  );
}

export default PropertyDetailPage;