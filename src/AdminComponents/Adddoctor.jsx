import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { addDoctorapi } from '../services/allapi';
import { useNavigate } from 'react-router-dom';



function Adddoctor() {
  const[doctor,setdoctor]=useState({
    username:"",qualification:"",experience:"",fee:"",image:"",bio:"",email:"",specialization:""

    
  })

  const nav=useNavigate()
  const[preview,setpreview]=useState("")
  useEffect(()=>{
    if(doctor.image){
      setpreview(URL.createObjectURL(doctor.image))
    }
    else{
      setpreview("")
    }

  },[doctor.image])
  const handleAdddoctor=async()=>{
    console.log(doctor)
    const{username,qualification,experience,fee,image,bio,email,specialization}=doctor
    if(!username||!qualification||!experience||!fee||!image||!bio||!email||!specialization){
      toast.warning("Enter a Valid Input")
    }
    else{
      const fd=new FormData()
      fd.append('username',username)
      fd.append('qualification',qualification)
      fd.append('experience',experience)
      fd.append('fee',fee)
      fd.append('image',image)
      fd.append('bio',bio)
      fd.append('email',email)
      fd.append('specialization',specialization)

      const header={
        'Content-Type':'multipart/form-data',
        'Authorization':`Token ${sessionStorage.getItem('token')}`
      }
      const res=await addDoctorapi(fd,header)
      console.log(res)
      if(res.status==201){
        toast.success("Doctor Details Added")
       setdoctor({
        username:"",qualification:"",experience:"",fee:"",image:"",bio:"",email:"",specialization:""
    
        
      })
      nav('/allpro')
      }
      else{
        toast.error("Access Denied")
      }
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
      <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <div className='w-50 border shadow p-5 rounded' style={{height:"fit-content"}}>
          <h2 className='text-center text-dark mb-5'>Add Doctor</h2>
          <Row>
            <Col md={4}>
            <label>
              <input type="file" style={{display:"none"}} onChange={(e)=>setdoctor({...doctor,image:e.target.files[0]})} />
              <img src={preview?preview:"https://medhacloud.com/wp-content/uploads/2023/03/Backup-Logo.svg"} alt="" className='img-fluid' style={{cursor:"pointer"}}  />
            </label>
            </Col>
            <Col md={8}>
            <input type="text" className='form-control mb-2' onChange={(e)=>setdoctor({...doctor,username:e.target.value})} placeholder='Enter Psychologist/Doctor Name' />
            <input type="text" className='form-control mb-2' onChange={(e)=>setdoctor({...doctor,qualification:e.target.value})} placeholder='Enter Qualification' />
            <input type="text" className='form-control mb-2' onChange={(e)=>setdoctor({...doctor,specialization:e.target.value})} placeholder='Enter Profession' />
            <input type="text" className='form-control mb-2' onChange={(e)=>setdoctor({...doctor,experience:e.target.value})} placeholder='Enter Experience' />
            <input type="text" className='form-control mb-2' onChange={(e)=>setdoctor({...doctor,email:e.target.value})} placeholder='Enter Email' />
            <input type="number" className='form-control mb-2' onChange={(e)=>setdoctor({...doctor,fee:e.target.value})} placeholder='Enter Appointment Fee in Ruppee' />
            <textarea type="text" className='form-control mb-2' onChange={(e)=>setdoctor({...doctor,bio:e.target.value})} placeholder='Write Bio' />
            <div className='d-flex justify-content-center mt-3'>
              <button className='btn btn-success me-3' onClick={handleAdddoctor}>Save</button>
              <Link className='btn btn-warning' to={'/admin'}>Back</Link>
            </div>
            
            </Col>
          </Row>
        </div>
      </div>
   </>
  )
}

export default Adddoctor