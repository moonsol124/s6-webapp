import React, { useState, useEffect, useMemo } from 'react'; // Import useMemo
import { Link } from 'react-router-dom';

// --- Import the Supabase client ---
import { supabase } from './supabaseClient'; // Adjust the path if needed

// --- Reusable Property Card (No changes needed) ---
function PropertyCard({ property }) {
  const renderIcon = (type) => {
    switch (type) {
      case 'bed': return '🛏️';
      case 'bath': return '🛁';
      case 'area': return '📐';
      case 'tag': return '🏷️';
      default: return '';
    }
  };

  return (
    <div className="property-card">
      <img src={property.image || 'https://via.placeholder.com/400x300?text=No+Image'} alt={property.name || 'Property Image'} className="property-image" />
      <div className="property-info">
        <h3 className="property-title">{property.name || 'Unnamed Property'}</h3>
        <p className="property-location">{property.address || 'Address not available'}</p>
        <p className="property-price">{property.price || 'Price not available'}</p>
        <ul className="property-features">
          {property.bedrooms != null && <li>{renderIcon('bed')} {property.bedrooms} Bed{property.bedrooms !== 1 ? 's' : ''}</li>}
          {property.bathrooms != null && <li>{renderIcon('bath')} {property.bathrooms} Bath{property.bathrooms !== 1 ? 's' : ''}</li>}
          {property.area != null && <li>{renderIcon('area')} {property.area} m²</li>}
          {property.tags && property.tags[0] && <li>{renderIcon('tag')} {property.tags[0]}</li>}
        </ul>
        <Link to={`/properties/${property.id}`} className="cta-button-secondary property-cta">
          View Details
        </Link>
      </div>
    </div>
  );
}


function PropertiesPage() {
  // State for all properties fetched
  const [allProperties, setAllProperties] = useState([]);
  // State for filtered properties (before pagination)
  const [filteredProperties, setFilteredProperties] = useState([]);
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedBeds, setSelectedBeds] = useState('');
  // Loading and Error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Display 9 items per page

  // --- Fetch data from Supabase on component mount ---
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      setError(null);
      setCurrentPage(1); // Reset page number on new fetch

      const { data, error: dbError } = await supabase
        .from('properties')
        .select('*');

      if (dbError) {
        console.error('Error fetching properties:', dbError);
        setError('Failed to load properties. Please try again later.');
        setAllProperties([]);
        setFilteredProperties([]);
      } else if (data) {
        setAllProperties(data);
        setFilteredProperties(data); // Apply filters will run after this state updates
      } else {
         setAllProperties([]);
         setFilteredProperties([]);
      }
      setLoading(false);
    };

    fetchProperties();
  }, []); // Runs only once on mount

  // --- Apply Filters (Client-side) ---
  useEffect(() => {
    // Don't filter if initial data hasn't loaded yet
    if (loading) return;

    let results = allProperties;
    const lowerSearchTerm = searchTerm.toLowerCase().trim();

    // Apply search term filter
    if (lowerSearchTerm) {
      results = results.filter(prop =>
        (prop.name && prop.name.toLowerCase().includes(lowerSearchTerm)) ||
        (prop.address && prop.address.toLowerCase().includes(lowerSearchTerm)) ||
        (prop.description && prop.description.toLowerCase().includes(lowerSearchTerm)) ||
        (prop.tags && prop.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm))) ||
        (prop.features && prop.features.some(feat => feat.toLowerCase().includes(lowerSearchTerm)))
      );
    }

    // Apply type filter
    if (selectedType) {
      results = results.filter(prop =>
        prop.tags && prop.tags.some(tag => tag.toLowerCase() === selectedType.toLowerCase())
      );
    }

    // Apply beds filter
    if (selectedBeds) {
      const minBeds = parseInt(selectedBeds, 10);
      results = results.filter(prop => prop.bedrooms != null && prop.bedrooms >= minBeds);
    }

    setFilteredProperties(results);
    setCurrentPage(1); // Reset to page 1 whenever filters change

  }, [searchTerm, selectedType, selectedBeds, allProperties, loading]); // Re-run when filters or base data changes


  // --- Calculate Pagination Values using useMemo ---
  const { currentItems, totalPages } = useMemo(() => {
    const totalItems = filteredProperties.length;
    const calculatedTotalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = filteredProperties.slice(startIndex, endIndex);

    return { currentItems: itemsToDisplay, totalPages: calculatedTotalPages };
  }, [filteredProperties, currentPage, itemsPerPage]); // Recalculate only when these change

  // --- Pagination Handlers ---
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Handle form submission (optional, as filters apply on change)
  const handleFilterSubmit = (event) => {
    event.preventDefault();
    // applyFilters logic is already handled by the useEffect hook
    // We could potentially trigger a scroll to top here if desired
  };


  return (
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
          <form className="filter-form" onSubmit={handleFilterSubmit}>
            {/* Input fields remain the same */}
            <input
              type="text"
              placeholder="Search name, location, features..."
              className="filter-input filter-search-term"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={loading}
            />
            <select
              className="filter-input filter-select"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              disabled={loading}
            >
              <option value="">Property Type</option>
              <option value="Chalet">Chalet</option>
              <option value="Apartment">Apartment</option>
              <option value="Farmhouse">Farmhouse</option>
              <option value="Studio">Studio</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Luxury">Luxury</option>
              <option value="Ski-in/Ski-out">Ski-in/Ski-out</option>
            </select>
            <select
              className="filter-input filter-select"
              value={selectedBeds}
              onChange={(e) => setSelectedBeds(e.target.value)}
              disabled={loading}
            >
              <option value="">Min. Bedrooms</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
              <option value="6">6+</option>
            </select>
            {/* No need for a separate submit button effect if filtering on change */}
            {/* <button type="submit" className="cta-button filter-submit" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button> */}
          </form>
        </div>
      </section>

      {/* --- Property List Section --- */}
      <section className="property-list-section section">
        <div className="container">
          {/* Loading State */}
          {loading && <p className="loading-message">Loading properties...</p>}

          {/* Error State */}
          {error && !loading && <p className="error-message">{error}</p>}

          {/* Display Properties or No Results Message */}
          {!loading && !error && (
            <>
              {/* Map over the items for the CURRENT PAGE */}
              {currentItems.length > 0 ? (
                <div className="property-grid">
                  {currentItems.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                // Check filteredProperties length to distinguish between no results for filter vs no data at all
                 <p className="no-results-message">
                   {allProperties.length > 0 ? "No properties found matching your criteria." : "No properties available at the moment."}
                 </p>
              )}

              {/* --- Pagination Controls --- */}
              {/* Only show pagination if there's more than one page */}
              {totalPages > 1 && (
                 <div className="pagination">
                   <button
                     className="pagination-button"
                     onClick={handlePrevPage}
                     disabled={currentPage === 1} // Disable if on the first page
                   >
                     « Prev
                   </button>

                   <span className="pagination-info">
                     Page {currentPage} of {totalPages}
                   </span>

                   <button
                     className="pagination-button"
                     onClick={handleNextPage}
                     disabled={currentPage === totalPages} // Disable if on the last page
                    >
                     Next »
                   </button>
                 </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default PropertiesPage;