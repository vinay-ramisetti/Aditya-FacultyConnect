import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ResearchText = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [research, setResearch] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:5000/research/researchtext/${id}`, { 
          method: 'GET',
          credentials: 'include',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setResearch(data);
          console.log('Fetched data:', data);
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    fetchData();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  if (!research) {
    return <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '18px', color: '#666' }}>Loading...</p>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #e0f7fa, #fff)',
        padding: '20px',
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        style={{
          alignSelf: 'flex-start',
          marginBottom: '20px',
          padding: '10px 20px',
          width:'120px',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#007bff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        ← Back
      </button>

      {/* Research Details Card */}
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
          padding: '30px',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: '20px', color: '#333', fontSize: '24px' }}>{research.title}</h2>
        <p style={{ marginBottom: '15px', color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
          <strong>Description:</strong> {research.description}
        </p>
        <p style={{ marginBottom: '15px', color: '#555', fontSize: '16px', lineHeight: '1.6' }}>
          <strong>Published Date:</strong> {formatDate(research.publishedDate)}
        </p>

        {research.userDetails && (
          <div
            style={{
              marginTop: '25px',
              padding: '15px',
              border: '1px solid #eee',
              borderRadius: '10px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h3 style={{ marginBottom: '10px', color: '#333', fontSize: '20px' }}>User Details</h3>
            <p style={{ marginBottom: '8px', color: '#555', fontSize: '16px' }}>
              <strong>Name:</strong> {research.userDetails.fullName}
            </p>
            <p style={{ marginBottom: '8px', color: '#555', fontSize: '16px' }}>
              <strong>Email:</strong> {research.userDetails.email}
            </p>
            <p style={{ marginBottom: '8px', color: '#555', fontSize: '16px' }}>
              <strong>Department:</strong> {research.userDetails.department}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResearchText;
