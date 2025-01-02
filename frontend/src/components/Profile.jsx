import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Profile = () => {
  const [lecturerDetails, setLecturerDetails] = useState({});
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLecturerDetails = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch('http://localhost:5000/fetchData', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setLecturerDetails(data);
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

  const styles = {
    container: {
      margin: '2rem',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'rgb(213, 226, 238)',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    section: {
      marginBottom: '2rem',
    },
    sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#333',
    },
    sectionContent: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    button: {
      padding: '12px 24px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
    },
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        {/* Basic Details Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Basic Details</h2>
          <div style={styles.sectionContent}>
            <p>Name: {lecturerDetails.fullName}</p>
            <p>Email: {lecturerDetails.email}</p>
            <p>Employee ID: {lecturerDetails.EmpID}</p>
            <p>Department: {lecturerDetails.department}</p>
            <p>Joining Date: {lecturerDetails.JoiningDate}</p>
          </div>
        </div>

        {/* Qualification Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Qualification Details</h2>
          <div style={styles.sectionContent}>
            <p>UG: {lecturerDetails.UG}</p>
            <p>PG: {lecturerDetails.PG}</p>
            <p>PhD: {lecturerDetails.Phd}</p>
            <p>Year of Passing: {lecturerDetails.YearOfpass}</p>
          </div>
        </div>

        {/* Experience Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Experience</h2>
          <div style={styles.sectionContent}>
            <p>Industry Experience: {lecturerDetails.Industry} years</p>
            <p>Total Experience: {lecturerDetails.Total_Exp} years</p>
          </div>
        </div>

        {/* Update Button */}
        <div>
          <button
            style={styles.button}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
              e.target.style.transform = styles.buttonHover.transform;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = styles.button.backgroundColor;
              e.target.style.transform = 'scale(1)';
            }}
            onClick={() => navigate('/add-user')}
          >
            Update Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;