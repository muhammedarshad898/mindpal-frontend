import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import Navbar from 'react-bootstrap/Navbar';


import { useState,useEffect } from 'react';
import { getdoctorbyspc } from '../services/allapi';
import base_url from '../services/baseurl';

function Psychologist() {
  const[Psychologists,setpsychologists]=useState([])
  useEffect((
  )=>{
    getpsychologists()
  },[])

  const getpsychologists=async()=>{
    const result=await getdoctorbyspc("psychologist")
    console.log(result)
    if(result.status==200){
      setpsychologists(result.data)
    }
    console.log(Psychologists)
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
          <h2 className='text-center mb-3'>Meet Our Psychologists</h2>
          {
            Psychologists.length>0?
            <div className='row justify-content-around mt-5'>
              {
                Psychologists.map(item=>(
                  <Card style={{ width: '18rem' }} className='p-0 mb-2'>
                  <Card.Img variant="top" src={`${base_url}/uploads/${item.image}`} className='img-fluid' style={{height:"250px"}} />
                  <Card.Body>
                    <Card.Title>{item.username}</Card.Title>
                    <Card.Text>
                     <h6 className=''>{item.qualification}</h6>
                    </Card.Text>
                    <Link className='btn btn-success' to={`/booking/${item._id}`}>Book slot</Link>
                  </Card.Body>
                </Card>
            

                ))
              }
         

          </div>
          :
          <h2 className='text-danger text-center'>No Content Available</h2>
          }
          
       
           
           
        </div>
      </div>

   </>
  )
}

export default Psychologist