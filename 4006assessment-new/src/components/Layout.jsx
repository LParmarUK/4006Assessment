import logo from '../assets/stmarys-logo.png';
import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.remove('dark-mode', 'light-mode');
    document.body.classList.add(darkMode ? 'dark-mode' : 'light-mode');
  }, [darkMode]);

  return (
    <>
      <Navbar
        bg={darkMode ? 'dark' : 'light'}
        variant={darkMode ? 'dark' : 'light'}
        expand="lg"
        className="mb-4"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="St Mary's Logo"
              style={{ height: '50px', marginRight: '10px' }}
            />
            St Mary’s Health Hub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/news">News</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/conditions">Conditions</Nav.Link>
              <Nav.Link as={Link} to="/symptom-checker">Symptom Checker</Nav.Link>
              <Nav.Link as={Link} to="/nutrition-tracker">Nutrition Tracker</Nav.Link>
              <Nav.Link as={Link} to="/bmi">BMI</Nav.Link>
            </Nav>
            <Button
              variant={darkMode ? 'light' : 'primary'}
              onClick={() => setDarkMode(!darkMode)}
              className="mode-toggle-btn"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        {children}
      </Container>
    </>
  );
};

export default Layout;
