import React, { useState, useEffect } from 'react';

const DisplayClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken'); // Retrieve token from local storage
        const response = await fetch('http://localhost:5000/update/data', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json(); // Parse the response JSON
          setClasses(data); // Update state with the parsed data
         
        } else {
          console.error('Failed to fetch classes:', response.statusText);
        }
      } catch (error) {
        console.log('Error occurred:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      {classes.length > 0 ? (
        <div>
          {classes.map((classItem) => (
            <div
              key={classItem._id}
              style={{
                border: '1px solid #ccc',
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '5px',
              }}
            >
              <h3>{classItem.className}</h3>
              <p><strong>Course Name:</strong> {classItem.className}</p>
              <p><strong>Semester:</strong> {classItem.semester}</p>
              <p><strong>Branch:</strong> {classItem.branch}</p>
              <p><strong>Section:</strong> {classItem.section}</p>
              <p><strong>Number of Students:</strong> {classItem.numberOfStudents}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No classes found.</p>
      )}
    </div>
  );
};

export default DisplayClasses;