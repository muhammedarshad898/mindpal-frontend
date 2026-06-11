import React from 'react'
import { Row,Col } from 'react-bootstrap';
import { useParams, useSearchParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { createPaymentApi, getdoctorbyid, takeappointmentapi } from '../services/allapi';
import base_url from '../services/baseurl';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import SimpleNav from './SimpleNav';


const TIME_SLOTS = [
  "09:00","09:30","10:00","10:30","11:00","11:30",
  "12:00","12:30","13:00","13:30","14:00","14:30",
  "15:00","15:30","16:00","16:30"
];

function Booking() {
  const{doctorid}=useParams()
  const[searchParams]=useSearchParams()

  const[appointmet,setappointment]=useState({
    name:"",age:"",mobile:"",date:"",time:"",condition:"",doctorid:doctorid
  })
  const[doctor,setdoctor]=useState([])
  const[isPaid,setIsPaid]=useState(false)

  useEffect(()=>{
    getdoctor()
    // Check if redirected back from PayPal with paid=true
    if(searchParams.get('paid')==='true'){
      setIsPaid(true)
      toast.success("Payment Successful! Complete your booking.")
    }
  },[])

  const nav=useNavigate()

  const getdoctor=async()=>{
    const result=await getdoctorbyid(doctorid)
    if(result.status==200){
      setdoctor(result.data)
    }
  }

  const handleappointment=async()=>{
    const{name,age,mobile,date,time,doctorid}=appointmet
    if(!name||!age||!mobile||!date||!time||!doctorid){
      toast.warning("Please fill all required fields")
      return
    }

    const header={
      'Content-Type':'application/json',
      'Authorization':`Token ${sessionStorage.getItem('token')}`
    }
    const result=await takeappointmentapi(appointmet,header)
    if(result.status==200){
      toast.success("Appointment booked successfully! Waiting for professional's confirmation.")
      setappointment({
        name:"",age:"",mobile:"",date:"",time:"",condition:"",doctorid:doctorid
      })
      setIsPaid(false)
      nav('/myappo')
    }
    else{
      toast.error("Doctor is already booked at this time. Please select a different slot.")
    }
  }

  const handlepayment = async () => {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${sessionStorage.getItem('token')}`,
    };

    const paymentdata = { amount: doctor.fee, doctorid: doctorid };

    const result = await createPaymentApi(paymentdata, header);

    if (result.status === 200) {
      window.location.href = result.data.approvalUrl;
    } else {
      toast.error("Payment Failed, Please try again");
    }
  };

  // Format time for display (e.g., "09:00" -> "9:00 AM")
  const formatTime = (time) => {
    const [h, m] = time.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hour = h > 12 ? h - 12 : h === 0 ? 12 : h;
    return `${hour}:${m.toString().padStart(2,'0')} ${period}`;
  };


  return (
   <>
   <SimpleNav />

        <div className='container mt-5'>

        <Row>

          <Col md={3} className='mb-2'>
          <img src={`${base_url}/uploads/${doctor.image}`} className='mp-booking-doctor-img' alt="" />
          </Col>
          <Col md={9}>
          <div className='mp-booking-info'>
              <h3>{doctor.username}<i className="fa-solid fa-circle-check fa-xs ms-2" style={{color: "#165bca"}} /></h3>
              <p className='d-inline'>{doctor.qualification}</p>
              <button className='btn btn-light btn-outline-primary rounded ms-2'>{doctor.experience}</button>

              <h6 className='mt-3'>About</h6>
              <p>{doctor.bio}</p>
              <h6>Appointment Fee: <i className="fa-solid fa-indian-rupee-sign" /> <span>{doctor.fee}</span></h6>

          </div>

          {!isPaid ? (
            <div className='text-center mt-4'>
              <h5 className='mb-3'>Complete Payment to Book Appointment</h5>
              <button className='btn btn-warning btn-lg' onClick={handlepayment}>
                <i className="fa-solid fa-lock me-2"/>Pay ₹{doctor.fee} Online
              </button>
            </div>
          ) : (
            <>
          <h2 className='text-center mt-3'>Booking Appointment</h2>
          <div className='mp-booking-form'>
            <Row>

              <Col md={8}>

            <div className='d-flex flex-column mt-2 w-100'>
            <input type="text" className='form-control mb-3' value={appointmet.name} onChange={(e)=>setappointment({...appointmet,name:e.target.value})} placeholder='Enter Your Name'/>
            <input type="text" className='form-control mb-3' value={appointmet.age} onChange={(e)=>setappointment({...appointmet,age:e.target.value})} placeholder='Enter Your Age'/>
            <input type="text" className='form-control mb-3' value={appointmet.mobile} onChange={(e)=>setappointment({...appointmet,mobile:e.target.value})} placeholder='Enter mobile number'/>
            <textarea className='form-control mb-3' rows={3} value={appointmet.condition} onChange={(e)=>setappointment({...appointmet,condition:e.target.value})} placeholder='Briefly describe your condition or reason for appointment'/>
              <input type="date" className='form-control mb-3' value={appointmet.date} onChange={(e)=>setappointment({...appointmet,date:e.target.value})} min={new Date().toISOString().split('T')[0]}/>
              <select className='form-select mb-3' value={appointmet.time} onChange={(e)=>setappointment({...appointmet,time:e.target.value})}>
                <option value="">Select a Time Slot</option>
                {TIME_SLOTS.map(slot=>(
                  <option key={slot} value={slot}>{formatTime(slot)}</option>
                ))}
              </select>
            </div>
              </Col>
              <Col md={4} className='d-flex justify-content-center align-items-center flex-column'>
              <div className="mp-booking-actions">
              <span className='text-success mb-3 d-block text-center'><i className="fa-solid fa-circle-check me-1"/>Payment Done</span>
              <button className='btn btn-primary' onClick={handleappointment}>Confirm Appointment</button>
              </div>

              </Col>

            </Row>


          </div>
          </>
          )}

          </Col>


        </Row>


    </div>

   </>
  )
}

export default Booking
