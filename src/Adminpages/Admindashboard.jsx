import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import SimpleNav from '../Components/SimpleNav';

function Admindashboard() {
  const nav = useNavigate()
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    toast.info("Logged out successfully!");
    nav('/auth', { replace: true });
  };

  return (
    <>
      <SimpleNav />
      <div className="mp-admin-dashboard">
        <div className="mp-admin-card">
          <h2>Admin Dashboard</h2>
          <div>
            <Link className="btn btn-success mb-2 me-3" to={'/allpro'}>Professionals</Link>
            <Link className="btn btn-primary mb-2" to={'/viewappo'}>Appointments</Link>
          </div>
          <div className="mt-3">
            <Link className="btn btn-secondary mb-2 me-3" to={'/'}>Home</Link>
            <button className="btn btn-danger mb-2" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admindashboard
