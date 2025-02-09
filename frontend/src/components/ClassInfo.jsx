import React from 'react';
import DisplayCourses from './DisplayCourses';
import DisplayFeedback from './DisplayFeedback';
import DisplayProctoring from './DisplayProctoring';
import { useNavigate } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';

const ClassInfo = ({ teacherData }) => {
  console.log('Teacher Data:', teacherData);
  const navigate = useNavigate();

  return (
    <>
      {/* Courses Table */}
      <div className="class-container">
        <div className="header">
          <h2 style={{ fontFamily: 'General Information' }}>1. Courses Average Pass Percentage:</h2>
          <button onClick={() => navigate('/class')} className="add-button">
            <IoMdAdd /> Add
          </button>
        </div>
        <DisplayCourses coursesData={teacherData?.classes} />
      </div>

      <div style={{ margin: '20px 0' }} />

      {/* Feedback Table */}
      <div className="class-container">
        <div className="header">
          <h2 style={{ fontFamily: 'General Information' }}>2. Course feedback:</h2>
          <button onClick={() => navigate('/feedback')} className="add-button">
            <IoMdAdd /> Add
          </button>
        </div>
        <DisplayFeedback feedbackData={teacherData?.feedback} />
      </div>

      <div style={{ margin: '20px 0' }} />

      {/* Proctoring Table */}
      <div className="class-container">
        <div className="header">
          <h2 style={{ fontFamily: 'General Information' }}>3. Proctoring Students Average Pass %:</h2>
          <button onClick={() => navigate('/proctoring')} className="add-button">
            <IoMdAdd /> Add
          </button>
        </div>
        <DisplayProctoring proctoringData={teacherData?.proctoring} />
      </div>
    </>
  );
};

export default ClassInfo;
