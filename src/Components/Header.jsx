import React from 'react'
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";


function Header() {
  return (
    <>
    <Navbar expand="lg" data-bs-theme="light" className="navbar">
  <Container>
    <Navbar.Brand as={NavLink} to="/" className="text-primary" id="log">
      <i className="fa-regular fa-handshake fa-xl" style={{ color: "#0f6ba3" }} />{' '}
      Mindpal
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={NavLink} to={sessionStorage.getItem('token') ? "/test" : "/auth"} className="text-dark">
          Assessment
        </Nav.Link>
        <Nav.Link as={NavLink} to={sessionStorage.getItem('token') ? "/appointment" : "/auth"} className="text-dark">
          Appointment
        </Nav.Link>
        <Nav.Link as={NavLink} to={sessionStorage.getItem('token') ? "/advice" : "/auth"} className="text-dark">
          Advice
        </Nav.Link>
        <Nav.Link as={NavLink} to={sessionStorage.getItem('token') ? "/post" : "/auth"} className="text-dark">
          Posts
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
    </>
  )
}

export default Header