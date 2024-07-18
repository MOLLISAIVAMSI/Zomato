import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import RestaurantDetails from '../components/RestaurantDetails';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route
          path="/zomato"
          element={
            <>
              <div className=""></div>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
