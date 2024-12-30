import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Ensure you import Carousel CSS
import { Link } from 'react-router-dom';

import Logo from '../images/AECRoundLogo.png';
import Slide3 from '../images/silde3.jpg';
import Slide4 from '../images/slide4.jpg';
import Slide5 from '../images/slide5.jpg';

const Welcome = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Logo at the top-left corner */}
      <div 
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '5px',
          borderRadius: '8px',
        }}
      >
        <img 
          src={Logo} 
          alt="logo" 
          style={{ width: '100px', height: '100px' }} // Adjust size as needed
        />
      </div>

      {/* Carousel */}
      <Carousel 
        showThumbs={false} 
        infiniteLoop 
        autoPlay 
        interval={3000} 
        transitionTime={500} 
        showStatus={false}
        emulateTouch
        style={{
          margin: '20px',
        }}
      >
        <div>
          <img 
            src={Slide3} 
            alt="Slide 1" 
            style={{ 
              objectFit: 'cover', 
              width: '100%', 
              height: '60vh', 
              borderRadius: '8px' 
            }} 
          />
        </div>
        <div>
          <img 
            src={Slide4} 
            alt="Slide 2" 
            style={{ 
              objectFit: 'cover', 
              width: '100%', 
              height: '60vh', 
              borderRadius: '8px' 
            }} 
          />
        </div>
        <div>
          <img 
            src={Slide5} 
            alt="Slide 3" 
            style={{ 
              objectFit: 'cover', 
              width: '100%', 
              height: '60vh', 
              borderRadius: '8px' 
            }} 
          />
        </div>
      </Carousel>

      {/* Bottom Section */}
      <div 
        style={{
          textAlign: 'center',
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0' }}>
          Welcome
        </h1>
        <div>
          <Link to="/signup">
          <button 
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#fff',
              backgroundColor: '#007bff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              marginBottom: '20px',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Login
          </button>
          </Link>
         
        </div>
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: 'normal' }}>
            Don't have an account?{' '} 
            <Link 
              to="/signup" 
              style={{
                color: '#007bff',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
              onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
              onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
            >
              Sign Up
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
