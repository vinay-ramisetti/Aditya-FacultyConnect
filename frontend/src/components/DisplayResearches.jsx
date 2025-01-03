import React, { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import { HiMiniPencilSquare } from "react-icons/hi2";

const DisplayResearches = () => {
  const [researches, setResearches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch('http://localhost:5000/research/data', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setResearches(data);
          console.log('Fetched Researches:', data);
        } else {
          console.error('Failed to fetch researches:', response.statusText);
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`http://localhost:5000/research/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setResearches(researches.filter((research) => research._id !== id));
        console.log('Research deleted successfully.');
      } else {
        console.error('Failed to delete research:', response.statusText);
      }
    } catch (error) {
      console.error('Error occurred while deleting research:', error);
    }
  };

  const handleUpdate = async (id) => {
    const updatedTitle = prompt('Enter the new title:');
    const updatedDescription = prompt('Enter the new description:');

    if (!updatedTitle || !updatedDescription) return;

    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`http://localhost:5000/research/update/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: updatedTitle,
          description: updatedDescription,
        }),
      });

      if (response.ok) {
        const updatedResearch = await response.json();
        setResearches(researches.map((research) => 
          research._id === id ? updatedResearch : research
        ));
        console.log('Research updated successfully.');
      } else {
        console.error('Failed to update research:', response.statusText);
      }
    } catch (error) {
      console.error('Error occurred while updating research:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      {researches.length > 0 ? (
        <div>
          {researches.map((research) => (
            <div
              key={research._id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid #ccc',
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '5px',
              }}
            >
              <div>
                <h3>{research.title}</h3>
                <p>{research.description}</p>
                <p>
                  <strong>Published Date:</strong>{' '}
                  {new Date(research.publishedDate).toLocaleDateString()}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => handleUpdate(research._id)}
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                 <HiMiniPencilSquare /> Update
                </button>
                <button
                  onClick={() => handleDelete(research._id)}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                <MdDelete />  Delete
                </button>
              </div>
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
