import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import { deletedoctorapi, getdoctorapi } from '../services/allapi';
import base_url from '../services/baseurl';
import { toast } from 'react-toastify';
import Editdoctor from './Editdoctor';
import { responsecontext } from '../contextapi/Contextprovider';
import SimpleNav from '../Components/SimpleNav';

function Allprofessionals() {
  const [pro, setpro] = useState([])
  const { response } = useContext(responsecontext)
  useEffect(() => {
    getallprofessionals()
  }, [response])

  const getallprofessionals = async () => {
    const result = await getdoctorapi()
    console.log(result)
    if (result.status == 200) {
      setpro(result.data)
    }
  }

  const deletedoctor = async (id) => {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${sessionStorage.getItem('token')}`
    }
    const result = await deletedoctorapi(id, header)
    console.log(result)
    if (result.status == 200) {
      toast.success("Content is permentantly deleted")
      getallprofessionals()
    }
    else {
      toast.error("Access Denied")
    }
  }

  return (
    <>
      <SimpleNav />
      <div className="mp-team-section">
        <h2 className="text-center mt-4">All Professionals</h2>
        <div className="mt-4">
          <Link className="btn btn-success my-3" to={'/adddoctor'}>Add Professionals</Link>
          {
            pro.length > 0 ?
              <Row>
                {
                  pro.map(item => (
                    <Col md={4} sm={6} className="mb-4" key={item._id}>
                      <div className="mp-doctor-card">
                        <img src={`${base_url}/uploads/${item.image}`} alt={item.username} className="card-img-top" />
                        <div className="card-body p-3">
                          <h5 className="card-title">{item.username}</h5>
                          <h6>{item.qualification}</h6>
                          <div>
                            <button className="btn" onClick={() => deletedoctor(item._id)}>
                              <i className="fa-solid fa-trash fa-xl text-danger" />
                            </button>
                            <Editdoctor pro={item}></Editdoctor>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))
                }
              </Row>
              :
              <h2 className="text-center text-danger">No Content Available</h2>
          }
        </div>
      </div>
    </>
  )
}

export default Allprofessionals
