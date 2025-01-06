import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Faculty = (props) => {
  const [user, setUser] = useState({});
  const [userdesg, setUserdesg] = useState();
  const [userbranch, setUserbranch] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch('http://localhost:5000/fetchData', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
          setUserbranch(data.department);
          setUserdesg(data.designation);
        } else {
          console.error('Failed to fetch user:', response.statusText);
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };
    fetchUser();
  }, []);

  const renderFaculty = props.faculty
    .filter((teacher) => teacher.department === userbranch)
    .map((teacher) => (
      <div
        key={teacher._id}
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
          {teacher.fullName}
        </div>
        <div style={{ color: '#555', fontSize: '14px' }}>{teacher.department}</div>
        <div>
          <Link to={`/teacher/${teacher._id}`}>
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
          </Link>
        </div>
      </div>
    ));

  const renderAll = props.faculty
    .filter((teacher) => teacher.designation !== 'Dean')
    .map((teacher) => (
      <div
        key={teacher._id}
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
          {teacher.fullName}
        </div>
        <div style={{ color: '#555', fontSize: '14px' }}>{teacher.department}</div>
        <div>
          <Link to={`/teacher/${teacher._id}`}>
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
          </Link>
        </div>
      </div>
    ));

    const renderOverAll = props.faculty
    .filter((teacher) => teacher.designation !== 'Admin')
    .map((teacher) => (
      <div
        key={teacher._id}
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
          {teacher.fullName}
        </div>
        <div style={{ color: '#555', fontSize: '14px' }}>{teacher.department}</div>
        <div>
          <Link to={`/teacher/${teacher._id}`}>
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
          </Link>
        </div>
      </div>
    ));

  return (
    <div>

      {userdesg==='HOD' && <h2
        style={{
          fontWeight: 'bold',
          fontSize: '28px',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Faculty Details of {userbranch} department:
      </h2> }
      {userdesg==='Dean' && <h2
        style={{
          fontWeight: 'bold',
          fontSize: '28px',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Details of Faculties:
      </h2> }
     
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {userdesg === 'HOD' && renderFaculty}
        {userdesg === 'Dean' && renderAll}
        {userdesg==='Admin' && renderOverAll}
      </div>
    </div>
  );
};

export default Faculty;
