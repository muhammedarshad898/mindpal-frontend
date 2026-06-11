import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { addDoctorapi } from '../services/allapi';
import { useNavigate } from 'react-router-dom';
import SimpleNav from '../Components/SimpleNav';

function Adddoctor() {
  const [doctor, setdoctor] = useState({
    username: "", qualification: "", experience: "", fee: "", image: "", bio: "", email: "", specialization: ""
  })

  const nav = useNavigate()
  const [preview, setpreview] = useState("")
  useEffect(() => {
    if (doctor.image) {
      setpreview(URL.createObjectURL(doctor.image))
    }
    else {
      setpreview("")
    }
  }, [doctor.image])

  const handleAdddoctor = async () => {
    console.log(doctor)
    const { username, qualification, experience, fee, image, bio, email, specialization } = doctor
    if (!username || !qualification || !experience || !fee || !image || !bio || !email || !specialization) {
      toast.warning("Enter a Valid Input")
    }
    else {
      const fd = new FormData()
      fd.append('username', username)
      fd.append('qualification', qualification)
      fd.append('experience', experience)
      fd.append('fee', fee)
      fd.append('image', image)
      fd.append('bio', bio)
      fd.append('email', email)
      fd.append('specialization', specialization)

      const header = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Token ${sessionStorage.getItem('token')}`
      }
      const res = await addDoctorapi(fd, header)
      console.log(res)
      if (res.status == 201) {
        toast.success("Doctor Details Added")
        setdoctor({
          username: "", qualification: "", experience: "", fee: "", image: "", bio: "", email: "", specialization: ""
        })
        nav('/allpro')
      }
      else {
        toast.error("Access Denied")
      }
    }
  }

  return (
    <>
      <SimpleNav />
      <div className="mp-admin-form">
        <div className="w-50 border shadow p-5 rounded">
          <h2 className="text-center text-dark mb-5">Add Doctor</h2>
          <Row>
            <Col md={4}>
              <label className="mp-file-upload">
                <input type="file" onChange={(e) => setdoctor({ ...doctor, image: e.target.files[0] })} />
                <img src={preview ? preview : "/images/upload.jpg"} alt="" className="img-fluid" />
              </label>
            </Col>
            <Col md={8}>
              <input type="text" className="form-control mb-3" onChange={(e) => setdoctor({ ...doctor, username: e.target.value })} placeholder="Enter Psychologist/Doctor Name" />
              <input type="text" className="form-control mb-3" onChange={(e) => setdoctor({ ...doctor, qualification: e.target.value })} placeholder="Enter Qualification" />
              <input type="text" className="form-control mb-3" onChange={(e) => setdoctor({ ...doctor, specialization: e.target.value })} placeholder="Enter Profession" />
              <input type="text" className="form-control mb-3" onChange={(e) => setdoctor({ ...doctor, experience: e.target.value })} placeholder="Enter Experience" />
              <input type="text" className="form-control mb-3" onChange={(e) => setdoctor({ ...doctor, email: e.target.value })} placeholder="Enter Email" />
              <input type="number" className="form-control mb-3" onChange={(e) => setdoctor({ ...doctor, fee: e.target.value })} placeholder="Enter Appointment Fee in Ruppee" />
              <textarea type="text" className="form-control mb-3" onChange={(e) => setdoctor({ ...doctor, bio: e.target.value })} placeholder="Write Bio" />
              <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-success me-3" onClick={handleAdddoctor}>Save</button>
                <Link className="btn btn-warning" to={'/admin'}>Back</Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Adddoctor
