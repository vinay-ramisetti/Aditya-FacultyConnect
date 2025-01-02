import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayResearches = (props) => {
  const Id = props.Id;
  const [researches, setResearches] = useState([]);
  const [filteredResearches, setFilteredResearches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/research/get');
        setResearches(response.data);
        console.log('Fetched Researches:', response.data); // Verify the fetched data

        // Filtering after data is fetched
        const filtered = response.data.filter((research) => research.userId === Id);
        console.log('Filtered Researches:', filtered); // Log filtered data
        setFilteredResearches(filtered);
      } catch (error) {
        console.log('Error occurred:', error);
      }
    };
    fetchData();
  }, [Id]); // Re-run when Id prop changes

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Researches</h1>
      {filteredResearches.length > 0 ? (
        <div>
          {filteredResearches.map((research) => (
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
