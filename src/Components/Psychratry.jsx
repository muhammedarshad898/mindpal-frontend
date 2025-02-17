import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { getdoctorbyspc } from '../services/allapi';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import base_url from '../services/baseurl';


function Psychratry() {
  const [Psychatriays,setpsychatriys]=useState([])
  useEffect(()=>{
    getpsychatry()

  },[])
  const getpsychatry=async()=>{
    const result=await getdoctorbyspc("MBBS")
    console.log(result)
    if(result.status==200){
      setpsychatriys(result.data)
    }
    console.log(Psychatriays)
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
            <h1 className='text-center  mb-5'>Meet Our Doctors</h1>
            {
              Psychatriays.length>0?
              <div className='row justify-content-around mt-5'>
              {
                Psychatriays.map(item=>(
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
            <div className='row justify-content-center'>
              
            </div>
        </div>
      </div>
    </>
  )
}

export default Psychratry