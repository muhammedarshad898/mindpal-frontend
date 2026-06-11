import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getmyappointmentapi } from '../services/allapi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SimpleNav from './SimpleNav';

function MyAppointment() {
  const [myappo, setappo] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    getmyappo()
  }, [])

  const getmyappo = async () => {
    const header = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${sessionStorage.getItem('token')}`
    }
    const result = await getmyappointmentapi(header)
    if (result.status == 200) {
      setappo(result.data)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    toast.info("Logged out successfully!");
    nav('/auth', { replace: true });
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const formatTime = (time) => {
    if (!time) return '';
    const [h, m] = time.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hour = h > 12 ? h - 12 : h === 0 ? 12 : h;
    return `${hour}:${m.toString().padStart(2, '0')} ${period}`;
  };

  return (
    <>
      <SimpleNav rightContent={<button className='btn btn-danger' onClick={handleLogout}>Logout</button>} />

      <div className='container mt-5 mb-5'>
        <h2 className='mp-section-title text-center'>My Appointments</h2>
        <p className='mp-section-subtitle text-center'>View and manage your scheduled sessions</p>

        {myappo.length > 0 ? (
          <Row className='mt-4'>
            {myappo.map((item, index) => (
              <Col md={6} lg={4} key={item._id || index} className='mb-4'>
                <div className='mp-appointment-card'>
                  <div className='mp-appointment-card-header'>
                    <span className='mp-appointment-number'>#{index + 1}</span>
                    <span className='mp-appointment-badge'>
                      <i className="fa-solid fa-clock me-1" />Scheduled
                    </span>
                  </div>
                  <div className='mp-appointment-card-body'>
                    <h5 className='mp-appointment-doctor'>
                      <i className="fa-solid fa-user-doctor me-2" />
                      {item.doctorid?.username || 'Doctor'}
                    </h5>
                    <div className='mp-appointment-detail'>
                      <i className="fa-solid fa-user me-2" />
                      <span>{item.name}, {item.age} yrs</span>
                    </div>
                    <div className='mp-appointment-detail'>
                      <i className="fa-solid fa-phone me-2" />
                      <span>{item.mobile}</span>
                    </div>
                    <div className='mp-appointment-detail'>
                      <i className="fa-solid fa-calendar-day me-2" />
                      <span>{formatDate(item.date)}</span>
                    </div>
                    <div className='mp-appointment-detail'>
                      <i className="fa-solid fa-clock me-2" />
                      <span>{formatTime(item.time)}</span>
                    </div>
                    {item.condition && (
                      <div className='mp-appointment-condition'>
                        <i className="fa-solid fa-notes-medical me-2" />
                        <span>{item.condition}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ) : (
          <div className='mp-empty-state'>
            <i className="fa-solid fa-calendar-xmark" />
            <h4>No Appointments Yet</h4>
            <p>You haven't booked any appointments yet.</p>
            <button className='btn btn-primary' onClick={() => nav('/appointment')}>
              Find a Therapist
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default MyAppointment
