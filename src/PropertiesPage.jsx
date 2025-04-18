import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

// --- Import the JSON data ---
// Vite/React can directly import JSON files
import propertiesData from './houses.json';

// --- Reusable Property Card (Updated for new data structure) ---
function PropertyCard({ property }) {
  // Use placeholder icons or import an icon library
  const renderIcon = (type) => <i className={`icon-${type}`}></i>;

  return (
    // Reuse existing style for the card container
    <div className="property-card">
        {/* Use the image URL from the data */}
        <img src={property.image} alt={property.name} className="property-image" />
        <div className="property-info">
            {/* Use 'name' property */}
            <h3 className="property-title">{property.name}</h3>
            {/* Use 'address' property */}
            <p className="property-location">{property.address}</p>
            <p className="property-price">{property.price}</p>
            <ul className="property-features">
            {property.bedrooms && <li>{renderIcon('bed')} {property.bedrooms} Bed{property.bedrooms > 1 ? 's' : ''}</li>}
            {property.bathrooms && <li>{renderIcon('bath')} {property.bathrooms} Bath{property.bathrooms > 1 ? 's' : ''}</li>}
            {property.area && <li>{renderIcon('area')} {property.area} m²</li>}
            {/* Optionally display a primary tag */}
            {property.tags && property.tags[0] && <li>{renderIcon('tag')} {property.tags[0]}</li>}
            </ul>
            {/* Use Link component for internal navigation */}
            <Link to={`/properties/${property.id}`} className="cta-button-secondary property-cta">
            View Details
            </Link>
      </div>
    </div>
  );
}


function PropertiesPage() {
  // State to hold the full list of properties from JSON
  const [allProperties, setAllProperties] = useState([]);
  // State for the properties currently displayed (after filtering)
  const [filteredProperties, setFilteredProperties] = useState([]);
  // State for the search term input
  const [searchTerm, setSearchTerm] = useState('');
  // State for selected property type (example filter)
  const [selectedType, setSelectedType] = useState('');
   // State for selected bedrooms (example filter)
  const [selectedBeds, setSelectedBeds] = useState('');

  // Load data from the imported JSON on component mount
  useEffect(() => {
    // Set both the full list and the initially displayed list
    setAllProperties(propertiesData);
    setFilteredProperties(propertiesData);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Combined filtering logic
  const applyFilters = () => {
      let results = allProperties;
      const lowerSearchTerm = searchTerm.toLowerCase();

      // Filter by search term (name, address, tags)
      if (lowerSearchTerm) {
          results = results.filter(prop =>
              prop.name.toLowerCase().includes(lowerSearchTerm) ||
              prop.address.toLowerCase().includes(lowerSearchTerm) ||
              (prop.tags && prop.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm)))
          );
      }

      // Filter by property type (example: checking tags)
      if (selectedType) {
           results = results.filter(prop =>
              prop.tags && prop.tags.some(tag => tag.toLowerCase() === selectedType.toLowerCase())
              // Or if you add a specific 'type' field to your JSON:
              // prop.type.toLowerCase() === selectedType.toLowerCase()
          );
      }

       // Filter by minimum bedrooms
       if (selectedBeds) {
           const minBeds = parseInt(selectedBeds, 10);
           results = results.filter(prop => prop.bedrooms >= minBeds);
       }

      setFilteredProperties(results);
  };

  // Handle form submission to apply filters
  const handleFilterSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission page reload
    applyFilters();
  };

  // Optional: Apply filters immediately when dropdowns change
  useEffect(() => {
      // Re-apply filters whenever search term, type, or beds change
      // Debouncing could be added here for the search term for better performance
      applyFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, selectedType, selectedBeds, allProperties]); // Re-run when these change


  return (
    // Keep the overall page structure
    <div className="properties-page">
      {/* --- Page Title --- */}
      <section className="page-title-section">
        <div className="container">
          <h1 className="page-title">Find Your Perfect Alpine Property</h1>
          <p className="page-subtitle">Explore our exclusive listings across the French Alps</p>
        </div>
      </section>

      {/* --- Search & Filter Section --- */}
      <section className="search-filter-section section">
        <div className="container">
          {/* Use onSubmit on the form */}
          <form className="filter-form" onSubmit={handleFilterSubmit}>
            <input
              type="text"
              placeholder="Search by name, address, feature..."
              className="filter-input filter-search-term"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term state
            />
            <select
              className="filter-input filter-select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)} // Update type state
            >
              <option value="">Property Type</option>
              {/* These values should match potential tags or a 'type' field */}
              <option value="Chalet">Chalet</option>
              <option value="Apartment">Apartment</option>
              <option value="Farmhouse">Farmhouse</option>
              <option value="Studio">Studio</option>
              <option value="Penthouse">Penthouse</option>
            </select>
            <select
              className="filter-input filter-select"
              value={selectedBeds}
              onChange={(e) => setSelectedBeds(e.target.value)} // Update beds state
            >
              <option value="">Min. Bedrooms</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
              <option value="6">6+</option>
            </select>
            {/* Button type is submit by default within a form */}
            <button type="submit" className="cta-button filter-submit">Search</button>
          </form>
        </div>
      </section>

      {/* --- Property List Section --- */}
      <section className="property-list-section section">
        <div className="container">
          {/* Check if properties are loaded before rendering */}
          {filteredProperties.length > 0 ? (
            <div className="property-grid">
              {/* Map over the filteredProperties state */}
              {filteredProperties.map(property => (
                // Use the PropertyCard component
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            // Show message if no properties match filters or if data hasn't loaded
            // Could add a specific loading state later if needed
            <p className="no-results-message">
              {allProperties.length > 0 ? "No properties found matching your criteria." : "Loading properties..."}
            </p>
          )}

          {/* --- Pagination Placeholder --- */}
          {/* Implement actual pagination logic if needed */}
          {filteredProperties.length > 0 && (
            <div className="pagination">
              <button className="pagination-button" disabled>« Prev</button>
              <span>Page 1 of 1</span> {/* Needs logic */}
              <button className="pagination-button" disabled>Next »</button>
            </div>
          )}
        </div>
      </section>

      {/* --- Footer --- */}
      {/* Assuming Footer is handled by the Layout component */}
      {/* <footer className="main-footer"> ... </footer> */}
    </div>
  );
}

export default PropertiesPage;