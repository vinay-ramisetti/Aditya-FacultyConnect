import React from 'react';

const Departments = (props) => {
  const renderDepartments = props.departments.map((department, index) => {
    return (
      <div
        key={index}
        style={{
          flex: '1 0 30%', // This ensures 3 cards fit in a row
          margin: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '15px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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
          <div style={{ color: '#555', fontSize: '14px', marginBottom: '10px' }}>
            {department.des}
          </div>
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
          display: 'flex',
          flexWrap: 'wrap', // Allow wrapping to the next line
          justifyContent: 'center', // Center the items horizontally
        }}
      >
        {renderDepartments}
      </div>
    </div>
  );
};

export default Departments;
