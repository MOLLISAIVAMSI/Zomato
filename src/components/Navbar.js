import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const CustomNavbar = ({ toggleLeftbar }) => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg" className="navbar-custom">
      <Navbar.Toggle style={{ marginBottom: '10px' }} aria-controls="basic-navbar-nav" />
      <Navbar.Brand className="compname" href="#">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwugYjkStrKCv4hgND62XXlNMsVG4uXEmj9A&s" // replace with your logo URL
          width="100"
          height="70"
          className="d-inline-block align-top"
          alt="Logo"
          style={{marginLeft: '1rem'}}
        />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#" onClick={toggleLeftbar}>Filter</Nav.Link>
          <Nav.Link href="#profile">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
