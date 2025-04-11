import React from "react";

function Services() {
  const sectionStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#0d6efd',
  };

  const serviceCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    padding: '30px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    transition: 'transform 0.3s ease-in-out',
    marginBottom: '30px',
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    objectFit: 'contain',
  };
  const paragraphStyle = {
    fontSize: '18px',
    color: '#555',
    textAlign: 'center',
    marginBottom: '40px',
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px)',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  const descriptionStyle = {
    fontSize: '16px',
    color: '#555',
    textAlign: 'center',
  };

  return (
    <div style={sectionStyle}>
      <h1 style={headingStyle}>Our Services</h1>
      <p style={paragraphStyle}>
        At AB Electrical Engineering, we pride ourselves on offering a wide range of professional services tailored to meet the needs of our clients in diverse industries. With years of experience and a highly skilled team of engineers, technicians, and support staff, we ensure that every project we undertake is completed with the highest standards of quality, efficiency, and professionalism. From power generation to oil & gas, our expertise spans across various sectors, providing tailored solutions that drive success for our clients.
      </p>
      {/* Service 1: Electro-Mechanical Contracting */}
      <div
        style={{
          ...serviceCardStyle,
          ':hover': cardHoverStyle, // Hover effect for each card
        }}
      >
        <img
          src='https://aepl.com.pk/wp-content/uploads/2021/01/Square.jpg' // Replace with your image/icon
          alt="Electro-Mechanical Contracting"
          style={imageStyle}
        />
        <div style={titleStyle}>Electro-Mechanical Contracting</div>
        <p style={descriptionStyle}>
          The Company has executed projects in diverse industries including both thermal and renewable power generation, cement, food, fertilizers, chemicals, textile, building MEP, and other industrial areas. ABEE has completed dozens of Erection, Testing & Commissioning (ETC) projects for 500/220/132 KV grid stations for leading OEM and EPC Contractors in a timely and professional manner.
        </p>
      </div>

      {/* Service 2: Operations & Maintenance */}
      <div
        style={{
          ...serviceCardStyle,
          ':hover': cardHoverStyle, // Hover effect for each card
        }}
      >
        <img
          src="https://prismecs.com/blogsImages/1726134117.jpg" // Replace with your image/icon
          alt="Operations & Maintenance"
          style={imageStyle}
        />
        <div style={titleStyle}>Operations & Maintenance</div>
        <p style={descriptionStyle}>
          The Company has Managed O&M of 6,000+MW Power Projects in technologies ranging from combined cycle power plants (with latest gas turbine technologies from E to F, H class) to wind farms to captive generation for Public Sector Entities, IPPs, OEMs and Leading International O&M Contractors. ABEE manages a highly skilled and experienced team of engineers, technicians, and operators to ensure client assets are run smoothly 24/7, producing reliable, available, and efficient electricity in Pakistan and the Region.
        </p>
      </div>

      {/* Service 3: Oil & Gas */}
      <div
        style={{
          ...serviceCardStyle,
          ':hover': cardHoverStyle, // Hover effect for each card
        }}
      >
        <img
          src="https://cdn.sanity.io/images/mz2hls6g/production/c16f8fd28bfddb281aaa2e1da5803e8de6553a8a-5760x3840.jpg" // Replace with your image/icon
          alt="Oil & Gas"
          style={imageStyle}
        />
        <div style={titleStyle}>Oil & Gas</div>
        <p style={descriptionStyle}>
          The Company is capable of performing multiple scopes in the Oil & Gas Industry including EPC, Fabrication, Mechanical Installation, Electrical & Instrumentation works. Being ASME certified, our workshop can execute jobs related to specialized welding, pressure vessels, boilers, etc. Our maintenance and shutdown teams are capable of executing turnarounds in a professional and timely manner.
        </p>
      </div>

      {/* Service 4: Transformer Manufacturing */}
      <div
        style={{
          ...serviceCardStyle,
          ':hover': cardHoverStyle, // Hover effect for each card
        }}
      >
        <img
          src="https://blog.enerpac.com/wp-content/uploads/2022/08/transformer-moving-gantry-manufacturing.jpg" // Replace with your image/icon
          alt="Transformer Manufacturing"
          style={imageStyle}
        />
        <div style={titleStyle}>Transformer Manufacturing</div>
        <p style={descriptionStyle}>
          ABEE manufactures custom-built and special purpose Pole & Pad Mounted Transformers ranging from 10 kVA to 5000 kVA. Our finished product goes under rigorous testing to ensure the longer life of the transformer. We believe in technological advancement and continuous improvement in product and process through Research & Development to make the best use of available resources.
        </p>
      </div>
    </div>
  );
}

export default Services;
