import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './RestaurantDetails.css';

const RestaurantDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const restaurant = location.state;

  const goBack = () => {
    navigate(-1);
  };

  const openGoogleMaps = (latitude, longitude) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <div className="backgr">
    <div className='det'>
      <div className="restaurant-det">
        <div className="flex-start">
          <h1>{restaurant['Restaurant Name']}</h1>
          <div className='info'>
            <p><strong>City:</strong> {restaurant['City']}</p>
            <p><strong>Address:</strong> {restaurant['Address']}</p>
            <p><strong>Locality:</strong> {restaurant['Locality']}</p>
            <p><strong>Cuisines:</strong> {restaurant['Cuisines']}</p>
            <p><strong>Average Cost for two:</strong> {restaurant['Average Cost for two']}</p>
            <p><strong>Rating:</strong> {restaurant['Aggregate rating']} ({restaurant['Votes']} votes)</p>
            <p><strong>Currency:</strong> {restaurant['Currency']}</p>
          </div>
        </div>
        <div className="flex-end">
          <img src='https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZvb2R8ZW58MHx8MHx8fDA%3D' alt='Restaurant Name' className="restaurant-img" />
          <button className="locate-button" onClick={() => openGoogleMaps(restaurant['Latitude'], restaurant['Longitude'])}>
            Locate<span className="material-symbols-outlined">location_on</span>
          </button>
        </div>
      </div>
      <button onClick={goBack} className="back-button">Back</button>
    </div>
    </div>
  );
};

export default RestaurantDetails;
