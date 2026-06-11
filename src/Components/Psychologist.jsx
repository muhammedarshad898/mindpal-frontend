import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState,useEffect } from 'react';
import { getdoctorbyspc } from '../services/allapi';
import base_url from '../services/baseurl';
import SimpleNav from './SimpleNav';

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
   <SimpleNav />
      <div className='mp-team-section'>
          <h2 className='text-center mb-3'>Meet Our Psychologists</h2>
          {
            Psychologists.length>0?
            <Row className='justify-content-center'>
              {
                Psychologists.map(item=>(
                  <Col xs="auto" className='mb-2' key={item._id}>
                  <Card className='mp-doctor-card'>
                  <Card.Img variant="top" src={`${base_url}/uploads/${item.image}`} className='img-fluid' />
                  <Card.Body>
                    <Card.Title>{item.username}</Card.Title>
                    <Card.Text>
                     <h6>{item.qualification}</h6>
                    </Card.Text>
                    <Link className='btn btn-success' to={`/booking/${item._id}`}>Book slot</Link>
                  </Card.Body>
                </Card>
                </Col>

                ))
              }


          </Row>
          :
          <h2 className='text-danger text-center'>No Content Available</h2>
          }




      </div>

   </>
  )
}

export default Psychologist