// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// function Header() {
//   return (
//    <>
//    <Navbar data-bs-theme="light" style={{backgroundColor:""}} className='navbar'>
   
//         <Container>
        
           
//             <Navbar.Brand href="#home" className='text-primary'id='log'>
//           <i className="fa-regular fa-handshake fa-xl" style={{color: "#0f6ba3",}} />
//           {' '}
//             Mindpal 
//             </Navbar.Brand>

          
//           < Nav className="ms-auto">
//             <Nav.Link href="#home" className='text-dark'>About Us</Nav.Link>
//             <Nav.Link href="#features" className='text-dark'> Test</Nav.Link>
//             <Nav.Link href="#pricing" className='text-dark'>Appointment</Nav.Link>
//             <Nav.Link href="#pricing" className='text-dark'>Advice</Nav.Link>
//             <Nav.Link href="#pricing" className='text-dark'>Posts</Nav.Link>
//           </Nav>

            
            
         
         
           
         
//         </Container>
       
//       </Navbar>
//    </>
//   )
// }

// export default Header
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar expand="lg" data-bs-theme="light" style={{ backgroundColor: "" }} className='navbar'>
        <Container>
          
          <Navbar.Brand href="#home" className='text-primary' id='log'>
            <i className="fa-regular fa-handshake fa-xl" style={{ color: "#0f6ba3" }} />{' '}
            Mindpal
          </Navbar.Brand>

        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

         
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              
              <Nav.Link href={sessionStorage.getItem('token')?'/test':'/auth'} className='text-dark'> Assessment</Nav.Link>
              <Nav.Link href={sessionStorage.getItem('token')?'/appointment':'/auth'} className='text-dark'>Appointment</Nav.Link>
              <Nav.Link href={sessionStorage.getItem('token')?'/advice':'/auth'} className='text-dark'>Advice</Nav.Link>
              <Nav.Link href={sessionStorage.getItem('token')?'/post':'/auth'} className='text-dark'>Posts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
