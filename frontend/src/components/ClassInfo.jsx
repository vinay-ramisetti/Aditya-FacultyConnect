import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import './ClassInfo.css';
import DisplayCourses from './DisplayCourses';
import DisplayFeedback from './DisplayFeedback';
import DisplayProctoring from './DisplayProctoring';
import { useNavigate } from 'react-router-dom';

const ClassInfo = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="class-container">
        <div className="header">
          <h2 className="title">1.Courses Average Pass Percentage:</h2>
          <div className="flex items-center gap-2">
          <input type="file" style={{ border: '1px solid #ccc', padding: '5px',borderRadius:'8px' }} />
            <button className=" bg-blue-500 text-white rounded text-sm w-21 h-8 flex items-center justify-center">Upload</button>
            <button className=" bg-blue-500 text-white rounded text-sm h-8 w-21 flex items-center justify-center" onClick={() => navigate('/class')}>
            <IoMdAdd /> Add
           </button>

          </div>
        </div>
        <DisplayCourses />
      </div>

      <div className="class-container">
        <div className="header">
          <h2 className="title">2.Course Feedback:</h2>
          <div className="flex items-center gap-2">
          <input type="file" style={{ border: '1px solid #ccc', padding: '5px',borderRadius:'8px' }} />
            <button className=" bg-blue-500 text-white rounded text-sm w-21 h-8 flex items-center justify-center">Upload</button>
            <button className=" bg-blue-500 text-white rounded text-sm h-8 w-21 flex items-center justify-center" onClick={() => navigate('/feedback')} >
              <IoMdAdd /> Add
            </button>
          </div>
        </div>
        <DisplayFeedback />
      </div>

      <div className="class-container">
        <div className="header">
          <h2 className="title">3.Proctoring Students Average Pass Percentage:</h2>
          <div className="flex items-center gap-2">
          <input type="file" style={{ border: '1px solid #ccc', padding: '5px',borderRadius:'8px' }} />
            <button className=" bg-blue-500 text-white rounded text-sm w-21 h-8 flex items-center justify-center">Upload</button>
            <button  className=" bg-blue-500 text-white rounded text-sm w-21 h-8 flex items-center justify-center" onClick={() => navigate('/proctoring')} >
              <IoMdAdd /> Add
            </button>
          </div>
        </div>
        <DisplayProctoring />
      </div>
    </>
  );
};

export default ClassInfo;
