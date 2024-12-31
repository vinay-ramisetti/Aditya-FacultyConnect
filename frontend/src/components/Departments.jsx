import React from 'react';
import {Link} from 'react-router-dom';

const Departments = (props) => {
  const renderDepartments = props.departments.map((department, index) => {
    return (
      <div
        key={index}
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* Left Side - Department Details */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontWeight: 'bold',
              fontSize: '18px',
              marginBottom: '5px',
            }}
          >
            {department.name}
          </div>
          <div
            style={{
              color: '#555',
              fontSize: '14px',
              marginBottom: '10px',
            }}
          >
            {department.des}
          </div>
          <Link to={`/department/${department.name}`}>
          <button
            style={{
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Learn More
          </button>
          </Link>
          
        </div>

        {/* Right Side - Department Image */}
        <div
          style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#ccc',
            borderRadius: '8px',
          }}
        >
          {/* Placeholder for department image */}
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2
        style={{
          fontWeight: 'bold',
          fontSize: '28px',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Department Overview
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {renderDepartments}
      </div>
    </div>
  );
};

export default Departments;
