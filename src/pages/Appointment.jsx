
import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import Footer from '../Components/Footer';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import { getdoctorapi } from '../services/allapi';
import base_url from '../services/baseurl';
import { NavLink } from 'react-router-dom';
import Header from '../Components/Header';


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
    <Header />

    <div className='mp-appointment-hero'>
      <Container className="text-center">
        <h1>Hey, <span>{username}</span>... Proud of You</h1>
        <h1>You're Not Alone: Join Hands with Us for a Healthier Mind</h1>
        <div className='mt-3'>
          <Link className='btn btn-primary mp-hero-cta' to={'/all'}>Book your slot</Link>
        </div>
      </Container>
    </div>

<div className='mp-section'>
<div className='container'>
  <h1 className='text-center mb-5'>Top Ranked Professionals</h1>
  {
    doctors.length>0?
    <Row className='justify-content-center'>
      {
        doctors.slice(0,6).map(item=>(
          <Col xs={12} sm={6} md={4} className='d-flex justify-content-center mb-4' key={item._id}>
          <Card className="mp-doctor-card">
          <Card.Img variant="top" src={`${base_url}/uploads/${item.image}`} />
          <Card.Body>
            <Card.Title>{item.username}</Card.Title>
            <Card.Text>
             <h6>{item.qualification}</h6>

            </Card.Text>
            <Link className="btn btn-primary" to={`/booking/${item._id}`}>Book A Slot</Link>
          </Card.Body>
        </Card>
        </Col>

        ))
      }



  </Row>
  :



  <h2 className='text-center text-danger mt-3'>No professionals Available</h2>
  }


  <div className='d-flex justify-content-center'>
  <Link className='btn btn-primary' to={'/all'}>View More</Link>
  </div>

</div>
</div>
<Footer></Footer>
   </>
  )
}

export default Appointment