import React from 'react';
import { CgProfile } from "react-icons/cg";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import headlogo from '../images/headlogo.png';
import { useState,useEffect } from 'react';

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [user,setUser]=useState({});
   useEffect(() => {
      const fetchUser = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await fetch('http://localhost:5000/fetchData', { 
            method: 'GET',
            credentials: 'include',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          if (response.ok) {
            const data = await response.json();
            setUser(data);
          } else {
            console.error('Failed to fetch user:', response.statusText);
          }
        } catch (error) {
          console.error('Error occurred:', error);
        }
      };
      fetchUser();
    }, []);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f8f9fa',
        
      }}
    >
      {/* Centered Logo */}
      <img src={headlogo} alt="HeadLogo" style={{ width: '40%', height: 'auto', border: '0' }} />
      {/* Right Side */}
      <div style={{ position: 'absolute', right: '20px', display: 'flex', gap: '15px' }}>
        <button
          style={{
            display: 'flex',
            gap: '7px',
            padding: '8px 16px',
            fontSize: '14px',
            fontFamily: 'Arial, sans-serif',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onClick={() => navigate('/about')}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          <IoIosHelpCircleOutline />About
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
