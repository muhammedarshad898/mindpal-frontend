import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { getdoctordashboardapi } from '../services/allapi';
import base_url from '../services/baseurl';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SimpleNav from '../Components/SimpleNav';

function Dashboard() {
  const [doctordata, setdoctordata] = useState({ doctor: {}, appointments: [] })

  useEffect(() => {
    getdoctordashboard()
  }, [])

  const nav = useNavigate()

  const getdoctordashboard = async () => {
    const header = {
      'content-Type': 'application/json',
      'authorization': `Token ${sessionStorage.getItem('token')}`
    }
    const result = await getdoctordashboardapi(header)
    console.log(result)
    if (result.status == 200) {
      setdoctordata(result.data)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    toast.info("Logged out successfully!");
    nav('/auth', { replace: true });
  };

  return (
    <>
      <SimpleNav rightContent={
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      } />

      <Row>
        <Col md={3}>
          <div className="mp-doc-sidebar">
            <img src={`${base_url}/uploads/${doctordata.doctor.image}`} alt="" className="mp-rounded-img" />
            <div className="mp-doc-bio">
              <p>{doctordata.doctor.bio}</p>
            </div>
          </div>
        </Col>
        <Col md={9} className="mt-5 px-4">
          {
            doctordata.appointments.length > 0 ?
              <div className="mp-table-container">
                <Table striped bordered hover>
                  <thead>
                    <tr className="text-center">
                      <th>ID</th>
                      <th>Patient Name</th>
                      <th>Appointment Date</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  {
                    doctordata.appointments.map((item, index) => (
                      <tbody className="text-center" key={item._id || index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.date}</td>
                          <td>{item.time}</td>
                        </tr>
                      </tbody>
                    ))
                  }
                </Table>
              </div>
              :
              <h1 className="text-center text-danger">No Appoinment Available</h1>
          }
        </Col>
      </Row>
    </>
  )
}

export default Dashboard
