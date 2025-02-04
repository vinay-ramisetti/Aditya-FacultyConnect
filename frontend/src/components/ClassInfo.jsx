import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import './ClassInfo.css';
import DisplayClasses from './DisplayClasses'; 
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import DisplayCourses from './Displaycourses';
import DisplayFeedback from './DisplayFeedback';
import DisplayProctoring from './DisplayProctoring'
const ClassInfo = () => {
  const navigate = useNavigate();
  
 

  return (
    <>
    <Navbar/>
    <div className="class-container">
      <div className="header">
        <h2>Courses Average Pass Percentage</h2>
        <button 
          onClick={() => navigate('/class')} 
          className="add-button"
        >
          <IoMdAdd /> Add
        </button>
      </div>
        <DisplayCourses />
    </div>
    <div className="class-container">
      <div className="header">
        <h2> Course feedback:</h2>
        <button 
          onClick={() => navigate('/feedback')} 
          className="add-button"
        >
          <IoMdAdd /> Add
        </button>
      </div>
        <DisplayFeedback />
    </div>
    <div className="class-container">
      <div className="header">
        <h2> Course feedback:</h2>
        <button 
          onClick={() => navigate('/feedback')} 
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