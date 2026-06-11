import React from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="mp-brand">
          <i className="fa-regular fa-handshake fa-xl" /> MindPal
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to={sessionStorage.getItem('token') ? "/test" : "/auth"} className="mp-nav-link">
              Assessment
            </Nav.Link>
            <Nav.Link as={NavLink} to={sessionStorage.getItem('token') ? "/appointment" : "/auth"} className="mp-nav-link">
              Appointment
            </Nav.Link>
            <Nav.Link as={NavLink} to={sessionStorage.getItem('token') ? "/advice" : "/auth"} className="mp-nav-link">
              Advice
            </Nav.Link>
            <Nav.Link as={NavLink} to={sessionStorage.getItem('token') ? "/post" : "/auth"} className="mp-nav-link">
              Posts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
