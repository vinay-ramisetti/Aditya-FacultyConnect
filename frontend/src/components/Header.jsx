import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";

const Header = () => {
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
      {/* <div>
        <button
          style={{
            backgroundColor: '#004b87',
            color: '#fff',
            padding: '5px 15px',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            cursor: 'pointer',
          }}
        >
         <IoPersonSharp /> <i className="fa fa-user"></i> Login <i className="fa fa-caret-down"></i>
         <FaSortDown />
        </button>
      </div> */}
    </div>
  );
};

export default Header;
