import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#123456' }} className="text-white pt-4 mt-4">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-light">Home</Link></li>
              <li><Link to="/products" className="text-decoration-none text-light">Products</Link></li>
              <li><Link to="/services" className="text-decoration-none text-light">Services</Link></li>
              <li><Link to="/clients" className="text-decoration-none text-light">Clients</Link></li>
            </ul>
          </div>

          <div className="col-12 col-md-3" style={{ marginLeft: '150px' }}>
            <h5>Products & Services</h5>
            <ul className="list-unstyled">
              <li><Link to="/products" className="text-decoration-none text-light">Dry Type Transformers</Link></li>
              <li><Link to="/products" className="text-decoration-none text-light">Feeder Transformers</Link></li>
              <li><Link to="/products" className="text-decoration-none text-light">Transformer Core</Link></li>
              <li><Link to="/products" className="text-decoration-none text-light">Substations</Link></li>
              <li><Link to="/services" className="text-decoration-none text-light">Our Services</Link></li>
            </ul>
          </div>

          <div className="col-12 col-md-3" style={{ marginLeft: '150px' }}>
            <h5>Contact Info</h5>
            <p className="mb-1">Call us: (+92) 333 447 4725</p>
            <p className="mb-1">Email: <a href="mailto:info@abee.tech" className="text-white text-decoration-none">info@abee.tech</a></p>
            <p>Location: Plot No2, jinnah Street 2, Sham Nagar Road, Chauburji, Lahore</p>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center" style={{ fontSize: '13px' }}>
          <p className="mb-1"><strong>AB Electrical Engineering.</strong> &copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

