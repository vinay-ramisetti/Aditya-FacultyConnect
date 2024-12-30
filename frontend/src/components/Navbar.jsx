import React from 'react';
import { CgProfile } from "react-icons/cg";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiColorFilterLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f8f9fa',
      }}
    >
      {/* Left Side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <h1
          style={{
            display:'flex',
            gap:'7px',
            fontSize: '24px',
            fontWeight: 'bold',
            margin: 0,
            color: '#333',
            fontFamily: 'Arial, sans-serif',
          }}
        >
         <RiColorFilterLine /> FacultyConnect
        </h1>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            margin: 0,
            padding: 0,
            gap: '15px',
          }}
        >
          <li
            style={{
              fontSize: '16px',
              fontFamily: 'Arial, sans-serif',
              cursor: 'pointer',
              color: '#555',
              textDecoration: 'none',
              position: 'relative',
            }}
          >
            <a
              href="#"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#007bff')}
              onMouseLeave={(e) => (e.target.style.color = '#555')}
            >
              Home
            </a>
          </li>
          <li
            style={{
              fontSize: '16px',
              fontFamily: 'Arial, sans-serif',
              cursor: 'pointer',
              color: '#555',
              textDecoration: 'none',
              position: 'relative',
            }}
          >
            <a
              href="#"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#007bff')}
              onMouseLeave={(e) => (e.target.style.color = '#555')}
            >
              Faculties
            </a>
          </li>
          <li
            style={{
              fontSize: '16px',
              fontFamily: 'Arial, sans-serif',
              cursor: 'pointer',
              color: '#555',
              textDecoration: 'none',
              position: 'relative',
            }}
          >
            <a
              href="#"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#007bff')}
              onMouseLeave={(e) => (e.target.style.color = '#555')}
            >
              Updates
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div style={{ display: 'flex', gap: '15px' }}>
        <button
          style={{
            display:'flex',
            gap:'7px',
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
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
         <IoIosHelpCircleOutline /> Help
        </button>
        <button
          style={{
            display:'flex',
            gap:'7px',
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
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
         <CgProfile /> Profile
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
