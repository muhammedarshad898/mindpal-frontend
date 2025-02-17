import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Admindashboard() {
  const nav=useNavigate()
  const handleLogout = () => {
        sessionStorage.removeItem('token');
        toast.info("Logged out successfully!");
        nav('/auth', { replace: true }); // Redirect immediately after logout
     };
     
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='d-flex justify-content-center'>
          
          <Navbar.Brand href="#" className='d-flex justify-content-center flex-row align-items-center'>  <i className="fa-regular fa-handshake fa-xl" style={{color: "#0f6ba3",}} />
          {' '}
            Mindpal </Navbar.Brand>
           
        </Container>
       
      </Navbar>
    <div className='d-flex justify-content-center align-items-center flex-column' style={{height:"100vh"}}>
      
      <div className='p-5 border shadow rounded d-flex justify-content-center align-items-center flex-column' style={{height:"50vh"}}>
      <h2 className='text-center mb-5 adminhd'>Admin Dashboard</h2>
        <div className=''>
        <Link className='btn btn-success mb-2 me-3 home' to={'/allpro'}>professionals</Link>

          
          
<Link className='btn btn-primary  mb-2 home' to={'/viewappo'}>Appointments</Link>

        </div>
        <div className='mt-3'>
       

          
<Link className='btn btn-secondary  mb-2 me-3 home' to={'/'}>Home</Link>
<button className='btn btn-danger  mb-2 home' onClick={handleLogout}>Logout</button>




        </div>
        
          
          
          
       
        
        
        
      </div>

    </div>
    
    </>
  )
}

export default Admindashboard