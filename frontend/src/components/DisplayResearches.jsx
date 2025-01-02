import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayResearches = (props) => {
  const Id = props.Id;
  const [researches, setResearches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/research/get',{
          params: { userId: Id }
        });
        setResearches(response.data);
        console.log('Fetched Researches:', response.data); // Verify the fetched data
      } catch (error) {
        console.log('Error occurred:', error);
      }
    };
    fetchData();
  }, []); 

  return (
    <div style={{ padding: '20px' }}>
      {researches.length > 0 ? (
        <div>
          {researches.map((research) => (
            <div
              key={research._id}
              style={{
                border: '1px solid #ccc',
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '5px',
              }}
            >
              <h3>{research.title}</h3>
              <p>{research.description}</p>
              <p>
                <strong>Published Date:</strong> {new Date(research.publishedDate).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No researches found.</p>
      )}
    </div>
  );
};

export default DisplayResearches;
