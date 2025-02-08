import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import './ClassInfo.css';
import DisplayClasses from './DisplayClasses'; 
import { useNavigate } from 'react-router-dom';

import DisplayCourses from './Displaycourses';
import DisplayFeedback from './DisplayFeedback';
import DisplayProctoring from './DisplayProctoring'
const ClassInfo = () => {
  const navigate = useNavigate();
  
 

  return (
    <>
  
    <div className="class-container">
      <div className="header">
        <h2 style={{ fontFamily: 'General Information' }}>1.&nbsp;&nbsp;Courses Average Pass Percentage:</h2>
        <button 
          onClick={() => navigate('/class')} 
          className="add-button"
        >
          <IoMdAdd /> Add
        </button>
      </div>
        <DisplayCourses />
    </div>
    <div style={{ margin: '20px 0' }} />
    <div className="class-container">
      <div className="header">
        <h2 style={{ fontFamily: 'General Information' }}> 2.&nbsp;&nbsp;Course feedback:</h2>
        <button 
          onClick={() => navigate('/feedback')} 
          className="add-button"
        >
          <IoMdAdd /> Add
        </button>
      </div>
        <DisplayFeedback />
    </div>
    <div style={{ margin: '20px 0' }} />
    <div className="class-container">
      <div className="header">
        <h2 style={{ fontFamily: 'General Information' }}> 3.&nbsp;&nbsp;Proctoring Students Average pass percentage: </h2>
        <button 
          onClick={() => navigate('/proctoring')} 
          className="add-button"
        >
          <IoMdAdd /> Add
        </button>
      </div>
        <DisplayProctoring/>
    </div>
    </>
  );
};

export default ClassInfo;