import React, { useState } from 'react';
import './Leftbar.css';

const Leftbar = ({ open, applyFilters, closeLeftbar }) => {
  const [country, setCountry] = useState('');
  const [costMin, setCostMin] = useState('');
  const [costMax, setCostMax] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [rating, setRating] = useState('');
  const [restaurantId, setRestaurantId] = useState('');

  const handleApplyFilters = () => {
    const filters = {
      country,
      costMin,
      costMax,
      cuisine,
      rating,
      restaurantId,
    };
    applyFilters(filters);
  };

  return (
    <div className={`leftbar ${open ? 'open' : ''}`}>
      <div className="leftbar-content">
        <div className="leftbar-header">
          <h5>Filters</h5>
          <button className="leftbar-close" onClick={closeLeftbar}>
            &times;
          </button>
        </div>
        <div className="leftbar-section">
          <label htmlFor="country">Area</label>
          <input
            id="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="leftbar-section">
          <label htmlFor="costMin">Cost Min</label>
          <input
            id="costMin"
            type="number"
            value={costMin}
            onChange={(e) => setCostMin(e.target.value)}
          />
        </div>
        <div className="leftbar-section">
          <label htmlFor="costMax">Cost Max</label>
          <input
            id="costMax"
            type="number"
            value={costMax}
            onChange={(e) => setCostMax(e.target.value)}
          />
        </div>
        <div className="leftbar-section">
          <label htmlFor="cuisine">Cuisine</label>
          <input
            id="cuisine"
            type="text"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
        </div>
        <div className="leftbar-section">
          <label htmlFor="rating">Rating</label>
          <input
            id="rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="leftbar-section">
          <label htmlFor="restaurantId">Restaurant ID</label>
          <input
            id="restaurantId"
            type="text"
            value={restaurantId}
            onChange={(e) => setRestaurantId(e.target.value)}
          />
        </div>
        <div className="leftbar-section leftbar-apply">
          <button onClick={handleApplyFilters}>Apply Filters</button>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
