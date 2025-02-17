import React, { useState } from 'react'

import { FaHome, FaUser, FaSearch, FaSignOutAlt, FaMoon, FaSun, FaPen } from "react-icons/fa";
import { FaSignsPost } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleTheme = () => setDarkMode(!darkMode);


  return (
   <>
    
    
           
    <div className={`sidebar ${isOpen ? "open" : ""} ${darkMode ? "dark" : "light"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "<" : ">"}
      </button>

      <div className="profile-section">
        <img src="https://th.bing.com/th/id/OIP.PZsMLTIgXaEsdCA0VjTo7gHaLH?rs=1&pid=ImgDetMain" alt="User Avatar" className="avatar" />
        {isOpen && (
          <div className="user-info">
            <h3>John Doe</h3>
            
          </div>
        )}
      </div>

      <div className="search-bar">
        {isOpen && <input type="text" placeholder="Search..." />}
        <FaSearch />
      </div>
      <nav className="nav-links">
        <ul>
        <Link style={{textDecoration:"none",}} to={'/'}>   <li className=''><FaHome className='fa-xl' /> {isOpen && <span>Home</span>}</li></Link>
       <Link style={{textDecoration:"none",}} to={'/profile'}>   <li><FaUser className='fa-xl' /> {isOpen && <span>Profile</span>}</li></Link>
       <Link style={{textDecoration:"none",}} to={'/appointment'}>   <li><FaPen className='fa-xl' /> {isOpen && <span>Appointment</span>}</li></Link>
       <Link style={{textDecoration:"none",}} to={'/post'}>   <li><FaSignsPost className='fa-xl' /> {isOpen && <span>Stories</span>}</li></Link>
        </ul>
      </nav>
 
      <div className="theme-toggle">
        {darkMode ? <FaSun onClick={toggleTheme} className='fa-xl' /> : <FaMoon onClick={toggleTheme} className='fa-xl' />}
      </div>

      <div className="logout">
        <FaSignOutAlt className='fa-xl' />
        {isOpen && <span>Logout</span>}
      </div>
    </div>







    

   
   </>
  )
}

export default Sidebar