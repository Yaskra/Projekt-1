import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavBarStyles.css';

export const NavBarCustom = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Scroll = podświetlanie przycisków
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleClick = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Navbar.Brand href="#logo">
        <h1>Portfolio.</h1>
      </Navbar.Brand>
      <Container fluid>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => handleClick('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#o_mnie"
              className={activeLink === 'o_mnie' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => handleClick('o_mnie')}
            >
              O Mnie
            </Nav.Link>
            <Nav.Link
              href="#projekty"
              className={activeLink === 'projekty' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => handleClick('projekty')}
            >
              Projekty
            </Nav.Link>
            <Nav.Link
              href="#kontakt"
              className={activeLink === 'kontakt' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => handleClick('kontakt')}
            >
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
