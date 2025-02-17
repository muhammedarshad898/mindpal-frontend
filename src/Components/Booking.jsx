import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Row,Col } from 'react-bootstrap';
import { useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { createPaymentApi, getdoctorbyid, takeappointmentapi } from '../services/allapi';
import base_url from '../services/baseurl';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Booking() {
  const{doctorid}=useParams()
  
  const[appointmet,setappointment]=useState({
    name:"",age:"",mobile:"",date:"",time:"",doctorid:doctorid
  })
  const[doctor,setdoctor]=useState([])
  useEffect(()=>{
    
    getdoctor()

  },[])
  const nav=useNavigate()
  
  const getdoctor=async()=>{
    const result=await getdoctorbyid(doctorid)
    console.log(result)
    if(result.status==200){
      setdoctor(result.data)
    }
    console.log(doctor)
  }
  const handleappointment=async()=>{
    console.log(appointmet)
    const{name,age,mobile,date,time,doctorid}=appointmet
    if(!name||!age||!mobile||!date||!time||!doctorid){
      toast.warning("Enter a valid input")
    }
     // ✅ New Validation: Ensure time is in 30-minute intervals (e.g., 12:00, 12:30, 1:00)
     const [hours, minutes] = time.split(":").map(Number);
     const appointmentTimeInMinutes = hours * 60 + minutes;
     const startTime = 9 * 60;  // 9:00 AM = 540 minutes
    const endTime = 17 * 60;   // 5:00 PM = 1020 minutes

    // ❌ Check if the time is outside allowed range
    if (appointmentTimeInMinutes < startTime || appointmentTimeInMinutes >= endTime) {
        toast.warning("Appointments can only be booked between 9:00 AM and 5:00 PM.");
        return;
    }
     if (minutes !== 0 && minutes !== 30) {
         toast.warning("Please select a time in 30-minute intervals (e.g., 12:00, 12:30)");
         return;
     }
    else{
      const header={
        'Content-Type':'application/json',
        'Authorization':`Token ${sessionStorage.getItem('token')}`
      }
      const result=await takeappointmentapi(appointmet,header)
      console.log(result)
      if(result.status==200){
        toast.success("Appointment is temporarly success,waiting for professional's conformation")
        setappointment({
          name:"",age:"",mobile:"",date:"",time:"",doctorid:doctorid
        })
        nav('/appointment')
      }
      else{
        toast.error("Doctor is already booked within 30 minutes of this time. Please select a different slot.")
      }

    }
  }
  const handlepayment = async () => {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${sessionStorage.getItem('token')}`,
    };
  
    const paymentdata = { amount: doctor.fee };
  
    const result = await createPaymentApi(paymentdata, header);
  
    console.log(result);
    if (result.status === 200) {
      window.location.href = result.data.approvalUrl; 
    } else {
      toast.error("Payment Failed, Please try again");
    }
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
     
        <div className='container mt-5'>
       
        <Row>
       
          <Col md={3} className='mb-2'>
          <img src={`${base_url}/uploads/${doctor.image}`} className='img-fluid rounded' style={{height:"270px",width:"250px"}} alt=""  />
          </Col>
          <Col md={9}>
          <div className='border  shadow p-4 rounded doc' style={{height:"fit-content"}}>
              <h3 className='text-dark'>{doctor.username}<i className="fa-solid fa-circle-check fa-xs" style={{color: "#165bca",}} /></h3>
              <p className='d-inline'>{doctor.qualification}</p>
              <button className='btn btn-light btn-outline-primary rounded ms-2'>{doctor.experience}</button>
              
              <h6 className='text-dark'>About</h6>
              <p>{doctor.bio}</p>
              <h6 className='text-dark'>Appointment Fee: <i className="fa-solid fa-indian-rupee-sign" /> <span>{doctor.fee}</span></h6>

          </div>
          <h2 className='text-center mt-3 text-dark'>Booking Appointment</h2>
          <div className='mt-3 border shadow p-4 rounded'>
            <Row>
             
              <Col md={8}>
              
            <div className='d-flex flex-column justify-content-center align-items-center mt-2'>
            <input type="text" className='form-control mb-3 w-50' onChange={(e)=>setappointment({...appointmet,name:e.target.value})} placeholder='Enter Your Name'/>
            <input type="text" className='form-control mb-3 w-50'  onChange={(e)=>setappointment({...appointmet,age:e.target.value})} placeholder='Enter Your Age'/>
            <input type="text" className='form-control mb-3 w-50' onChange={(e)=>setappointment({...appointmet,mobile:e.target.value})} placeholder='Enter mobile number'/>
              <input type="date" className='form-control mb-3 w-50'  onChange={(e)=>setappointment({...appointmet,date:e.target.value})} placeholder='Select a Date'/>
              <input type="time" className='form-control mb-3 w-50' onChange={(e)=>setappointment({...appointmet,time:e.target.value})} placeholder='Select a Time'/>
             
          


             
             
            </div>
              </Col>
              <Col md={4} className='d-flex justify-content-center align-items-center flex-column'>
              <button className='btn btn-warning mb-4' style={{width:"200px"}} onClick={handlepayment}>Pay Online</button>
              <button className='btn btn-primary' style={{width:"200px"}} onClick={handleappointment}>Conform Appointment</button>

              </Col>
            
            </Row>
           
     
      

          </div>
         
          </Col>

       
       
         
      </Row>


    </div>
   
     
   </>
  )
}

export default Booking