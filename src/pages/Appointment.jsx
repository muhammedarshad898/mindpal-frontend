
import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import Footer from '../Components/Footer';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import { getdoctorapi } from '../services/allapi';
import base_url from '../services/baseurl';


function Appointment() {
  const[username,setusername]=useState("")

  const [doctors,setdoctors]=useState([])
  useEffect(()=>{
    if(sessionStorage.getItem('uname')){
      setusername(sessionStorage.getItem('uname'))
    }
    getdoctors()

  },[])
  const getdoctors=async()=>{
    const result=await getdoctorapi()
    console.log(result)
    if(result.status==200){
      setdoctors(result.data)
    }
    console.log(doctors)

  }
  return (
   <>
    <Navbar expand="lg" data-bs-theme="light" className="navbar">
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand href="/" className="text-primary" id="log">
            <i className="fa-regular fa-handshake fa-xl" style={{ color: "#0f6ba3" }} />{' '}
            Mindpal
          </Navbar.Brand>

          {/* Navbar Toggler for Mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Collapsible Navbar Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="text-dark">Home</Nav.Link>
              <Nav.Link href="/psychologist" className="text-dark">Psychologists</Nav.Link>
              <Nav.Link href="/dr" className="text-dark">Psychiatry</Nav.Link>
              <Nav.Link href="/myappo" className="text-dark">My Appointments</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

 

 <div className='d-flex justify-content-center align-items-center appointment'>

  <div className='container'>
    <h1 className='text-dark'>Hey,<span className='text-light'>{username}</span>... Proud of You</h1>
    <h1 id='support'>You're Not Alone: Join Hands with Us for a Healthier Mind</h1>
    <div className='d-flex justify-content-center mt-3'>
    <Link className='btn' id='btn-slot' to={'/all'}>Book your slot</Link>
    </div>
  </div>

 


 </div>
<div className='container mt-5 mb-3'>
  <h1 className='text-center text-success mb-5'>Top Ranked Professionals</h1>
  {
    doctors.length>0?
    <div className='row justify-content-center mt-3 '>
      {
        doctors.slice(0,6).map(item=>(
          <Card style={{ width: '18rem' }} className='me-5 p-0 mb-3'>
          <Card.Img variant="top" src={`${base_url}/uploads/${item.image}`} style={{height:"300px"}}  />
          <Card.Body>
            <Card.Title>{item.username}</Card.Title>
            <Card.Text>
             <h6>{item.qualification}</h6>
             
            </Card.Text>
            <Link className="btn btn-success" to={`/booking/${item._id}`}>Book A Slot</Link>
          </Card.Body>
        </Card>

        ))
      }
    
 

  </div>
  :
  


  

  <h2 className='text-center text-danger mt-3'>No professionals Available</h2>
  }
  
  
  <div className='d-flex justify-content-center'>
  <Link className='btn btn-primary' to={'/all'}>View More</Link>
  </div>

</div>
<Footer></Footer>
   </>
  )
}

export default Appointment