import React, { useState } from 'react'
import { FaHome, FaUser, FaSearch, FaSignOutAlt, FaMoon, FaSun, FaPen } from "react-icons/fa";
import { FaSignsPost } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`mp-sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "<" : ">"}
      </button>

      <div>
        <div className="profile-section">
          <img src="https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?rs=1&pid=ImgDetMain" alt="User Avatar" className="avatar" />
          {isOpen && (
            <div className="user-info">
              <h6>{sessionStorage.getItem('uname') || 'User'}</h6>
            </div>
          )}
        </div>

        <div className="search-bar">
          {isOpen && <input type="text" placeholder="Search..." />}
          <FaSearch />
        </div>

        <nav className="nav-links">
          <ul>
            <Link to={'/'}>
              <li><FaHome className='fa-xl' /> {isOpen && <span>Home</span>}</li>
            </Link>
            <Link to={'/profile'}>
              <li><FaUser className='fa-xl' /> {isOpen && <span>Profile</span>}</li>
            </Link>
            <Link to={'/appointment'}>
              <li><FaPen className='fa-xl' /> {isOpen && <span>Appointment</span>}</li>
            </Link>
            <Link to={'/post'}>
              <li><FaSignsPost className='fa-xl' /> {isOpen && <span>Stories</span>}</li>
            </Link>
          </ul>
        </nav>
      </div>

      <div>
        <div className="logout" onClick={() => { sessionStorage.clear(); window.location.href = '/' }}>
          <FaSignOutAlt className='fa-xl' />
          {isOpen && <span>Logout</span>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
