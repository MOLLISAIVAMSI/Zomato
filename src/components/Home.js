import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from './Navbar';
import Carousel from './Carousel';
import Leftbar from './Leftbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const [leftbarVisible, setLeftbarVisible] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:5000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRestaurants(data);
        console.log('Initial restaurant data:', data); // Log the received JSON data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleLeftbar = () => {
    setLeftbarVisible(!leftbarVisible);
  };

  const applyFilters = async (filters) => {
    if (filters.restaurantId) {
      // If restaurantId is provided, fetch the restaurant by ID
      try {
        const response = await fetch(`http://127.0.0.1:5000/restaurant/${filters.restaurantId}`);
        const data = await response.json();
        if (data.error) {
          setRestaurants([]);
        } else {
          setRestaurants([data]);
        }
      } catch (error) {
        console.error('Error fetching restaurant by ID:', error);
      }
    } else {
      // Apply other filters
      try {
        const response = await fetch('http://127.0.0.1:5000/filter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(filters)
        });
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error('Error filtering data:', error);
      }
    }
  };

  const closeLeftbar = () => {
    setLeftbarVisible(false);
  };

  const handleRestaurantClick = (restaurant) => {
    navigate(`/restaurant/${restaurant['Restaurant ID']}`, { state: restaurant });
  };

  return (
    <div className="home-container">
      <CustomNavbar toggleLeftbar={toggleLeftbar} />
      <Leftbar open={leftbarVisible} applyFilters={applyFilters} closeLeftbar={closeLeftbar} />
      <div className="carousel-container">
        <Carousel />
      </div>
      <h2 style={{ padding: '3rem', fontSize: '48px', textAlign: 'center', fontWeight: 'bold' }}>Collections</h2>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-item" onClick={() => handleRestaurantClick(restaurant)}>
            <div className="restaurant-card">
              <img
                src='https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZvb2R8ZW58MHx8MHx8fDA%3D'
                alt='Restaurant'
                className="restaurant-image"
              />
              <h3>{restaurant['Restaurant Name']}</h3>
              <div className='restaurant-detail'>
                <div className='restaurant-info'>
                  <p>{restaurant['City']}</p>
                  <p>{restaurant['Cuisines']}</p>
                  <p>Avg cost: {restaurant['Average Cost for two']} ({restaurant['Currency']})</p>
                </div>
                <div className='restaurant-rating'>
                  <p>
                    <div style={{ backgroundColor: restaurant['Rating color'], display: 'inline-block', padding: '2px 10px', borderRadius: '5px', color: 'white' }}>
                      {restaurant['Aggregate rating']}★
                    </div>
                    ({restaurant['Votes']} votes)
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
