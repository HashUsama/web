// import react from "react";
// import { Link } from "react-router-dom";

// function Navbar(){
//     return(
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="#">Navbar</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/products">Products</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/services">Services</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/clients">Clients</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/about">About</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//     )
// }

// export default Navbar

import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const headerStyle = {
    backgroundColor: '#123456',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '30px 90px',
    width: '100%',
    color: 'white',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const logoStyle = {
    fontWeight: 'bold',
    fontSize: '24px',
    color: 'white', // Make the logo text white for visibility
    textDecoration: 'none',
  };

  const navListStyle = {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
    gap: '20px',
  };

  const navItemStyle = {
    fontWeight: '500',
    fontSize: '16px',
    color: 'white', // Ensure text is white initially
    textDecoration: 'none',
    transition: 'all 0.3s ease-in-out',
  };

  const navItemHoverStyle = {
    color: '#0d6efd', // Blue hover color
    textDecoration: 'underline',  // Hover underline
  };

  const navLinkActiveStyle = {
    color: '#0d6efd', // Blue for active link
    textDecoration: 'underline',
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        {/* Logo or brand name */}
        <NavLink to="/" style={logoStyle}>
          AB Electrical Engineering
        </NavLink>

        {/* Navigation Links */}
        <ul style={navListStyle}>
          {[
            { path: "/", label: "Home" },
            { path: "/services", label: "Services" },
            { path: "/products", label: "Products" },
            { path: "/clients", label: "Our Clients" },
            { path: "/about", label: "About Us" },
          ].map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                style={navItemStyle}
                activeStyle={navLinkActiveStyle}  // Active page styling
                className="nav-item"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
