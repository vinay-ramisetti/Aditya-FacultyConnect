import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import OthersResearch from './OthersResearch';
import OthersArticles from './OthersArticles';

const Teacher = (props) => {
  const { id } = useParams();
  const teacher = props.faculty.find((teacher) => teacher._id === id);

  if (!teacher) return null;

  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <div style={styles.contentContainer}>
        <div style={styles.teacherInfo}>
          <h2 style={styles.heading}>Teacher Information:</h2>
          <div style={styles.infoRow}>
            <label style={styles.label}>Name  :</label>
            <span style={styles.value}>{teacher.fullName}</span>
          </div>
          <div style={styles.infoRow}>
            <label style={styles.label}>Designation  :</label>
            <span style={styles.value}>{teacher.designation}</span>
          </div>
          <div style={styles.infoRow}>
            <label style={styles.label}>Department  :</label>
            <span style={styles.value}>{teacher.department}</span>
          </div>
        </div>
        <div style={styles.section}>
          <h3 style={styles.subHeading}>Research</h3>
          <OthersResearch Id={teacher._id} />
        </div>
        <div style={styles.section}>
          <h3 style={styles.subHeading}>Articles</h3>
          <OthersArticles Id={teacher._id} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    minHeight: '100vh',
  },
  contentContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  },
  teacherInfo: {
    marginBottom: '20px',
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#333',
  },
  infoRow: {
    display: 'flex',
    marginBottom: '10px',
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
  },
  value: {
    color: '#333',
  },
  section: {
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#444',
  },
};

export default Teacher;
