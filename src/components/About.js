import React from 'react';

function About() {
  return (
    <>
      <div className="container mt-5 mb-5 text-center">
        <h2>About Us</h2>
      </div>

      <div className="container mt-5 d-flex align-items-start" style={{ marginLeft: '50px' }}>
        {/* Image on the left */}
        <div style={{ flex: '1', paddingRight: '20px' }}>
          <img
            src="https://sstlhr.com/wp-content/uploads/2021/05/ab3.png"
            alt="about"
            style={{
              width: '100%',  // Ensure it scales with the container
              height: 'auto', // Maintain aspect ratio
              borderRadius: '8px',
              maxWidth: '900px',  // Make the image larger by setting a max width
            }}
          />
        </div>

        {/* Paragraph on the right */}
        <div style={{ flex: '2', paddingLeft: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <span
    style={{
        fontSize: '30px',
        color: 'red', // Color of the text (you can change it)
        fontWeight: 'bold',
    }}
  >
    Who we are
  </span>
    <div
      style={{
        width: '2cm', // Set the width of the red line
        height: '2px', // Set the height of the red line
        backgroundColor: 'red', // Red color for the line
        marginRight: '10px', // Space between the line and text
        marginLeft: '10px',
      }}
    ></div>
</div>

            <div className="mt-2">
  <h2 style={{ fontWeight: 'normal', fontFamily: 'Arial, sans-serif', fontSize: '28px' }}>
    About ABEE
  </h2>
</div>
          <p style={{ fontSize: '18px' }}>
            {/* Adding some space between the title and text */}
            <br />
            <strong>AB Electrical Engineering</strong> is an emerging Company for Manufacturing of
            Distribution Transformers (Pole Mounted / Pad Mounted) in Pakistan. <strong>ABEE</strong> was
            established in 2019 under the kind supervision of its CEO <strong>Muhammad Imran</strong>. Our
            Manufacturing facilities are fully equipped with the latest machinery and testing equipment, ensuring
            reliable and regular manufacturing of Quality Transformers.
          </p>

          <p style={{ fontSize: '18px' }}>
            <strong>ABEE</strong> has established a Total Quality Management System (TQM) in accordance with
            ISO-9001, 14001, 45001 procedures and has focused all of its activities on customer requirements,
            satisfaction, and services. <strong>ABEE</strong> is one of the few organizations in Pakistan who has
            established a Laboratory Management System (LMS) and scored ISO/IEC 17025:2017 certification from
            Pakistan National Accreditation Council (PNAC).
          </p>
        </div>
      </div>
    </>
  );
}

export default About;

