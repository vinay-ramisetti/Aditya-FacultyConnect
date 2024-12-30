import React from 'react';

const Faculty = (props) => {
  const renderFaculty = props.faculty.map((teacher, index) => {
    return (
      <div
        key={index}
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '15px',
          margin: '10px',
          width: '220px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            backgroundColor: '#ccc',
            margin: '0 auto',
          }}
        >
          {/* Placeholder for profile image */}
        </div>
        <div style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '18px' }}>
          {teacher.name}
        </div>
        <div style={{ color: '#555', fontSize: '14px' }}>
          {teacher.department}
        </div>
        <div>
          <button
            style={{
              marginTop: '10px',
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
            View Details
          </button>
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
        Faculty Members
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {renderFaculty}
      </div>
    </div>
  );
};

export default Faculty;
