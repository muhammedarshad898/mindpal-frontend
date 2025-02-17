import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import { getmyappointmentapi } from '../services/allapi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function MyAppointment() {
    const[myappo,setappo]=useState([])

    useEffect(()=>{
        getmyappo()


    },[])
    const nav=useNavigate()
    const getmyappo=async()=>{
        const header={
            'Content-Type':'application/json',
            'Authorization': `Token ${sessionStorage.getItem('token')}`
        }
        const result=await getmyappointmentapi(header)
        console.log(result)
        if(result.status==200){
            setappo(result.data)
        }
        

       
    }

    const handleLogout = () => {
      sessionStorage.removeItem('token'); 
      toast.info("Logged out successfully!"); 
      setTimeout(() => {
          nav('/auth', { replace: true }); 
      }, 500); 
  
      setTimeout(() => {
          window.location.reload(); 
      }, 1500); 
  };
  
  
  
  return (
   <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='d-flex justify-content-between'>
          
          <Navbar.Brand href="#" className='d-flex justify-content-center flex-row align-items-center'>  <i className="fa-regular fa-handshake fa-xl" style={{color: "#0f6ba3",}} />
          {' '}
            Mindpal </Navbar.Brand>
            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
           
        </Container>
       
      </Navbar>
     
        <div className='container mt-5'>
            {
                myappo.length>0?
                <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th>ID</th>
          <th>Patient Name</th>
          <th>Therappist Name</th>
          <th>Date of Appointment</th>
          <th>Time</th>
         
        </tr>
      </thead>
      {
        myappo.map((item,index)=>(
            <tbody>
            <tr className='text-center'>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.doctorid.username}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
             
            </tr>
            
          </tbody>
       

        ))
      }
     

           
     
    </Table>
    :<h1 className='text-center text-danger'>No Appointment Taken Yet!!</h1>
    
            }
       
        
    
   
   
       </div>
      
   

  

   </>
  )
}

export default MyAppointment