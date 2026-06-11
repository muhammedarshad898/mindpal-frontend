import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'

function SimpleNav({ rightContent }) {
  return (
    <Navbar expand="lg" className="sticky-top">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={NavLink} to="/" className="mp-brand">
          <i className="fa-regular fa-handshake fa-xl" /> MindPal
        </Navbar.Brand>
        {rightContent && <div>{rightContent}</div>}
      </Container>
    </Navbar>
  )
}

export default SimpleNav
