import React, { useState, useEffect } from 'react';

const DisplayClasses = () => {
  const [classes, setClasses] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          console.error("No token found in localStorage");
          return;
        }
  
        const response = await fetch('http://localhost:5000/update/data', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          console.error(`Failed to fetch data: ${response.statusText}`);
          const errorMessage = await response.text(); // Fetch detailed error from the response
          console.error('Error message:', errorMessage);
          return;
        }
  
        const data = await response.json();
        console.log("Fetched data successfully:", data);
        setClasses(data.Data);
        setRating(data.overallRating);
      } catch (error) {
        console.error('Error occurred while fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Overall Rating: {rating}</h2>
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
              <p><strong>Course Name:</strong> {classItem.courseName}</p>
              <p><strong>Semester:</strong> {classItem.semester}</p>
              <p><strong>Branch:</strong> {classItem.branch}</p>
              <p><strong>Section:</strong> {classItem.section}</p>
              <p><strong>Number of Students:</strong> {classItem.numberOfStudents}</p>
              <p><strong>Rating:</strong> {classItem.rating}</p>
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