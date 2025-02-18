import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Row,Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { getdoctordashboardapi } from '../services/allapi';
import base_url from '../services/baseurl';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




function Dashboard() {
  

 const[doctordata,setdoctordata]=useState({doctor:{},appointments:[]})

 useEffect(()=>{
  getdoctordashboard()
 

 },[])
 const nav=useNavigate()

 
 
 const getdoctordashboard=async()=>{
  const header={
    'content-Type':'application/json',
    'authorization':`Token ${sessionStorage.getItem('token')}`
  }
  const result=await getdoctordashboardapi(header)
  console.log(result)
  if(result.status==200){
    setdoctordata(result.data)
    
  }
 }
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
     
     
       
         
          <Row>
          <Col md={2}>
          <div className='docside' style={{height:"content-fit"}}>
          <img src={`${base_url}/uploads/${doctordata.doctor.image}`} alt="" className='img-fluid mt-4 ms-3' style={{height:"200px",width:"210px",borderRadius:"10px"}} />
          <div className='border shadow mt-2 p-3 ms-3' style={{height:"content-fit",width:"210px",borderRadius:"10px"}}>
              
              <p> {doctordata.doctor.bio}
              </p>
  
  </div>
  <div className='d-flex justify-content-center align-items-center' style={{height:"200px"}}>
    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
  </div>
            
           
            </div>
          
          
             
         
  
         </Col>
         <Col md={2}></Col>
         <Col md={6} className='mt-5'>
         {
 doctordata.appointments.length>0?
 <Table striped bordered hover>
        <thead>
          <tr className='text-center'>
            <th>ID</th>
            <th>Patient Name</th>
            <th>Appointment Date</th>
            <th>Time</th>
          </tr>
        </thead>
        {
          doctordata.appointments.map((item,index)=>(
            <tbody className='text-center'>
            <tr>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
            </tr>
            
          </tbody>

          ))
        }
       
      </Table>
      :
      <h1 className='text-center text-danger'>No Appoinment Available</h1>
         }
         
         </Col>
         <Col md={2}></Col>
         </Row>
        
      
        
       
     
     

    </>
  )
}

export default Dashboard
