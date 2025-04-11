import React from 'react';

function Clients() {
  const clientBoxStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'center',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '250px', // Fixed height for each client box
  };

  const clientImgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain', // Prevents image distortion
    display: 'block', // Ensures image is block-level
    margin: '0 auto', // Centers the image
  };

  const containerStyle = {
    paddingTop: '40px',
    paddingBottom: '40px',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  return (
    <div className="container" style={containerStyle}>
      <h2 style={headingStyle}>Our Clients</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {[
          { name: "Client 1", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/1200px-ABB_logo.svg.png" },
          { name: "Client 2", imageUrl: "https://lsys.su/upload/iblock/864/tupvg151m0hp3luaiuidzxdky1i5vr1l.png" },
          { name: "Client 3", imageUrl: "https://www.nation.com.pk/print_images/large/2017-08-09/hesco-gears-up-for-recovery-with-control-on-line-losses-1502220908-1933.jpg" },
          { name: "Client 4", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xUr_Jjnn8WvCvCYRuahKi0mlx12x9_3PujsZE-TlVuq4hkzlRWB2F-1b0eY9XcjNiEI&usqp=CAU" },
          { name: "Client 5", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsHFDrbgz6Pm3FuqekBlmhBC9MnyZRBSKSvw&s" },
          { name: "Client 6", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Tesco_Logo.svg/2560px-Tesco_Logo.svg.png" },
          { name: "Client 7", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3S2Sm-AgqBP9G2gswZG5xyhhXnqf5ZZ8WQ&s" },
          { name: "Client 8", imageUrl: "https://pakbill.pk/wp-content/uploads/2024/08/iesco-bill.png" },
          { name: "Client 9", imageUrl: "https://play-lh.googleusercontent.com/DWIk9_ORKuuQoAZN9tVMklemGdhs0HlFobUhWbJq2_rD7i7-jx0htpSiyRY_H3_02o4" },
          { name: "Client 10", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHViPLs-05oMDDAHvjuG48TzSrmtppcHnERA&s" },
        ].map((client, index) => (
          <div className="col" key={index}>
            <div className="client-box" style={clientBoxStyle}>
              <img
                src={client.imageUrl}
                alt={client.name}
                style={clientImgStyle}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;

