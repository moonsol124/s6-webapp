import { useRef, useState } from 'react';
import { PhaserGame } from './game/PhaserGame'; // Make sure path is correct
import houses from './houses.json'; // Make sure path is correct

function App() {
  // State variables remain the same
  const [name, setName] = useState("Sample House");
  const [description, setDescription] = useState("A lovely sample property description to show wrapping.");
  const [address, setAddress] = useState("123 Sample Street, Sampleville");
  const [price, setPrice] = useState("555-123-4567");

  const [img, setImg] = useState("https://st2.depositphotos.com/1823785/8762/i/950/depositphotos_87621996-stock-photo-christmas-sign-snow-fir-tree.jpg"); // Using a placeholder
  // Phaser Ref remains the same
  const phaserRef = useRef();

  // Logic for finding house data remains the same
  const findHouse = (id) => {
    const matchedHouse = houses.find(house => house.id === id);
    if (matchedHouse) {
      setName(matchedHouse.name || '');
      setDescription(matchedHouse.description || 'Move around your character to explore the houses!');
      setAddress(matchedHouse.address || '');
      setPrice(matchedHouse.price || '');
      setImg(matchedHouse.image);
    } else {
      setName('');
      setDescription('Move around your character to explore the houses!');
      setAddress('');
      setPrice('');
      setImg('https://st2.depositphotos.com/1823785/8762/i/950/depositphotos_87621996-stock-photo-christmas-sign-snow-fir-tree.jpg');
    }
  };

  // Event handler for scene changes/object interaction remains the same
  const currentScene = (obj) => {
    findHouse(obj.name || obj.id || ''); // Adapt based on what obj contains
  };

  // --- UI Structure with CSS Classes ---
  return (
    // Main container
    <div id="app" className="app-container">

      {/* Left Panel: Phaser Game Placeholder */}
      <div className="phaser-panel">
        {/* The PhaserGame component will render the canvas here */}
        <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
        {/* Optional: Add overlays on top of the game */}
        {/* <div className="game-ui-overlay">Game UI</div> */}
      </div>

      {/* Right Panel: Property Information */}
      <div className="properties-panel">
        <h2 className="panel-heading">
        </h2>

        {/* Image Section */}
        <div className="image-section">
          <div className="image-wrapper">
            <img
              src={img}
              alt={name || 'Property image'}
              className="property-image"
            />
          </div>
        </div>

        {/* Text Info Sections Container */}
        <div className="info-section-container">

          {/* Name */}
          <div className="info-block">
            <p className="info-label">Name</p>
            <div className="info-value-container">
              {/* Display name or empty string to keep structure */}
              <p className="info-value-text">{name || ''}</p>
            </div>
          </div>

          {/* Description */}
          <div className="info-block">
            <p className="info-label">Description</p>
            {/* Add a modifier class for potentially taller content */}
            <div className="info-value-container info-value-container--description">
              <p className="info-value-text">{description || ''}</p>
            </div>
          </div>

          {/* Address */}
          <div className="info-block">
            <p className="info-label">Address</p>
            <div className="info-value-container">
              <p className="info-value-text">{address || ''}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="info-block">
            <p className="info-label">Price</p>
            <div className="info-value-container">
              <p className="info-value-text">{price || ''}$</p>
            </div>
          </div>

        </div> {/* End of info-section-container */}
      </div> {/* End of Right Panel */}
    </div> // End of Main Container
  );
}

export default App;