import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import { deleteappointmentapi, getallappointmentsapi } from '../services/allapi';
import { toast } from 'react-toastify';


function Viewappointments() {
  const [allappointment,setallappointment]=useState([])
  const [search,setsearch]=useState("")
  useEffect(()=>{
    getallappointment()

  },[])
  
  const getallappointment=async()=>{
    const header={
      'content-Type':'application/json',
      'authorization':`Token ${sessionStorage.getItem('token')}`
    }
    const result=await getallappointmentsapi(header)
    console.log(result)
    if(result.status==200){
      setallappointment(result.data)
    }
  }
  const deleteappointment=async(id)=>{
    const header={
      'content-Type':'application/json',
      'authorization':`Token ${sessionStorage.getItem('token')}`
    }
    const result=await deleteappointmentapi(id,header)
    console.log(result)
    if(result.status==200){
      toast.success("Appointment is permentantly removed")
      getallappointment()
    }
    else{
      toast.error("Access Denied")
    }

    
  }
  const filteredAppointments = allappointment.filter((item) => {
    return (
      item.doctorid.username.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase()) 
    );
  });
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
      <div>
        <input type="text" className='form-control mb-3 w-50'placeholder='Search by doctor name or Patient name' value={search} onChange={(e)=>setsearch(e.target.value)} />
      </div>
      {
      filteredAppointments.length>0?
      <Table striped bordered hover>
<thead className='text-center'>
  <tr>
    <th>ID</th>
    <th>Patient Name</th>
    <th>Patient Age</th>
    <th>Therapist Name </th>
    <th>Therapist Email</th>
    <th>Date of Appointment</th>
    <th>Time</th>
    <th></th>
  </tr>
</thead>
{
  filteredAppointments.map((item,index)=>(
    <tbody className='text-center'>
  <tr>
    <td>{index+1}</td>
    <td>{item.name}</td>
    <td>{item.age}</td>
    <td>{item.doctorid.username}</td>
    <td>{item.doctorid.email}</td>
    <td>{item.date}</td>
    <td>{item.time}</td>
    <td><button className='btn btn-warning' onClick={()=>deleteappointment(item._id)}>Cancel</button></td>
  </tr>
 
</tbody>

  ))
}

</Table>
:
<h2 className='text-center text-danger'>No content Available</h2>
      }
    

    </div>
    </>
  )
}

export default Viewappointments