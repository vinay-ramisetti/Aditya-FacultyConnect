import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Profile = () => {
  const [lecturerDetails, setLecturerDetails] = useState({});
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchLecturerDetails = async () => {
      try {
        const response = await fetch('http://localhost:5000/fetchData', { // Adjust the endpoint as necessary
          method: 'GET',
          credentials: 'include' // Include cookies in the request
        });
        if (response.ok) {
          const data = await response.json();
          setLecturerDetails(data);
          // Assuming 'classes' is part of the data returned
          setClasses(data.classes || []);
        } else {
          console.error('Failed to fetch lecturer details');
        }
      } catch (error) {
        console.error('Error fetching lecturer details:', error);
      }
    };

    fetchLecturerDetails();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='m-2 p-1'>
        <div>
          <h2>Lecturer Details</h2>
          <p>Name: {lecturerDetails.fullName}</p>
          <p>Email: {lecturerDetails.email}</p>
          <p>Department: {lecturerDetails.department}</p>
        </div>
        <div>
          <h2>Classes</h2>
          <ul>
            {classes.map((classItem, index) => (
              <li key={index}>
                {classItem.courseName} - {classItem.schedule}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            style={{
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
            onClick={() => alert('Update Details functionality to be implemented')}
          >
            Update Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;