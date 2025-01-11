import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const Remove = async() => {
    try{
      const response=  await fetch('http://localhost:5000/logout',{
        method:'GET',
        credentials:'include',
      });
      
      if (response.ok) {
        navigate('/');
      } else {
        console.error('Logout failed');
      }
    }catch (error) {
      console.error('Error during logout:', error);
    }
  };
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ff7f27',
        padding: '10px 20px',
      }}
    >
      {/* Left Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Phone */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <i className="fa fa-phone" style={{ color: '#fff' }}></i>
          <span style={{ color: '#fff' }}> <FaPhone /> +91 99498 76662</span>
        </div>
        <div style={{ borderLeft: '1px solid #fff', height: '20px' }}></div>

        {/* Email */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <i className="fa fa-envelope" style={{ color: '#fff' }}></i>
          <span style={{ color: '#fff' }}><MdEmail />  office@aec.edu.in</span>
        </div>
      </div>

      {/* Right Section */}
      <div>
        <button
          style={{
            backgroundColor: '#004b87',
            color: '#fff',
            padding: '5px 15px',
            border: 'none',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            cursor: 'pointer',
          }}
          onClick={Remove}
        >
           Logout <IoLogOutOutline />
        
        </button>
      </div>
    </div>
  );
};

export default Header;
