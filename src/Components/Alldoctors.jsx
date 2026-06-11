import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';
import { getdoctorapi } from '../services/allapi';
import base_url from '../services/baseurl';
import { Link } from 'react-router-dom';
import SimpleNav from './SimpleNav';




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
    <SimpleNav />
      <div className='mp-team-section'>
            <h1 className='text-center mb-5'>Meet Our Team</h1>
            {
    doctors.length>0?
    <Row className='justify-content-center'>
      {
        doctors.map(item=>(
          <Col xs="auto" className='mb-3' key={item._id}>
          <Card className='mp-doctor-card'>
          <Card.Img variant="top" src={`${base_url}/uploads/${item.image}`} />
          <Card.Body>
            <Card.Title>{item.username}</Card.Title>
            <Card.Text>
             <h6>{item.qualification}</h6>

            </Card.Text>
            <Link className="btn btn-success" to={`/booking/${item._id}`}>Book A Slot</Link>
          </Card.Body>
        </Card>
        </Col>

        ))
      }


  </Row>
  :
  <h2 className='text-center text-danger mt-3'>No professionals Available</h2>
  }



        </div>


   </>
  )
}

export default Alldoctors