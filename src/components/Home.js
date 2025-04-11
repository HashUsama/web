import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
  const images = [
    'https://media.istockphoto.com/id/1317424278/photo/high-voltage-power-transformer.jpg?s=2048x2048&w=is&k=20&c=JzgbFvYpV3FARgAFgnLGGHGUSFq9md2hMxo6ApeoTE0=',
    'https://media.istockphoto.com/id/175536857/photo/electric-power-substation.jpg?s=2048x2048&w=is&k=20&c=xY_vmVw7h6CKflIF5WmGdtcCqam-vESAuLK8vjP6Tbw=',
    'https://media.istockphoto.com/id/872618832/photo/isolators-and-transformers-at-the-electrical-substation.webp?s=2048x2048&w=is&k=20&c=2yIH6xiMca5j2Ka8oabIiFFaXzYJwp-pE-aYZAISDD4=',
    'https://media.istockphoto.com/id/1438180804/photo/orange-inductor-with-copper-wire-on-green-printed-circuit-board-detail.jpg?s=2048x2048&w=is&k=20&c=-Dlc3KJX-4ebrtJaNtV8nMC3syc-1bM60yik1vhvkf0=',
    'https://media.istockphoto.com/id/641365928/photo/ts-logistics-truck-delivering-fuel.webp?s=2048x2048&w=is&k=20&c=RMqccB5TbrQt_EmrF4RzAl_HIhDbGCIhRZXs5zMDUp8=',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
    <div style={{overflow: 'hidden', width: '100vw', height: '60vh' }}>
      <div
        style={{
            display: 'flex',
            transition: 'transform 1s ease-out',
            transform: `translateX(-${currentImageIndex * 100}vw)`, // translate based on vw
        }}
        >
        {images.map((image, index) => (
            <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{
                minWidth: '100vw', // ✅ Full width of viewport
                height: '60vh',
                objectFit: 'cover',
            }}
            />
        ))}
      </div>
    </div>
    <div className='container text-center mt-3'><h1 style={{ marginTop: '10%',fontWeight: 'normal', fontFamily: 'Arial, sans-serif', fontSize: '60px' }}>AB Electrical Engineering</h1></div>
    <div className='container mt-2 text-center'><p>Driven by innovation and a commitment to excellence, AB Electrical Engineering provides cutting-edge solutions in the fields of Electrical Engineering, EPC Contracting, Manufacturing, and Industrial Automation. We specialize in delivering high-quality products and services tailored to meet the growing demands of both local and international markets. Our expertise spans across Power Distribution Systems, Control Panels, Power System Design, and Turnkey Electrical Projects.

At AB Electrical Engineering, we believe in building long-term partnerships based on trust, integrity, and superior customer service. With a strong emphasis on quality, safety, and timely delivery, we strive to exceed expectations in every project we undertake. Our team of qualified professionals is dedicated to delivering reliable, energy-efficient, and cost-effective solutions that empower industries and infrastructure.

We believe in "Powering Progress with Precision and Integrity".</p></div>
<hr/>
        <div className='container mt-5 text-center' style = {{color:'#408EE0'}}><h1>Our Products</h1></div>
        <div
      style={{
        display: 'flex',
        justifyContent: 'space-between', // space between the images
        alignItems: 'center',
        gap: '20px', // spacing between images
        padding: '20px',
        
      }}
    >
        
      <div style={{marginLeft: '100px'}}>
      <img
        src="https://elscotransformers.com/wp-content/uploads/2021/08/dry-type-transformer-manufacturer.png.webp"
        alt="Image 1"
        style={{ width: '100%', maxWidth: '300px', height: 'auto'}}
        />
        <p style={{ marginTop: '10px', marginLeft:'60px'}}>Dry Type Transformer</p>
        </div>
        <div style={{marginLeft: '30px'}}>

      <img
        src="https://www.honle.com/upload/1c/202209/s11-s9-oil-immersed-transformer.jpg"
        alt="Image 1"
        style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
        />
        <p style={{ marginTop: '10px', marginLeft:'50px' }}>Oil Immersed Transformers</p>
        </div>
        <div style={{marginRight:'80px'}}>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgR7aTamq7iTHPTOePtsgG4e4qNmaapbC78Q&s"
        alt="Image 1"
        style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
        />
        <p style={{ marginTop: '10px', marginLeft:'60px' }}>Feeder Transformer</p>
        </div>
    </div>
    <div className="text-center mt-2">
  <button
    onClick={() => navigate('/services')}
    className="btn btn-primary text-white rounded-pill px-4 py-2"
  >
    See More Products
  </button>
</div>
<hr/>
        <div className='container mt-5 text-center' style = {{color:'#408EE0'}}><h1>Our Services</h1></div>
        <div
      style={{
        display: 'flex',
        justifyContent: 'space-between', // space between the images
        alignItems: 'center',
        gap: '20px', // spacing between images
        padding: '20px',
      }}
    >
        
      <div style={{marginLeft:'70px'}}>
      <img
        src="https://prismecs.com/blogsImages/1726134117.jpg"
        alt="Image 1"
        style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
        />
        <p style={{ marginTop: '10px', marginLeft:'60px'  }}>Operations & Maintenance</p>
        </div>
        <div>

      <img
        src="https://cdn.sanity.io/images/mz2hls6g/production/c16f8fd28bfddb281aaa2e1da5803e8de6553a8a-5760x3840.jpg"
        alt="Image 2"
        style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
        />
        <p style={{ marginTop: '10px', marginLeft:'115px'  }}>Oil & Gas</p>
        </div>
        <div style={{marginRight:'70px'}}>

      <img
        src="https://blog.enerpac.com/wp-content/uploads/2022/08/transformer-moving-gantry-manufacturing.jpg"
        alt="Image 3"
        style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
        />
        <p style={{ marginTop: '10px', marginLeft:'55px'  }}>Transformer Manufacturing</p>
        </div>
    </div>
    <div className="text-center mt-2">
  <button
    onClick={() => navigate('/services')}
    className="btn btn-primary text-white rounded-pill px-4 py-2"
  >
    See More Services
  </button>
</div>
<hr/>
    <div className='container mt-5 text-center' style = {{color:'#408EE0'}}><h1>Our Clients</h1></div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',         // center all logos
        alignItems: 'center',
        gap: '50px',                      // space between logos
        padding: '0 500px',                // side padding (left & right)
        flexWrap: 'wrap',                 // wraps logos on smaller screens
        marginTop: '40px',
      }}
    >
      {/* Logo 1 */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/1200px-ABB_logo.svg.png"
        alt="Client 1"
        style={{ maxWidth: '100px', height: 'auto' }}
      />

      {/* Logo 2 */}
      <img
        src="https://lsys.su/upload/iblock/864/tupvg151m0hp3luaiuidzxdky1i5vr1l.png"
        alt="Client 2"
        style={{ maxWidth: '100px', height: 'auto' }}
      />

      {/* Logo 3 */}
      <img
        src="https://www.nation.com.pk/print_images/large/2017-08-09/hesco-gears-up-for-recovery-with-control-on-line-losses-1502220908-1933.jpg"
        alt="Client 3"
        style={{ maxWidth: '100px', height: 'auto' }}
      />

      {/* Logo 4 */}
      <img
        src="https://pakbill.pk/wp-content/uploads/2024/08/iesco-bill.png"
        alt="Client 4"
        style={{ maxWidth: '100px', height: 'auto' }}
      />
    </div>
    <div className="text-center mt-2">
  <button
    onClick={() => navigate('/services')}
    className="btn btn-primary text-white rounded-pill px-4 py-2"
  >
    See More Clients
  </button>
</div>
  
        </>
  );
}

export default Home;

