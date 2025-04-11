import React, { useState } from 'react';

function Products() {
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
    marginBottom: '20px',
    color: '#0d6efd',
  };

  const paragraphStyle = {
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#444',
    lineHeight: '1.6',
  };

  const cardBaseStyle = {
    display: 'flex',
    gap: '20px',
    marginBottom: '40px',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const imageStyle = {
    width: '180px',
    height: '140px',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const contentStyle = {
    flex: 1,
  };

  const titleStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const listStyle = {
    marginLeft: '20px',
    color: '#555',
  };

  // hover state handler for product cards
  const [hoveredCard, setHoveredCard] = useState(null);

  const getCardStyle = (index) => ({
    ...cardBaseStyle,
    transform: hoveredCard === index ? 'scale(1.02)' : 'scale(1)',
    boxShadow: hoveredCard === index
      ? '0 8px 20px rgba(0,0,0,0.15)'
      : cardBaseStyle.boxShadow,
  });

  return (
    <div style={sectionStyle}>
      <h1 style={headingStyle}>Our Products</h1>
      
      <p style={paragraphStyle}>
        AB Electrical Engineering Company provides a wide range of products including dry-type transformers, oil-immersed transformers, substations, feeder transformers, and more — all designed to meet diverse power distribution and industrial needs.
      </p>

      {[
        {
          title: 'Dry Type Transformers',
          image: 'https://elscotransformers.com/wp-content/uploads/2021/08/dry-type-transformer-manufacturer.png.webp',
          description: [
            '35KV SCB Series Epoxy Resin Transformer',
            '10KV SCB Series Epoxy Resin Transformer',
            'Amorphous Alloy Dry-type Transformer',
            'SGB Series Non-encapsulated Transformer',
            'Arc Suppression Coil Complete Set',
          ],
        },
        {
          title: 'Oil Immersed Transformers',
          image: 'https://www.honle.com/upload/1c/202209/s11-s9-oil-immersed-transformer.jpg',
          paragraph: 'High-efficiency, sealed oil-cooled transformers for industrial and grid applications.',
        },
        {
          title: 'Feeder Transformers',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgR7aTamq7iTHPTOePtsgG4e4qNmaapbC78Q&s',
          description: ['Automatic Line Voltage Regulator'],
        },
        {
          title: 'Transformer Core',
          image: 'https://www.watelectrical.com/wp-content/uploads/Core-Type-Transformer.jpg',
          description: ['Three-dimensional Volume Core', 'Custom-built Magnetic Cores'],
        },
        {
          title: 'Substations',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8wU4XIkrwo9uF9w0JkDYhVvzMFkzfRm3xQ&s',
          description: [
            'Outdoor Prefabricated Substation (US)',
            'YB-40.5 Series (European)',
            'YB-12 Series (European)',
          ],
        },
        {
          title: 'Pole Mounted Transformers',
          image: 'https://utbtransformers.com/wp-content/uploads/2022/10/single-phase-distributor.jpg',
          paragraph: 'Available in 11kV / 33kV options. Perfect for rural distribution and utilities.',
        },
        {
          title: 'Pad Mounted Transformers',
          image: 'https://www.eaton.com/content/dam/eaton/products/medium-voltage-power-distribution-control-systems/cooper-power-series-transformers/3-phase-vfi-transformer.jpg',
          paragraph: 'Commercial use, available in 25kVA–2500kVA. Sleek, compact, weatherproof design.',
        },
      ].map((product, index) => (
        <div
          key={index}
          style={getCardStyle(index)}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <img src={product.image} alt={product.title} style={imageStyle} />
          <div style={contentStyle}>
            <div style={titleStyle}>{product.title}</div>
            {product.description ? (
              <ul style={listStyle}>
                {product.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{product.paragraph}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
