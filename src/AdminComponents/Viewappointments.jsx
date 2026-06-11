import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { deleteappointmentapi, getallappointmentsapi } from '../services/allapi';
import { toast } from 'react-toastify';
import SimpleNav from '../Components/SimpleNav';

function Viewappointments() {
  const [allappointment, setallappointment] = useState([])
  const [search, setsearch] = useState("")
  useEffect(() => {
    getallappointment()
  }, [])

  const getallappointment = async () => {
    const header = {
      'content-Type': 'application/json',
      'authorization': `Token ${sessionStorage.getItem('token')}`
    }
    const result = await getallappointmentsapi(header)
    console.log(result)
    if (result.status == 200) {
      setallappointment(result.data)
    }
  }

  const deleteappointment = async (id) => {
    const header = {
      'content-Type': 'application/json',
      'authorization': `Token ${sessionStorage.getItem('token')}`
    }
    const result = await deleteappointmentapi(id, header)
    console.log(result)
    if (result.status == 200) {
      toast.success("Appointment is permentantly removed")
      getallappointment()
    }
    else {
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
      <SimpleNav />
      <div className="container mt-5">
        <div>
          <input type="text" className="form-control mp-table-search" placeholder="Search by doctor name or Patient name" value={search} onChange={(e) => setsearch(e.target.value)} />
        </div>
        {
          filteredAppointments.length > 0 ?
            <div className="mp-table-container">
              <Table striped bordered hover>
                <thead className="text-center">
                  <tr>
                    <th>ID</th>
                    <th>Patient Name</th>
                    <th>Patient Age</th>
                    <th>Therapist Name</th>
                    <th>Therapist Email</th>
                    <th>Date of Appointment</th>
                    <th>Time</th>
                    <th></th>
                  </tr>
                </thead>
                {
                  filteredAppointments.map((item, index) => (
                    <tbody className="text-center" key={item._id}>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.doctorid.username}</td>
                        <td>{item.doctorid.email}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td><button className="btn btn-warning" onClick={() => deleteappointment(item._id)}>Cancel</button></td>
                      </tr>
                    </tbody>
                  ))
                }
              </Table>
            </div>
            :
            <h2 className="text-center text-danger">No content Available</h2>
        }
      </div>
    </>
  )
}

export default Viewappointments
