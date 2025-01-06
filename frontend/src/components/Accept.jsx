import React, { useState, useEffect } from 'react';
import './Accept.css'; // Import the CSS file

const Accept = () => {
  const [unapproved, setUnapproved] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch('http://localhost:5000/research/process', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUnapproved(data);
        } else {
          console.error('Failed to fetch user:', response.statusText);
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };
    fetchData();
  }, []);

  const handleApprove = (id) => {
    console.log(`Approved research ID: ${id}`);
  };

  const handleReject = (id) => {
    console.log(`Rejected research ID: ${id}`);
  };

  return (
    <div className="accept-container">
      <h1 className="title">Unapproved Researches</h1>
      {unapproved.length > 0 ? (
        <div className="research-list">
          {unapproved.map((item) => (
            <div key={item._id} className="research-item">
              <h2 className="research-title">{item.title}</h2>
              <p className="research-description">{item.description}</p>
              <div className="button-group">
                <button
                  className="approve-button"
                  onClick={() => handleApprove(item._id)}
                >
                  Approve
                </button>
                <button
                  className="reject-button"
                  onClick={() => handleReject(item._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-research">No unapproved researches found.</p>
      )}
    </div>
  );
};

export default Accept;
