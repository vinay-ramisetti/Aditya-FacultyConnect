import React from 'react';
import Logo from '../images/aboutlogo.jpg';

const About = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={Logo}
        alt="About Us Logo"
        style={{
          width: '00px',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          marginBottom: '20px',
        }}
      />
      <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
        Welcome to the About page! Here, you can learn more about our mission, vision, and the 
        amazing team behind our work. We are committed to delivering excellence and fostering 
        innovation in everything we do.
      </p>
    </div>
  );
};

export default About;
