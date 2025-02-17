
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useState,useEffect,useContext } from 'react';

import Card from 'react-bootstrap/Card';
import { deletedoctorapi, getdoctorapi } from '../services/allapi';
import base_url from '../services/baseurl';
import { toast } from 'react-toastify';
import Editdoctor from './Editdoctor';
import { responsecontext } from '../contextapi/Contextprovider';
function Allprofessionals() {
    const[pro,setpro]=useState([])
    const{response}=useContext(responsecontext)
    useEffect(()=>{
        getallprofessionals()

    },[response])

    const getallprofessionals=async()=>{
        const result=await getdoctorapi()
        console.log(result)
        if(result.status==200){
            setpro(result.data)
        }
    }
    const deletedoctor=async(id)=>{
      const header={
        'Content-Type':'application/json',
        'Authorization':`Token ${sessionStorage.getItem('token')}`
      }
      const result=await deletedoctorapi(id,header)
      console.log(result)
      if(result.status==200){
        toast.success("Content is permentantly deleted")
        getallprofessionals()
      }
      else{
        toast.error("Access Denied")
      }
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
      <h2 className='text-center mt-4'>All professionals</h2>
      <div className='d-flex justify-content-center mt-5'>
       
        <div className='border shadow w-75 p-5'>
           <Link className='btn btn-success my-3' to={'/adddoctor'}>Add Professionals</Link>
           {
            pro.length>0?
            <div className='row justify-content-between'>
                {
                    pro.map(item=>(
                        <Card style={{ width: '18rem' }} className='mb-3 p-0'>
                        <Card.Img variant="top" src={`${base_url}/uploads/${item.image}`} style={{height:"250px"}} />
                        <Card.Body>
                          <Card.Title>{item.username}</Card.Title>
                          <Card.Text>
                          <h6>{item.qualification}</h6>
                           
                          </Card.Text>
                          <div>
                       <button className='btn' onClick={()=>deletedoctor(item._id)}><i className="fa-solid fa-trash fa-xl" style={{color: "#991a46",}} /></button>   
                        <Editdoctor pro={item}></Editdoctor>
                          
                          </div>
                         
                        </Card.Body>
                      </Card>

                    ))
                }
           
            </div>
            :
            <h2 className='text-center text-danger'>No Content Available</h2>
           }
            
           
            
        </div>

      </div>
   </>
  )
}

export default Allprofessionals