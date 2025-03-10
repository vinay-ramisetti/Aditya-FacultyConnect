import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import DisplayCourses from "./DisplayCourses.jsx";
import Profile from './Profile';
import DisplayFeedback from './DisplayFeedback';
import ProctoringTable from './DisplayProctoring';
import ResearchText from './ResearchText';
import DisplayWorkshops from './DisplayWorkshops';
import Others from './Others';

const Teacher = ({ faculty }) => {
  const { id } = useParams();
  const teacher = faculty?.find((teacher) => teacher._id === id);
  const [teacherData, setTeacherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/fetchdata/teachers/${id}`);
        const result = await response.json();
        if (result.success) {
          setTeacherData(result.data);
          console.log(result.data);
        } else {
          setError('Failed to fetch teacher data.');
        }
      } catch (err) {
        console.error('Error fetching teacher data:', err);
        setError('An error occurred while fetching teacher data.');
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherData();
  }, [id]);

  if (!teacher) return <p>Teacher not found.</p>;

  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <div style={styles.contentContainer}>
        {loading && <p>Loading teacher data...</p>}
        {error && <p style={styles.error}>{error}</p>}
        {teacherData && (
          <>
            <DisplayCourses coursesData={teacherData?.classes} />
            <DisplayFeedback feedbackData={teacherData?.feedback} />
            <ProctoringTable proctoringData={teacherData?.proctoring} />
            <ResearchText data={teacherData?.research} />
            <DisplayWorkshops
              data={{
                workshops: teacherData.workshop,
                totalMarks: 18,
              }}
            />
            <Others data={teacherData?.others} />
          </>
        )}
      </div>
    </div>
  );
};

Teacher.propTypes = {
  faculty: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string,
    })
  ).isRequired,
};

const styles = {
  pageContainer: {
    padding: '20px',
  },
  contentContainer: {
    marginTop: '20px',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
};

export default Teacher;
