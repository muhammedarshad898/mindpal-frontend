import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mp-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="mp-footer-brand">
              <i className="fa-regular fa-handshake fa-xl" /> MindPal
            </h4>
            <p className="mt-3" style={{ color: 'var(--mp-neutral-400)' }}>
              Your gateway to mental well-being and self-care. Connecting you with professionals who care.
            </p>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <h6 style={{ color: 'var(--mp-neutral-0)', marginBottom: 'var(--mp-space-4)' }}>Quick Links</h6>
            <Link to="/" className="mp-footer-link">Home</Link>
            <Link to="/appointment" className="mp-footer-link">Appointments</Link>
            <Link to="/advice" className="mp-footer-link">Advice</Link>
            <Link to="/post" className="mp-footer-link">Community</Link>
          </div>

          <div className="col-md-4">
            <h6 style={{ color: 'var(--mp-neutral-0)', marginBottom: 'var(--mp-space-4)' }}>Connect With Us</h6>
            <div className="mp-footer-social">
              <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
              <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
              <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
              <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: 'var(--mp-neutral-600)', marginTop: 'var(--mp-space-8)' }} />

        <div className="text-center" style={{ color: 'var(--mp-neutral-400)' }}>
          <small>&copy; {new Date().getFullYear()} MindPal. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
