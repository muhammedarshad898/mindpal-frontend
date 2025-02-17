// import React from 'react'
// import { Link } from 'react-router-dom'

// function Footer() {
//   return (
//    <>
//    <div className='d-flex justify-content-center align-items-center flex-column text-dark' style={{backgroundColor:"whitesmoke"}}>
//     <h5 className='text-center text-dark'><i className="fa-regular fa-handshake fa-xl" style={{color: "#0f6ba3",}} />
//           {' '}
//             Mindpal</h5>
           
//               <h5 className='mt-3 text-center text-dark'>phone Number: 987653445</h5>
//               <h5 className='mt-3 text-dark'>3548 Street LoveApartment -USA</h5>
//               <button className='btn btn-dark btn-rounded-circle mt-3'>Send a Message</button>
//               <div className='d-flex flex-row mt-3'>
//          <Link><i className="fa-brands fa-square-instagram fa-xl me-2" style={{color: "#db14c1",}} /></Link>     
//          <Link><i className="fa-brands fa-twitter fa-xl me-2" style={{color: "#117ee4",}} /></Link>
//          <Link> <i className="fa-brands fa-facebook me-2  fa-xl" style={{color: "#1a79c1",}} /></Link>     
              
//        <Link><i className="fa-brands fa-youtube fa-xl me-2" style={{color: "#f10937",}} /></Link>       
//               </div>
              
            
//    </div>
  
//    </>
//   )
// }

// export default Footer
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        {/* Logo / Brand */}
        <h4 className="fw-bold">
        <i className="fa-regular fa-handshake fa-xl fa-light" /> MindPal
        </h4>

        {/* Short Description */}
        <p className="mt-2 text-secondary">Your gateway to mental well-being and self-care.</p>

        {/* Navigation Links */}
        <div className="mt-3">
          <Link to="#" className="text-light text-decoration-none mx-2">Home</Link> | 
          <Link to="#" className="text-light text-decoration-none mx-2">About</Link> | 
          <Link to="#" className="text-light text-decoration-none mx-2">Services</Link> | 
          <Link to="#" className="text-light text-decoration-none mx-2">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="mt-3">
          <Link to="#" className="text-light mx-2 fs-5">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="#" className="text-light mx-2 fs-5">
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link to="#" className="text-light mx-2 fs-5">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link to="#" className="text-light mx-2 fs-5">
            <i className="fa-brands fa-linkedin"></i>
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-3 text-secondary">
          <small>© {new Date().getFullYear()} MindPal. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
