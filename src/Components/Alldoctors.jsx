import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import { getdoctorapi } from '../services/allapi';
import base_url from '../services/baseurl';
import { Link } from 'react-router-dom';




function Alldoctors() {
  const [doctors,setdoctors]=useState([])
    useEffect(()=>{
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
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='d-flex justify-content-center'>
          
          <Navbar.Brand href="#" className='d-flex justify-content-center flex-row align-items-center'>  <i className="fa-regular fa-handshake fa-xl" style={{color: "#0f6ba3",}} />
          {' '}
            Mindpal </Navbar.Brand>
           
        </Container>
       
      </Navbar>
      <div className='d-flex justify-content-center mt-5'>
        <div className='w-75 border shadow p-5'>
            <h1 className='text-center  mb-5'>Meet Our Team</h1>
            {
    doctors.length>0?
    <div className='row justify-content-center mt-3 '>
      {
        doctors.map(item=>(
          <Card style={{ width: '18rem' }} className='me-5 p-0 mb-3'>
          <Card.Img variant="top" src={`${base_url}/uploads/${item.image}`} style={{height:"250px"}}  />
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
          
            
                
            </div>
           
           
            
        </div>
     

   </>
  )
}

export default Alldoctors