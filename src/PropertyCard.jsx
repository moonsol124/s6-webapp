// src/components/PropertyCard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link here

function PropertyCard({ property }) {
  // Placeholder icon function (replace with actual icons if using a library)
  const renderIcon = (type) => {
    switch (type) {
      case 'bed': return '🛏️';
      case 'bath': return '🛁';
      case 'area': return '📐';
      case 'tag': return '🏷️';
      // Add other icons as needed (e.g., fireplace, view, ski)
      case 'fireplace': return '🔥';
      case 'view': return '🏞️';
      case 'ski': return '🎿';
      default: return '';
    }
  };

  // Helper to display a few key features or tags concisely
  const displayFeatures = () => {
    const maxFeatures = 2; // Show max 2 features besides bed/bath/area
    let displayedCount = 0;
    const featuresToShow = [];

    // Prioritize key features if available
    if (property.features) {
        if (property.features.some(f => f.toLowerCase().includes('ski-in'))) {
            featuresToShow.push(<li>{renderIcon('ski')} Ski Access</li>);
            displayedCount++;
        }
        if (displayedCount < maxFeatures && property.features.some(f => f.toLowerCase().includes('view'))) {
             featuresToShow.push(<li>{renderIcon('view')} View</li>);
             displayedCount++;
        }
        if (displayedCount < maxFeatures && property.features.some(f => f.toLowerCase().includes('fireplace'))) {
             featuresToShow.push(<li>{renderIcon('fireplace')} Fireplace</li>);
             displayedCount++;
        }
    }
    // Add primary tag if space permits and it's not redundant
    if (displayedCount < maxFeatures && property.tags && property.tags[0]) {
        featuresToShow.push(<li>{renderIcon('tag')} {property.tags[0]}</li>);
    }

    return featuresToShow;
  };


  return (
    <div className="property-card">
      {/* Use property.image, provide fallback */}
      <img
        src={property.image || 'https://via.placeholder.com/400x300?text=No+Image'}
        alt={property.name || 'Property Image'}
        className="property-image"
      />
      <div className="property-info">
        {/* Use property data, provide fallbacks */}
        <h3 className="property-title">{property.name || 'Unnamed Property'}</h3>
        <p className="property-location">{property.address || 'Address not available'}</p>
        {/* Display price if available */}
        {property.price && <p className="property-price">{property.price}</p>}
        <ul className="property-features">
          {/* Use property data */}
          {property.bedrooms != null && <li>{renderIcon('bed')} {property.bedrooms} Bed{property.bedrooms !== 1 ? 's' : ''}</li>}
          {property.bathrooms != null && <li>{renderIcon('bath')} {property.bathrooms} Bath{property.bathrooms !== 1 ? 's' : ''}</li>}
          {property.area != null && <li>{renderIcon('area')} {property.area} m²</li>}
          {/* Display calculated concise features */}
          {displayFeatures()}
        </ul>
        {/* Use Link for navigation to property details */}
        <Link to={`/properties/${property.id}`} className="cta-button-secondary property-cta">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;