import React, { useState, useEffect } from 'react';

const DisplayResearches = (token) => {
  const [tk,setTk]=useState();
  const [researches, setResearches] = useState([]);
 console.log("TOken at DisplayResearches:",tk);
  useEffect(() => {
    const fetchData = async () => {
      setTk(token);
      
      try {
         const token = localStorage.getItem('authToken'); // Why Local Storage???
        const response = await fetch('http://localhost:5000/research/data',{
          method:'GET',
          headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          }
        });
        if (response.ok) {
          const data = await response.json(); // Parse the response JSON
          setResearches(data); // Update state with the parsed data
          console.log('Fetched Researches:', researches);
        } else {
          console.error('Failed to fetch researches:', response.statusText);
        }
       
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
